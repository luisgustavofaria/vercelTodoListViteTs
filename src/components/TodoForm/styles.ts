import styled from "styled-components";

export const ContainerForm = styled.form`
  /* border: solid 5px red; */
  width: 100%;
  max-width: 530px;
  height: 100px;
  margin: 30px 0px 0px;
  display: flex;
  flex-direction: column;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
  background-color: white;

  button {
    display: none;
  }

  @media (max-width: 800px) {
    width: 100%;
    max-width: 390px;
    border-radius: 20px;
  }
`;

export const ContainerFormTitle = styled.div`
  /* border: solid 1px red; */
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: solid 1px #f0f2f5;
  padding: 2px 10px 2px;

  input {
    padding: 5px;
    border: none;
    flex-grow: 1;
    background-color: white;
    border: none;

    ::placeholder {
      height: 13px;
      color: #333333;
      font-weight: bold;
    }
  }

  :focus-visible {
    outline: none;
  }
  img {
    padding: 5px;
    cursor: pointer;
  }
`;

export const ContainerFormTextArea = styled.div`
  /* border: solid 1px red; */
  padding: 5px 10px 2px;
  flex-grow: 1;

  input {
    font-size: 11px;
    color: #50656e;
    padding: 5px;
    width: 100%;
    height: 100%;
    border: none;
    resize: none;
    background-color: white;
    overflow: hidden;
  }
  :focus-visible {
    outline: none;
  }
`;
