import styled from "styled-components";
export const LoginStyle = styled.div`
  background-color: var(--color-Grey-4);
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
  min-width: 300px;
  form {
    display: flex;
    flex-direction: column;
    background-color: var(--color-Grey-3);
    gap: 10px;
    width: 90%;
    border-radius: 5px;
    padding: 20px;
    min-width: 300px;
  }
  .positionInputText {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .positionIcon {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .iconColor {
    color: var(--color-Grey-1);
    position: absolute;
    bottom: 10%;
    right: 5%;
  }
  input {
    width: 100%;
    height: 38.5px;
    background: var(--color-Grey-2);
    border: 0.9772px solid var(--color-Grey-0);
    border-radius: 3.20867px;
    color: var(--color-Grey-0);
  }
  h1 {
    color: var(--color-primary);
    font-size: 1rem;
    font-weight: bold;
  }
  h2 {
    color: var(--color-Grey-0);
    font-weight: 700;
    margin: 0 auto;
    font-size: 0.875rem;
  }
  p {
    color: var(--color-Grey-0);
    font-weight: 400;
    font-size: 0.5625rem;
  }
  .pMessage {
    color: var(--color-primary-Focus);
    font-size: 13px;
  }
  .pLogin {
    color: var(--color-Grey-1);
    font-size: 10px;
    margin: 0 auto;
    margin-top: 5px;
  }
  .buttonRegister {
    background-color: var(--color-Grey-1);
    border: 2px solid var(--color-Grey-1);
    width: 100%;
    color: var(--color-Grey-0);
    margin: 0 auto;
    border-radius: 5px;
    text-align: center;
    padding: 10px;
    height: 48px;
  }
  button {
    margin-top: 10px;
  }
  input {
    padding: 10px;
  }
  @media (min-width: 700px) {
    form {
      width: 370px;
      height: 490px;
      gap: 15px;
    }
    .pLogin {
      margin: 0 auto;
      margin-bottom: 10px;
      margin-top: 10px;
    }
    .buttonRegister {
      margin-bottom: 30px;
    }
    h2 {
      margin: 0 auto;
      margin-top: 20px;
      margin-bottom: 20px;
    }
  }
`;
