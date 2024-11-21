import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`;

export const Title = styled.div`
  color: #fff;
  font-family: Inter;
  font-size: 5.625rem;
  font-weight: 700;
  line-height: normal;
`;

export const Question = styled.p`
  color: #fff;
  font-family: Inter;
  font-size: 1.75rem;
  font-weight: 400;
  line-height: normal;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2.875rem;
`;

export const Input = styled.input`
  width: 52.6875rem;
  height: 3.75rem;
  color: black;
  font-size: 1.25rem;
  font-weight: 400;
  line-height: normal;
  background-color: white;
  border: none;
  padding: 0.0625rem 1.45rem;
  border-radius: 1rem;
  outline: none;

  ::placeholder {
    color: #979797;
    font-size: 1.25rem;
    font-weight: 400;
    line-height: normal;
  }
`;

export const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32.375rem;
  height: 8.5rem;
  border-radius: 1.25rem;
  background: #ddd;
  position: relative;
  margin-top: -10rem;
`;

export const BoxText = styled.div`
  color: #000;
  font-family: Inter;
  font-size: 1.5rem;
  font-weight: 700;
  line-height: normal;
`;

export const BoxTail = styled.div`
  width: 4.40094rem;
  height: 10.37919rem;
  position: absolute;
  top: 30%;
  left: 12.5%;

  transform: rotate(-131.544deg);
  fill: #ddd;

  & svg {
    transform: rotate(110deg);
  }
`;

export const ImojiContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 8.75rem;
  gap: 5rem;
`;

export const Image = styled.img`
  width: 10.6875rem;
  height: 4.0625rem;
  position: absolute;
  top: 5%;
  left: 5%;
`;
