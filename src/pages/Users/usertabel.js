import { FaRegTrashAlt, FaRegEdit } from 'react-icons/fa';
import ModalForm from '../../global/model'
import {
    Row,
    Col,
    Card,
    Radio,
    Table,
    Space,
    Drawer,
  } from "antd";
  import { useState } from "react";
  import { ToTopOutlined } from "@ant-design/icons";
  import { Link } from "react-router-dom";
  import Edituser from './Edituser';
  import { PlusOutlined } from '@ant-design/icons';
  import DeleteConfirm from '../../global/delete'
//   import Createcustomer from "./createcustomer";
  import { FileAddOutlined  } from '@ant-design/icons'
  // Images
  import face6 from "../../assets/images/face-6.jpeg";
  import pencil from "../../assets/images/pencil.svg";
  import {useDispatch} from 'react-redux'
  import {deleteUser} from '../../api/user'

  
  function UserTable({data}) {

    
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
    dispatch(deleteUser(id._id, id.user))
   
  }
  


  const onClose = () => {
    setVisible(false);
    setUser(null)
  };



  const columns = [
      
    {
      title: ' SI NO.',
      dataIndex: 'si_no',
      key: 'si_no',
      render:(t, k, i)=>{
        return <p class="m-0 ">{(page - 1) * 10 + (i+1)}</p>
      }
      
    },

    {
      title: ' Full name',
      dataIndex: 'full_name',
      key: 'full_name',
      
    },

    {
      title: ' User name',
      dataIndex: 'user_name',
      key: 'user_name',
      
    },
   
    
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
      
    },
    {
      title: 'Phone',
      dataIndex: 'phone_number',
      key: 'phone_number',
      
    },

    {
      title: ' Department',
      dataIndex: 'department',
      key: 'department',
      
    },
        
        {
          title: 'Action',
          key: 'action',
          render: (id) => (
            <Space size="middle">
              
            <h5 className="text-secondary" >
            

              <FaRegEdit onClick={(e)=>handleClickEdit(e, true, id)} style={{cursor:"pointer", color: "#1890FF"}} /> 
               
              
              
              </h5>
          <h5 className="text-danger">
              <DeleteConfirm confirm={(e)=>confirm(e, id)} title="user" cancel={cancel} >
                  <FaRegTrashAlt style={{cursor:"pointer", color: "#1890FF"}}  />
              </DeleteConfirm>
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
          title="Update a existing user" placement="right" onClose={onClose} visible={visible} width={720}
        >
          <Edituser current_user={current_user} cancel={onClose}/>
        </Drawer>
      </>
    );
  }
  
  export default UserTable;
  

 