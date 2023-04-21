/* eslint-disable no-unused-vars */
import React, {useEffect, useState} from 'react';
import {useNavigate} from 'react-router';
import CustomTable from '../../../components/CustomTable';
import {useSelector} from 'react-redux';
import {Input, DatePicker, Button, Col, Row, Form, Select, Card} from 'antd';
import {includes} from 'ramda';
// import {saveOutletMaster, getStates, getSubZonal, getZonal, updateOutletMaster, getCity} from '../../../@app/master/masterSlice';
// import {map} from 'ramda';
// import {useLocation, useNavigate} from 'react-router';
// import dayjs from 'dayjs';
// import messageToast from '../../../components/messageToast/messageToast';
// import {transStatus} from '../../../util/transStatus';
// import { Input } from 'antd';
// import {getFormData, CREATE_TICKET_FORM_DATA} from './createTicket.constants';
 import favicon from '../../../asset/favicon.ico';

const {TextArea} = Input;

function Pccliamorlreport() {
  // const dispatch = useDispatch();
  const {Option} = Select;

  

  const navigate = useNavigate();

  const onClickAdd = () => {
    navigate('/pccliamorlreportForm');
  };

  const handleViewClick = (rowInfo) => {
    navigate('/pccliamorlreportForm', {
      state: rowInfo
    });
  };

  const handleOnChange = () => {
    // eslint-disable-next-line no-console
    console.log('onChange');
  };

  const onFinish = (values) => {
    let data = {
      zone: values.zone,
      subZone: values.subZone,
      outlet: values.outlet,
      serviceFor: values.serviceFor,
      assetGroup: values.assetGroup,
      ticketStatus: values.ticketStatus,
      waitingAt: values.waitingAt,
      assignedTo: values.assignedTo,
      fromDate: values['fromDate']?.format('YYYY-MM-DD'),
      toDate: values['toDate']?.format('YYYY-MM-DD')
    };
  };

  const {
    gettingOutletMaster,
    getOutletMasterResponse: {data: dataSource}
  } = useSelector((state) => {
    return state.master;
  });

  const onSelectChange = () => {
    // eslint-disable-next-line no-console
    console.log('change');
  };

  const dateFormat = ['DD/MM/YYYY', 'DD/MM/YY'];

  //   useEffect( () => {
  //     dispatch( getOutletMaster() );
  //     // eslint-disable-next-line react-hooks/exhaustive-deps
  //   }, [] );
  const data = [
    {
      'S.No': 1,
      Reqno: 'CM-RQ-23-03-01-001',
      expensedate: 'Pooja',
      Ticket_Number: 'CM-PP-11-22-001',
      fino:'1800000125',
      fipaymentno: '1600000182',
      Reqamount:'500',
      Approvedamount:'200',
      Status:'Approved'
    },
    {
      'S.No': 2,
      Reqno: 'CM-RQ-23-03-01-002',
      expensedate: 'Pooja',
      Ticket_Number: '-',
      fino:'-',
      fipaymentno: '-',
      Reqamount:'1500',
      Approvedamount:'-',
      Status:'Waiting @ AH Approval'
    },
    {
      'S.No': 3,
      Reqno: 'CM-RQ-23-03-01-003',
      expensedate: 'Pooja',
      Ticket_Number: '-',
      fino:'-',
      fipaymentno: '-',
      Reqamount:'800',
      Approvedamount:'-',
      Status:'Waiting @ BH Approval'
    },
    {
      'S.No': 4,
      Reqno: 'CM-RQ-23-03-01-004',
      expensedate: 'Pooja',
      Ticket_Number: '-',
      fino:'-',
      fipaymentno: '-',
      Reqamount:'500',
      Approvedamount:'-',
      Status:'Waiting @ Backoffice Approval'
    },
    {
      'S.No': 5,
      Reqno: 'CM-RQ-23-03-01-005',
      expensedate: 'Pooja',
      Ticket_Number: '-',
      fino:'-',
      fipaymentno: '-',
      Reqamount:'500',
      Approvedamount:'-',
      Status:'Waiting @ ARM Approval'
    },
   
  ];
  let column = [
    { key: '1', headerName: 'S.No', field: 'S.No', hide: false, width: 70 },
    { key: '2', headerName: 'Request Doc No	', field: 'Reqno', hide: false, width: 300 },
    { key: '3', headerName: 'Expense Type', field: 'expensedate', hide: false, width: 180 },
    { key: '4', headerName: 'Payment Doc No', field: 'Ticket_Number', hide: false, width: 180 },
    { key: '5', headerName: 'FI Exp Doc No', field: 'fino	', hide: false, width: 180 },
    { key: '6', headerName: 'FI Payment Doc No', field: 'fipaymentno', hide: false, width: 180 },
    { key: '7', headerName: 'Request Amount', field: 'Reqamount', hide: false, width: 180 },
    { key: '8', headerName: 'Approved Amount', field: 'Approvedamount', hide: false, width: 180 },
    { key: '9', headerName: 'Status', field: 'Status', hide: false, width: 300 },
    ];
  return (
    <div className='h-screen apphide appactionhide'>
      <Card>
        <Row>
          <Col span={24}>
            <Form
              name='basic'
              labelCol={{span: 24}}
              wrapperCol={{span: 24}}
              onValuesChange={onSelectChange}
              onFinish={onFinish}
              // onFinishFailed={onFinishFailed}
              autoComplete='off'
              // form={form}
            >
              <Row gutter={[15, 0]}>
              
                <Col md={{span: 6}} xs={{span: 24}}>
                  <Form.Item name='Zone' label='Zone'>
                   <Select >
                    <Option>select</Option>
                   </Select>
                  </Form.Item>
                </Col>
                <Col md={{span: 6}} xs={{span: 24}}>
                  <Form.Item name='Sub Zone' label='Sub Zone'>
                   <Select >
                    <Option>select</Option>
                   </Select>
                  </Form.Item>
                </Col>
                <Col md={{span: 6}} xs={{span: 24}}>
                  <Form.Item name='Outlet' label='Outlet'>
                   <Select >
                    <Option>select</Option>
                   </Select>
                  </Form.Item>
                </Col>
                <Col md={{span: 6}} xs={{span: 24}}>
                  <Form.Item name='Expense Type' label='Expense Type'>
                   <Select >
                    <Option>select</Option>
                   </Select>
                  </Form.Item>
                </Col>
                <Col md={{span: 6}} xs={{span: 24}}>
                  <Form.Item name='Waiting @' label='Waiting @'>
                   <Select >
                    <Option>select</Option>
                   </Select>
                  </Form.Item>
                </Col>
                <Col md={{span: 6}} xs={{span: 24}}>
                  <Form.Item name='From Date ' label='From Date '>
                    <Input placeholder='' type='date' name='From Date ' />
                  </Form.Item>
                </Col>
                <Col md={{span: 6}} xs={{span: 24}}>
                  <Form.Item name='To Date ' label='To Date '>
                    <Input placeholder='' type='date' name='To Date ' />
                  </Form.Item>
                </Col>
                <Col span={24}>
                  <Row gutter={[15, 15]} style={{justifyContent: 'end'}}>
                    <Col span={12} style={{textAlign: 'right'}} className='d-flex align-items-center justify-content-end mt-3'>
                      <Form.Item className='mx-2'>
                        <Button className='orangeFactory' type='primary' htmlType='submit'>
                          View
                        </Button>
                      </Form.Item>
                      </Col>
                      </Row>
                      </Col>
              {/*  */}

                {/* <Col md={{span: 6}} xs={{span: 24}}>
                  <Form.Item name='Cash in Hand' label='Cash in Hand'>
                  <Input placeholder='1000' name='Cash in Hand' />
                  </Form.Item>
                </Col>
               
               
              

              
                <Col md={{span: 6}} xs={{span: 24}}>
                  <Form.Item name='Yet to confirm by accounts ' label='Yet to confirm by accounts '>
                    <Input placeholder='3000' name='Yet to confirm by accounts ' />
                  </Form.Item>
                </Col> */}
               
              </Row>
            </Form>
          </Col>
        </Row>
      </Card>
      <CustomTable
        showHeader={false}
        showEdit={false}
        dataSource={data}
        column={column}
        // handleViewClick={handleViewClick}
        onClickAdd={onClickAdd}
        title={'Create List'}
      />
    </div>
  );
}

export default Pccliamorlreport;
