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
  import styled from 'styled-components'
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
import Bgimage from '../../assets/images/bg-profile.jpg'
export default function Edituser() {

   
    const {user} = useSelector(authenticateSelector)
    const [imgurl, setImgurl] = useState([])
    const [loading1, setLoading1] = useState(false)
    const [fileList, setFileList] = useState([])
 
    


  const handleChange = info => {
    setLoading1(true)
       
        storage
        .ref("images/" + info.file.name)
        .put(info.file.originFileObj)
        .then(snapshot => {
          return snapshot.ref.getDownloadURL();
        })
        .then(url => {
       
          setImgurl([...imgurl, url])
          setLoading1(false)
    
        })
        .catch(error => {
         
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

{/* <Card style={{ width: '100%' }}>
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
                   
                  <Avatar    
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

    </Card> */}

<Card style={{ height: "100%" }}>
<DatahWrap>
<div class="content-profile-page">
   <div class="profile-user-page card">
      <div class="img-user-profile">
        <img class="profile-bgHome" src={Bgimage} />
        <img class="avatar" src={user?.profile_image} alt="jofpin"/>
           </div>
    
          <div class="user-profile-data">
          <strong><h1 style={{ fontSize: '24px', fontWeight: '700', }}>Company Name : {user?.company_name}</h1><br/></strong>
  
          </div>

          <div class="description-profile">
            
          <p style={{ fontSize: '16px', fontWeight: '700', }}>
            
             Number : {user?.contact_number} | Email ID : {user?.email_ID} | Tax Number : {user?.customer_tax_number} 

          </p>
            
              </div> 
           {/* <ul class="data-user" >
        
        <li><a><strong>{user?.phone_number}</strong> <br/><span>Number</span></a></li>
        <li><a><strong>{user?.email}</strong><br/><span>Email ID</span></a></li>
        <li><a><strong>{user?.company?.company_name}</strong><br/><span>Company</span></a></li>
       
       </ul> */}
      </div>
    </div>
</DatahWrap>
</Card>
    </Layout>
  )
}



const DatahWrap = styled.div

`
a {
  text-decoration: none;
  color: #3498db;
}
.content-profile-page {
  margin: 1em auto;
  width: 100%;
}

.card {
  background: #fff;
  border-radius: 0.3rem;
  margin-bottom: 1em; 
}

.profile-user-page .img-user-profile {
	margin: 0 auto;
  text-align: center; 
}
.profile-user-page .img-user-profile .profile-bgHome {
	
  width: 100%;
  height: 24rem;
  }
.profile-user-page .img-user-profile .avatar {
	margin: 0 auto;
  background: #fff;
  width: 7em;
  height: 7em;
  padding: 0.25em;
  border-radius: .4em;
  margin-top: -10em;
  box-shadow: 0 0 .1em rgba(0, 0, 0, 0.35);
}
.profile-user-page button {
	position: absolute;
  font-size: 13px;
  font-weight: bold;
  cursor: pointer;
  width: 7rem; 
  background: #1890FF;
  border: 1px solid #2487c9;
  color: #fff;
  outline: none;
  border-radius: 0 .6em .6em 0;
  padding: .80em;
}

.profile-user-page button:hover {
  background: #1885FF;
  transition: background .2s ease-in-out;
  border: 1px solid #2487c9;
}
.profile-user-page .user-profile-data, .profile-user-page .description-profile {
  text-align: center;
  padding: 0 1.5em; 
}
.profile-user-page .user-profile-data h1 {
  font-family: "Lato", sans-serif;
  margin-top: 0.35em;
  color: #292f33;
  margin-bottom: 0; 
}
.profile-user-page .user-profile-data p {
	font-family: "Lato", sans-serif;
  color: #8899a6; 
  font-size: 1.1em;
  margin-top: 0;
  margin-bottom: 0.5em; 
}
.profile-user-page .description-profile {
  color: #75787b;
  font-size: 0.98em; 
}
.profile-user-page .data-user {
	font-family: "Quicksand", sans-serif;
  margin-bottom: 0;
  cursor: pointer;
  padding: 0;
  list-style: none;
  display: table;
  width: 100.15%; 
}
.profile-user-page .data-user li {
  margin: 0;
  padding: 0;
  width: 33.33334%;
  display: table-cell;
  text-align: center;
  border-left: 0.1em solid transparent; 
}
.profile-user-page .data-user li:first-child {
  border-left: 0; 
}
.profile-user-page .data-user li:first-child a {
  border-bottom-left-radius: 0.3rem; 
  }
.profile-user-page .data-user li:last-child a {
  border-bottom-right-radius: 0.3rem; 
}
.profile-user-page .data-user li a, .profile-user-page .data-user li strong {
  display: block; 
}
.profile-user-page .data-user li a {
  background-color: #f7f7f7;
  border-top: 1px solid rgba(242,242,242,0.5);
  border-bottom: .2em solid #f7f7f7;
  box-shadow: inset 0 1px 0 rgba(255,255,255,0.4),0 1px 1px rgba(255,255,255,0.4);
  padding: .93em 0;
  color: #46494c; 
}
.profile-user-page .data-user li a strong, .profile-user-page .data-user li a span {
  font-weight: 600;
  line-height: 1; 
}
.profile-user-page .data-user li a strong {
  font-size: 2em; 
}
.profile-user-page .data-user li a span {
  color: #717a7e; 
}
.profile-user-page .data-user li a:hover {
  background: rgba(0, 0, 0, 0.05);
  border-bottom: .2em solid #3498db;
  color: #3498db; 
}
.profile-user-page .data-user li a:hover span {
  color: #3498db; 
}

`