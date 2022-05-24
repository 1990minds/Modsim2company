import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios'
import { message } from 'antd';
import { keyUri, config } from '../key'

const initialState = {

    profile_data:[],
    loading:false,
    hasError:false,
    current_profile:[],
}


export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
  
      getprofile: state => {
        state.loading = true;
      },
  
      getAll_profile_success: (state, {payload})  =>{
  
          state.loading = false
          state.all_profile = payload.profile
  
      },
  
      getAllcompanyprofile: (state, {payload})  =>{
  
          state.loading = false
          state.all_profile = payload.profile
  
      },
      getAllcompanyactiveprofile: (state, {payload})  =>{
  
        state.loading = false
        state.all_active_profile = payload.profile
  
    },
  
  
  
      getCurrentSuccess: (state, {payload}) =>{
          state.loading = false
          state.current_profile = payload.profile
      
      },
  
      get_profile_Failure: (state) => {
  
        state.loading = false
        state.hasError = true
      },
  
    },

  })

  export const { getprofile ,getAll_profile_success } = profileSlice.actions;



export const profileSelector = state => state.profile;


export const fetchOneprofile = (id) => async dispatch => {

    dispatch(getprofile())
   console.log(id);
    try {
   
     const {data} = await axios.get(keyUri.BACKEND_URI +`/profile/${id}`)
    console.log(data);
     dispatch(getCurrentSuccess(data));
    } catch (error) {
  
   dispatch(get_profile_Failure())
    }
   };
  