import styled, { createGlobalStyle } from 'styled-components';

const globalStyle = createGlobalStyle`
  :root {
    --brandColorPrimary: #1B31A8;
    --blueGray300: #8A9CA9;
    --blueGray400: #708797;
    --blueGray600: #4D6475;
    --blueGray900: #1E2A32;
    --blueGray10: #F4F8FA;
    --brandColorSecondary: #0079FF;
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box
  }
  body {
    font-family: 'Work Sans', sans-serif;
    background-color: #F4F8FA;
    -webkit-font-smoothing: antialiased;
  }

  input[type="date"]::-webkit-inner-spin-button,
  input[type="date"]::-webkit-calendar-picker-indicator {
      display: none;
      -webkit-appearance: none;
  }
`;

export const container = styled.div`
  width: 100%;
  margin: 48px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 414px) {
    margin-top: 32px;
  }
`;

export const H1 = styled.h1`
  color: var(--brandColorPrimary);
  font-size: 20px;
  font-weight: 400;
  text-align: center;
  margin-bottom: 24px;

  @media (max-width: 414px) {
    font-size: 18px;
  }
`;

export const button = styled.div`
  margin-top: 32px;
  display: flex;
  justify-content: center;

  button {
    cursor: pointer;
    background-color: var(--brandColorPrimary);
    border-radius: 32px;
    width: 320px;
    height: 56px;
    font-size: 16px;
    text-align: center;
    color: #fff;
    border: none;
    font-weight: 600;

    &:hover {
      background-color: var(--brandColorSecondary);
      transition: 0.2s;
    }
  }
`;

export { globalStyle };
