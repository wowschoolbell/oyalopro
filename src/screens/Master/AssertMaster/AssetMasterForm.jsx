/* eslint-disable no-unused-vars */
import React, {useEffect, useState} from 'react';
import {MinusCircleOutlined, PlusOutlined} from '@ant-design/icons';
import {Input, Card, Select, Button, Radio, Col, Row, Form, Space, DatePicker} from 'antd';
import {useLocation, useNavigate} from 'react-router';
import {useDispatch, useSelector} from 'react-redux';
import {transStatus} from '../../../util/transStatus';
import {addAuditSubCategory, getAuditCategory, getOutletMaster, updateAuditSubCategory} from '../../../@app/master/masterSlice';
import {map} from 'ramda';
import {getAssetGroup, getAssetMaster, saveAssetMaster, updateAssetMaster, getAssetGroupSpare} from '../../../@app/service/serviceSlice';
import dayjs from 'dayjs';
import ConfirmOnExit from '../../../components/confirmOnExit/ConfirmOnExit';
import messageToast from '../../../components/messageToast/messageToast';

const {Option} = Select;

function AssetMasterForm() {
  const {
    state: {data: defaultValue = {}}
  } = useLocation();

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [form] = Form.useForm();

  const [showDialog, setShowDialog] = useState(false);
  const [selectedOutlet, setSelectedOutlet] = useState();
  const [status, setStatus] = useState(defaultValue?.status ?? 1);

  const assetGroup = Form.useWatch('asset_group', form);

  const {
    gettingAssetGroup,
    savingAssetMaster,
    getAssetGroupResponse: {data: assetGroups},
    getAssetGroupSpareResponse: {data: assetSpares}
  } = useSelector((state) => {
    return state.service;
  });

  const {
    getOutletMasterResponse: {data: outletData}
  } = useSelector((state) => {
    return state.master;
  });

  const outletList = outletData?.map((o) => ({
    ...o,
    outlet_code: `${o?.outlet_code} - ${o?.name}`
  }));

  useEffect(() => {
    dispatch(getAssetGroup());
    dispatch(getOutletMaster());
    dispatch(getAssetGroupSpare())
  }, [dispatch]);

  const handleClickBack = () => {
    navigate('/outletAssetGroupMapping');
  };
  const dateFormat = ['DD/MM/YYYY', 'DD/MM/YY'];
  const onFinish = (data) => {
    setShowDialog(false);
    const outletCode = defaultValue?.id ? defaultValue.outlet_code : (outletData ?? []).find((outletData) => outletData?.id === selectedOutlet)?.outlet_code;
    const asset_warranty_end_date = data['asset_warranty_end_date']?.format('YYYY-MM-DD');
    const spares_list = (data.spares_list ?? []).map((spares_list) => {
      return {...spares_list, spare_warranty_end_date: spares_list.spare_warranty_end_date?.format('YYYY-MM-DD')};
    });
    dispatch(
      defaultValue?.id
        ? updateAssetMaster({
            data: {
              ...data,
              outlet_code: outletCode,
              asset_warranty_end_date,
              spares_list,
              asset_group: defaultValue?.asset_group_id,
              outlet_name: defaultValue?.outlet_id,
              id: defaultValue.id,
              status: transStatus({status}),
            }
          })
        : saveAssetMaster({data: {...data, outlet_code: outletCode, asset_warranty_end_date, spares_list,status: transStatus({status}),}})
    ).then(({message, status, statusText}) => {
      if (status === 200) {
        form.resetFields();
        navigate('/outletAssetGroupMapping');
        messageToast({message: message ?? statusText, status, title: 'Outlet Asset Group Mapping'});
      }
    });
  };

  return (
    <>
      <Card>
        <ConfirmOnExit showModel={showDialog} />
        <Row style={{justifyContent: 'center'}}>
          <Col span={24}>
            <Form
              name='basic'
              onFieldsChange={() => setShowDialog(true)}
              labelCol={{span: 24}}
              form={form}
              disabled={savingAssetMaster}
              wrapperCol={{span: 24}}
              initialValues={{
                ...defaultValue,
                asset_warranty_end_date: defaultValue && dayjs(defaultValue?.asset_warranty_end_date),
                spares_list: (defaultValue?.spares_list ?? []).map((list) => {
                  return {...list, spare_warranty_end_date: dayjs(list?.spare_warranty_end_date)};
                })
              }}
              onFinish={onFinish}
              autoComplete='off'>
              <Row gutter={[25, 0]}>
                <Col md={{span: 4}} xs={{span: 16}}>
                  <Form.Item name='outlet_name' label='Outlet name' rules={[{required: true, message: 'Please select Outlet Code'}]} disabled={savingAssetMaster}>
                    <Select
                      // defaultValue={state?.outlet_id}
                      placeholder='select Outlet Name'
                      // eslint-disable-next-line no-console
                      onSelect={(e) => setSelectedOutlet(e)}
                      showSearch
                      filterOption={(input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}>
                      {map(
                        (outlet) => {
                          return (
                            <Option key={outlet?.id} value={outlet?.id}>
                              {outlet?.outlet_code}
                            </Option>
                          );
                        },
                        outletList ? outletList : []
                      )}
                    </Select>
                  </Form.Item>
                </Col>

                <Col md={{span: 6}} xs={{span: 24}} lg={4}>
                  <Form.Item name='asset_group' label='Asset Group '
                   rules={[{required: true, message: 'Please select Asset Group'}]} 
                   disabled={savingAssetMaster}>
                    <Select
                      placeholder='select Asset Group'
                      disabled={gettingAssetGroup}
                      showSearch
                      filterOption={(input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}>
                      {map(
                        (assetGroup) => {
                          return (
                            <Option key={assetGroup.id} value={assetGroup.id}>
                              {assetGroup.name}
                            </Option>
                          );
                        },
                        assetGroups ? assetGroups : []
                      )}
                    </Select>
                  </Form.Item>
                </Col>

                <Col md={{span: 4}} xs={{span: 16}}>
                  <Form.Item name='asset_no_sap' label='Asset No in SAP' rules={[{required: true, message: 'Please add Asset No in SAP'}]}>
                    <Input name='asset_no_sap' placeholder='Asset No in SAP' />
                  </Form.Item>
                </Col>
                <Col md={{span: 4}} xs={{span: 16}}>
                  <Form.Item name='asset_name_sap' label='Asset Name in SAP' rules={[{required: true, message: 'Please add Asset Name in SAPe'}]}>
                    <Input name='asset_name_sap' placeholder='Asset Name in SAP' />
                  </Form.Item>
                </Col>
                <Col md={{span: 4}} xs={{span: 16}}>
                  <Form.Item name='asset_warranty_end_date' label='Asset warranty end date ' rules={[{required: true, message: 'Please add Asset warranty end date '}]}>
                    {/* <Input name='name' placeholder='Asset warranty end date' /> */}
                    <DatePicker name='asset_warranty_end_date' format={dateFormat} onChange={(e) => e?.format('YYYY-MM-DD')} placeholder='dd/mm/yyyy' style={{width: '100%'}} />
                  </Form.Item>
                </Col>
                <Col md={{span: 4}} xs={{span: 16}}>
                <Form.Item name='ag_amc' label='AG AMC'
                   rules={[{required: true, message: 'Please select AG AMC'}]} >
                  <Select
                      placeholder='select AG AMC'
                      onSelect={(e) => setSelectedOutlet(e)}
                      showSearch
                      filterOption={(input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}>
                            <Option key="1" value="yes">
                             Yes
                            </Option>
                            <Option key="0" value="no">
                             No
                            </Option>
                    </Select>
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

                {/* ///////// */}
                <Col span={24}>
                  <Row gutter={[15, 15]}>
                    <Col md={{span: 6}} xs={{span: 24}} lg={8}>
                      <Form.Item name='spares_list' label='Add Asset Spares'>
                        <Form.List
                          name='spares_list'
                          rules={[
                            {
                              validator: async (_, names) => {
                                if (!names || names.length < 1) {
                                  return Promise.reject(new Error('At least add 1 spares'));
                                }
                              }
                            }
                          ]}>
                          {(fields, {add, remove}, {errors}) => (
                            <div>
                              {fields.map((field, name, ...restField) => {
                                return (
                                  <Space
                                    key={field.id}
                                    style={{
                                      display: 'flex',
                                      // marginBottom: 8,
                                      justifyContent: 'space-between',
                                      alignItems: 'baseline'
                                    }}>
                                    <Form.Item
                                      {...field}
                                      name={[field.name, 'spare']}
                                      validateTrigger={['onChange', 'onBlur']}
                                      rules={[
                                        {
                                          required: true,
                                          whitespace: true,
                                          message: 'Please input Asset Spare or delete this field.'
                                        }
                                      ]}>
                                     <Select 
                                      placeholder='Select Spare'
                               // loading={gettingState}
                          showSearch
                          filterOption={(input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}>
                          {map(
                            (assetSpare) => {
                              if (assetSpare.asset_group_id == assetGroup) {
                                // assetSpare.assetspares.map(
                                //   (data) => {
                                //     console.log("spare list",data)
                                    
                                //   }
                                // )
                                return (
                                  <Option key={assetSpare?.asset_group_id} value={assetSpare?.asset_group_id}>
                                    {assetSpare?.asset_group_id}
                                  </Option>
                                  
                                );
                            }
                            }, assetSpares ? assetSpares : []
                            )}
                        </Select>
                                    </Form.Item>
                                    {/* const xxxx = data['spare_warranty_end_date']?.format('YYYY-MM-DD'); */}
                                    <Form.Item
                                      align='baseline'
                                      noStyle
                                      shouldUpdate={(prevValues, curValues) => prevValues.area !== curValues.area || prevValues.sights !== curValues.sights}>
                                      {() => (
                                        <Form.Item
                                          {...field}
                                          name={[field.name, 'spare_warranty_end_date']}
                                          rules={[
                                            {
                                              required: true,
                                              message: 'Missing spare warranty end date'
                                            }
                                          ]}>
                                          {/* <Input /> */}
                                          <DatePicker
                                            name='asset_warranty_end_date'
                                            format={dateFormat}
                                            onChange={(e) => e?.format('YYYY-MM-DD')}
                                            placeholder='dd/mm/yyyy'
                                            style={{width: '100%'}}
                                          />
                                        </Form.Item>
                                      )}
                                    </Form.Item>

                                    <MinusCircleOutlined onClick={() => remove(field.name)} />
                                  </Space>
                                );
                              })}
                              <Form.Item>
                                <Button
                                  type='dashed'
                                  onClick={() => add()}
                                  style={{width: '40%', paddingLeft: '5px', backgroundColor: 'green', color: 'white'}}
                                  icon={<PlusOutlined style={{}} />}>
                                  Add field
                                </Button>

                                <Form.ErrorList errors={errors} />
                              </Form.Item>
                            </div>
                          )}
                        </Form.List>
                      </Form.Item>
                    </Col>
                  </Row>
                </Col>
                <Col span={24}>
                  <Row gutter={[15, 15]} style={{justifyContent: 'end'}}>
                    <Col span={12} className='d-flex justify-content-end align-items-center'>
                      <Form.Item className='mx-2'>
                        <Button className='orangeFactory' type='primary' htmlType='submit' loading={savingAssetMaster} disabled={savingAssetMaster}>
                          Submit
                        </Button>
                      </Form.Item>

                      <Form.Item>
                        <Button disabled={savingAssetMaster} onClick={handleClickBack}>
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

export default AssetMasterForm;
