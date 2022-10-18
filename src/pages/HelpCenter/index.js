import React from 'react'
import Layout from '../../components/layout/Main'
import '../../index.css'
import { Collapse } from 'antd';
import {PlusOutlined, MinusOutlined } from '@ant-design/icons'
import questions from './data'

const { Panel } = Collapse;



function Index() {



  return (
    <Layout>    
      <div style={{padding:'40px 50px 0 50px'}}>
        <Collapse
        ghost
        accordion 
        bordered={false}
        expandIconPosition="right"
        expandIcon={({ isActive }) => isActive ? <MinusOutlined />: <PlusOutlined />}
        className="collapse"
        >
            {
            questions.map((item, i)=>{
            return  <Panel header={item.title} key={i} className="panel" >
                  {item.content}
                  </Panel>
            })
            }

        </Collapse>
        </div>   
    </Layout>
  )
}

export default Index