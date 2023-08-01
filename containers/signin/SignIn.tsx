import { doLogin } from '@api';
import { PATTERN_VALIDATE, ROLE, ROUTES } from '@constants';
import { useLoading } from '@hooks';
import Config from '@root/config';
import { Button } from '@ui/Button';
import Input, { InputPassword } from '@ui/Input/Input';
import { Message, reactLocalStorage } from '@utils';
import { Divider, Form } from 'antd';
import moment from 'moment';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { Cookies } from 'react-cookie';
import { SignInPageWrapper } from './SignIn.style';
import { LockOutlined, UserOutlined } from '@ant-design/icons';

const SignIn: React.FC = () => {
  const [form] = Form.useForm();
  const router = useRouter();

  const [{ isLoading }, { start, stop }] = useLoading();

  const onSubmit = async (data) => {
    start();
    try {
      const resp: any = await doLogin(data);
      const error = resp.data?.error;
      const respData = resp.data?.responseData;
      if (error) {
        stop();
        Message.error(error?.message ?? 'Something error! Try again later');
      } else {
        onLoginSuccess(respData);
      }
    } catch (err) {
      stop();
      console.log('onSubmit-error :>> ', err.toString());
    } finally {
      stop();
    }
  };

  const onLoginSuccess = (data) => {
    const cookies = new Cookies();
    const user = data.examUser;
    const roles = data.roles;
    const accessToken = data.access_token;

    if (accessToken && typeof accessToken === 'string') {
      cookies.set(Config.AUTH_TOKEN_KEY, accessToken, {
        expires: moment().add(60, 'day').toDate(),
        path: '/',
      });
      reactLocalStorage.setObject(Config.USER_KEY, user);
      if (user.roles.includes(ROLE.ADMIN)) {
        router.push(ROUTES.ADMIN_USER);
      } else {
        router.push(ROUTES.HOME);
      }
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
      <div className="login-content">
        <div className="form-login-wrap">
          <div className="header-login-wrap">
            <div className="title-form">Login</div>
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
                  className="mb-4"
                >
                  <Input
                    placeholder="Email Address"
                    prefix={<UserOutlined style={{ fontSize: '28px' }} />}
                  />
                </Form.Item>

                <Form.Item
                  name="password"
                  rules={[{ required: true, message: 'Please input your password!' }]}
                  className="mb-2"
                >
                  <InputPassword
                    placeholder="Password"
                    iconRender={iconRender}
                    prefix={<LockOutlined style={{ fontSize: '28px' }} />}
                  />
                </Form.Item>

                <div className="action-forgotpassword">
                  <div className="link-to-forgotpassword">
                    <Link href={ROUTES.FORGOTPASSWORD}>Forgot password?</Link>
                  </div>
                </div>
                <div className="action-login">
                  <Button
                    type="primary"
                    htmlType="submit"
                    className="btn-signin"
                    loading={isLoading}
                  >
                    Sign in
                  </Button>
                </div>

                {/* <div className="divider">
                  <Divider plain>Or Login with</Divider>
                </div>
                <div
                  id="login-with-google-button"
                  className="auth-login-with-google auth-login-sso-button"
                >
                  Sign in with Google
                </div> */}
                <div className="auth-form-nav">
                  Do you have any accounts?{' '}
                  <span>
                    <Link href={ROUTES.SIGNUP}>
                      <span className="link-to">Sign up</span>
                    </Link>
                  </span>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </SignInPageWrapper>
  );
};

export default SignIn;
