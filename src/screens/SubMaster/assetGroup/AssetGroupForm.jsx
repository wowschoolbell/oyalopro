import React, {useEffect, useState} from 'react';
import {Card, Button, Col, Row, Form, Input, Radio} from 'antd';
import {useLocation, useNavigate} from 'react-router';
import {useDispatch, useSelector} from 'react-redux';
import {Select} from 'antd';
import {getServiceFor, saveAssetGroup, updateAssetGroup} from '../../../@app/service/serviceSlice';
import {map} from 'ramda';
import messageToast from '../../../components/messageToast/messageToast';
import ConfirmOnExit from '../../../components/confirmOnExit/ConfirmOnExit';
import {transStatus} from '../../../util/transStatus';


function AssetGroupForm() {
  const [form] = Form.useForm();
  const [showDialog, setShowDialog] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {Option} = Select;

  const {
    state: {data: defaultValue, isEdit = false}
  } = useLocation();

  const [status, setStatus] = useState(defaultValue?.status ?? 1);

  const {
    getServiceForResponse: {data: dataSource}
  } = useSelector((state) => {
    return state.service;
  });

  useEffect(() => {
    dispatch(getServiceFor());
  }, []);

  const {savingEmployeeLevel} = useSelector((state) => {
    return state.subMaster;
  });

  const onFinish = (data) => {
    setShowDialog(false);
    dispatch(defaultValue?.id ? updateAssetGroup({data: {...data, status: transStatus({status}), id: defaultValue.id}}) : saveAssetGroup({data, status: transStatus({status})}))
    .then(({message, status, statusText}) => {
      if(status == 200){
        form.resetFields();
        navigate('/assetGroup');
      }
      messageToast({message: message ?? statusText, status, title: 'Asset group Master'});
    });
  };

  const handleClickBack = () => {
    navigate('/assetGroup');
  };

  return (
    <>
      <Card>
        <ConfirmOnExit showModel={showDialog} />
        <Row style={{justifyContent: 'center'}}>
          <Col span={24}>
            <Form
              name='basic'
              labelCol={{span: 24}}
              wrapperCol={{span: 24}}
              initialValues={{
                ...defaultValue,
                name:defaultValue?.name
              }}
              onFinish={onFinish}
              onFieldsChange={() => setShowDialog(true)}
              form={form}
              autoComplete='off'>
              <Row gutter={[15, 0]}>
                <Col md={{span: 6}} xs={{span: 24}}>
                  <Form.Item name='servicefor_id' label='Service For' rules={[{required: true, message: 'Please Select Service For'}]}>
                    <Select showSearch filterOption={(input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}>
                      {map(
                        (data) => {
                          return (
                            <Option key={data.id} value={data.id}>
                              {data.name}
                            </Option>
                          );
                        },
                        dataSource ? dataSource : []
                      )}
                    </Select>
                  </Form.Item>
                </Col>

                <Col span={6}>
                  <Form.Item
                    name='name'
                    label='Asset Group'
                    rules={[
                      {required: true, message: 'Please add Asset Group'},
                      {
                        pattern: /^[a-zA-Z0-9' '  ]*$/,
                        message: 'Invalid value'
                      }
                    ]}>
                    <Col span={24}>
                      <Input defaultValue={defaultValue?.name} placeholder='Asset Group' disabled={savingEmployeeLevel} />
                    </Col>
                  </Form.Item>
                </Col>
                <Col span={24}>
                  <Form.Item name='status' label='Status ' rules={[{required: true, message: 'Please slect your status'}]}>
                    <Col span={24}>
                      <Radio.Group
                        buttonStyle='solid'
                        onChange={(e) => {
                          setStatus(e?.target?.value);
                        }}
                        size='small'
                        defaultValue={defaultValue?.status === 'In Active' ? 0 : 1}>
                        <Radio.Button className='active' value={1}>
                          Active
                        </Radio.Button>
                        <Radio.Button className='in-active' value={0}>
                          In-Active
                        </Radio.Button>
                      </Radio.Group>
                    </Col>
                  </Form.Item>
                </Col>
                <Col span={24}>
                  <Row gutter={[15, 15]} style={{justifyContent: 'end'}}>
                    <Col span={12} style={{textAlign: 'right'}} className='d-flex align-items-center justify-content-end mt-3'>
                      <Form.Item className='mx-2'>
                        <Button className='orangeFactory' type='primary' htmlType='submit' disabled={savingEmployeeLevel} loading={savingEmployeeLevel}>
                          {isEdit ? 'Update' : 'Add'}
                        </Button>
                      </Form.Item>

                      <Form.Item>
                        <Button onClick={handleClickBack} disabled={savingEmployeeLevel}>
                          Back
                        </Button>
                      </Form.Item>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>
      </Card>
    </>
  );
}

export default AssetGroupForm;
