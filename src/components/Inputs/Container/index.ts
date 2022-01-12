import styled from 'styled-components';

export const container = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #e9eef2;
  border-radius: 4px;

  svg {
    margin-left: 14px;
  }

  input {
    color: var(--blueGray600);
    font-weight: 500;
    font-family: Rubik, sans-serif;
    margin-left: 13px;
    font-size: 24px;
    height: 56px;
    border: none;
    width: 94%;
    &:focus {
      outline: none;
    }

    .react-datepicker-ignore-onclickoutside {
      color: var(--blueGray900);
      font-size: 16px;
      text-align: center;
    }
  }
`;
