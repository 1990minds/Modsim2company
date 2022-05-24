import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import licenseReducer from './license'
import userReducer from './user'
import companyReducer from './company'
import ticketsReducer from './tickets';


export default configureStore({
  reducer: {

    auth:authReducer,
     user:userReducer,
     license:licenseReducer,
     tickets:ticketsReducer,
     company:companyReducer,
  },
});