import React, { useEffect, useState } from 'react'
import {
    Card,
    Form,
    Input,
    Button,
    Radio,
    Divider,
    Cascader,
    DatePicker,
    InputNumber,
    TreeSelect,
    Switch,
  } from 'antd';
import Layout from '../../components/layout/Main'
import { authenticateSelector} from '../../api/authSlice'
import {useDispatch, useSelector} from 'react-redux'
import { AntDesignOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';
const Index = () => {

    // console.log(user_profile)
    const {user} = useSelector(authenticateSelector)
    console.log(user);
    // const { user} = useSelector(getUserProfile) 


    const [componentSize, setComponentSize] = useState('default');

  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };

  const [form] = Form.useForm();


useEffect(() =>{
    form.setFieldsValue({
      company_name:user && user.company_name,
      email_ID:user && user.email_ID,
      contact_number:user && user.contact_number,
      contact_person:user && user.contact_person
    })
})

  return (
    <Layout>


        <Card style={{ width: '100%' }}>
      <Form layout="vertical" hideRequiredMark
           form={form}
           name="basic"
           style={{ textAlign: 'center', display: 'flex', justifyContent: 'center' }}
           initialValues={{ remember: false }}
        //    onFinish={onFinish}
        //    onFinishFailed={onFinishFailed}
           autoComplete={false}
          >
      <div style={{ width: '30%' }}>
          <h1 style={{ fontSize: '1.5rem', fontWeight: '700'}}> Update Information</h1>
          <Form.Item label="" name="full_name" >
          <Avatar
    size={{
      xs: 24,
      sm: 32,
      md: 40,
      lg: 64,
      xl: 80,
      xxl: 100,
    }}
    icon={<AntDesignOutlined />}
  />
      </Form.Item>
      <Form.Item label="Company Name" name="company_name" >
        <Input disabled />
      </Form.Item>
      <Form.Item label="Email ID" name="email_ID">
        <Input disabled />
      </Form.Item>
      <Form.Item label="Phone" name="contact_number">
        <Input disabled />
      </Form.Item>
      <Form.Item label="Contact Person" name='contact_person'>
        <Input />
      </Form.Item>
    
      <Form.Item>
      <Divider />
<Button type="primary" htmlType="submit"
// onClick={() => setVisible(false)}
block style={{ fontSize: '14px' }}>
      Update Profile
    </Button>
      </Form.Item>
      </div>
    </Form>
    </Card>
    </Layout>
  )
}

export default Index

