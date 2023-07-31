import { PlusOutlined } from '@ant-design/icons';
import { useLoading } from '@hooks';
import { Button, Modal, Spin, Table } from 'antd';
import Column from 'antd/lib/table/Column';
import React, { useEffect, useState } from 'react';
import CreatedForm from './created-form';
import { PageWrapper } from './index.style';

const CMSUser: React.FC = () => {
  const [{ isLoading }, { start, stop }] = useLoading();
  const [dataList, setDataList] = useState<any[]>([]);
  const [showModal, setShowModal] = useState<boolean>(false);

  useEffect(() => {
    setDataList([
      {
        id: 1,
        email: 'no.reply8@gmail.com',
        password: 'abcd1234@',
        firstName: 'Tung',
        lastName: 'Duong1',
        phone: '+84900000008',
        role: 'User',
        dob: '10/12/2000',
        gender: 'Male',
      },
      {
        id: 2,
        email: 'no.reply8@gmail.com',
        password: 'abcd1234@',
        firstName: 'Tung',
        lastName: 'Duong2',
        phone: '+84900000008',
        role: 'User',
        dob: '10/12/2000',
        gender: 'Male',
      },
      {
        id: 3,
        email: 'no.reply8@gmail.com',
        password: 'abcd1234@',
        firstName: 'Tung',
        lastName: 'Duong3',
        phone: '+84900000008',
        role: 'User',
        dob: '10/12/2000',
        gender: 'Male',
      },
      {
        id: 4,
        email: 'no.reply8@gmail.com',
        password: 'abcd1234@',
        firstName: 'Tung',
        lastName: 'Duong4',
        phone: '+84900000008',
        role: 'User',
        dob: '10/12/2000',
        gender: 'Male',
      },
    ]);
  }, []);

  return (
    <PageWrapper>
      <div className="btn-action-box">
        <Button onClick={() => setShowModal(true)} className="btn-add">
          <PlusOutlined /> Add User
        </Button>
      </div>
      <Table
        // rowSelection={rowSelection}
        dataSource={dataList}
        pagination={false}
        rowKey={(obj) => obj.id}
        // onChange={onTableChange}
        // loading={isLoading}
        loading={{ indicator: <Spin />, spinning: isLoading }}
        // scroll={{
        //   y: !isEmpty(mediaList) && hasMore ? window.innerHeight - 280 : window.innerHeight - 240,
        // }}
      >
        <Column
          title="Action"
          key="action"
          dataIndex=""
          width="4rem"
          render={(record) => (
            // <CmsAction
            //   category={mediaType === MEDIA_TYPE.VIDEO ? CONTENT_TYPE.VIDEO : CONTENT_TYPE.AUDIO}
            //   id={record.id}
            //   status={record.status}
            // />
            // <div onClick={() => onDeleteUser(record)} className="cursor-pointer">
            //   <CloseCircleOutlined />
            // </div>
            <></>
          )}
        />
        <Column
          title="User Name"
          key="firstName"
          className="column-name"
          render={(record) => (
            <div>
              {record.firstName} {record.lastName}
            </div>
          )}
        />
        <Column
          title="Email"
          key="email"
          dataIndex=""
          className="column-email"
          render={(record) => <div>{record.email}</div>}
        />
        <Column
          title="Phone"
          key="phone"
          dataIndex=""
          className="column-image"
          width="4rem"
          render={(record) => <div>{record.phone}</div>}
        />
        <Column
          title="gender"
          key="gender"
          dataIndex=""
          className="column-image"
          width="2rem"
          render={(record) => <div>{record.gender}</div>}
        />
      </Table>
      <Modal
        width={755}
        bodyStyle={{ height: 'max-content' }}
        title={'Add User'}
        maskClosable={false}
        visible={showModal}
        onCancel={() => setShowModal(false)}
        destroyOnClose
        footer={null}
        className="edit-profile-modal"
      >
        <CreatedForm onClose={() => setShowModal(false)} />
      </Modal>
    </PageWrapper>
  );
};

export default CMSUser;
