import { useLoading } from '@hooks';
import { Button, Col, Form, Input, Row } from 'antd';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { UserPageWrapper } from './index.style';
import { PATTERN_VALIDATE } from '@constants';
import { Message, reactLocalStorage } from '@utils';
import Config from '@root/config';
import { postRegister } from '@api';

const UserPage: React.FC = () => {
  const [form] = Form.useForm();
  const router = useRouter();
  const UserData = reactLocalStorage.getObject(Config.USER_KEY);
  const [{ isLoading }, { start, stop }] = useLoading();
  const onSubmit = async (data) => {
    start();
    try {
      const params = {
        email: data.email,
        password: data.password,
        firstName: data.username,
        lastName: data.username,
        // address: 'Da Ton, Gia Lam, Ha Noi',
        phone: data.phone,
        role: 'User',
        dob: '10/12/2000',
        gender: data.gender,
      };

      const resp: any = await postRegister(params);
      const error = resp.data.error;
      const respData = resp.data?.responseData;
      if (error) {
        stop();
        Message.error(error?.message ?? 'Something error!');
      } else {
        console.log('respData', respData);
      }
    } catch (err) {
      console.log('onSubmit-error :>> ', err.toString());
    } finally {
      stop();
    }
  };
  useEffect(() => {
    form.setFieldsValue({
      email: UserData.username,
      username: UserData.displayName,
      dob: UserData.dob,
      phone: UserData.phone,
    });

    return () => {
      form.setFieldsValue({});
    };
  }, []);

  return (
    <UserPageWrapper className="container">
      <div className="css-wzp03g">
        <p className="css-1aw1ced">Profile</p>
        <div className="css-uf7y5q">
          <div className="css-uc4fey">
            <div className="css-0">
              <span className="jss5">
                <svg
                  className="css-16uqvxn"
                  focusable="false"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  data-testid="AccountCircleIcon"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
                </svg>
              </span>
              <p className="css-c9z8ga">quangdn</p>
            </div>
            <div className=" css-p6esn3">
              <div className="user-account-info">
                <b>Account: </b>quangdn@gmail.com
                <button
                  className="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeSmall css-1j7qk7u"
                  tabIndex={0}
                  type="button"
                  aria-label="Copy account to clipboard"
                >
                  <svg
                    className="MuiSvgIcon-root MuiSvgIcon-fontSizeSmall css-1k33q06"
                    focusable="false"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    data-testid="ContentCopyIcon"
                  >
                    <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z" />
                  </svg>
                  <span className="MuiTouchRipple-root css-w0pj6f" />
                </button>
              </div>
              <Form
                form={form}
                name="register"
                layout={'vertical'}
                onFinish={onSubmit}
                autoComplete="off"
                requiredMark={false}
              >
                {(values, formInstance) => {
                  return (
                    <>
                      <Row gutter={[8, 8]}>
                        <Col span={24}>
                          <Form.Item
                            name="username"
                            label="User Name"
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
                            label="Email"
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
                            name={'dob'}
                            label="Date of Birth"
                            rules={[
                              {
                                required: true,
                                message: 'Please input your password!',
                              },
                            ]}
                          >
                            <Input placeholder="Enter your password" />
                          </Form.Item>
                        </Col>
                        <Col span={24}>
                          <Form.Item
                            name="phone"
                            label="Phone"
                            rules={[
                              {
                                required: true,
                                message: 'Please input your phone number!',
                              },
                              {
                                pattern: PATTERN_VALIDATE.phone.value,
                                message: PATTERN_VALIDATE.phone.message,
                              },
                            ]}
                          >
                            <Input placeholder="Phone" />
                          </Form.Item>
                        </Col>
                      </Row>
                    </>
                  );
                }}
              </Form>
              {/* <Row gutter={[8, 8]} justify="center" className="mt-5">
                <Col xs={8}>
                  <Button
                    block
                    color="lightBlue"
                    className="btn-cancel btn-cancel-edit-profile btn-edit-talent-profile mr-3"
                  >
                    {'Cancel'}
                  </Button>
                </Col>
                <Col span={8}>
                  <Button
                    htmlType="submit"
                    className="btn-loading btn-edit-talent-profile"
                    loading={isLoading}
                  >
                    Save
                  </Button>
                </Col>
              </Row> */}
              <button className="css-1o9npbs" tabIndex={0} type="button">
                Change Password
                <span className="MuiTouchRipple-root css-w0pj6f" />
              </button>
              <button className=" css-1g93nl3" tabIndex={0} type="submit">
                Update
                <span className="MuiTouchRipple-root css-w0pj6f" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </UserPageWrapper>
  );
};

export default UserPage;
