import styled from 'styled-components';

export const StyledHeader = styled.div`
  width: 100%;
  background-color: white;
  height: 3.56rem;
  box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.25);
`;

export const ContainerHeader = styled.div`
  width: 100%;
  max-width: 1440px;
  height: 100%;
  margin: auto;
  display: flex;
  justify-content: space-between;
`;

export const ContainerHeaderDiv01 = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin-left: 20px;
  margin-right: 10px;
  flex-grow: 1;

  p {
    font-size: 0.75rem;
    color: #455a64;
    text-shadow: 1px 2px 3px rgba(0, 0, 0, 0.15);
  }

  @media (max-width: 400px) {
    margin: 10px;
    gap: 0.6rem;
    img {
      width: 25px;
    }
  }
`;

export const StyledLabel = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 530px;
  height: 28px;

  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
  border-radius: 3px;

  input {
    width: 100%;
    border: none;
    background-color: white;
    margin-left: 10px;
    margin-right: 10px;
  }
  ::placeholder {
    color: #9a9a9a;
  }
  :focus-visible {
    outline: none;
  }

  img {
    width: 13px;
    margin-right: 10px;
  }

  @media (max-width: 900px) {
    max-width: 315px;
  }
`;

export const ContainerHeaderDiv02 = styled.div`
  width: 50px;
  height: 100%;
  cursor: pointer;
  display: flex;
  justify-content: center;
  margin-right: 10px;

  img {
    width: 13.14px;
  }
`;
