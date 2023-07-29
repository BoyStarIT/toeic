import React, { ReactNode } from 'react';
import { putResetPassword } from '@api';
import { PATTERN_VALIDATE, STEP_FORGOT_PASSWORD } from '@constants';
import { useLoading } from '@hooks';
import { Message } from '@utils';
import { Form } from 'antd';
import { StyledFormChangePassword } from './ForgotPassword.style';
import { InputPassword } from '@ui/Input/Input';
import { Button } from '@ui/Button';
import IconChecked from '@icons/IChecked.svg';
import { useBreakpoints } from '@contexts/breakpointsContext';

interface IFormChangePassword {
  email?: string;
  resetCode?: string;
  onSetStep?: (value) => void;
  children?: ReactNode | undefined;
}

const FormChangePassword: React.FC<IFormChangePassword> = (props) => {
  const { email, resetCode, onSetStep } = props;
  const { mobileMode, breakpoints, tabletDown } = useBreakpoints();

  const [form] = Form.useForm();
  const [{ isLoading }, { start, stop }] = useLoading();

  const onSubmit = async (data) => {
    start();
    try {
      const params = {
        resetCode: resetCode,
        email: email,
        password: data.password,
      };
      const resp: any = await putResetPassword(params);
      const error = resp.data.error;
      const respData = resp.data?.data;
      if (error) {
        stop();
        Message.error(error?.message ?? 'Something error!');
      } else {
        console.log('respData', respData);
        onSetStep(STEP_FORGOT_PASSWORD.success);
      }
      console.log('params', params);
    } catch (err) {
      stop();
      console.log('onSubmit-error :>> ', err.toString());
    } finally {
      onSetStep(STEP_FORGOT_PASSWORD.success);
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
    <StyledFormChangePassword>
      <div className="header-login-wrap">
        <div className="title-login">Reset Password</div>
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
            {(values, formInstance) => {
              const isValidateCharacterPass =
                formInstance.getFieldError('password')?.length === 0 &&
                values?.password?.length > 0;
              return (
                <>
                  <Form.Item
                    label="New Password"
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
                  <Form.Item
                    label="Confirm Password"
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
                          return Promise.reject(new Error('Passwords do not match'));
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
                      className="btn-signin"
                      loading={isLoading}
                    >
                      Submit
                    </Button>
                  </div>
                </>
              );
            }}
          </Form>
        </div>
      </div>
    </StyledFormChangePassword>
  );
};

export default FormChangePassword;
