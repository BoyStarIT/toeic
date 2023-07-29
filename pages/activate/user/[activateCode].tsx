import React, { useEffect } from 'react';
import { styled, theme } from '@styles/theme';
import Link from 'next/link';
import { ROUTES } from '@constants';
import { putActivate } from '@api';
import { Message } from '@utils';
import { GetServerSideProps } from 'next/types';

const UserActivatePage = (props) => {
  const { activeCode } = props;

  const handleActiveUser = async () => {
    try {
      const resp = await putActivate(activeCode);
      const error = resp.data.error;
      const respData = resp.data?.data;
      if (error) {
        Message.error(error?.message ?? 'Something error!');
      } else {
        console.log('respData', respData);
      }
    } catch (error) {
      console.log('error', error);
    }
  };

  useEffect(() => {
    handleActiveUser();
  }, []);

  return (
    <PageWrapper>
      <div className="left-content login-left-content">
        <div className="form-register-wrap">
          <div className="logo login-logo">
            <img src={'/static/images/Logo.png'} />
          </div>
          <div className="register-success-wrap">
            <div className="register-success-title"> Congratulations, sign up complete!</div>
            <div className="btn-to-login ">
              <Link href={ROUTES.SIGNIN}>
                <span className="btn-to-login-text">Sign in</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="right-content login-right-content">
        <div className="right-bg-wrap">
          <img src={'/static/images/login-right-bg.png'} />
        </div>
      </div>
    </PageWrapper>
  );
};

export const PageWrapper = styled.div`
  // layout
  display: flex;
  .left-content,
  .right-content {
    flex: 0 0 50%;
  }
  .left-content {
    padding: 10vh 7.3vw 10vh 9.3vw;
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
  }
  //end
  .form-register-wrap {
    max-width: 660px;
    margin: 0 auto;
    .login-logo {
      margin-bottom: 64px;
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
    }
  }
`;
export const getServerSideProps: GetServerSideProps = async (context) => {
  const _activeCode = context?.query?.activateCode;
  if (!_activeCode) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      activeCode: _activeCode,
    },
  };
};

export default UserActivatePage;
