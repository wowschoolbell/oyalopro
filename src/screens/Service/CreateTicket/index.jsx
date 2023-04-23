import React, {useEffect} from 'react';
import {useNavigate} from 'react-router';
import CustomTable from '../../../components/CustomTable';
import {useDispatch, useSelector} from 'react-redux';
import {getTickets} from '../../../@app/service/serviceSlice';
import {column} from './column';

function CreateTicket({rows}) {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const onClickAdd = () => {
    navigate('/createTicket/addForm');
  };

  const {
    gettingTickets,
    getTicketsResponse: {data: dataSource}
  } = useSelector((state) => {
    return state.service;
  });

  const handleEditClick = (data) => {
    console.log(data)
    navigate('/createTicket/addForm', {
      state: {data}
    });
  };

  useEffect(() => {
    dispatch(getTickets());
  }, []);

  return (
    <div className='h-screen'>
      <CustomTable rows={rows} loading={gettingTickets} dataSource={dataSource} column={column} handleEditClick={handleEditClick} onClickAdd={onClickAdd} title={'Create Ticket List'} />
    </div>
  );
}

export default CreateTicket;
