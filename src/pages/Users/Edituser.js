import React,  {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {useParams} from 'react-router-dom'
import { Form, Input, Button, Col, Row, Select,  } from 'antd';
import {updateUser, fetchOneUser, userSelector} from '../../api/user'
import {authenticateSelector} from '../../api/authSlice'
import { fetchAllcompanyactiveLicense, licenseSelector} from '../../api/license';


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
    const {all_license} = useSelector(licenseSelector) 
    const [status, setStatus]=useState(null)
    
  
 console.log(current_user)
    
    
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

const handleChangeSelect = (value) =>{
  console.log(`selected ${value}`)


}
  

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
                <Select 
                showSearch
                placeholder="License Number"  
                optionFilterProp="children"
                filterOption={(input, option) =>
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                }
                          
                onChange={handleChangeSelect}>
                {
                all_license.map((item, i)=>{                                                   
                return  <option key={i} value={item.license_number} disabled={item.user ? true:false}  > {item.license_number}</option>
                })
                }
                            
                </Select>
 
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
                 <Input />                
                </Form.Item>
                </Col>
        


        
                <Col span={12}>
                <Form.Item
                 type="phone_number"
                 name="phone_number"
                 label="Phone Number"
                  // rules={[{ required: true ,message: 'required!' },
                  // {min: 10},
                  // {max:10},
                  // {pattern:"[0-9]", message:"Only Numbers"}
                  // ]}
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
               rules={[{
               type: 'email',
               message: 'The input is not valid E-mail!',
               },
                  {
                    required: true,
                    message: 'Please input your E-mail!',
                  },]}
                >
                  <Input  />
                </Form.Item>
              </Col>
              
           


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

