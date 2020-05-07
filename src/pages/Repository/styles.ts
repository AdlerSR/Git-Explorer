import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #a8a8b3;
    transition: color 0.6s;

    &:hover {
      color: #666;
    }

    svg {
      margin-right: 4px;
    }
  }
`;

export const RepositoryInfo = styled.section`
  margin-top: 80px;

  .gifLoading {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  header {
    display: flex;
    align-items: center;

    @media (max-width: 500px) {
      flex-direction: column;
    }

    img {
      height: 120px;
      width: 120px;
      border-radius: 50%;
    }

    div {
      margin-left: 24px;
      @media (max-width: 500px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-top: 20px;
      }
      strong {
        font-size: 36px;
        color: ${(props) => props.theme.color.text};

        @media (max-width: 500px) {
          font-size: 25px;
          text-align: center;
        }
      }

      p {
        font-size: 18px;
        color: ${(props) => props.theme.color.text};
        margin-top: 4px;

        @media (max-width: 500px) {
          margin-top: 10px;
          text-align: center;
        }
      }
    }
  }
  ul {
    display: flex;
    list-style: none;
    margin-top: 40px;
    @media (max-width: 500px) {
      justify-content: center;
    }
    li {
      text-align: center;
      & + li {
        margin-left: 80px;
      }

      strong {
        display: block;
        font-size: 36px;
        color: ${(props) => props.theme.color.text};
      }

      span {
        display: block;
        margin-top: 4px;
        color: ${(props) => props.theme.color.text};
      }
    }
  }
`;

export const Issues = styled.div`
  margin-top: 80px;

  span {
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

    & + span {
      margin-top: 10px;
    }

    &:hover {
      transform: translateX(10px);
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
  }
`;
