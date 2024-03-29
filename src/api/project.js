import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios'
import { message } from 'antd';
import { keyUri, config } from '../key'


const initialState = {

    all_project:[],
    loading:false,
    hasError:false,
    current_project:[],
}


export const projectSlice = createSlice({
  name: 'project',
  initialState,
  reducers: {

    getproject: state => {
      state.loading = true;
    },

    getAll_project_success: (state, {payload})  =>{

        state.loading = false
        state.all_project = payload.project

    },


    getCurrentSuccess: (state, {payload}) =>{
        state.loading = false
        state.current_project = payload.project
    
    },

    get_project_Failure: (state) => {

      state.loading = false
      state.hasError = true
    },

  },
})


export const { getproject ,getAll_project_success, getCurrentSuccess, get_project_Failure } = projectSlice.actions;



export const projectSelector = state => state.project;



export const fetchAllproject = (id) => async dispatch => {
  dispatch(getproject())
 
  try {
 
   const {data} = await axios.get(keyUri.BACKEND_URI +`/project`)
   
   dispatch(getAll_project_success(data));
    
  } catch (error) {
 
 dispatch(get_project_Failure())

  }
 };



export const fetchAllcompanyProject = (id) => async dispatch => {
  dispatch(getproject())
 
  try {
 
   const {data} = await axios.get(keyUri.BACKEND_URI +`/company-project/${id}`)
  
   
   dispatch(getAll_project_success(data));
    
  } catch (error) {
 
 dispatch(get_project_Failure())

  }
 };


  

 export const deleteproject = (id, project,company) => async dispatch => {

  dispatch(getproject())
  const key = 'create';
  message.loading({ content: 'loading...', key })
  try {
 
   const {data} = await axios.delete(keyUri.BACKEND_URI +`/project/${id} `, project, config)
  data && message.success({ content: data.msg, key, duration: 2 });
   dispatch(fetchAllproject(company));
    
  } catch (error) {


 dispatch(get_project_Failure())
 
  }
 };



 export const createproject = ( values,company) => async dispatch => {
console.log( values);


  dispatch(getproject())
  const key = 'create';
  message.loading({ content: 'loading...', key })
  try {
 
   const {data} = await axios.post(keyUri.BACKEND_URI +`/project`, values, config)

   data && message.success({ content: data.msg, key, duration: 2 });
   dispatch(fetchAllproject(company));

  } 
  catch ({response}) {
response.data && message.error({ content: response.data.msg, key, duration: 2 })
 dispatch(get_project_Failure())

  }
 };



 export const fetchOneproject = (id) => async dispatch => {

  dispatch(getproject())
  try {
 
   const {data} = await axios.get(keyUri.BACKEND_URI +`/project/${id}`)
   dispatch(getCurrentSuccess(data));
  } catch (error) {

 dispatch(get_project_Failure())
  }
 };


 export const  updateproject = (id, values,company) => async dispatch =>{
  const key = "project"
  dispatch(getproject())
  message.loading({ content: 'loading...', key })

try {
    const {data} = await axios.put(keyUri.BACKEND_URI +`/project/${id}`, values, config);
 
    
    data && message.success({ content: data.msg, key, duration: 2 });
    dispatch(fetchAllproject(company))

} catch ({response}) {
    dispatch(get_project_Failure())
   

}
}

export default projectSlice.reducer;
