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
  .divText {
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 20px;
  }
  .pText {
    color: var(--color-Grey-0);
  }
  @media (min-width: 700px) {
    align-items: center;
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
    .divText {
      width: 100%;
      margin-left: 38%;
    }
  }
`;
