import { styled, theme } from '@styles/theme';

export const WelcomePageWrapper = styled.section`
  position: relative;
  background: url('/static/images/welcome-bg.png');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  min-width: 100vw;
  min-height: 100vh;
  .welcome-logo {
    position: absolute;
    top: 10%;
    left: 10%;
  }
  .welcome-phone {
    position: absolute;
    right: 0;
    bottom: 0;
    > img {
      height: 80vh;
    }
  }
  .welcome-join-now {
    background: linear-gradient(216.56deg, #e250e5 5.32%, #4b50e6 94.32%);
    border-radius: 50px;
    text-align: center;
    position: absolute;
    left: 10%;
    bottom: 15%;
    width: 12vw;
    height: 6vh;
    .btn-join-now {
      line-height: 6vh;
      font-weight: 700;
      color: #ffffff;
      font-size: 1.4vw;
      letter-spacing: 0.1em;
      cursor: pointer;
    }
  }
`;
