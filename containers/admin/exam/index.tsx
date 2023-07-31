import { CloseCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { useLoading } from '@hooks';
import { Button, Modal, Spin, Table } from 'antd';
import Column from 'antd/lib/table/Column';
import React, { useEffect, useState } from 'react';
import CreatedForm from './created-form';
import { PageWrapper } from './index.style';
import { putDeleteExam } from '@api';
import { Message } from '@utils';

const CMSExam: React.FC = () => {
  const [{ isLoading }, { start, stop }] = useLoading();
  const [dataList, setDataList] = useState<any[]>([]);
  const [showModal, setShowModal] = useState<boolean>(false);

  useEffect(() => {
    setDataList([
      {
        id: 1,
        name: 'Exam Nghe',
      },
      {
        id: 2,
        name: 'Exam Viết',
      },
      {
        id: 3,
        name: 'Exam Nói',
      },
      {
        id: 4,
        name: 'Exam Đọc',
      },
      {
        id: 5,
        name: 'Exam Nghe',
      },
    ]);
  }, []);

  const onDeleteRecord = async (record) => {
    start();
    try {
      const params = {
        ids: record.id,
      };

      const resp: any = await putDeleteExam(params);
      const error = resp.data.error;
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
    <PageWrapper>
      <div className="btn-action-box">
        <Button onClick={() => setShowModal(true)} className="btn-add">
          <PlusOutlined /> Add Exam
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
            <div onClick={() => onDeleteRecord(record)} className="cursor-pointer">
              <CloseCircleOutlined />
            </div>
          )}
        />
        <Column
          title="ID"
          key="id"
          className="column-id"
          render={(record) => <div>{record.id}</div>}
        />
        <Column
          title="Exam Name"
          key="name"
          dataIndex=""
          className="column-name"
          render={(record) => <div>{record.name}</div>}
        />
      </Table>
      <Modal
        width={755}
        bodyStyle={{ height: 'max-content' }}
        title={'Add Exam'}
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

export default CMSExam;
