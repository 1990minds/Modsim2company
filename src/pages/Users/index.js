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
import { Tabs, Button, Input,Upload } from 'antd';
import {authenticateSelector} from '../../api/authSlice'


const { Search } = Input;


export default function User() {

  const dispatch = useDispatch()
  const { all_user} = useSelector(userSelector) 
  const { user } = useSelector(authenticateSelector) 
  // const { user } = useSelector(authenticateSelector) 

  
 
  console.log(all_user);
  const [search, setSearch] = useState('')
  const [ loading, setLoading] = useState(false)
  const [filter,setFilter]=useState([])
  const [debouncedText] = useDebounce(search, 2000);
 

  const [userAddVisible, SetUserAddVisible] = useState(false)
  // const [searchvalue, setSearchvalue] = useState('')
 

console.log(all_user);



useEffect(()=>{
  dispatch(fetchAllCompanyUser(user?._id))
      }, [dispatch])

      useEffect(()=>{

        axios.get(keyUri.BACKEND_URI +`/user?search=${debouncedText}`).then(({data})=>{
          console.log(
            'text'
          );
          console.log({data})
    
          setFilter(data?.filteruser)
           })
           
      setLoading(false)
       }, [dispatch, debouncedText])
    
    console.log(filter);

    
   

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
       <ExcelBtn data={all_user} />

       <SearchWrap className="mx-4 " style={{borderRadius:"4px"}}>

<Input value={search}  className="px-4 py-2 focus:outline-none"
prefix ={  <SearchOutlined  style={{color:'#3e79f7', fontWeight:'bold'}} />
}
placeholder="Search" onChange={onSearch}  />
</SearchWrap>

        <Createuser/>
        <UserTables data={(filter?.length > 0) ? filter :all_user} />
        
    </Layout>
  )
}
const SearchWrap = styled.div`
`