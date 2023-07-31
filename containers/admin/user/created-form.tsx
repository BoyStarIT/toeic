import { postRegister } from '@api';
import { PATTERN_VALIDATE } from '@constants';
import { useLoading } from '@hooks';
import { Button } from '@ui';
import { InputPassword } from '@ui/Input/Input';
import { Message } from '@utils';
import { Col, Form, Input, Modal, Row, Select } from 'antd';
import { Option } from 'antd/lib/mentions';
import React, { useState } from 'react';
import { styled, theme } from '@styles/theme';
type CreatedFormProps = {
  onClose: () => void;
};
const CreatedForm = ({ onClose }: CreatedFormProps) => {
  const [form] = Form.useForm();

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
        // dob: '10/12/2000',
        gender: data.gender,
      };

      const resp: any = await postRegister(params);
      const error = resp.data.error;
      const respData = resp.data?.responseData;
      if (error) {
        stop();
        Message.error(error?.message ?? 'Something error!');
      } else {
        Message.success('Successfully!');
      }
    } catch (err) {
      console.log('onSubmit-error :>> ', err.toString());
    } finally {
      stop();
    }
  };

  return (
    <CreatedFromWrap>
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
                      name={'password'}
                      label="Password"
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
                  <Col span={24}>
                    <Form.Item name="gender" label="Gender">
                      <Select placeholder="Select a option and change input text above">
                        <Option value="male">Male</Option>
                        <Option value="female">Female</Option>
                        <Option value="other">Other</Option>
                      </Select>
                    </Form.Item>
                  </Col>
                </Row>
                <Row gutter={[8, 8]} justify="center" className="mt-5">
                  <Col xs={8}>
                    <Button
                      block
                      color="lightBlue"
                      className="btn-cancel btn-cancel-edit-profile btn-edit-talent-profile mr-3"
                      onClick={onClose}
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
                </Row>
              </>
            );
          }}
        </Form>
      </div>
    </CreatedFromWrap>
  );
};
export const CreatedFromWrap = styled.div`
  .ant-form-item {
    margin-bottom: 0;
  }
`;

export default CreatedForm;
