import React,  {useEffect, useState} from 'react'
import styled from 'styled-components'
import {useDispatch, useSelector} from 'react-redux'
import {useParams} from 'react-router-dom'

import { Form, Input, Divider, Button, Col, Row, Select, Drawer,  DatePicker, Upload, InputNumber, Switch  } from 'antd';
import {updateUser, fetchOneUser, userSelector} from '../../api/user'
import { UploadOutlined } from '@ant-design/icons';
import {authenticateSelector} from '../../api/authSlice'
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { fetchAllcompanyactiveLicense, licenseSelector} from '../../api/license';
import moment from 'moment';
import {FaUserAlt, FaLock} from 'react-icons/fa'

const { Option } = Select;
const layout = {
  labelCol: { span: 8},
  wrapperCol: { span: 16 },
};
 
  
  
export default function EditUser({cancel, current_user,}) {
    
    const [loading, setLoading] = useState(false)

    const { user } = useSelector(authenticateSelector) 
    const dispatch = useDispatch();
    const [validityYear, setYear]=useState(null)
    const [validityMonth, setMonth]=useState(null)
    
    // const {current_user} = useSelector(userSelector)
    console.log(current_user);
    // console.log(current_user.license.license_number);
 
    
    
    const {id} = useParams()

     

    useEffect(()=>{
  
      form.setFieldsValue({
        user_name:current_user &&  current_user.user_name,
        email:current_user && current_user.email,
        department:current_user&& current_user.department,
        license_number:current_user && current_user?.license?.license_number,
        phone_number:current_user && current_user.phone_number,
        full_name:current_user && current_user.full_name,
        company:user?._id,
        
    
        });

        

  }, [current_user])

    const onFinish = (values) => {
  
        const userdata = {


            license_number:values.license_number,
            phone_number:values.phone_number,
            email:values.email.toLowerCase(),
             department:values.department,
             user_name:values.user_name,
             full_name:values.full_name,
             company:user?._id,
             password:values.password,
             newpassword:values.password
             
          }
        
      
   dispatch(updateUser(current_user?._id, userdata,user?._id))
   cancel()
  
  };

  const [form] = Form.useForm();

  
  const onChange = (value)=> {
    console.log(`selected ${value}`)

  }

  const onChangeYear = (value)=> {
    console.log(`selected ${value}`)
setYear(value)
  }

  const onChangeMonth = (value)=> {
    console.log(`selected ${value}`)
    setMonth(value)
  }
console.log(validityMonth);
console.log(validityYear);
  

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };


    return (
      <>
 
 <Form layout="vertical" hideRequiredMark
           form={form}
           name="basic"
           initialValues={{ remember: false }}
           onFinish={onFinish}
           onFinishFailed={onFinishFailed}
           
          >
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                autoComplete="flase"
                  name="license_number"
                  label="License Number"
                  rules={[{ required: true, message: 'Please enter License Number' }]}
                >
 <Input disabled={true} />
 
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  name="full_name"
                  label="User name"
                  rules={[{ required: true, message: 'Please enter User name' }]}
                >
                  <Input />
                </Form.Item>
              </Col>
            </Row>

            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  name="department"
                  label="Department"
                  rules={[{ required: true, message: 'Please select a Department' }]}
                >
                  <Input  />
                 
                </Form.Item>
              </Col>
        


        
              <Col span={12}>
                <Form.Item
                  type="phone_number"
                  name="phone_number"
                  label="Phone Number"
                  rules={[{ required: true, message: 'Please enter Phone Number' }]}
                >
                  <Input  />
                </Form.Item>
              </Col>
              
            </Row>

            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  type="email"
                  name="email"
                  label="Email"
                  rules={[{ required: true, message: 'Please enter Email' }]}
                >
                  <Input  />
                </Form.Item>
              </Col>
              
           

            {/* <Row gutter={16}>
              <Col span={20}>
                <Form.Item
                  type="user_name"
                  name="user_name"
                  label="User name"
                  rules={[{ required: true, message: 'Please enter User name' }]}
                >
                  <Input  />
                </Form.Item>
              </Col>
              
            </Row> */}


<Col span={12}>
<Form.Item
            label="Update Password"
            name="password"
            rules={[
              {
                  min: 8,
                  required: false,
                  message: 'Password must be atleast 8 Characters!',
                  showSearch:'false',
                  autocomplete: "off",
              },
              ]}
              hasFeedback >
            <Input.Password />
          </Form.Item>
              </Col>
      
</Row>

        
<Button type="primary" htmlType="submit"
onClick={() => setVisible(false)}
block style={{ fontSize: '14px' }}>
      Update
    </Button>
          </Form>
        
      </>
    );
  }

