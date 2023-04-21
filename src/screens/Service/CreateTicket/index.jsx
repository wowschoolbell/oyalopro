import React, {useEffect} from 'react';
import {useNavigate} from 'react-router';
import CustomTable from '../../../components/CustomTable';
import {useDispatch, useSelector} from 'react-redux';
import {getTickets} from '../../../@app/service/serviceSlice';

function CreateTicket({rows}) {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const onClickAdd = () => {
    navigate('/createTicket/addForm');
  };

  function view1() {
    navigate('/createTicket/showForm');
  }
  function view2() {
    navigate('/createTicket/showForm1');
  }

  const {
    gettingTickets,
    getTicketsResponse: {data: dataSource}
  } = useSelector((state) => {
    return state.service;
  });

  const handleEditClick = (data) => {
    navigate('/createTicket/showForm', {
      state: {data}
    });
  };

  useEffect(() => {
    dispatch(getTickets());
  }, []);

  let column = [
    {key: '1', headerName: 'SNo', field: 'S.No', hide: false, width: 70},
    {key: '2', headerName: 'Ticket No', field: 'Ticket_No', hide: false, width: 300},
    {key: '3', headerName: 'Asset Group', field: 'Asset_Group', hide: false, width: 180},
    {key: '4', headerName: 'Asset', field: 'Asset', hide: false, width: 180},
    {key: '5', headerName: 'Service For', field: 'Service_For', hide: false, width: 180},
    {key: '6', headerName: 'Ticket Status', field: 'Ticket_Status', hide: false, width: 180},
    {key: '8', headerName: 'Creation Date', field: 'Creation_Date', hide: false, width: 180},
    {key: '9', headerName: 'Ageing Days', field: 'Ageing_Days', hide: false, width: 180},
    {
      key: '7',
      headerName: 'Action',
      field: 'btnfields',
      hide: false,
      width: 180,
      renderCell: (params) => {
        if (params.row.id === 1) {
          // check if this is the row that should have the button
          return (
            <>
              <div dangerouslySetInnerHTML={{__html: params.value}}></div>
              <button className='orangeFactory btn' onClick={() => view1(params.row.id)}>
                Update
              </button>
            </>
          );
        }
        if (params.row.id === 2) {
          // check if this is the row that should have the button
          return (
            <>
              <div dangerouslySetInnerHTML={{__html: params.value}}></div>
              <button className='orangeFactory btn' onClick={() => view2(params.row.id)}>
                Update
              </button>
            </>
          );
        } else {
          return <span />;
        }
      }
    }
  ];

  // const data = [
  //   {
  //     'S.No': 1,
  //     Ticket_No: 'SE-BR-EQ-23-09-01-01',
  //     Asset_Group: 'Air Conditioner',
  //     Asset: 'Daikin',
  //     Service_For: 'Equipement',
  //     Ticket_Status: 'Waiting @ Vendor Assignment',
  //     Creation_Date: '01-Oct-22',
  //     Ageing_Days: 5
  //   },
  //   {
  //     'S.No': 2,
  //     Ticket_No: 'SE-PR-EQ-23-09-01-02',
  //     Asset_Group: 'Chair',
  //     Asset: 'New',
  //     Service_For: 'Equipement',
  //     Ticket_Status: 'Issue Resolved',
  //     Creation_Date: '01-Oct-22',
  //     Ageing_Days: '3'
  //   },
  //   {
  //     'S.No': 3,
  //     Ticket_No: 'SE-PR-EQ-23-09-01-03',
  //     Asset_Group: 'Genset',
  //     Asset: 'Blue Star',
  //     Service_For: 'Equipement',
  //     Ticket_Status: 'WIP',
  //     Creation_Date: '01-Oct-22',
  //     Ageing_Days: 3
  //   },
  //   {
  //     'S.No': 4,
  //     Ticket_No: 'SE-PR-EQ-23-09-01-04',
  //     Asset_Group: 'Freezer',
  //     Asset: 'Freezer 1',
  //     Service_For: 'Equipement',
  //     Ticket_Status: 'Issue Not Solved',
  //     Creation_Date: '01-Oct-22',
  //     Ageing_Days: 3
  //   }
  // ];

  return (
    <div className='h-screen lasthide'>
      <CustomTable rows={rows} loading={gettingTickets} dataSource={dataSource} column={column} handleEditClick={handleEditClick} onClickAdd={onClickAdd} title={'Create List'} />
    </div>
  );
}

export default CreateTicket;
