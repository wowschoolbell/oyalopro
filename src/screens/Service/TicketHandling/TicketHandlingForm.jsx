/* eslint-disable no-unused-vars */
import React, {memo, useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Input, Card, DatePicker, Button, Col, Row, Form, Select} from 'antd';
import {saveOutletMaster, getStates, getSubZonal, getZonal, updateOutletMaster, getCity} from '../../../@app/master/masterSlice';
// import {map} from 'ramda';
import {useLocation, useNavigate} from 'react-router';
// import dayjs from 'dayjs';
import messageToast from '../../../components/messageToast/messageToast';
import {transStatus} from '../../../util/transStatus';
// import { Input } from 'antd';
// import {CREATE_TICKET_FORM_DATA} from './createTicket.constants';
import {includes} from 'ramda';
import TicketHandling from '.';
import TicketHandlingDropDowns from './TicketHandlingOpen';
import TicketHandlingAssign from './TicketHandlingAssign';
import TicketHandlingOpen from './TicketHandlingOpen';
const {TextArea} = Input;

const {Option} = Select;

function TicketHandlingForm() {
  const {state} = useLocation();
  // const handleClickBack = () => {
  //   navigate('/createTicket');
  // };
  const dispatch = useDispatch();
  // const {
  //   saveOutletMasterRequest,
  //   getStatesResponse: {data: states},
  //   gettingState,
  //   getCityResponse: {data: cities},
  //   gettingCity,
  //   getZonalResponse: {data: Zonals},
  //   gettingZonal,
  //   getSubZonalResponse: {data: SubZonals},
  //   gettingSubZonal,
  //   savingCity
  // } = useSelector((state) => {
  //   return state.master;
  // });
  const navigate = useNavigate();

  // const { state } = useLocation();

  // let defaultValue = state?.data;

  const [form] = Form.useForm();

  // const stateID = Form.useWatch('stateID', form);
  // const zoneID = Form.useWatch('zoneID', form);
  // const subzoneID = Form.useWatch('subzoneID', form);
  // const priority = Form.useWatch('priority', form);
  // const serviceFor = Form.useWatch('serviceFor', form);

  // const onFinish = (values) => {
  //   let data = {
  //     state: values.stateID,
  //     city: values.city_name,
  //     zone: values.zoneID,
  //     subzone: values.subzoneID,
  //     oulet_Code: values.oulet_Code,
  //     name: values.name,
  //     zomoato_status: values.zomoato_status,
  //     zomoatoID: values.zomoatoID,
  //     zomoato_date: values['zomoato_date']?.format('YYYY-MM-DD'),
  //     swiggy_status: values.swiggy_status,
  //     swiggyID: values.swiggyID,
  //     swiggy_date: values['swiggy_date']?.format('YYYY-MM-DD'),
  //     dotpe_status: values.dotpe_status,
  //     dotpeID: values.dotpeID,
  //     dotpe_date: values.dotpe_date?.format('YYYY-MM-DD'),
  //     email: values.email,
  //     latitude: values.latitude,
  //     longitude: values.longitude,
  //     address: values.address,
  //     order_placing_no: values.order_placing_no,
  //     orl_cug_no: values.orl_cug_no,
  //     contact: values.contact,
  //     open_time: values.open_time?.format('HH:mm:ss'),
  //     close_time: values.close_time?.format('HH:mm:ss'),
  //     opening_date: values.opening_date?.format('YYYY-MM-DD'),
  //     profit_center: values.profit_center,
  //     cost_center: values.cost_center,
  //     labour_license_no: values.labour_license_no,
  //     fire_license_no: values.fire_license_no,
  //     fire_extinguisher_license_no: values.fire_extinguisher_license_no,
  //     fssai_license_no: values.fssai_license_no,
  //     status: values.status === 'active' ? 1 : 0
  //   };

  //   dispatch(defaultValue?.id ? updateOutletMaster({ data: { ...data, id: defaultValue.id, status: transStatus({ status: data?.status }) } }) : saveOutletMaster({ data })).then((data) => {
  //     const { status, message } = data;
  //     if (status === 200) {
  //       messageToast({ message: data?.statusText, status: status, title: 'Outlet Master' });
  //       form.resetFields();
  //     }
  //     if (data?.exception) {
  //       messageToast({ message: 'Invalid Request', status: 400, title: 'Outlet Master' });
  //     }
  //     if (status === 400) {
  //       if ((message && message?.contact?.length > 0) || (message && message.email?.length > 0) || (message && message.name?.length > 0)) {
  //         if (message && message.contact) {
  //           messageToast({ message: message?.contact[0], status: status, title: 'Outlet Master' });
  //         } else if (message && message.email) {
  //           messageToast({ message: message?.email[0], status: status, title: 'Outlet Master' });
  //         } else if (message && message.name) {
  //           messageToast({ message: message?.name[0], status: status, title: 'Outlet Master' });
  //         }
  //         if (message) {
  //           messageToast({ message: message, status: status, title: 'Employee Master' });
  //         }
  //       }
  //     }
  //     if (status === 200) {
  //       messageToast({ message: message, status: status, title: 'Outlet Master' });
  //     }
  //     if (defaultValue?.id) {
  //       navigate('/createTicket');
  //     }
  //   });
  // };

  // useEffect(() => {
  //   dispatch(getStates());
  // }, [dispatch]);

  // useEffect(() => {
  //   dispatch(getZonal(stateID));
  // }, [dispatch, stateID]);

  // useEffect(() => {
  //   dispatch(getSubZonal(zoneID));
  // }, [dispatch, zoneID]);

  // useEffect(() => {
  //   dispatch(getCity(subzoneID));
  // }, [dispatch, subzoneID]);

  // // const [zomatoStatus, setZomatoStatus] = useState(defaultValue?.zomoato_status ?? false);
  // // const [swiggyStatus, setSwiggyStatus] = useState(defaultValue?.swiggy_status ?? false);
  // // const [dotpeStatus, setDotpeStaus] = useState(defaultValue?.dotpe_status ?? false);

  // const handleOnChange = (e) => {
  //   if (e.target.name === 'zomoato_status') {
  //     if (e.target.value === 0) {
  //       setZomatoStatus(false);
  //     } else {
  //       setZomatoStatus(true);
  //     }
  //   }
  //   if (e.target.name === 'swiggy_status') {
  //     if (e.target.value === 0) {
  //       setSwiggyStatus(false);
  //     } else {
  //       setSwiggyStatus(true);
  //     }
  //   }

  //   if (e.target.name === 'dotpe_status') {
  //     if (e.target.value === 0) {
  //       setDotpeStaus(false);
  //     } else {
  //       setDotpeStaus(true);
  //     }
  //   }
  //   if (
  //     e.target.name === 'latitude' ||
  //     e.target.name === 'longitude' ||
  //     e.target.name === 'orl_cug_no' ||
  //     e.target.name === 'contact' ||
  //     e.target.name === 'order_placing_no' ||
  //     e.target.name === 'oulet_Code'
  //   ) {
  //     return form.setFieldsValue({
  //       [e.target.name]: e.target.value.replace(/[^0-9 ./]/g, '')
  //     });
  //   }
  //   return form.setFieldsValue({
  //     [e.target.name]: e.target.value
  //   });
  // };

  // const onFinishFailed = (errorInfo) => {
  //   console.log('Failed:', errorInfo);
  // };
  // const dateFormat = ['DD/MM/YYYY', 'DD/MM/YY'];

  return (
    <>
      <Card>
        <Row>
          <Col span={24}>
            <Form
              name='basic'
              labelCol={{span: 24}}
              wrapperCol={{span: 24}}
              // onFinish={onFinish}
              // onFinishFailed={onFinishFailed}
              autoComplete='off'
              form={form}>
              <Row gutter={[15, 0]}>
                <Col md={{span: 6}} xs={{span: 24}}>
                  <Form.Item name='ticketNo' label='Ticket No'>
                    <Input placeholder='' name='ticketNo' defaultValue={'ticket'} />
                  </Form.Item>
                </Col>
                <Col md={{span: 6}} xs={{span: 24}}>
                  <Form.Item name='ticketDescription' label='Ticket Description'>
                    <Input placeholder='' name='ticketDescription' />
                  </Form.Item>
                </Col>
                <Col md={{span: 6}} xs={{span: 24}}>
                  <Form.Item name='outletName' label='Outlet Name'>
                    <Input placeholder='' name='outletName' />
                  </Form.Item>
                </Col>
                <Col md={{span: 6}} xs={{span: 24}}>
                  <Form.Item name='serviceFor' label='Service For'>
                    <Input placeholder='' name='serviceFor' />
                  </Form.Item>
                </Col>
                <Col md={{span: 6}} xs={{span: 24}}>
                  <Form.Item name='assetGroup' label='Asset Group'>
                    <Input placeholder='' name='assetGroup' />
                  </Form.Item>
                </Col>
                <Col md={{span: 6}} xs={{span: 24}}>
                  <Form.Item name='asset' label='Asset'>
                    <Input placeholder='' name='asset' />
                  </Form.Item>
                </Col>
                <Col md={{span: 6}} xs={{span: 24}}>
                  <Form.Item name='waitingAt' label='Waiting At'>
                    <Input placeholder='' name='waitingAt' />
                  </Form.Item>
                </Col>
                <Col md={{span: 6}} xs={{span: 24}}>
                  <Form.Item name='orlName' label='ORL Name'>
                    <Input placeholder='' name='orlName' />
                  </Form.Item>
                </Col>
                <Col md={{span: 6}} xs={{span: 24}}>
                  <Form.Item name='ticketDescription' label='Ticket Description'>
                    <Input placeholder='' name='ticketDescription' />
                  </Form.Item>
                </Col>
                <Col md={{span: 6}} xs={{span: 24}}>
                  <Form.Item name='orlNumber' label='ORLNumber'>
                    <Input placeholder='' name='orlNumber' />
                  </Form.Item>
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>
      </Card>
      {state.current_status === 'open' ? <TicketHandlingOpen /> : <TicketHandlingAssign />}
    </>
  );
}

export default memo(TicketHandlingForm);
