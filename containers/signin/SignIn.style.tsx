import { styled, theme } from '@styles/theme';

export const SignInPageWrapper = styled.div`
  // layout
  display: flex;
  @media (max-width: 769px) {
    flex-direction: column;
  }
  .left-content,
  .right-content {
    flex: 0 0 50%;
  }
  .left-content {
    padding: 8vh 8vw 8vh 10vw;
    @media (max-width: 769px) {
      padding-bottom: 75px;
    }
  }
  .right-content {
    background: linear-gradient(90deg, #6366f1 0%, #8b5cf6 50%, #d946ef 100%);
    position: relative;
    min-height: 100vh;

    img {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 44vw;
    }
    @media (max-width: 769px) {
      min-height: 285px;
      img {
        position: absolute;
        top: 20px;
        right: 20px;
        left: unset;
        transform: unset;
        width: 198px;
      }
    }
  }
  //end

  .form-login-wrap {
    max-width: 660px;
    margin: 0 auto;
    .login-logo {
      margin-bottom: 64px;
      @media (max-width: 769px) {
        margin-bottom: 30px;
        text-align: center;
        img {
          width: 160px;
        }
      }
    }
    .header-login-wrap {
      margin-bottom: 64px;

      .title-login {
        font-weight: 700;
        font-size: 36px;
        line-height: 44px;
        letter-spacing: 0.3px;
        margin-bottom: 16px;
        color: #272727;
      }
      .des-login {
        font-weight: 400;
        font-size: 20px;
        line-height: 23px;
        letter-spacing: 0.2625px;
        color: rgba(39, 39, 39, 0.85);
      }

      @media (max-width: 769px) {
        margin-bottom: unset;
        position: absolute;
        top: 175px;
        left: 50%;
        transform: translateX(-50%);
        width: 400px;
        max-width: 92vw;
        .title-login {
          font-size: 30px;
          line-height: 44px;
          color: #ffffff;
          margin-bottom: unset;
        }
        .des-login {
          font-size: 16px;
          color: #ffffff;
        }
      }
    }
    .form-login-content {
      .form-header {
        border-bottom: 2px solid #dedede;
        padding-bottom: 6px;
        margin-bottom: 37px;
        width: max-content;
      }
      .active-form-signin {
        color: #6220d4;
        font-weight: 500;
        font-size: 18px;
        line-height: 20px;
        letter-spacing: 0.4375px;
        margin-right: 25px;
        border-bottom: 3px solid #6220d4;
        padding-bottom: 7px;
      }
      .link-to-signup-title {
        color: rgba(102, 90, 225, 0.64);
        font-weight: 500;
        font-size: 18px;
        line-height: 20px;
        letter-spacing: 0.4375px;
      }
      .action-wrap {
        display: flex;
        justify-content: space-between;
        margin-top: 32px;
        align-items: center;
        .btn-signin {
          background: linear-gradient(90deg, #6366f1 0%, #8b5cf6 50%, #d946ef 100%);
          border-radius: 4px;
          border: none;
          outline: none;
          width: 180px;
          height: 56px;
        }
        .link-to-forgotpassword a {
          font-weight: 400;
          font-size: 16px;
          line-height: 20px;
          letter-spacing: 0.2625px;
          color: rgba(39, 39, 39, 0.85);
        }
      }
      .action-hidden-pass,
      .action-show-pass,
      .link-to-signup,
      .ant-input-password-icon {
        cursor: pointer;
      }
    }
    .ant-form-item-label > label {
      font-size: 18px;
      line-height: 23px;
      letter-spacing: 0.2625px;
      color: rgba(39, 39, 39, 0.85);
    }
    .ant-form-item-explain-error {
      font-weight: 500;
      font-size: 13px;
      line-height: 20px;
      letter-spacing: 0.4375px;
      color: #cd0000;
      margin-top: 5px;
    }
    .other-login-social {
      margin-top: 74px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .text-orlogin {
        font-size: 16px;
        line-height: 20px;
        letter-spacing: 0.2625px;
        color: rgba(39, 39, 39, 0.85);
      }
      .login-w-gg,
      .login-w-fb,
      .login-w-tw {
        cursor: pointer;
        font-weight: 500;
        font-size: 16px;
        line-height: 20px;
        letter-spacing: 0.2625px;
        color: #6220d4;
      }
    }
  }
`;
