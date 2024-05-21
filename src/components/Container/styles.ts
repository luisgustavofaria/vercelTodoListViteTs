import styled from "styled-components";

export const Container01 = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 0px 20px 50px;
  gap: 50px;
`;

export const Container02 = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  span {
    width: 100%;
    max-width: 530px;
  }

  @media (max-width: 800px) {
    span {
      width: 100%;
      max-width: 390px;
    }
  }
`;

export const Container03 = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-flow: row wrap;
  gap: 30px;
`;
