import { styled, theme } from '@styles/theme';

export const SignInPageWrapper = styled.div`
  // layout
  display: flex;
  .login-content {
    flex: 0 0 100%;
    padding: 8vh 8vw 8vh 10vw;
    @media (max-width: 769px) {
      padding-bottom: 75px;
    }
  }
  //end
  .title-form {
    color: #29313a;
    font-size: 30px;
    font-weight: 700;
    text-align: center;
    padding-bottom: 30px;
    text-transform: uppercase;
  }
  .form-login-wrap {
    max-width: 660px;
    margin: 0 auto;

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
