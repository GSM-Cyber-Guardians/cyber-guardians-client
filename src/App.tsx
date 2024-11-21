import { SetStateAction, useEffect, useState } from 'react';
import { ImojiIcon, Tail } from './assets';
import * as S from './style';
import { useDebounce } from './utils';

function App() {
  const [change, setChange] = useState(false);
  const [keyword, setKeyword] = useState('');

  const typingInput = (e: { target: { value: SetStateAction<string> } }) => {
    setKeyword(e.target.value);
  };

  const changeKeyword = useDebounce(keyword, 1000);

  useEffect(() => {
    if (keyword !== '') {
      setChange(true);
    }
  }, [changeKeyword]);

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
          <S.Input onChange={typingInput} value={keyword} placeholder="자신의 비밀번호를 입력해주세요." />
        </S.InputWrapper>
        <S.ImojiContainer>
          <ImojiIcon isSpin={!change} />
          <S.Box>
            <S.BoxText>
              해제하는데 걸리는 시간은 <span style={{ fontStyle: 'italic' }}>??</span> 입니다.
            </S.BoxText>
            <S.BoxTail>
              <Tail />
            </S.BoxTail>
          </S.Box>
        </S.ImojiContainer>
        <S.Image src="../public/cyberGuardiansIcon.png" />
      </S.Wrapper>
    </>
  );
}

export default App;
