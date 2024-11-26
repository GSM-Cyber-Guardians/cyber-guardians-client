import { SetStateAction, useEffect, useState } from 'react';
import { ImojiIcon, Tail } from './assets';
import * as S from './style';
import { useDebounce } from './utils';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { Toaster } from 'react-hot-toast';

import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [change, setChange] = useState(false);
  const [keyword, setKeyword] = useState('');
  const [beforeKeyword, setBeforeKeyword] = useState('');
  const [cracking, setCracking] = useState();
  const [strength, setStrength] = useState<string | null>(null);

  const typingBeforeInput = (e: { target: { value: SetStateAction<string> } }) => {
    setBeforeKeyword(e.target.value);
  };

  const typingInput = (e: { target: { value: SetStateAction<string> } }) => {
    setKeyword(e.target.value);
  };

  const changeKeyword = useDebounce(keyword, 1000);

  useEffect(() => {
    if (keyword !== '' && beforeKeyword === keyword) {
      setChange(true);
      passwordStrengthData();
    } else if (keyword !== '' && beforeKeyword !== keyword) {
      toast.error('비밀번호 확인을 검토해주세요.');
    } else if (keyword === '') {
      setChange(false);
    }
  }, [changeKeyword]);

  const passwordStrengthData = async () => {
    try {
      const response = await axios.post(`${import.meta.env.VITE_STRENGTH_URL}/password/evaluate`, {
        password: changeKeyword,
      });

      const { crackingTime, recommendations, strength } = response.data;

      setCracking(crackingTime);
      setStrength(strength);

      toast.info(recommendations[0]);

      toast.info(recommendations[1]);

      toast.info(recommendations[2]);
    } catch (error) {
      console.error('Error evaluating password strength:', error);
    }
  };

  const timeText = () => {
    const getColorByStrength = () => {
      if (!strength) return 'gray';
      if (strength.includes('초')) return 'red';
      if (strength.includes('분')) return 'orange';
      if (strength.includes('시간')) return 'yellow';
      if (strength.includes('일')) return 'green';
      if (strength.includes('달')) return 'blue';
      if (strength.includes('년')) return 'purple';
      return 'black';
    };

    const textColor = getColorByStrength();

    return <span style={{ fontStyle: 'italic', color: textColor }}>{strength ? strength : '??'}</span>;
  };

  return (
    <>
      <S.Wrapper>
        <S.InputWrapper>
          <S.TextContainer>
            <S.Title>
              보안 <span style={{ fontStyle: 'italic' }}>CHECK?!</span>
            </S.Title>
            <S.Question>여러분의 비밀번호의 보안 강도는 얼마나 될까요?</S.Question>
          </S.TextContainer>
          <S.InputContainer>
            <S.InputBox>
              <S.InputText>비밀번호</S.InputText>
              <S.Input
                onChange={typingBeforeInput}
                value={beforeKeyword}
                placeholder="자신의 비밀번호를 입력해주세요."
              />
            </S.InputBox>
            <S.InputBox>
              <S.InputText>비밀번호 확인</S.InputText>
              <S.Input
                onChange={typingInput}
                value={keyword}
                placeholder="자신의 비밀번호를 입력해주세요."
                disabled={beforeKeyword === ''}
              />
            </S.InputBox>{' '}
          </S.InputContainer>
        </S.InputWrapper>
        <S.ImojiContainer>
          <ImojiIcon isSpin={!change} cracking={cracking} />
          <S.Box>
            <S.BoxText>
              해제하는데 걸리는 시간은&nbsp;
              {timeText()} 입니다.
            </S.BoxText>
            <S.BoxTail>
              <Tail />
            </S.BoxTail>
          </S.Box>
        </S.ImojiContainer>
        <S.Image src="../src/assets/cyberGuardiansIcon.png" />
      </S.Wrapper>
      <ToastContainer autoClose={3000} />
      <div>
        <Toaster position="top-right" reverseOrder={true} />
      </div>
    </>
  );
}

export default App;
