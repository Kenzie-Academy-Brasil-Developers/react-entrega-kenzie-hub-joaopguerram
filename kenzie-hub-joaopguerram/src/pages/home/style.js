import styled from "styled-components";
export const HomeStyle = styled.div`
  background-color: var(--color-Grey-4);
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  gap: 30px;
  min-width: 300px;
  header {
    width: 100%;
    padding: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid var(--color-Grey-3);
    min-width: 300px;
  }
  h1 {
    color: var(--color-primary);
    font-size: 1rem;
    font-weight: bold;
  }
  h2 {
    color: var(--color-Grey-0);
  }
  .divProfile {
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 20px;
    min-width: 300px;
    border-bottom: 1px solid var(--color-Grey-3);
  }
  .pProfile {
    color: var(--color-Grey-1);
  }
  .sumIcon {
    font-size: 25px;
    background-color: var(--color-Grey-3);
    color: var(--color-Grey-0);
    width: 33px;
    cursor: pointer;
  }
  .positionTec {
    width: 95%;
    padding: 20px;
    display: flex;
    justify-content: space-between;
    color: var(--color-Grey-0);
    margin: 0 auto;
  }
  .pTec {
    font-weight: 600;
    font-size: 16px;
    line-height: 18px;
    cursor: pointer;
  }
  .pLiText {
    font-weight: 700;
    font-size: 14.21px;
    line-height: 22px;
    color: var(--color-Grey-0);
  }
  .pLiLevel {
    font-weight: 400;
    font-size: 12.182px;
    line-height: 22px;
    color: var(--color-Grey-1);
  }
  .iconStyleTrash {
    color: var(--color-Grey-0);
    cursor: pointer;
  }
  .positionTecTrash {
    display: flex;
    gap: 20px;
  }
  .tecApp {
    background-color: var(--color-Grey-4);
    color: var(--color-Grey-0);
    font-size: 25px;
    padding-left: 25px;
  }
  li {
    width: 90%;
    display: flex;
    margin: 0 auto;
    padding: 20px;
    justify-content: space-between;
    margin-top: 10px;
    background: #121214;
    border-radius: 4px;
    margin-bottom: 10px;
  }
  ul {
    background: #212529;
    width: 90%;
    margin: 0 auto;
    border-radius: 4px;
  }
  @media (min-width: 700px) {
    header {
      display: flex;
      justify-content: center;
      gap: 50%;
    }
    .divProfile {
      display: flex;
      width: 100%;
      flex-direction: row;
      justify-content: center;
      gap: 34%;
    }
  }
`;
