import styled from 'styled-components';

export const container = styled.div`
  background-color: #fff;
  height: 80px;

  svg {
    width: 100px;
    margin: 24px 0 24px 56px;
  }

  @media (max-width: 414px) {
    height: 56px;
    svg {
      width: 75px;
      margin: 16px 0 16px 16px;
    }
  }
`;
