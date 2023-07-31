import { UploadOutlined } from '@ant-design/icons';
import { useLoading } from '@hooks';
import { Button, Upload, UploadProps, message } from 'antd';
import React from 'react';
import { PageWrapper } from './index.style';
import { postCardImport } from '@api';

const CMSCard: React.FC = () => {
  const [{ isLoading }, { start, stop }] = useLoading();

  const props: UploadProps = {
    name: 'file',
    type: 'select',
    accept:
      '.csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel',
    headers: {
      authorization: 'authorization-text',
    },
    showUploadList: false,
    onChange(info) {
      if (info.file.status !== 'uploading') {
        console.log('onChange', info.file, info.fileList);
      }
      if (info.file.status === 'done') {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };

  // const fetchImportCard = async () => {
  //   start();
  //   try {
  //     const params = {
  //       filePath: 'C:/Users/ADMIN/Downloads/test-exam.xlsx',
  //     };
  //     const resp: any = await postCardImport(params);
  //     const error = resp.data.error;
  //     const respData = resp.data?.responseData;
  //     if (error) {
  //       stop();
  //       Message.error(error?.message ?? 'Something error!');
  //     } else {
  //       setDataList(respData.exams);
  //     }
  //   } catch (err) {
  //     console.log('onSubmit-error :>> ', err.toString());
  //   } finally {
  //     stop();
  //   }
  // };

  // useEffect(() => {
  //   fetchDataList();
  // }, []);

  return (
    <PageWrapper>
      <div className="cms-page-title">Manager Card</div>
      <div className="btn-action-box">
        <Upload {...props}>
          <Button icon={<UploadOutlined />}>Click to Upload</Button>
        </Upload>
      </div>
      {/* <Table
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
          title="ID"
          key="id"
          className="column-id"
          width="6rem"
          render={(record) => <div>{record.id}</div>}
        />
        <Column
          title="Exam Name"
          key="name"
          dataIndex=""
          className="column-name"
          render={(record) => <div>{record.name}</div>}
        />
      </Table> */}
    </PageWrapper>
  );
};

export default CMSCard;
