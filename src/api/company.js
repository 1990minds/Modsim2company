import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios'
import { message } from 'antd';
import { keyUri, config } from '../key'


const initialState = {

    all_company:[],
    loading:false,
    hasError:false,
    current_company:null,
}


export const companySlice = createSlice({
  name: 'company',
  initialState,
  reducers: {

    getcompany: state => {
      state.loading = true;
    },

    getAll_company_success: (state, {payload})  =>{

        state.loading = false
        state.all_company = payload.company

    },


    getCurrentSuccess: (state, {payload}) =>{
        state.loading = false
        state.current_company = payload.company
    
    },

    get_company_Failure: (state) => {

      state.loading = false
      state.hasError = true
    },

  },
})


export const { getcompany ,getAll_company_success, getCurrentSuccess, get_company_Failure } = companySlice.actions;



export const companySelector = state => state.company;



// export const fetchAllCompany = () => async dispatch => {
//   dispatch(getcompany())
 
//   try {
 
//    const {data} = await axios.get(keyUri.BACKEND_URI +`/company`)
   
//    dispatch(getAll_company_success(data));
    
//   } catch (error) {
 
//  dispatch(get_company_Failure())

//   }
//  };





 export const fetchOneCompany = (id) => async dispatch => {

  dispatch(getcompany())
 
  try {
 
   const {data} = await axios.get(keyUri.BACKEND_URI +`/company/${id}`)
   dispatch(getCurrentSuccess(data));
  } catch (error) {

 dispatch(get_company_Failure())
  }
 };


 export const  updateCompany = (id, values) => async dispatch =>{
  const key = "company"
  dispatch(getcompany())
  message.loading({ content: 'loading...', key })

try {
    const {data} = await axios.put(keyUri.BACKEND_URI +`/company/${id}`, values, config);
    
    data && message.success({ content: data.msg, key, duration: 2 });
    // dispatch(fetchAllcompany())
    window.location.reload()

} catch ({response}) {
    dispatch(get_company_Failure())
   

}
}




export default companySlice.reducer;
