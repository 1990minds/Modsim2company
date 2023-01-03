import { FaRegTrashAlt, FaRegEdit } from 'react-icons/fa';
import ModalForm from '../../global/model'
import {
    Row,
    Col,
    Card,
    Tooltip,
    Table,
    Space,
    Drawer,
  } from "antd";
  import { useState } from "react";
  import Edituser from './Edituser';
  import {useDispatch} from 'react-redux'
  import {deleteUser} from '../../api/user'
  import Loader from '../shared/tableloader'

  
  function UserTable({data, loading}) {

    
    const [visibleEdit, setEditModal] = useState(false);

    const [current_user, setUser] = useState(null); 

      const handleClickEdit = (e, isvisible, id) =>{
        e.preventDefault()
        setUser(id)
        setVisible(true);
        }

    
  const [visibleLicense, setVisibleModal] = useState(false);


  const [page, setPage] = useState(1);


  const [visible, setVisible] = useState(false);

  const cancel = (e) =>{
    return null
  }


  const dispatch = useDispatch()

  const confirm = (e, id) => {
   
    dispatch(deleteUser(id._id,id, id?.company?._id))
   
  }
  


  const onClose = () => {
    setVisible(false);
    setUser(null)
  };



  const columns = [
      
    {
      title: ' SI NO.',
      dataIndex: 'si_no',
      width: 100,
      key: 'si_no',
      render:(t, k, i)=>{
        return <p class="m-0 ">{(page - 1) * 10 + (i+1)}</p>
      }
      
    },

    {
      title: ' User name',
      dataIndex: 'full_name',
      key: 'full_name',
      ellipsis: true,

    },

    {
      title: ' License Number',
      key: 'license_number',
      render:(item)=>{
        return <p class="m-0 ">{item?.license?.license_number}</p>
      }
      
    },

    {
      title: ' Department',
      dataIndex: 'department',
      key: 'department',
      
    },

    {
      title: 'Phone Number',
      dataIndex: 'phone_number',
      key: 'phone_number',
      
    },

   
   
    
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
      ellipsis: true,
      
    },
  
        
        {
          title: 'Action',
          key: 'action',
          render: (id) => (
            <Space size="middle">
              
            <h5 className="text-secondary" >
            
            <Tooltip placement="top" title="Edit User">
              <FaRegEdit onClick={(e)=>handleClickEdit(e, true, id)} style={{cursor:"pointer", color: "#1890FF"}} /> 
            </Tooltip>
              
              
              </h5>
          <h5 className="text-danger">

         
    
              

          </h5>

          </Space>
          ),
        },
      ];
 
      const [selectionKey, setSelectionKey] = useState([]);

      const rowSelection = {
        onChange: (selectedRowKeys, selectedRows) => {
  
  
          setSelectionKey(selectedRowKeys)
        },
        getCheckboxProps: (record) => ({
          disabled: record.name === 'Disabled Company',
          // Column configuration not to be checked
          name: record.name,
        }),
      };
    return (
      <>
        <div className="tabled">
          <Row gutter={[24, 0]}>
            <Col xs="24" xl={24}>
              <Card
                bordered={false}
                className="criclebox tablespace mb-24"
                // title="Customer Table"
                extra={
                  <>
                   
                  </>
                }
              >
                <div className="table-responsive">
                  <Table
                  scroll={{ x  : 1500, y:'calc(100vh - 30em)' }}
                  loading={{spinning: loading, indicator: <Loader/>}} 
                  pagination={{
                      onChange(current) {
                      setPage(current)
                    }
                  }}
                    columns={columns}
                    dataSource={data}
                    className="ant-border-space"
                  />
                </div>
              </Card>
            </Col>
          </Row>
        </div>
       
                   <Drawer
          title="Update a Existing User" placement="right" onClose={onClose} visible={visible} width={720}
        >
          <Edituser current_user={current_user} cancel={onClose}/>
        </Drawer>
  
      </>
    );
  }
  
  export default UserTable;
  

 