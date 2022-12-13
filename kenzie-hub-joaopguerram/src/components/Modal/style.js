import styled from "styled-components";

export const ModalStyle = styled.div`
  .modalBox {
    background: rgba(18, 18, 20, 0.5);
    width: 100%;
    height: 100vh;
    position: absolute;
    display: flex;
    align-items: center;
    top: 0;
  }
  .positionIntro {
    width: 369px;
    height: 342px;
    margin: 0 auto;
  }
  .positionModalHeader {
    display: flex;
    justify-content: space-between;
    padding: 10px;
    background-color: var(--color-Grey-2);
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    font-size: 13px;
  }
  .closeX {
    color: var(--color-Grey-1);
    cursor: pointer;
  }
  .registerTec {
    color: var(--color-Grey-0);
  }
  .positionForm {
    background-color: var(--color-Grey-3);
    padding: 10px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding-top: 20px;
  }
  input {
    border: 1.2182px solid #f8f9fa;
    border-radius: 4px;
    color: var(--color-Grey-0);
    width: 100%;
    background-color: var(--color-Grey-2);
    height: 35px;
    padding: 10px;
  }
  label {
    color: var(--color-Grey-0);
    font-weight: 400;
    font-size: 12.182px;
    line-height: 0px;
  }
  select {
    border: 1.2182px solid #f8f9fa;
    border-radius: 4px;
    color: var(--color-Grey-0);
    width: 100%;
    background-color: var(--color-Grey-2);
    height: 35px;
    padding: 9px;
  }
`;

export const ModalStyleTrash = styled.div`
  .modalBox {
    background: rgba(18, 18, 20, 0.5);
    width: 100%;
    height: 100vh;
    position: absolute;
    display: flex;
    align-items: center;
    top: 0;
  }
  .positionIntro {
    width: 369px;
    height: 342px;
    margin: 0 auto;
  }
  .positionModalHeader {
    display: flex;
    justify-content: space-between;
    padding: 10px;
    background-color: var(--color-Grey-2);
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    font-size: 13px;
  }
  .closeX {
    color: var(--color-Grey-1);
    cursor: pointer;
  }
  .registerTec {
    color: var(--color-Grey-0);
  }
  .positionForm {
    background-color: var(--color-Grey-3);
    padding: 10px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding-top: 20px;
  }
  input {
    border: 1.2182px solid #f8f9fa;
    border-radius: 4px;
    color: var(--color-Grey-0);
    width: 100%;
    background-color: var(--color-Grey-2);
    height: 35px;
    padding: 10px;
  }
  label {
    color: var(--color-Grey-0);
    font-weight: 400;
    font-size: 12.182px;
    line-height: 0px;
  }
  select {
    border: 1.2182px solid #f8f9fa;
    border-radius: 4px;
    color: var(--color-Grey-0);
    width: 100%;
    background-color: var(--color-Grey-2);
    height: 35px;
    padding: 9px;
  }
  .buttonGrey {
    border: 1.2182px solid var(--color-Grey-1);
    border-radius: 4px;
    background: var(--color-Grey-1);
  }
  .positionButton {
    display: flex;
    gap: 20px;
  }
`;
