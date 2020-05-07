import styled, { css, keyframes } from 'styled-components';
import { shade } from 'polished';

interface FormProps {
  hasError: boolean;
}

const toRight = keyframes`
  0%{
    transform: translateX(-60%);
    opacity: 0;
  }
  100%{
    transform: translateX(0);
    opacity: 1;
  }
`;

const toLeft = keyframes`
  0%{
    transform: translateX(60%);
    opacity: 0;
  }
  100%{
    transform: translateX(0);
    opacity: 1;
  }
`;

const fadeIn = keyframes`
  0%{
    opacity: 0;
  }
  100%{
    opacity: 1;
  }
`;

export const Title = styled.h1`
  font-size: 48px;
  color: ${(props) => props.theme.color.text};
  margin-top: 80px;
  max-width: 450px;
  line-height: 56px;
  animation: 2s ${fadeIn} ease-out;
`;

export const Form = styled.form<FormProps>`
  margin-top: 40px;
  max-width: 700px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  animation: 1s ${toRight} ease-out;
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
    border: solid 2px ${(props) => props.theme.color.primary};
    background: ${(props) => props.theme.color.primary};

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
    border: solid 2px ${(props) => props.theme.color.primary};
    background: ${(props) => props.theme.color.primary};
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
    animation: 1s ${toLeft} ease-out;
    animation-fill-mode: backwards;
    border: solid 2px ${(props) => props.theme.color.primary};
    background: ${(props) => props.theme.color.primary};
    border-radius: 5px;
    width: 100%;
    padding: 24px;
    display: block;
    text-decoration: none;
    display: flex;
    align-items: center;
    transition: transform 0.2s;
    position: relative;
    transition: 0.5s;

    @media (max-width: 450px) {
      padding-top: 45px;
    }

    &:nth-child(1) {
      animation-delay: 300ms;
    }
    &:nth-child(2) {
      animation-delay: 400ms;
    }
    &:nth-child(3) {
      animation-delay: 500ms;
    }
    &:nth-child(4) {
      animation-delay: 600ms;
    }
    &:nth-child(5) {
      animation-delay: 700ms;
    }
    &:nth-child(6) {
      animation-delay: 800ms;
    }
    &:nth-child(7) {
      animation-delay: 900ms;
    }

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
        color: ${(props) => props.theme.color.text};
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
