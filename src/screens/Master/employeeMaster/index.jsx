import React, {useEffect} from 'react';
import {useNavigate} from 'react-router';
import CustomTable from '../../../components/CustomTable';
import {column} from './column';
import {getEmployeeMaster} from '../../../@app/master/masterSlice';
import {useDispatch, useSelector} from 'react-redux';

export default function EmployeeMaster({setTopTitle}) {
  setTopTitle('Employee Master');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onClickAdd = () => {
    navigate('/employeeMaster/addForm');
  };

  const handleEditClick = (data) => {
    navigate('/employeeMaster/addForm', {
      state: {data, isEdit: true}
    });
  };

  useEffect(() => {
    dispatch(getEmployeeMaster());
  }, []);

  const {
    gettingEmployeMaster,
    getEmployeeMasterResponse: {data: dataSource}
  } = useSelector((state) => {
    return state.master;
  });

  return <CustomTable loading={gettingEmployeMaster} dataSource={dataSource} column={column} handleEditClick={handleEditClick} onClickAdd={onClickAdd} title={'Employee Master'} />;
}
