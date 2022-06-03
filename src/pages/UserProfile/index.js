import React, { useEffect, useState } from 'react'
import {
    Card,
    Form,
    Input,
    Button,
    Radio,
    Divider,

    Upload ,Image,
  } from 'antd';
import Layout from '../../components/layout/Main'
import { authenticateSelector} from '../../api/authSlice'
import { AntDesignOutlined } from '@ant-design/icons';
import Loader from '../../pages/shared/loader';
import storage from '../../pages/shared/storage'
import {updateCompany} from '../../api/company'
import { Avatar } from 'antd';
import {MdClose, MdDelete} from 'react-icons/md'
import { LoadingOutlined,} from '@ant-design/icons';
import {useDispatch, useSelector} from 'react-redux'
import { PlusOutlined } from '@ant-design/icons';

export default function Edituser() {

   
    const {user} = useSelector(authenticateSelector)
    const [imgurl, setImgurl] = useState([])
    const [loading1, setLoading1] = useState(false)
    const [fileList, setFileList] = useState([])
    console.log(user)
    


  const handleChange = info => {
    setLoading1(true)
       
        storage
        .ref("images/" + info.file.name)
        .put(info.file.originFileObj)
        .then(snapshot => {
          return snapshot.ref.getDownloadURL();
        })
        .then(url => {
          console.log(url);
          setImgurl([...imgurl, url])
          setLoading1(false)
    
        })
        .catch(error => {
          console.log(error);
        });
    
      };
  

  const remove = (e, url) =>{

  setImgurl(prev => prev.filter(item => item !== url))
    
  }

    const uploadButton = (
      <div>
        { loading1 ? <LoadingOutlined  /> : <PlusOutlined />}
        <div style={{ marginTop: 8, fontSize:"14px" }}>{loading1 ? "uploading" :""}</div>
      </div>
    );

  const [form] = Form.useForm();
  const dispatch = useDispatch();

useEffect(() =>{
  user && setImgurl([user?.profile_image])
  form.setFieldsValue({
      company_name:user && user.company_name,
      email_ID:user && user.email_ID,
      contact_number:user && user.contact_number,
      contact_person:user && user.contact_person,
      profile_image: imgurl[0],
    });
  }, [user])


  const onFinish = (values) => {

    const userdata = {

      contact_person:values.contact_person,
      profile_image: imgurl.length>=1 ? imgurl[0] : null,

    }
  dispatch(updateCompany(user?._id, userdata))
   };

   const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };



  return (
    <Layout>

<Card style={{ width: '100%' }}>
 <Form layout="vertical" hideRequiredMark
           form={form}
           name="basic"
           initialValues={{ remember: false }}
           onFinish={onFinish}
           onFinishFailed={onFinishFailed}
           autoComplete={false}
           style={{ textAlign: 'center', display: 'flex', justifyContent: 'center' }}

          >

      
  
      <div style={{ width: '30%' }}>
          <h1 style={{ fontSize: '1.5rem', fontWeight: '700'}}> Update Information</h1>
          <Form.Item
            label={<p></p>}
            name="profile_image"
            // rules={[{ required: true, message: 'required!' }]}
          >
                <div 
                    className=" grid grid-cols-4 gap-5">
                {

                imgurl.map((img, i)=>{

                  return <div className=" imglist  bg-gray-50 text-center" style={{height:"100px"}}>
                   
                  <Image    
                   preview={false}               
                   key={i}
                   className="  rounded col-span-1  block  object-cover"
                   style={{height:"100px", width:"100px"}}
                   src={img}
                   placeholder={<Loader/> }              
                 />   
                  <h2 onClick={(e)=>remove(e, img)} className="p-1 text-white  text-xl "> <MdDelete/></h2> 

                    </div>
                })
                }

                <Upload       
                        listType="picture-card"
                        fileList={fileList}
                        onChange={handleChange}
                        multiple={false}
                        className="ml-2"
                        >
                        {imgurl.length >= 1 ? null : uploadButton}
                        </Upload>
                </div> 


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



