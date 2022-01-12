import styled from 'styled-components';

export const goal = styled.div`
  display: flex;
  align-items: center;

  img {
    margin-right: 16px;
  }

  h2 {
    font-size: 24px;
    color: var(--blueGray900);
    font-family: Rubik, sans-serif;
    position: relative;
    bottom: 4px;
  }

  span {
    color: var(--blueGray400);
    font-size: 16px;
  }

  @media (max-width: 414px) {
    h2 {
      font-size: 20px;
    }

    span {
      font-size: 14px;
    }
  }
`;

export const inputs = styled.div`
  display: flex;
  margin-top: 30px;

  label {
    font-size: 14px;
    color: var(--blueGray900);
    margin-bottom: 4px;
  }

  > div:nth-child(2) {
    margin-left: 16px;
  }

  @media (max-width: 414px) {
    display: block;

    > div:nth-child(2) {
      margin: 16px 0 0 0;
    }
  }
`;

export const singleInput = styled.div`
  display: flex;
  flex-direction: column;
`;

export const monthlyAmount = styled.div`
  margin-top: 24px;
  border-radius: 8px;
  border: 1px solid #e9eef2;
  color: var(--blueGray900);

  h3 {
    font-size: 20px;
    font-weight: normal;
  }

  span {
    font-family: Rubik, sans-serif;
    color: var(--brandColorSecondary);
    font-size: 32px;
    font-weight: bold;
  }
`;

export const amount = styled.div`
  padding: 20px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const result = styled.div`
  padding: 20px 30px;
  font-size: 12px;
  line-height: 16px;
  background-color: var(--blueGray10);
`;
