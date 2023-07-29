import { styled, theme } from '@styles/theme';

export const SignUpPageWrapper = styled.div`
  // layout
  display: flex;
  .register-content {
    flex: 0 0 100%;
    padding: 10vh 7.3vw 10vh 9.3vw;
    @media (max-width: 769px) {
      padding-bottom: 75px;
    }
  }
  //end
  .ant-form-item {
    margin-bottom: 0;
  }
  .form-register-wrap {
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
    .form-register-content {
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
        margin-top: 24px;
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
    .check-validate-pass-box {
      font-weight: 400;
      font-size: 18px;
      line-height: 30px;
      letter-spacing: 0.2625px;
      color: rgba(39, 39, 39, 0.85);
      margin-bottom: 36px;
      margin-top: 12px;
      .validate-length,
      .validate-character {
        > svg {
          display: none;
          margin-right: 8p;
        }
        &.is-validated {
          color: rgba(12, 176, 58, 0.85);
          > svg {
            display: inline-block;
          }
        }
      }
      @media (max-width: 769px) {
        margin-bottom: 18px;
      }
    }
    .noti-agree-term {
      font-weight: 400;
      font-size: 18px;
      line-height: 30px;
      letter-spacing: 0.2625px;
      color: rgba(39, 39, 39, 0.85);
      margin-bottom: 24px;
      .link-to-term {
        font-weight: 500;
        font-size: 18px;
        line-height: 30px;
        letter-spacing: 0.2625px;
        color: #6220d4;
        cursor: pointer;
      }
    }
    .btn-register {
      background: linear-gradient(90deg, #6366f1 0%, #8b5cf6 50%, #d946ef 100%);
      border-radius: 4px;
      border: none;
      height: 56px;
      width: 178px;
      cursor: pointer;
      @media (max-width: 769px) {
        width: 100%;
      }
    }
    .already-account {
      font-weight: 400;
      font-size: 18px;
      line-height: 22px;
      letter-spacing: 0.2625px;
      color: rgba(39, 39, 39, 0.85);
      margin-top: 56px;
      .link-to-login {
        font-weight: 500;
        font-size: 18px;
        line-height: 22px;
        letter-spacing: 0.2625px;
        color: #6220d4;
        cursor: pointer;
      }
    }
    .register-success-wrap {
      margin-top: 245px;
      .register-success-title {
        font-weight: 700;
        font-size: 36px;
        line-height: 44px;
        letter-spacing: 0.3px;
        color: #272727;
      }
      .register-success-des {
        font-size: 18px;
        line-height: 23px;
        letter-spacing: 0.2625px;
        color: rgba(39, 39, 39, 0.85);
        margin-top: 12px;
      }
      .btn-to-login {
        background: linear-gradient(90deg, #6366f1 0%, #8b5cf6 50%, #d946ef 100%);
        border-radius: 4px;
        text-align: center;
        width: 178px;
        height: 56px;
        margin-top: 26px;
        cursor: pointer;
        .btn-to-login-text {
          font-weight: 600;
          font-size: 16px;
          line-height: 56px;
          letter-spacing: 0.5px;
          color: #ffffff;
        }
      }
      @media (max-width: 769px) {
        margin-top: 0;
        .btn-to-login {
          width: 100%;
        }
      }
    }
  }
`;
