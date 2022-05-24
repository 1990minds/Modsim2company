import React from 'react'
import { useState, useEffect } from 'react';
import Layout from '../../components/layout/Main'
import Createtickets from './createtickets'
import { Tabs, Button, Input,Upload, Card } from 'antd';
import {fetchAlltickets,ticketsSelector} from '../../api/tickets'
import {useDispatch, useSelector} from 'react-redux'
import {authenticateSelector} from '../../api/authSlice'
import axios from 'axios'
import { fetchOneCompany,companySelector } from '../../api/company'
import {SearchOutlined,SyncOutlined} from '@ant-design/icons'
import { useDebounce } from "use-debounce";
import { keyUri, config } from '../../key'
import styled from 'styled-components'
import { Row, Col } from 'antd';
import {useParams} from 'react-router-dom'
import Tickettabel from './tickettabel'
const { Search } = Input;

  export default function Database() {

    
    const {id}= useParams()
    const dispatch=useDispatch()    
    const {current_company,loading}=useSelector(companySelector)
    const {all_tickets}=useSelector(ticketsSelector)

    console.log(all_tickets);

    const [visibleLicense, SetLicenseAddVisible] = useState(false)

    console.log(current_company);

    useEffect(()=>{
        dispatch(fetchOneCompany(id))
    },[dispatch])

    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
      setIsModalVisible(true);
    };
  
    const handleOk = () => {
      setIsModalVisible(false);
    };
  
    const handleCancel = () => {
      setIsModalVisible(false);
    };
  

  // console.log(all_parts);

  

//   useEffect(()=>{

//     axios.get(keyUri.BACKEND_URI +`/parts?search=${debouncedText}`).then(({data})=>{
//       console.log(
//         'text'
//       );
//       console.log({data})

//       setFilter(data?.filterparts)
//        })
//   setLoading(false)
//    }, [dispatch, debouncedText])

// console.log(filter);

//   useEffect(()=>{
//     dispatch(fetAlltickets())
//         }, [dispatch])

//         useEffect(()=>{     
//           if(filter?.length < 1) {
//             setSearch('')
//           }
//            }, [filter])
        
        
//         const onSearch = (e) => {
//           setLoading(true)
//           setSearch(e.target.value)
        
//         }
       

  return (
    <Layout>
      <Row>
      <Col span={8}>
      < Createtickets   />
      </Col>
      {/* <Col span={3} offset={10} >
      <SearchWrap className="mx-4 " style={{borderRadius:"20px"}}>
      <Input value={search}  className="px-4 py-2 focus:outline-none"
        prefix ={  <SearchOutlined  style={{color:'#3e79f7', fontWeight:'bold'}} />
        }
        placeholder="Search" onChange={onSearch}  />
        </SearchWrap>
        </Col> */}
        {/* <Col span={3} className='' style={{ display: 'flex', justifyContent: 'end' }}>
        <ExcelBtn data={all_parts}  />
      </Col> */}
      </Row>

        {/* <PartsTabel data={(filter?.length > 0) ? filter :all_parts} /> */}
        < Tickettabel data={all_tickets} />
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