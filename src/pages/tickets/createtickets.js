import React, {useState,useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { Form, Input, Divider, Button, Col, Row, Select, Drawer } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import {useParams} from 'react-router-dom'

import {createtickets} from '../../api/tickets'
import {authenticateSelector} from '../../api/authSlice';

import { fetchAlltickets, ticketsSelector} from '../../api/tickets';


const { TextArea } = Input;
const { Option } = Select;

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 12 },
  };
  
  
export default function Createtickets({cancel}) {
  
  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };

  const [loading, setLoading] = useState(false)
  const { company_id } = useSelector(authenticateSelector) 
  

    const dispatch = useDispatch();
    const [validityYear, setYear]=useState(null)
    const [validityMonth, setMonth]=useState(null)
      
    const {id} = useParams()



        
  
  const onFinish = (values) => {
  console.log(values);
      const data = {
        tickets:values.tickets,
        title:values.title,
        description:values.description,
        
         
      }

   dispatch(createtickets(data))
   form.resetFields()
   cancel()
  
  };
  

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const [form] = Form.useForm();

  const onChange = (value)=> {
    console.log(`selected ${value}`)

  }






    return (
      <>
        <Button type="primary" onClick={showDrawer} style={{fontSize: "14px"}}>
        Raise Ticket 
        </Button>
        
        <Drawer
          title="Raise a ticket" placement="right" onClose={onClose} visible={visible} width={720}
        >
          <Form layout="vertical" hideRequiredMark
           form={form}
           name="basic"
           initialValues={{ remember: false }}
           onFinish={onFinish}
           onFinishFailed={onFinishFailed}
           autoComplete={false}
          >
            <Row gutter={16}>
              <Col span={24}>
             
                <Form.Item
                  name="title"
                  label="Title"
                  rules={[{ required: true, message: 'Please enterTitle' }]}
                >
                  <Input />
                </Form.Item>
            
              </Col>
              </Row>
              <Row gutter={16}>
              <Col span={24}>
                <Form.Item
                  name="description"
                  label="Description"
                  rules={[{ required: true, message: 'Please enter Description' }]}
                >
                  <TextArea   showCount
    maxLength={100}
    rows={8}
    style={{
      height: 120,
    }}
    onChange={onChange} />
                </Form.Item>
              </Col>
            </Row>

          
        
<Button type="primary" htmlType="submit"
onClick={() => setVisible(false)}
block style={{ fontSize: '14px' }}>
      Submit
    </Button>
          </Form>
        </Drawer>
      </>
    );
  }

