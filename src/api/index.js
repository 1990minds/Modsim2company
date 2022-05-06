import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import licenseReducer from './license'
import userReducer from './user'



export default configureStore({
  reducer: {

    auth:authReducer,
     user:userReducer,
     license:licenseReducer,
   
  },
});