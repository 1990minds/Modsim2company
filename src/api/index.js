import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import licenseReducer from './license'
import userReducer from './user'
import companyReducer from './company'
import ticketsReducer from './tickets';
import broadcastReducer from './broadcast';
import customersReducer from './customers';
import projectReducer from './project';
import panelReducer from './panel';
import logReducer from './log'



export default configureStore({
  reducer: {

    auth:authReducer,
     user:userReducer,
     license:licenseReducer,
     tickets:ticketsReducer,
     company:companyReducer,
     broadcast:broadcastReducer,
     customers:customersReducer,
     project:projectReducer,
     panel:panelReducer,
     log:logReducer,
  },
});