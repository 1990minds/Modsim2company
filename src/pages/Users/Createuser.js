import React, {useState,useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import styled from 'styled-components'
import { Form, Input, Divider, Button, Col, Row, Select, Drawer,  DatePicker, Upload, InputNumber, Switch  } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

import {createuser} from '../../api/user'
import {authenticateSelector} from '../../api/authSlice';

import { fetchAllcompanyLicense, fetchAllcompanyactiveLicense, licenseSelector} from '../../api/license';

const { Option } = Select;

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 12 },
  };
  
  
export default function Createuser({cancel}) {
  
    const [loading, setLoading] = useState(false)
    const { user } = useSelector(authenticateSelector) 
    console.log(user);
    const { all_active_license} = useSelector(licenseSelector) 
  console.log(all_active_license);

      const dispatch = useDispatch();
      console.log({K:user});
      
      useEffect(()=>{

           dispatch(fetchAllcompanyactiveLicense(user?._id))
           
      }, [dispatch])
        
  
  const onFinish = (values) => {
  console.log(values);
      const data = {
        license_number:values.license_number,
        phone_number:values.phone_number,
        email:values.email,
         department:values.department,
         user_name:values.user_name,
         full_name:values.full_name,
         company_id:user?._id,
         newpassword:values.password
         
      }

   dispatch(createuser(data, user?._id))
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


  const handleChangeSelect = (value) =>{


}


const [visible, setVisible] = useState(false);

const showDrawer = () => {
  setVisible(true);
};

const onClose = () => {
  setVisible(false);
};


    return (
      <>
        <Button type="primary" onClick={showDrawer} icon={<PlusOutlined />} style={{fontSize: "14px"}}>
          Create
        </Button>
        
        <Drawer
          title="Create a new User" placement="right" onClose={onClose} visible={visible} width={720}
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
              <Col span={12}>
                <Form.Item
                autoComplete="flase"
                  name="license_number"
                  label="License Number"
                  rules={[{ required: true, message: 'Please enter License Number' }]}
                >
 <Select 
                           showSearch
                           placeholder="License Number"  
                           optionFilterProp="children"
                           filterOption={(input, option) =>
                             option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                          }
                          
                           onChange={handleChangeSelect}>
                    {
                        all_active_license.map((item, i)=>{     
                                                
                        return <option key={i} value={item._id} >{item.license_number}</option>

                    })
                    }
                            
                    </Select>
 
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  name="full_name"
                  label="Full name"
                  rules={[{ required: true, message: 'Please enter Full name' }]}
                >
                  <Input />
                </Form.Item>
              </Col>
            </Row>

            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  name="Department"
                  label="Department"
                  rules={[{ required: true, message: 'Please select a Department' }]}
                >
                  <Input  />
                 
                </Form.Item>
              </Col>
            </Row>

            <Divider />

            <Row gutter={16}>
              <Col span={20}>
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
              <Col span={20}>
                <Form.Item
                  type="email"
                  name="email"
                  label="Email"
                  rules={[{ required: true, message: 'Please enter Email' }]}
                >
                  <Input  />
                </Form.Item>
              </Col>
              
            </Row>

            <Row gutter={16}>
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
              
            </Row>

<Row gutter={16}>
<Col span={10}>
<Form.Item
            label={<p >Create Password</p>}
            name="password"
            rules={[
              {
                  min: 8,
                  required: true,
                  message: 'Password must be atleast 8 Characters!',
                  showSearch:'false',
                  autocomplete: "off",
              },
              ]}
              hasFeedback >
            <Input.Password  />
          </Form.Item>
              </Col>
              <Col  span={10}>
          <Form.Item
            label={<p >Confirm Password</p>}
            name="confirm"
            dependencies={['password']}
            hasFeedback
            
            rules={[
                {required: true, message: 'Password must be atleast 8 Characters!'},
              ({ getFieldValue }) => ({
                validator(rule, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve();
                  }
    
                  return Promise.reject('The two Password that you Entered Do Not Match!');
                },
              }),
            ]}
          >
            <Input.Password  />
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

