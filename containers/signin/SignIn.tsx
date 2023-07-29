import React from 'react';
import { doLogin } from '@api';
import { PATTERN_VALIDATE, ROUTES } from '@constants';
import { useLoading } from '@hooks';
import { Message, reactLocalStorage } from '@utils';
import { Form } from 'antd';
import Link from 'next/link';
import { SignInPageWrapper } from './SignIn.style';
import Input, { InputPassword } from '@ui/Input/Input';
import { Button } from '@ui/Button';
import Config from '@root/config';
import moment from 'moment';
import { Cookies } from 'react-cookie';
import { useRouter } from 'next/router';
import { useBreakpoints } from '@contexts/breakpointsContext';

const SignIn: React.FC = () => {
  const [form] = Form.useForm();
  const router = useRouter();

  const { mobileMode, breakpoints, tabletDown } = useBreakpoints();

  const [{ isLoading }, { start, stop }] = useLoading();

  const onSubmit = async (data) => {
    start();
    try {
      const resp: any = await doLogin(data);
      const error = resp.data?.error;
      const respData = resp.data?.data;
      if (error) {
        stop();
        Message.error(error?.message ?? 'Something error!');
      } else {
        onLoginSuccess(respData);
      }
    } catch (err) {
      stop();
      console.log('onSubmit-error :>> ', err.toString());
    } finally {
    }
  };

  const onLoginSuccess = (data) => {
    const cookies = new Cookies();
    const user = data.hwUser;
    const accessToken = data.accessToken;
    const wallet = data.wallet;
    if (accessToken && typeof accessToken === 'string') {
      cookies.set(Config.AUTH_TOKEN_KEY, accessToken, {
        expires: moment().add(60, 'day').toDate(),
        path: '/',
      });
      reactLocalStorage.setObject(Config.USER_KEY, user);
      reactLocalStorage.setObject(Config.WALLET_KEY, wallet);
      router.push(ROUTES.HOME);
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
    <SignInPageWrapper>
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
              <div className="header-login-wrap">
                <div className="title-login">Sign in to Hicon</div>
                <div className="des-login">Building a new advertising world, together.</div>
              </div>
              <div className="form-login-content">
                <div className="form-header">
                  <span className="active-form-signin">Sign in</span>
                  <span className="link-to-signup">
                    <Link href={ROUTES.SIGNUP}>
                      <span className="link-to-signup-title">Sign up</span>
                    </Link>
                  </span>
                </div>
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
                      label="Email address"
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

                    <Form.Item
                      label="Password"
                      name="password"
                      rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                      <InputPassword placeholder="Password" iconRender={iconRender} />
                    </Form.Item>

                    <div className="action-wrap">
                      <Button
                        type="primary"
                        htmlType="submit"
                        className="btn-signin"
                        loading={isLoading}
                      >
                        Sign in
                      </Button>
                      <div className="link-to-forgotpassword">
                        <Link href={ROUTES.FORGOTPASSWORD}>Forgot password?</Link>
                      </div>
                    </div>
                    {/* <div className="other-login-social">
                  <span className="text-orlogin">Or login with</span>
                  <span className="login-w-gg">Google</span>
                  <span className="login-w-fb">Facebook</span>
                  <span className="login-w-tw">Twitter</span>
                </div> */}
                  </Form>
                </div>
              </div>
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
              <div className="header-login-wrap">
                <div className="title-login">Sign in to Hicon</div>
                <div className="des-login">Building a new advertising world, together.</div>
              </div>
              <div className="form-login-content">
                <div className="form-header">
                  <span className="active-form-signin">Sign in</span>
                  <span className="link-to-signup">
                    <Link href={ROUTES.SIGNUP}>
                      <span className="link-to-signup-title">Sign up</span>
                    </Link>
                  </span>
                </div>
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
                      label="Email address"
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

                    <Form.Item
                      label="Password"
                      name="password"
                      rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                      <InputPassword placeholder="Password" iconRender={iconRender} />
                    </Form.Item>

                    <div className="action-wrap">
                      <Button
                        type="primary"
                        htmlType="submit"
                        className="btn-signin"
                        loading={isLoading}
                      >
                        Sign in
                      </Button>
                      <div className="link-to-forgotpassword">
                        <Link href={ROUTES.FORGOTPASSWORD}>Forgot password?</Link>
                      </div>
                    </div>
                    {/* <div className="other-login-social">
                  <span className="text-orlogin">Or login with</span>
                  <span className="login-w-gg">Google</span>
                  <span className="login-w-fb">Facebook</span>
                  <span className="login-w-tw">Twitter</span>
                </div> */}
                  </Form>
                </div>
              </div>
            </div>
          </div>
          <div className="right-content login-right-content">
            <div className="right-bg-wrap">
              <img src={'/static/images/login-right-bg.png'} />
            </div>
          </div>
        </>
      )}
    </SignInPageWrapper>
  );
};

export default SignIn;
