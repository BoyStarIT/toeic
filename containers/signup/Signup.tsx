import React, { useEffect, useState } from 'react';
import { postRegister } from '@api';
import { PATTERN_VALIDATE, ROUTES } from '@constants';
import { useLoading } from '@hooks';
import { Message } from '@utils';
import { Form, Row, Col } from 'antd';
import Link from 'next/link';
import { SignUpPageWrapper } from './Signup.style';
import Input, { InputPassword } from '@ui/Input/Input';
import IconChecked from '@icons/IChecked.svg';
import { Button } from '@ui/Button';
import { useBreakpoints } from '@contexts/breakpointsContext';

const SignUp: React.FC = () => {
  const [form] = Form.useForm();
  const [{ isLoading }, { start, stop }] = useLoading();
  const { mobileMode, breakpoints, tabletDown } = useBreakpoints();

  const [isRegisterSuccess, setIsRegisterSuccess] = useState<boolean>(false);

  const onSubmit = async (data) => {
    start();
    try {
      const resp: any = await postRegister(data);
      const error = resp.data.error;
      const respData = resp.data?.data;
      if (error) {
        stop();
        Message.error(error?.message ?? 'Something error!');
      } else {
        console.log('respData', respData);
      }

      // setIsRegisterSuccess(true);
    } catch (err) {
      console.log('onSubmit-error :>> ', err.toString());
    } finally {
      setIsRegisterSuccess(true);
      stop();
    }
  };

  const iconRender = (visible) => {
    return visible ? (
      <span className="action-hidden-pass">Hidden</span>
    ) : (
      <span className="action-show-pass">Show</span>
    );
  };

  return (
    <SignUpPageWrapper>
      {tabletDown ? (
        <>
          <div className="right-content login-right-content">
            <div className="right-bg-wrap">
              <img src={'/static/images/login-right-bg.png'} />
            </div>
          </div>
          <div className="left-content login-left-content">
            <div className="form-register-wrap">
              <div className="logo login-logo">
                <img src={'/static/images/Logo.png'} />
              </div>
              <div className="header-login-wrap">
                <div className="title-login">Sign up to Hicon</div>
                <div className="des-login">Building a new advertising world, together</div>
              </div>
              {isRegisterSuccess ? (
                <div className="register-success-wrap">
                  <div className="register-success-title"> Congratulations, sign up complete!</div>
                  <div className="register-success-des">
                    Please check your email to activate your account that we just sent you.{' '}
                  </div>
                  <div className="btn-to-login ">
                    <Link href={ROUTES.SIGNIN}>
                      <span className="btn-to-login-text">Sign in</span>
                    </Link>
                  </div>
                </div>
              ) : (
                <>
                  <div className="header-login-wrap">
                    <div className="title-login">Sign up to Hicon</div>
                    <div className="des-login">Building a new advertising world, together</div>
                  </div>
                  <div className="form-register-content">
                    <div className="form-register">
                      <Form
                        form={form}
                        name="register"
                        layout={'vertical'}
                        onFinish={onSubmit}
                        autoComplete="off"
                        requiredMark={false}
                      >
                        {(values, formInstance) => {
                          const isValidateCharacterPass =
                            formInstance.getFieldError('password')?.length === 0 &&
                            values?.password?.length > 0;
                          return (
                            <>
                              <Row gutter={[16, 24]}>
                                <Col span={12}>
                                  <Form.Item
                                    name="firstName"
                                    rules={[
                                      { required: true, message: 'Please input your first name!' },
                                      {
                                        pattern: PATTERN_VALIDATE.isBlank.value,
                                        message: PATTERN_VALIDATE.isBlank.message,
                                      },
                                    ]}
                                  >
                                    <Input placeholder="First name" />
                                  </Form.Item>
                                </Col>
                                <Col span={12}>
                                  <Form.Item
                                    name="lastName"
                                    rules={[
                                      { required: true, message: 'Please input your last name!' },
                                      {
                                        pattern: PATTERN_VALIDATE.isBlank.value,
                                        message: PATTERN_VALIDATE.isBlank.message,
                                      },
                                    ]}
                                  >
                                    <Input placeholder="Last name" />
                                  </Form.Item>
                                </Col>
                                <Col span={24}>
                                  <Form.Item
                                    name="email"
                                    rules={[
                                      {
                                        required: true,
                                        message: 'Please input your email address!',
                                      },
                                      {
                                        pattern: PATTERN_VALIDATE.email.value,
                                        message: PATTERN_VALIDATE.email.message,
                                      },
                                    ]}
                                  >
                                    <Input placeholder="Email Address" />
                                  </Form.Item>
                                </Col>
                                <Col span={24}>
                                  <Form.Item
                                    name={'password'}
                                    rules={[
                                      {
                                        required: true,
                                        message: 'Please input your password!',
                                      },
                                      {
                                        pattern: PATTERN_VALIDATE.password.value,
                                        message: PATTERN_VALIDATE.password.message,
                                      },
                                    ]}
                                  >
                                    <InputPassword
                                      key={'reg-password'}
                                      placeholder="Password"
                                      iconRender={iconRender}
                                    />
                                  </Form.Item>
                                </Col>
                                <Col span={24}>
                                  <Form.Item
                                    name={'confirmPassword'}
                                    dependencies={['password']}
                                    rules={[
                                      {
                                        required: true,
                                        message: 'Please confirm your password!',
                                      },
                                      ({ getFieldValue }) => ({
                                        validator(_, value) {
                                          if (!value || getFieldValue('password') === value) {
                                            return Promise.resolve();
                                          }
                                          return Promise.reject(
                                            new Error('Passwords do not match')
                                          );
                                        },
                                      }),
                                    ]}
                                  >
                                    <InputPassword
                                      key={'reg-confirmPassword'}
                                      placeholder=" Confirm Password"
                                      iconRender={iconRender}
                                    />
                                  </Form.Item>
                                </Col>
                              </Row>

                              <div className="check-validate-pass-box">
                                <div
                                  className={`validate-length ${
                                    values?.password?.length > 7 ? 'is-validated' : ''
                                  }`}
                                >
                                  <IconChecked /> Minium 8 Characters
                                </div>
                                <div
                                  className={`validate-character ${
                                    isValidateCharacterPass ? 'is-validated' : ''
                                  }`}
                                >
                                  <IconChecked /> Must contain 1 uppercase letter and 1 number
                                </div>
                              </div>

                              {/* <div className="noti-agree-term">
                                By clicking Sign up, you agree to our{' '}
                                <span className="link-to-term">Terms and Privacy</span>
                              </div> */}

                              <div className="action-wrap">
                                <Button
                                  type="primary"
                                  htmlType="submit"
                                  className="btn-register"
                                  loading={isLoading}
                                >
                                  Sign up
                                </Button>
                              </div>
                              <div className="already-account">
                                If you already have an account?{' '}
                                <span>
                                  <Link href={ROUTES.SIGNIN}>
                                    <span className="link-to-login">Sign in</span>
                                  </Link>
                                </span>
                              </div>
                            </>
                          );
                        }}
                      </Form>
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
            <div className="form-register-wrap">
              <div className="logo login-logo">
                <img src={'/static/images/Logo.png'} />
              </div>
              {isRegisterSuccess ? (
                <div className="register-success-wrap">
                  <div className="register-success-title"> Congratulations, sign up complete!</div>
                  <div className="register-success-des">
                    Please check your email to activate your account that we just sent you.{' '}
                  </div>
                  <div className="btn-to-login ">
                    <Link href={ROUTES.SIGNIN}>
                      <span className="btn-to-login-text">Sign in</span>
                    </Link>
                  </div>
                </div>
              ) : (
                <>
                  <div className="header-login-wrap">
                    <div className="title-login">Sign up to Hicon</div>
                    <div className="des-login">Building a new advertising world, together</div>
                  </div>
                  <div className="form-register-content">
                    <div className="form-register">
                      <Form
                        form={form}
                        name="register"
                        layout={'vertical'}
                        onFinish={onSubmit}
                        autoComplete="off"
                        requiredMark={false}
                      >
                        {(values, formInstance) => {
                          const isValidateCharacterPass =
                            formInstance.getFieldError('password')?.length === 0 &&
                            values?.password?.length > 0;
                          return (
                            <>
                              <Row gutter={[16, 24]}>
                                <Col span={12}>
                                  <Form.Item
                                    name="firstName"
                                    rules={[
                                      { required: true, message: 'Please input your first name!' },
                                      {
                                        pattern: PATTERN_VALIDATE.isBlank.value,
                                        message: PATTERN_VALIDATE.isBlank.message,
                                      },
                                    ]}
                                  >
                                    <Input placeholder="First name" />
                                  </Form.Item>
                                </Col>
                                <Col span={12}>
                                  <Form.Item
                                    name="lastName"
                                    rules={[
                                      { required: true, message: 'Please input your last name!' },
                                      {
                                        pattern: PATTERN_VALIDATE.isBlank.value,
                                        message: PATTERN_VALIDATE.isBlank.message,
                                      },
                                    ]}
                                  >
                                    <Input placeholder="Last name" />
                                  </Form.Item>
                                </Col>
                                <Col span={24}>
                                  <Form.Item
                                    name="email"
                                    rules={[
                                      {
                                        required: true,
                                        message: 'Please input your email address!',
                                      },
                                      {
                                        pattern: PATTERN_VALIDATE.email.value,
                                        message: PATTERN_VALIDATE.email.message,
                                      },
                                    ]}
                                  >
                                    <Input placeholder="Email Address" />
                                  </Form.Item>
                                </Col>
                                <Col span={24}>
                                  <Form.Item
                                    name={'password'}
                                    rules={[
                                      {
                                        required: true,
                                        message: 'Please input your password!',
                                      },
                                      {
                                        pattern: PATTERN_VALIDATE.password.value,
                                        message: PATTERN_VALIDATE.password.message,
                                      },
                                    ]}
                                  >
                                    <InputPassword
                                      key={'reg-password'}
                                      placeholder="Password"
                                      iconRender={iconRender}
                                    />
                                  </Form.Item>
                                </Col>
                                <Col span={24}>
                                  <Form.Item
                                    name={'confirmPassword'}
                                    dependencies={['password']}
                                    rules={[
                                      {
                                        required: true,
                                        message: 'Please confirm your password!',
                                      },
                                      ({ getFieldValue }) => ({
                                        validator(_, value) {
                                          if (!value || getFieldValue('password') === value) {
                                            return Promise.resolve();
                                          }
                                          return Promise.reject(
                                            new Error('Passwords do not match')
                                          );
                                        },
                                      }),
                                    ]}
                                  >
                                    <InputPassword
                                      key={'reg-confirmPassword'}
                                      placeholder=" Confirm Password"
                                      iconRender={iconRender}
                                    />
                                  </Form.Item>
                                </Col>
                              </Row>

                              <div className="check-validate-pass-box">
                                <div
                                  className={`validate-length ${
                                    values?.password?.length > 7 ? 'is-validated' : ''
                                  }`}
                                >
                                  <IconChecked /> Minium 8 Characters
                                </div>
                                <div
                                  className={`validate-character ${
                                    isValidateCharacterPass ? 'is-validated' : ''
                                  }`}
                                >
                                  <IconChecked /> Must contain 1 uppercase letter and 1 number
                                </div>
                              </div>

                              {/* <div className="noti-agree-term">
                                By clicking Sign up, you agree to our{' '}
                                <span className="link-to-term">Terms and Privacy</span>
                              </div> */}

                              <div className="action-wrap">
                                <Button
                                  type="primary"
                                  htmlType="submit"
                                  className="btn-register"
                                  loading={isLoading}
                                >
                                  Sign up
                                </Button>
                              </div>
                              <div className="already-account">
                                If you already have an account?{' '}
                                <span>
                                  <Link href={ROUTES.SIGNIN}>
                                    <span className="link-to-login">Sign in</span>
                                  </Link>
                                </span>
                              </div>
                            </>
                          );
                        }}
                      </Form>
                    </div>
                  </div>
                </>
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
    </SignUpPageWrapper>
  );
};

export default SignUp;
