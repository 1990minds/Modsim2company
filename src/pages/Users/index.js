import React, {useEffect, useState, useLayoutEffect} from 'react'
import Layout  from '../../components/layout/Main'
import {fetchAllCompanyUser,userSelector} from '../../api/user'
import {useDispatch, useSelector} from 'react-redux'
import UserTables from './usertabel'
import Createuser from './Createuser'
import ExcelBtn from './exportexcel'
import axios from 'axios'
import {SearchOutlined,SyncOutlined} from '@ant-design/icons'
import { useDebounce } from "use-debounce";
import { keyUri, config } from '../../key'
import styled from 'styled-components'
import { Tabs, Tooltip,Row,Col, Input,Upload } from 'antd';
import {authenticateSelector} from '../../api/authSlice'
import { PlusOutlined } from '@ant-design/icons';


const { Search } = Input;


export default function User() {

  const dispatch = useDispatch()
  const { all_user,loading:load} = useSelector(userSelector) 
  const { user } = useSelector(authenticateSelector) 
  

  
 
  const [search, setSearch] = useState('')
  const [ loading, setLoading] = useState(false)
  const [filter,setFilter]=useState([])
  const [debouncedText] = useDebounce(search, 2000);
 

  const [userAddVisible, SetUserAddVisible] = useState(false)
  // const [searchvalue, setSearchvalue] = useState('')
 

console.log(all_user);

console.log("testing");


      useEffect(()=>{

        axios.get(keyUri.BACKEND_URI +`/company-user/${user?._id}?search=${debouncedText}`).then(({data})=>{
         
         
    
          setFilter(data?.filteruser)
           })
           
      setLoading(false)
       }, [dispatch, debouncedText])
    
    

    useEffect(()=>{
     
      dispatch(fetchAllCompanyUser(user?._id))
    },[user])
    
   
    useEffect(()=>{     
      if(filter?.length < 1) {
        setSearch('')
      }
       }, [filter])
    
    
    const onSearch = (e) => {
      setLoading(true)
      setSearch(e.target.value)
    
    }

  return (
    <Layout>
       <Row>
      <Col span={8}>
      
      < Createuser icon={<PlusOutlined />} />
     
      </Col>
      <Col span={3} offset={10} >
        <Tooltip placement="top" title="Search by User Name, Email ">
      <SearchWrap className="mx-4 " style={{borderRadius:"4px"}}>

<Input value={search}  className="px-4 py-2 focus:outline-none"
prefix ={  <SearchOutlined  style={{color:'#3e79f7', fontWeight:'bold'}} />
}
placeholder="Search" onChange={onSearch}  />
</SearchWrap>
</Tooltip>
        </Col>
        <Col span={3} className='' style={{ display: 'flex', justifyContent: 'end' }}>
        
        <ExcelBtn data={all_user} />
        
      </Col>
      </Row>

        <UserTables data={(filter?.length > 0) ? filter :all_user} loading={loading || load} />
        
    </Layout>
  )
}
const SearchWrap = styled.div`
  

.ant-input-affix-wrapper{
  padding: 0px !important;
padding-left: 12px !important;
padding-right: 8px !important;
border-radius: 10px !important;
border-color: transparent !important;
box-shadow: 6px 6px 5px #F1F1F1;  
}
`