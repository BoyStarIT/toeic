import { postRegister } from '@api';
import { PATTERN_VALIDATE, ROUTES } from '@constants';
import { useLoading } from '@hooks';
import IconChecked from '@icons/IChecked.svg';
import Config from '@root/config';
import { Button } from '@ui/Button';
import Input, { InputPassword } from '@ui/Input/Input';
import { Message, reactLocalStorage } from '@utils';
import { Col, Form, Row } from 'antd';
import moment from 'moment';
import Link from 'next/link';
import React from 'react';
import { Cookies } from 'react-cookie';
import { SignUpPageWrapper } from './Signup.style';
import { useRouter } from 'next/router';

const SignUp: React.FC = () => {
  const [form] = Form.useForm();
  const router = useRouter();
  const [{ isLoading }, { start, stop }] = useLoading();

  const onSubmit = async (data) => {
    start();
    try {
      const params = {
        email: data.username,
        password: data.password,
        firstName: data.username,
        lastName: data.username,
        address: 'Da Ton, Gia Lam, Ha Noi',
        phone: '+84900000008',
        role: 'User',
        dob: '10/12/2000',
        gender: 'Male',
        key: '03AAYGu2Tg3TiiW61K3go8fg87EYW_tMUVOkCbPA6UGOi3t14UxjQ7FRds4LlmZ_bW4JONKhiFblVAe5RWjJrmkq7wSPIAQ17xEtDVH5-ukwSeBKYx-0nQwzMhr_C8xVOGMX9l8pjpkeYiNreUGR1zTtKh1ULAVhOTg2exw0WwjUoNWhboDIIMJUgqgD34xrPesoocbKo3MxPP_-6iIfI8UAHaL97PzMQ0WxLF3s9scPbfcDDn5P-ooVdLMtDpvtNreo2Nqev1JTtaXUevQH9gUfEi4U5ICJSFInXytWHIR3ZusOUPFNizjdOi9N7AxNa1rTtHHgaskeGH84bGoM9JL4_Gn6Gtp9kxPoLTzE0I83MGnR4yqeuSypTe0X-vr0u5K21-xw-SeJ2AGLt-WDi5ia4GRjW08J-UOQ_ZixylGXi8DGpfdXN7Kquqcb3XCsyJWhIuX0l2Ys39SA1-DSpzp1F7-DYqmiWj9gEuGERd3_C57KQFx3EDg32HNA11vc0a9WVHP9FKjEMiRxIMkdRn2S1qdx9gMw7TV07dNkI-RrmITEWm9onOldDp87M9Re3doOUVhoiJT8NLY74GFSYYhbDKggFCzsA3d3BxzSgSEZDn4oCMrBSQ7vHS6JwIX6FcLabpIOSNGWXj5hq57YSipXbZPla4uyodcMoizd7kSywLc2pWTUUyMQOAUUxxbPPht-zVO7DLlPI5zX6RRt6uEA3QYTJIRkQ0j6gOc7EVsg8jpy9iPXWBSzaOt0UY9T4qFqyjSxAQeaUfemU0d4NSzZssl0vsV5ouu6xLCoOZ-hDyvqoubdS1XmgjkkrYkSrf-EpWe_b69EVifomyRYUzYSLWaIdM4cELEMjlgD4z7uD4ikxLXGfTWbKf6axl2jw3nnnArtLnr4avHnyX9fkQDgfEtI3HwQ-5erauKally5noR5nZDncMuJgIlyNmlDSE0K9rN8jfyxpOdLTLMrJg5JASN6gFp9ukE0GSRPIeOfW1bcDb0k_0DPNOxcNVpY4D3cmERC-hucTEqxzn1ZLxmsCZKri2R5VVOaiJhEKZ23f-sWBfQLtJavOpXa8miig8O2y8xy6V8NsVAcV7cbgKrLOxcjNmaBMLOOZj4sJNUpODI0I6o5MX8Uzxh8ExadnmYU8NwKPZqdB8f32s0lTBaRBxPykOw7tVwfZVt0zqzQ_-VUb2ZaUYDM9DjCEkJbjRPErjpoI9GyWG8ChXYHKFyilW_XvWVNapfDlJf8aATupSgtkkZdWEiEWtWOaFudO9K5W_mMJBi7C6l6aQsBSUUBdGSbJyG3SWdbzy3_cfiIA9VMboL2v5lPZeGVZKbHOOZzqKFpKAhmnC1ewaThwaVNGNE_xcZ3diclqDHfJMhTptG6cmsPXKcSi5XEwZP5Vs7985OS8MkiG3XnTDQztrm8rNz01kFhr1NlOn7Jqi6i-xSax5kYaH6cZZZ0HLBwJMVpm3EPb-Ci3sj5-aPDA3LxyS14MLRP9sgY8OKgvxgneMX5OrEvTje2w',
      };
      const resp: any = await postRegister(params);
      const error = resp.data.error;
      const respData = resp.data?.data;
      if (error) {
        stop();
        Message.error(error?.message ?? 'Something error!');
      } else {
        console.log('respData', respData);
        onSuccess(data);
      }
    } catch (err) {
      console.log('onSubmit-error :>> ', err.toString());
    } finally {
      stop();
    }
  };
  const onSuccess = (data) => {
    const cookies = new Cookies();
    const user = data.examUser;
    const accessToken = data.access_token;

    if (accessToken && typeof accessToken === 'string') {
      cookies.set(Config.AUTH_TOKEN_KEY, accessToken, {
        expires: moment().add(60, 'day').toDate(),
        path: '/',
      });
      reactLocalStorage.setObject(Config.USER_KEY, user);
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
    <SignUpPageWrapper>
      <div className="register-content">
        <div className="form-register-wrap">
          <div className="header-login-wrap">
            <div className="title-login">CREATE AN ACCOUNT</div>
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
                        <Col span={24}>
                          <Form.Item
                            name="username"
                            rules={[
                              { required: true, message: 'Please input your name!' },
                              {
                                pattern: PATTERN_VALIDATE.isBlank.value,
                                message: PATTERN_VALIDATE.isBlank.message,
                              },
                            ]}
                          >
                            <Input placeholder="Enter your name" />
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
                            <Input placeholder="Email (Account)" />
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
                              placeholder="Enter your password"
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
                                message: 'Please enter confirm your password!',
                              },
                              ({ getFieldValue }) => ({
                                validator(_, value) {
                                  if (!value || getFieldValue('password') === value) {
                                    return Promise.resolve();
                                  }
                                  return Promise.reject(new Error('Passwords do not match'));
                                },
                              }),
                            ]}
                          >
                            <InputPassword
                              key={'reg-confirmPassword'}
                              placeholder="Enter your confirm password"
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
                      <div className="action-wrap">
                        <Button
                          type="primary"
                          htmlType="submit"
                          className="btn-register"
                          loading={isLoading}
                        >
                          REGISTER
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
        </div>
      </div>
    </SignUpPageWrapper>
  );
};

export default SignUp;
