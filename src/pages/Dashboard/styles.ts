import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface FormProps {
  hasError: boolean;
}

export const Title = styled.h1`
  font-size: 48px;
  color: #ffffff;
  margin-top: 80px;
  max-width: 450px;
  line-height: 56px;
`;

export const Form = styled.form<FormProps>`
  margin-top: 40px;
  max-width: 700px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  @media (max-width: 746px) {
    grid-template-columns: 1fr;
  }

  input {
    flex: 1;
    height: 70px;
    border: 0;
    padding: 0 24px;
    border-radius: 5px;
    color: #a8a8b3;
    border: solid 2px #222129;
    background: #222129;

    &::placeholder {
      color: #a8a8b3;
    }

    ${(props) =>
      props.hasError &&
      css`
        border-color: #c53030;
      `}
  }

  button {
    width: 210px;
    height: 70px;
    background: #05b353;
    border-color: solid 2px #05b353;
    border-radius: 5px;
    border: 0;
    color: #fff;
    font-weight: bold;
    transition: background-color 0.2s;

    @media (max-width: 746px) {
      margin-left: 0;
      margin-top: 10px;
    }

    &:hover {
      background: ${shade(0.2, '#05b353')};
    }

    ${(props) =>
      props.hasError &&
      css`
        background: #c53030;
        :hover {
          background: ${shade(0.2, '#c53030')};
        }
      `}
  }

  select {
    appearance: none;
    width: 234px;
    border-radius: 5px;
    border: solid 2px #222129;
    background: #222129;
    color: #a8a8b3;
    font-size: 16px;
    padding: 0 24px;
    margin-left: 5px;
    margin-right: 5px;
    flex: 1;
    height: 70px;

    @media (max-width: 746px) {
      margin-left: 0;
      margin-top: 10px;
      width: 100%;
    }

    &:after {
      position: absolute;
      content: '';
      top: 24px;
      right: 10px;
      width: 0;
      height: 0;
      border: 6px solid transparent;
      background: #222129;
      border-color: #fff transparent transparent transparent;
    }

    :active {
      outline: none;
    }

    option {
      border: 0;
      background: #222129;
      &:checked {
        background: #222129;
      }
    }

    ${(props) =>
      props.hasError &&
      css`
        border-color: #c53030;
      `}
  }
`;

export const Repositories = styled.div`
  margin-top: 80px;
  max-width: 700px;

  span {
    background: #222129;
    border-radius: 5px;
    width: 100%;
    padding: 24px;
    display: block;
    text-decoration: none;
    display: flex;
    align-items: center;
    transition: transform 0.2s;
    position: relative;

    & + span {
      margin-top: 10px;
    }

    &:hover {
      transform: translateX(10px);
    }

    img {
      width: 64px;
      height: 64px;
      border-radius: 50%;
      margin-right: 8px;
    }
    div {
      margin-left: 0 16px;
      flex: 1;

      strong {
        font-size: 20px;
        color: #fff;
      }

      p {
        font-size: 18px;
        color: #a8a8b3;
        margin-top: 4px;
      }
    }

    .chevronIcon {
      position: absolute;
      top: 15px;
      right: 15px;
      color: #15e874;
    }

    .trashIcon {
      position: absolute;
      top: 18px;
      right: 55px;
    }
  }
`;

export const Error = styled.span`
  display: block;
  color: #c53030;
  margin-top: 8px;
`;
