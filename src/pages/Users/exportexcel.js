import { Button } from 'antd';
import React from 'react'
import ReactExport from "react-export-excel";
import { DownloadOutlined  } from '@ant-design/icons';
import moment from 'moment'
import { render } from '@testing-library/react';

const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;


export default function ExportExcel({data}) {
    console.log(data);

 
    return (

       
        <ExcelFile filename="User" element={<Button icon={<DownloadOutlined  style={{transform:"translateY(2px)",fontWeight: "700",  fontSize: '20px' }}/>} className="mx-2" type="primary" style={{fontSize: '14px'}}>Download</Button>}>
                
        <ExcelSheet data={data} name="User" >
    
            <ExcelColumn label="user_name" value={col => col?.user_name ? col.user_name: "null"}/> 
            <ExcelColumn label="phone_number" value={col => col?.phone_number ? col.phone_number: "null"}/> 
            <ExcelColumn label="department" value={col => col?.access ? col.access: "department"}/> 
            <ExcelColumn label="email" value={col => col?.email ? col.email: "null"}/> 
            <ExcelColumn label="full_name" value={col => col?.email ? col.email: "full_name"}/> 

        </ExcelSheet>
    </ExcelFile>
    )
}


