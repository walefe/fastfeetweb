import styled from 'styled-components';
import { darken } from 'polished';

export const Wrapper = styled.div`
  height: 100%;
  background: #7d40e7;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 360px;
  height: 425px;
  border-radius: 4px;
  text-align: center;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  form {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-top: 30px;

    input {
      width: 300px;
      height: 45px;
      padding: 12px 15px;
      margin-bottom: 15px;
      border: 1px solid #dddddd;
      color: #999999;
      border-radius: 4px;
      opacity: 1;
    }

    strong {
      text-transform: uppercase;
      font-size: 14px;
      margin-bottom: 9px;
    }
  }

  img {
    height: 50px;
    width: 250px;
  }

  button {
    width: 300px;
    height: 45px;
    font-size: 16px;
    font-weight: bold;
    background: #7d40e7;
    color: #fff;
    border: none;
    border-radius: 4px;
    transition: background 0.2s;

    &:hover {
      background: ${darken(0.03, '#7d40e7')};
    }
  }
`;
