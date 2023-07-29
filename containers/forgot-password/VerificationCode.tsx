import React, { ReactNode, useEffect, useState } from 'react';
import { postVerify, putForgotPassword } from '@api';
import { STEP_FORGOT_PASSWORD } from '@constants';
import { useLoading } from '@hooks';
import { Message } from '@utils';
import { StyledVerificationCode } from './ForgotPassword.style';
import { Button } from '@ui/Button';
import ReactCodeInput from 'react-verification-code-input';
import { useBreakpoints } from '@contexts/breakpointsContext';

interface IVerificationCode {
  email?: string;
  onSetStep?: (value) => void;
  setResetCode?: (value) => void;
  children?: ReactNode | undefined;
}
const VerificationCode: React.FC<IVerificationCode> = (props) => {
  const { email, onSetStep, setResetCode } = props;
  const { mobileMode, breakpoints, tabletDown } = useBreakpoints();

  const [{ isLoading }, { start, stop }] = useLoading();
  const [isInit, setIsInit] = useState(true);
  const [code, setCode] = useState('');
  const [countDown, setCountDown] = useState<number>(60);

  const onSubmit = async () => {
    start();
    try {
      const params = {
        email: email,
        verificationCode: code,
      };
      const resp: any = await postVerify(params);
      const error = resp.data.error;
      const respData = resp.data?.data;
      if (error) {
        stop();
        Message.error(error?.message ?? 'Something error!');
      } else {
        console.log('respData', respData);
        setResetCode(respData.resetCode);
        onSetStep(STEP_FORGOT_PASSWORD.changePassword);
      }
    } catch (err) {
      stop();
      console.log('onSubmit-error :>> ', err.toString());
    } finally {
      onSetStep(STEP_FORGOT_PASSWORD.changePassword);
    }
  };

  const onSendEmail = async () => {
    start();
    try {
      const params = {
        email: email,
      };
      const resp: any = await putForgotPassword(params);
      const error = resp.data.error;
      const respData = resp.data?.data;
      if (error) {
        stop();
        Message.error(error?.message ?? 'Something error!');
      } else {
        console.log('respData', respData);
      }
    } catch (err) {
      stop();
      console.log('onSubmit-error :>> ', err.toString());
    } finally {
      setCountDown(60);
    }
  };

  const onSendMailAgain = () => {
    if (countDown > 0) {
      return;
    } else {
      onSendEmail();
    }
  };

  const onChangeCode = (code) => {
    setCode(code);
  };

  useEffect(() => {
    let interval;

    if (countDown === 60 && !isInit) {
      interval = setInterval(() => {
        if (countDown > 0) {
          setCountDown((prevState) => prevState - 1);
        } else {
          clearInterval(interval);
        }
      }, 1000);
    }
  }, [countDown]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (countDown > 0) {
        setCountDown((prevState) => prevState - 1);
      } else {
        clearInterval(interval);
      }
    }, 1000);
    setIsInit(true);
    return () => {
      setIsInit(false);

      clearInterval(interval);
    };
  }, []);

  return (
    <StyledVerificationCode>
      {tabletDown ? (
        <>
          <div className="header-login-wrap">
            <div className="title-login">Enter verification code</div>
          </div>
          <div className="header-login-wrap-mobile">
            <div className="des-login">We have sent a code to</div>
            <div className="des-email">{email ?? ''}</div>
          </div>
        </>
      ) : (
        <>
          <div className="header-login-wrap">
            <div className="title-login">Enter verification code</div>
            <div className="des-login">We have sent a code to</div>
            <div className="des-email">{email ?? ''}</div>
          </div>
        </>
      )}
      <div className="form-login-content">
        <div className="form-login">
          <ReactCodeInput className="verification-code-input" onChange={onChangeCode} />
          <div className="send-again-code">
            <span className="not-received">Not received?</span>
            <span
              className={`send-again ${countDown > 0 ? '' : 'active'}`}
              onClick={onSendMailAgain}
            >
              {`Send Again ${countDown > 0 ? '(' + countDown + ')' : ''}`}
            </span>
          </div>
          <div className="action-wrap">
            <Button type="primary" onClick={onSubmit} className="btn-signin" loading={isLoading}>
              Submit
            </Button>
          </div>
        </div>
      </div>
    </StyledVerificationCode>
  );
};

export default VerificationCode;
