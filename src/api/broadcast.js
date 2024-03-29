import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios'
import { message } from 'antd';
import { keyUri, config } from '../key'

const initialState = {

    all_broadcast:[],
    loading:false,
    hasError:false,
    current_broadcast:null,
}


export const broadcastSlice = createSlice({
    name: 'broadcast',
    initialState,
    reducers: {
  
      getbroadcast: state => {
        state.loading = true;
      },
  
      getAll_broadcast_success: (state, {payload})  =>{
  
          state.loading = false
          state.all_broadcast = payload.broadcast
  
      },
  
  
      getCurrentSuccess: (state, {payload}) =>{
          state.loading = false
          state.current_broadcast = payload.broadcast
      
      },
  
      get_broadcast_Failure: (state) => {
  
        state.loading = false
        state.hasError = true
      },
  
    },
  })
  
  export const { getbroadcast ,getAll_broadcast_success, getCurrentSuccess, get_broadcast_Failure } = broadcastSlice.actions;

export const broadcastSelector = state => state.broadcast;




 export const fetchAllbroadcastCustomers = (id) => async dispatch => {
  dispatch(getbroadcast())
 
  try {
 
   const {data} = await axios.get(keyUri.BACKEND_URI +`/broadcast-customers/${id}`)
   
   
   dispatch(getAll_broadcast_success(data));
    
  } catch (error) {
 
 dispatch(get_broadcast_Failure())

  }
 };






 
 export const deletebroadcast = (id, broadcast) => async dispatch => {

  dispatch(getbroadcast())
  const key = 'create';
  message.loading({ content: 'loading...', key })
  try {
 
   const {data} = await axios.delete(keyUri.BACKEND_URI +`/broadcast/${id} `, broadcast, config)
  data && message.success({ content: data.msg, key, duration: 2 });
   dispatch(fetchAllbroadcastCustomers());
    
  } catch (error) {


 dispatch(get_broadcast_Failure())
 
  }
 };


 export const createbroadcast = ( values) => async dispatch => {

  dispatch(getbroadcast())
  const key = 'create';
  message.loading({ content: 'loading...', key })
  try {
 
   const {data} = await axios.post(keyUri.BACKEND_URI +`/broadcast`, values, config)

   data && message.success({ content: data.msg, key, duration: 2 });
   dispatch(fetchAllbroadcastCustomers());

  } 
  catch ({response}) {
response.data && message.error({ content: response.data.msg, key, duration: 2 })
 dispatch(get_broadcast_Failure())

  }
 };



 export const fetchOnebroadcast = (id) => async dispatch => {

  dispatch(getbroadcast())
  try {
 
   const {data} = await axios.get(keyUri.BACKEND_URI +`/broadcast/${id}`)
  console.log(data);
   dispatch(getCurrentSuccess(data));
  } catch (error) {

 dispatch(get_broadcast_Failure())
  }
 };


 export const  updatebroadcast = (id, values) => async dispatch =>{
  const key = "broadcast"
  dispatch(getbroadcast())
  message.loading({ content: 'loading...', key })

try {
    const {data} = await axios.put(keyUri.BACKEND_URI +`/broadcast/${id}`, values, config);
    console.log(data);
    
    data && message.success({ content: data.msg, key, duration: 2 });
    // dispatch(fetchAllcompany())
    window.location.reload()

} catch ({response}) {
    dispatch(get_broadcast_Failure())
   

}
}




export default broadcastSlice.reducer;