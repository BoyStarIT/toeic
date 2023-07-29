import React, { useState } from 'react';
import { putForgotPassword } from '@api';
import { PATTERN_VALIDATE, ROUTES, STEP_FORGOT_PASSWORD } from '@constants';
import { useLoading } from '@hooks';
import { Message } from '@utils';
import { Form } from 'antd';
import { ForgotPasswordPageWrapper } from './ForgotPassword.style';
import Input from '@ui/Input/Input';
import { Button } from '@ui/Button';
import VerificationCode from './VerificationCode';
import FormChangePassword from './FormChangePassword';
import Link from 'next/link';
import { useBreakpoints } from '@contexts/breakpointsContext';

const ForgotPassword: React.FC = () => {
  const [form] = Form.useForm();
  const { mobileMode, breakpoints, tabletDown } = useBreakpoints();
  const [{ isLoading }, { start, stop }] = useLoading();
  const [email, setEmail] = useState<string>('');
  const [resetCode, setResetCode] = useState<string>('');
  const [step, setStep] = useState<string>(STEP_FORGOT_PASSWORD.sendEmail);

  const onSubmit = async (data) => {
    start();
    try {
      const resp: any = await putForgotPassword(data);
      const error = resp.data.error;
      const respData = resp.data?.data;
      if (error) {
        stop();
        Message.error(error?.message ?? 'Something error!');
      } else {
        console.log('respData', respData);
        setEmail(data.email);
        setStep(STEP_FORGOT_PASSWORD.verificationCode);
      }
    } catch (err) {
      stop();
      console.log('onSubmit-error :>> ', err.toString());
    } finally {
      setEmail(data.email);
      setStep(STEP_FORGOT_PASSWORD.verificationCode);
    }
  };

  const onSetStep = (value) => {
    setStep(value);
  };

  return (
    <ForgotPasswordPageWrapper>
      {tabletDown ? (
        <>
          <div className="right-content login-right-content">
            <div className="right-bg-wrap">
              <img src={'/static/images/login-right-bg.png'} />
            </div>
          </div>
          <div className="left-content login-left-content">
            <div className="form-login-wrap">
              <div className="logo login-logo">
                <img src={'/static/images/Logo.png'} />
              </div>

              {step === STEP_FORGOT_PASSWORD.sendEmail && (
                <>
                  <div className="header-login-wrap">
                    <div className="title-login">Forgot Password?</div>
                  </div>
                  <div className="header-login-wrap-mobile">
                    <div className="des-login">
                      Enter the email address associated with your account
                    </div>
                  </div>
                  <div className="form-login-content">
                    <div className="form-login">
                      <Form
                        form={form}
                        name="login"
                        layout={'vertical'}
                        onFinish={onSubmit}
                        autoComplete="off"
                        requiredMark={false}
                      >
                        <Form.Item
                          name="email"
                          rules={[
                            { required: true, message: 'Please input your email address!' },
                            {
                              pattern: PATTERN_VALIDATE.email.value,
                              message: PATTERN_VALIDATE.email.message,
                            },
                          ]}
                        >
                          <Input placeholder="Email Address" />
                        </Form.Item>

                        <div className="action-wrap">
                          <Button
                            type="primary"
                            htmlType="submit"
                            className="btn-signin"
                            loading={isLoading}
                          >
                            Submit
                          </Button>
                        </div>
                      </Form>
                    </div>
                  </div>
                </>
              )}
              {step === STEP_FORGOT_PASSWORD.verificationCode && (
                <VerificationCode email={email} onSetStep={onSetStep} setResetCode={setResetCode} />
              )}
              {step === STEP_FORGOT_PASSWORD.changePassword && (
                <FormChangePassword email={email} onSetStep={onSetStep} resetCode={resetCode} />
              )}
              {step === STEP_FORGOT_PASSWORD.success && (
                <>
                  <div className="header-login-wrap">
                    <div className="title-login">Forgot Password?</div>
                  </div>
                  <div className="register-success-wrap">
                    <div className="register-success-title">
                      Congratulations, you have changed your password!
                    </div>
                    <div className="btn-to-login ">
                      <Link href={ROUTES.SIGNIN}>
                        <span className="btn-to-login-text"> Go to wallet</span>
                      </Link>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="left-content login-left-content">
            <div className="form-login-wrap">
              <div className="logo login-logo">
                <img src={'/static/images/Logo.png'} />
              </div>
              {step === STEP_FORGOT_PASSWORD.sendEmail && (
                <>
                  <div className="header-login-wrap">
                    <div className="title-login">Forgot Password?</div>
                    <div className="des-login">
                      Enter the email address associated with your account
                    </div>
                  </div>
                  <div className="form-login-content">
                    <div className="form-login">
                      <Form
                        form={form}
                        name="login"
                        layout={'vertical'}
                        onFinish={onSubmit}
                        autoComplete="off"
                        requiredMark={false}
                      >
                        <Form.Item
                          name="email"
                          rules={[
                            { required: true, message: 'Please input your email address!' },
                            {
                              pattern: PATTERN_VALIDATE.email.value,
                              message: PATTERN_VALIDATE.email.message,
                            },
                          ]}
                        >
                          <Input placeholder="Email Address" />
                        </Form.Item>

                        <div className="action-wrap">
                          <Button
                            type="primary"
                            htmlType="submit"
                            className="btn-signin"
                            loading={isLoading}
                          >
                            Submit
                          </Button>
                        </div>
                      </Form>
                    </div>
                  </div>
                </>
              )}
              {step === STEP_FORGOT_PASSWORD.verificationCode && (
                <VerificationCode email={email} onSetStep={onSetStep} setResetCode={setResetCode} />
              )}
              {step === STEP_FORGOT_PASSWORD.changePassword && (
                <FormChangePassword email={email} onSetStep={onSetStep} resetCode={resetCode} />
              )}
              {step === STEP_FORGOT_PASSWORD.success && (
                <div className="register-success-wrap">
                  <div className="register-success-title">
                    {' '}
                    Congratulations, you have changed your password!
                  </div>
                  <div className="btn-to-login ">
                    <Link href={ROUTES.SIGNIN}>
                      <span className="btn-to-login-text"> Go to wallet</span>
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="right-content login-right-content">
            <div className="right-bg-wrap">
              <img src={'/static/images/login-right-bg.png'} />
            </div>
          </div>
        </>
      )}
    </ForgotPasswordPageWrapper>
  );
};

export default ForgotPassword;
