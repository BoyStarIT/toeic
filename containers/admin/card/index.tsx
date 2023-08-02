import { CloseCircleOutlined, FormOutlined, UploadOutlined } from '@ant-design/icons';
import { useLoading } from '@hooks';
import { Button, Modal, Spin, Table, Upload, UploadProps, message } from 'antd';
import React, { useEffect, useState } from 'react';
import { PageWrapper } from './index.style';
import { getAdminListCard, postCardImport, putDeleteCard } from '@api';
import { ENDPOINTS } from '@constants';
import { Message } from '@utils';
import Column from 'antd/lib/table/Column';
import CreatedForm from './created-form';

const CMSCard: React.FC = () => {
  const [{ isLoading }, { start, stop }] = useLoading();

  const [dataList, setDataList] = useState<any[]>([]);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [showModalConfirm, setShowModalConfirm] = useState<boolean>(false);
  const [selectedRow, setSelectedRow] = useState<any>(undefined);

  const props: UploadProps = {
    name: 'file',
    type: 'select',
    action: 'https://funnyclass.cloud/upload?type=0',
    accept:
      '.csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel',
    headers: {
      ['Access-Control-Allow-Origin']: '*',
      ['Access-Control-Allow-Headers']: 'Origin, X-Requested-With, Content-Type, Accept',
    },
    showUploadList: false,
    onChange(info) {
      if (info.file.status !== 'uploading') {
        console.log('onChange', info.file, info.fileList);
      }
      if (info.file.status === 'done') {
        message.success(`${info.file.name} file uploaded successfully`);
        fetchImportCard(info.file.name);
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };

  const fetchImportCard = async (fileName) => {
    start();
    try {
      const params = {
        filePath: `/root/home/Exam_Online/data/${fileName}`,
      };
      const resp: any = await postCardImport(params);
      const error = resp.data.error;
      const respData = resp.data?.responseData;
      if (error) {
        stop();
        Message.error(error?.message ?? 'Something error!');
      } else {
        fetchListCard();
      }
    } catch (err) {
      console.log('onSubmit-error :>> ', err.toString());
    } finally {
      stop();
    }
  };
  const fetchListCard = async () => {
    start();
    try {
      const resp: any = await getAdminListCard();
      const error = resp.data.error;
      const respData = resp.data?.responseData;
      console.log('resp', resp);
      console.log('error', error);
      console.log('respData', respData);
      if (error) {
        stop();
        Message.error(error?.message ?? 'Something error!');
      } else {
        setDataList(respData?.cards);
      }
    } catch (err) {
      console.log('onSubmit-error :>> ', err.toString());
    } finally {
      stop();
    }
  };
  const onDeleteRecord = async (record) => {
    start();
    try {
      onCancelConfirm();
      const params = {
        ids: [record.id],
      };

      const resp: any = await putDeleteCard(params);
      const error = resp.data.error;
      if (error) {
        stop();
        Message.error(error?.message ?? 'Something error!');
      } else {
        Message.success('Successfully!');
        fetchListCard();
      }
    } catch (err) {
      console.log('onSubmit-error :>> ', err.toString());
    } finally {
      stop();
    }
  };
  console.log('dataList', dataList);

  const onClickDelete = (record) => {
    setShowModalConfirm(true);
    setSelectedRow(record);
  };

  const onClickEdit = (record) => {
    setShowModal(true);
    setSelectedRow(record);
  };

  const onCancelConfirm = () => {
    setShowModalConfirm(false);
    setSelectedRow(undefined);
  };

  const onCloseCreatedForm = () => {
    setShowModal(false);
    fetchListCard();
    setSelectedRow(undefined);
  };

  useEffect(() => {
    fetchListCard();
  }, []);

  return (
    <PageWrapper>
      <div className="cms-page-title">Manager Card</div>
      <div className="btn-action-box">
        <Upload {...props}>
          <Button icon={<UploadOutlined />}>Click to Upload</Button>
        </Upload>
      </div>
      <Table
        dataSource={dataList}
        pagination={false}
        rowKey={(record, index) => index}
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
          width="6rem"
          render={(record) => (
            <div className="cursor-pointer">
              <CloseCircleOutlined
                className="mr-3"
                alt="Delete"
                onClick={() => onClickDelete(record)}
              />
              <FormOutlined alt="Edit" onClick={() => onClickEdit(record)} />
            </div>
          )}
        />
        <Column
          title="No"
          key="stt"
          className="column-id"
          width="6rem"
          render={(value, record, index) => <div>{index}</div>}
        />
        <Column
          title="Question"
          key="question"
          dataIndex=""
          className="column-question"
          render={(record) => (
            <div>
              {record?.question?.sound ?? record?.question?.image ?? record?.question?.text}
            </div>
          )}
        />
        <Column
          title="Answer"
          key="answer"
          dataIndex=""
          className="column-answer"
          render={(record) => <div>{record?.answer?.texts?.[0]}</div>}
        />
      </Table>
      <Modal
        width={755}
        bodyStyle={{ height: 'max-content' }}
        title={selectedRow ? 'Edit Exam' : 'Add Exam'}
        maskClosable={false}
        visible={showModal}
        onCancel={onCloseCreatedForm}
        destroyOnClose
        footer={null}
        className="edit-profile-modal"
      >
        <CreatedForm formData={selectedRow} onClose={onCloseCreatedForm} />
      </Modal>
      <Modal
        width={755}
        bodyStyle={{ height: 'max-content' }}
        title={'Confirm Delete'}
        maskClosable={false}
        visible={showModalConfirm}
        onCancel={onCancelConfirm}
        onOk={() => onDeleteRecord(selectedRow)}
        destroyOnClose
        className="edit-profile-modal"
      >
        Are you sure?
      </Modal>
    </PageWrapper>
  );
};

export default CMSCard;
