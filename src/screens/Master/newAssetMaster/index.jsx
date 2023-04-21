import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigate} from 'react-router';
import { getNewAssetMaster} from '../../../@app/service/serviceSlice';
import CustomTable from '../../../components/CustomTable';
import {column} from './column';

export default function NewAssetMaster() {
  const navigate = useNavigate();

  const onClickAdd = () => {
    navigate('/assetMaster/addForm', {
      state: {}
    });
  };

  const {
    gettingNewAssetMaster,
    getNewAssetMasterResponse: {data: dataSource}
  } = useSelector((state) => {
    return state.service;
  });

  const handleEditClick = (data) => {
    navigate('/assetMaster/addForm', {
      state: {data: {...data},isEdit: true}
    });
  };

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getNewAssetMaster());
  }, []);

  return <CustomTable handleEditClick={handleEditClick} loading={gettingNewAssetMaster} dataSource={dataSource} column={column} onClickAdd={onClickAdd} title={'Asset Master'} />;
}
