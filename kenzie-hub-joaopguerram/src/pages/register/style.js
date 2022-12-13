import styled from "styled-components";
export const RegisterPage = styled.div`
  background-color: var(--color-Grey-4);
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
  header {
    width: 90%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 20px;
  }
  .messageInput {
    color: var(--color-primary-Focus);
    font-size: 13px;
  }
  .styleHeaderButton {
    background-color: var(--color-Grey-3);
    border-radius: 4px;
    padding: 10px 19px;
    color: var(--color-Grey-0);
    width: 79.54px;
    height: 35.95px;
  }
  form {
    overflow-y: scroll;
    display: flex;
    flex-direction: column;
    background-color: var(--color-Grey-3);
    gap: 20px;
    border-radius: 5px;
    padding: 20px;
    width: 90%;
    &::-webkit-scrollbar {
      width: 10px;
    }
    &::-webkit-scrollbar-thumb {
      background-color: var(--color-Grey-1);
      border-radius: 5px;
    }
    &::-webkit-scrollbar-track {
      background-color: transparent;
    }
    input {
      width: 100%;
      height: 38.5px;
      background: var(--color-Grey-2);
      border: 0.9772px solid var(--color-Grey-0);
      border-radius: 3.20867px;
      color: var(--color-Grey-0);
    }
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
  h3 {
    color: var(--color-Grey-1);
    font-size: 12px;
    margin: 0 auto;
  }
  p {
    color: var(--color-Grey-0);
    font-weight: 400;
    font-size: 0.5625rem;
  }
  .pLogin {
    color: var(--color-Grey-1);
    font-size: 10px;
    margin: 0 auto;
    margin-top: 5px;
  }
  select {
    width: 100%;
    height: 38.5px;
    background: var(--color-Grey-2);
    border: 0.9772px solid var(--color-Grey-0);
    border-radius: 3.20867px;
    padding: 10px;
    color: var(--color-Grey-1);
  }
  .buttonRegister {
    background-color: var(--color-Grey-1);
    border: 2px solid var(--color-Grey-1);
  }
  button {
    margin-top: 10px;
  }
  input {
    padding: 10px;
  }
  @media (min-width: 700px) {
    height: 100vh;
    header {
      padding-top: 60px;
    }
    form {
      width: 370px;
      gap: 25px;
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
      margin-top: 10px;
      margin-bottom: 10px;
    }
  }
`;
