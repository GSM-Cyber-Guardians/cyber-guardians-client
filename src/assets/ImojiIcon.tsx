import styled, { keyframes, css } from 'styled-components';

const slotAnimation = keyframes`
  0% { transform: translateY(0); }
  100% { transform: translateY(-50%); }
`;

const fadeInOut = keyframes`
  0% { opacity: 0; transform: scale(0.9); }
  10% { opacity: 1; transform: scale(1); }
`;

const SlotWrapper = styled.div`
  width: 12.5rem;
  height: 12.5rem;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const SlotContent = styled.div<{ isSpin: boolean }>`
  display: flex;
  flex-direction: column;
  ${({ isSpin }) =>
    isSpin
      ? css`
          animation: ${slotAnimation} 3s linear infinite;
        `
      : css`
          animation: ${fadeInOut} 4s ease-in-out;
        `}
`;

const Emoji = styled.div`
  width: 12.5rem;
  height: 12.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12.5rem;
`;

interface ImojiIconProps {
  isSpin: boolean;
}

const ImojiIcon: React.FC<ImojiIconProps> = ({ isSpin }) => {
  const emojis = ['😮', '😡', '😐', '😄', '😱'];

  return (
    <SlotWrapper>
      {isSpin ? (
        <SlotContent isSpin={isSpin}>
          {emojis.map((emoji, index) => (
            <Emoji key={index}>{emoji}</Emoji>
          ))}
          {emojis.map((emoji, index) => (
            <Emoji key={index + emojis.length}>{emoji}</Emoji>
          ))}
        </SlotContent>
      ) : (
        <SlotContent isSpin={isSpin}>
          {emojis.map((emoji, index) => (
            <Emoji key={index}>{emoji}</Emoji>
          ))}
        </SlotContent>
      )}
    </SlotWrapper>
  );
};

export default ImojiIcon;
