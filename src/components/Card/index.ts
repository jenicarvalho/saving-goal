import styled from 'styled-components';

const card = styled.div`
  max-width: 560px;
  background-color: #ffffff;
  box-shadow: 0px 16px 32px rgba(30, 42, 50, 0.08);
  border-radius: 8px;
  padding: 35px 40px 40px;

  @media (max-width: 414px) {
    padding: 30px 20px;
  }
`;

export default card;
