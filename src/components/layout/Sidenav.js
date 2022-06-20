
import { Menu, Button } from "antd";
import { NavLink, useLocation } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import './index.css'
import Logo from '../../assets/MODSIM.png'
import { FaUserAlt } from 'react-icons/fa';



function Sidenav({ color }) {
  const { pathname } = useLocation();
  const page = pathname.replace("/", "");

  const dashboard = [
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
      key={0}
    >
      <path
        d="M3 4C3 3.44772 3.44772 3 4 3H16C16.5523 3 17 3.44772 17 4V6C17 6.55228 16.5523 7 16 7H4C3.44772 7 3 6.55228 3 6V4Z"
        fill={color}
      ></path>
      <path
        d="M3 10C3 9.44771 3.44772 9 4 9H10C10.5523 9 11 9.44771 11 10V16C11 16.5523 10.5523 17 10 17H4C3.44772 17 3 16.5523 3 16V10Z"
        fill={color}
      ></path>
      <path
        d="M14 9C13.4477 9 13 9.44771 13 10V16C13 16.5523 13.4477 17 14 17H16C16.5523 17 17 16.5523 17 16V10C17 9.44771 16.5523 9 16 9H14Z"
        fill={color}
      ></path>
    </svg>,
  ];

  // const tables = [
  //   <svg
  //     width="20"
  //     height="20"
  //     viewBox="0 0 20 20"
  //     fill="none"
  //     xmlns="http://www.w3.org/2000/svg"
  //     key={0}
  //   >
  //     <path
  //       d="M9 2C8.44772 2 8 2.44772 8 3C8 3.55228 8.44772 4 9 4H11C11.5523 4 12 3.55228 12 3C12 2.44772 11.5523 2 11 2H9Z"
  //       fill={color}
  //     ></path>
  //     <path
  //       fillRule="evenodd"
  //       clipRule="evenodd"
  //       d="M4 5C4 3.89543 4.89543 3 6 3C6 4.65685 7.34315 6 9 6H11C12.6569 6 14 4.65685 14 3C15.1046 3 16 3.89543 16 5V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V5ZM7 9C6.44772 9 6 9.44772 6 10C6 10.5523 6.44772 11 7 11H7.01C7.56228 11 8.01 10.5523 8.01 10C8.01 9.44772 7.56228 9 7.01 9H7ZM10 9C9.44772 9 9 9.44772 9 10C9 10.5523 9.44772 11 10 11H13C13.5523 11 14 10.5523 14 10C14 9.44772 13.5523 9 13 9H10ZM7 13C6.44772 13 6 13.4477 6 14C6 14.5523 6.44772 15 7 15H7.01C7.56228 15 8.01 14.5523 8.01 14C8.01 13.4477 7.56228 13 7.01 13H7ZM10 13C9.44772 13 9 13.4477 9 14C9 14.5523 9.44772 15 10 15H13C13.5523 15 14 14.5523 14 14C14 13.4477 13.5523 13 13 13H10Z"
  //       fill={color}
  //     ></path>
  //   </svg>,
  // ];

//   const tables = [
//     <svg xmlns="http://www.w3.org/2000/svg" fill="none"
//      viewBox="0 0 24 24" width="20" height="20">
//       <path fill={color} d="M16.043,14H7.957A4.963,4.963,0,0,0,3,18.957V24H21V18.957A4.963,4.963,0,0,0,16.043,14Z"/>
//       <circle fill={color} cx="12" cy="6" r="6" fillRule="evenodd"
//         clipRule="evenodd"/>
//       </svg>
// ];

const tables = [
  <svg
  width="20"
  height="20"
  viewBox="0 0 20 20"
  xmlns="http://www.w3.org/2000/svg"
  key={0}
>
<path d="M20,16.49c-0.07,0.15-0.12,0.3-0.2,0.44c-0.23,0.35-0.57,0.52-0.99,0.53c-0.71,0.01-1.43,0-2.14,0.01
c-0.17,0-0.22-0.05-0.21-0.22c0.01-0.97,0.02-1.95,0-2.92c-0.02-1.61-0.47-3.07-1.64-4.24c-0.01-0.01-0.02-0.03-0.03-0.06
c0.38-0.34,0.83-0.54,1.33-0.57c0.58-0.03,1.18-0.05,1.75,0.03c1.09,0.17,1.9,1.03,2.1,2.13c0.01,0.03,0.02,0.06,0.04,0.09
C20,13.29,20,14.89,20,16.49z"
    fill={color}
  ></path>
<path d="M9.8,18.71c-1.21,0-2.42,0-3.62,0c-0.57,0-1.01-0.25-1.27-0.77c-0.08-0.15-0.13-0.33-0.13-0.5
c-0.02-0.89-0.04-1.78-0.04-2.67c0-0.85,0.07-1.69,0.41-2.48c0.65-1.51,1.82-2.41,3.41-2.76c0.78-0.18,1.57-0.12,2.37-0.09
c0.93,0.04,1.74,0.35,2.46,0.91c1.25,0.97,1.91,2.25,1.92,3.84c0,1.01,0.01,2.03,0,3.04c-0.01,0.96-0.45,1.42-1.42,1.45
c-1.36,0.04-2.71,0.05-4.07,0.08C9.8,18.73,9.8,18.72,9.8,18.71z"
    fill={color}
  ></path>
<path d="M10.01,1.31c1.86-0.01,3.39,1.5,3.4,3.35c0.01,1.91-1.5,3.44-3.38,3.45c-1.85,0-3.39-1.51-3.4-3.35
C6.62,2.84,8.11,1.32,10.01,1.31z"
    fill={color}
  ></path>
  <path
    d="M5.27,10.02c-0.7,0.71-1.19,1.53-1.44,2.48c-0.2,0.76-0.26,1.53-0.26,2.31c0,0.83,0.01,1.66,0.01,2.49c0,0.04,0,0.08,0,0.13
c-0.08,0.01-0.16,0.02-0.23,0.02c-0.71,0-1.42,0-2.12,0c-0.71-0.01-1.19-0.5-1.19-1.21c0-1.4,0-2.79,0-4.19
c0-1.39,1.05-2.53,2.44-2.63C3.09,9.39,3.7,9.37,4.3,9.51C4.66,9.6,4.97,9.77,5.27,10.02z"
    fill={color}
  ></path>
  <path
     d="M3.16,3.81c1.2,0,2.14,0.96,2.14,2.16c0,1.18-0.98,2.14-2.16,2.13C1.95,8.09,1.01,7.12,1.01,5.92
C1.02,4.75,1.99,3.8,3.16,3.81z"
    fill={color}
  ></path>
  <path d="M16.88,3.81c1.18,0,2.14,0.95,2.15,2.14c0,1.19-0.97,2.16-2.15,2.16c-1.18-0.01-2.14-0.97-2.14-2.15
C14.74,4.76,15.69,3.81,16.88,3.81z"
    fill={color}
  ></path>
</svg>,
];


  const billing = [
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      key={0}
    >
      <path
        d="M4 4C2.89543 4 2 4.89543 2 6V7H18V6C18 4.89543 17.1046 4 16 4H4Z"
        fill={color}
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18 9H2V14C2 15.1046 2.89543 16 4 16H16C17.1046 16 18 15.1046 18 14V9ZM4 13C4 12.4477 4.44772 12 5 12H6C6.55228 12 7 12.4477 7 13C7 13.5523 6.55228 14 6 14H5C4.44772 14 4 13.5523 4 13ZM9 12C8.44772 12 8 12.4477 8 13C8 13.5523 8.44772 14 9 14H10C10.5523 14 11 13.5523 11 13C11 12.4477 10.5523 12 10 12H9Z"
        fill={color}
      ></path>
    </svg>,
  ];

  const rtl = [
    <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    key={0}
  >
<path d="M-88.9,9.8c0,1.44-0.03,2.88,0.01,4.31c0.04,1.39-1.16,2.31-2.48,1.85c-1.24-0.43-2.52-0.75-3.78-1.14
c-0.27-0.08-0.42-0.07-0.6,0.21c-0.75,1.19-2.14,1.72-3.48,1.35c-1.3-0.36-2.25-1.55-2.29-2.96c-0.01-0.39-0.13-0.56-0.5-0.64
c-0.48-0.11-0.95-0.27-1.42-0.42c-0.77-0.25-1.23-0.85-1.27-1.65c-0.02-0.61-0.03-1.22,0-1.83c0.04-0.81,0.48-1.41,1.27-1.64
c4.08-1.23,8.17-2.45,12.26-3.65c1.22-0.36,2.26,0.48,2.28,1.75C-88.89,6.82-88.9,8.31-88.9,9.8z M-100.35,13.29
c-0.12,0.91,0.47,1.73,1.39,2.01c0.89,0.27,2.03-0.21,2.23-0.94C-97.93,14.01-99.14,13.65-100.35,13.29z"fill={color}></path>
<path d="M68.02,9.48c0-2.25,0-4.49,0-6.74c0-0.92,0.24-1.16,1.18-1.16c0.84,0,1.68,0,2.53,0c0.71,0,1,0.29,1,0.99
c0,4.61,0,9.22,0,13.82c0,0.73-0.29,1.01-1.03,1.01c-0.86,0-1.72,0-2.58,0c-0.84,0-1.1-0.26-1.1-1.09
C68.02,14.04,68.02,11.76,68.02,9.48z M68.79,2.35c0,2.41,0,4.77,0,7.13c1.08,0,2.12,0,3.16,0c0-2.4,0-4.75,0-7.13
C70.89,2.35,69.86,2.35,68.79,2.35z M71.98,15.06c0-0.92-0.69-1.62-1.62-1.62c-0.9,0-1.6,0.69-1.61,1.58
c-0.01,0.93,0.68,1.64,1.59,1.65C71.27,16.67,71.98,15.98,71.98,15.06z"fill={color}></path>
<path d="M73.57,9.45c0-2.26,0-4.53,0-6.79c0-0.8,0.27-1.07,1.07-1.07c0.89,0,1.78-0.01,2.68,0c0.67,0.01,0.97,0.3,0.97,0.97
c0,4.62,0,9.25,0,13.87c0,0.67-0.3,0.97-0.97,0.97c-0.92,0.01-1.85,0.01-2.77,0c-0.67,0-0.96-0.3-0.97-0.97
C73.57,14.11,73.57,11.78,73.57,9.45z M74.35,2.35c0,2.41,0,4.77,0,7.13c1.08,0,2.12,0,3.16,0c0-2.4,0-4.75,0-7.13
C76.44,2.35,75.41,2.35,74.35,2.35z M75.94,13.44c-0.93,0-1.63,0.69-1.63,1.61c0,0.9,0.68,1.61,1.57,1.62
c0.93,0.01,1.65-0.67,1.65-1.58C77.55,14.15,76.86,13.44,75.94,13.44z"fill={color}></path>
<path d="M79.13,9.5c0-2.28,0-4.56,0-6.84c0-0.8,0.27-1.08,1.06-1.08c0.89,0,1.78-0.01,2.68,0c0.67,0,0.97,0.3,0.97,0.97
c0,4.62,0,9.25,0,13.87c0,0.69-0.3,0.97-1.01,0.98c-0.89,0-1.78,0-2.68,0c-0.73,0-1.02-0.29-1.02-1.02
C79.12,14.09,79.13,11.8,79.13,9.5z M83.06,9.5c0-2.41,0-4.77,0-7.13c-1.08,0-2.12,0-3.16,0c0,2.4,0,4.75,0,7.13
C80.97,9.5,82,9.5,83.06,9.5z M83.09,15.04c0-0.92-0.71-1.61-1.63-1.6c-0.89,0.01-1.59,0.7-1.59,1.6c0,0.92,0.69,1.63,1.61,1.63
C82.4,16.67,83.1,15.97,83.09,15.04z"fill={color}></path>
<path d="M70.36,14.29c0.38-0.01,0.77,0.37,0.78,0.75c0.01,0.38-0.37,0.77-0.75,0.78c-0.38,0.01-0.77-0.37-0.78-0.75
C69.6,14.69,69.98,14.3,70.36,14.29z"fill={color}></path>
<path d="M75.91,14.29c0.38-0.01,0.77,0.37,0.78,0.75c0.01,0.38-0.37,0.77-0.75,0.78c-0.38,0.01-0.77-0.37-0.78-0.75
C75.16,14.69,75.54,14.3,75.91,14.29z"fill={color}></path>
<path d="M82.24,15.04c0.01,0.38-0.37,0.77-0.75,0.78c-0.38,0.01-0.77-0.37-0.78-0.75c-0.01-0.38,0.37-0.77,0.75-0.78
C81.85,14.28,82.24,14.66,82.24,15.04z"fill={color}></path>
<path d="M33.53,15.67c0.06-0.22,0.12-0.44,0.17-0.66c0.53-2.06,2.29-3.48,4.47-3.57c0.69-0.03,1.38,0,2.17,0
c-1.55,1.59-2.42,3.35-1.93,5.59c-1.32,0-2.66,0.01-3.99-0.01c-0.47-0.01-0.7-0.38-0.89-0.75C33.53,16.07,33.53,15.87,33.53,15.67z"
fill={color}></path>
<path d="M45.9,17.04c-1.78,0-3.57,0-5.35,0c-0.9,0-1.26-0.37-1.25-1.26c0.04-2.51,2.15-4.62,4.84-4.77
c1.27-0.07,2.55-0.05,3.81,0.02c2.47,0.14,4.57,2.4,4.59,4.87c0.01,0.72-0.42,1.13-1.2,1.13C49.53,17.04,47.71,17.04,45.9,17.04z"fill={color}></path>
<path d="M42.16,5.76c0-2.06,1.68-3.75,3.75-3.75c2.06,0,3.77,1.69,3.77,3.74c0,2.05-1.69,3.74-3.76,3.75
C43.85,9.51,42.16,7.82,42.16,5.76z"fill={color}></path>
<path d="M41.63,3.61c-0.8,1.7-0.67,3.33,0.35,4.88c-0.86,1.15-2.88,1.32-4.21,0.36c-1.46-1.06-1.78-3.06-0.72-4.52
C38.1,2.88,40.11,2.54,41.63,3.61z"fill={color}></path>
<path d="M5.25,17.91c0-1.1,0-2.09,0-3.16c-0.47,0-0.93,0-1.38,0c-1.14-0.01-1.78-0.64-1.78-1.78c0-1.97,0-3.93,0-5.9
c0-1.14,0.64-1.79,1.77-1.79c3.04,0,6.08,0,9.12,0c1.1,0,1.74,0.65,1.75,1.77c0,1.98,0,3.97,0,5.95c0,1.1-0.65,1.75-1.76,1.75
c-1.07,0-2.15-0.02-3.22,0.02c-0.3,0.01-0.65,0.13-0.89,0.31c-1.06,0.81-2.1,1.66-3.14,2.5C5.6,17.67,5.46,17.75,5.25,17.91z"fill={color}></path>
<path d="M16.37,11.55c0-0.97,0-1.91,0-2.85c0-1.16,0.01-2.31,0-3.47c-0.01-0.91-0.69-1.59-1.6-1.59c-2.97-0.01-5.95,0-8.92,0
c-0.18,0-0.36,0-0.54,0c0.07-0.92,0.65-1.52,1.53-1.53c3.17-0.02,6.35-0.02,9.52,0c0.88,0.01,1.54,0.67,1.55,1.55
c0.02,2.11,0.02,4.23,0,6.35C17.89,10.85,17.35,11.38,16.37,11.55z"fill={color}></path>
<path d="M-27.41,10.58c0,2.26,0,4.53,0,6.79c0,0.8-0.27,1.07-1.07,1.07c-0.89,0-1.78,0.01-2.68,0c-0.67-0.01-0.97-0.3-0.97-0.97
c0-4.62,0-9.25,0-13.87c0-0.67,0.3-0.97,0.97-0.97c0.92-0.01,1.85-0.01,2.77,0c0.67,0,0.96,0.3,0.97,0.97
C-27.41,5.93-27.41,8.25-27.41,10.58z M-28.18,10.53c0-2.41,0-4.77,0-7.13c-1.08,0-2.12,0-3.16,0c0,2.4,0,4.75,0,7.13
C-30.28,10.53-29.25,10.53-28.18,10.53z M-29.78,14.47c-0.91,0-1.6,0.71-1.6,1.64c0.01,0.89,0.71,1.58,1.61,1.58
c0.92,0,1.62-0.7,1.62-1.62C-28.15,15.16-28.86,14.47-29.78,14.47z"fill={color}></path>
<path d="M-21.88,9.69c-1.28,0-2.53,0-3.83,0c0-2.34,0-4.67,0-7.04c1.27,0,2.54,0,3.83,0C-21.88,4.99-21.88,7.31-21.88,9.69z"fill={color}></path>
<path d="M-20.19,2.65c1.31,0,2.57,0,3.86,0c0,2.35,0,4.67,0,7.03c-1.28,0-2.56,0-3.86,0C-20.19,7.34-20.19,5.02-20.19,2.65z"fill={color}></path>
<path d="M-25.73,18.4c0-2.35,0-4.67,0-7.02c1.29,0,2.55,0,3.85,0c0,2.34,0,4.66,0,7.02C-23.15,18.4-24.41,18.4-25.73,18.4z"fill={color}></path>
<path d="M-16.33,11.38c0,2.37,0,4.69,0,7.04c-1.29,0-2.56,0-3.86,0c0-2.34,0-4.68,0-7.04C-18.9,11.38-17.63,11.38-16.33,11.38z"fill={color}></path>
<path d="M-29.73,16.85c-0.39,0.01-0.77-0.35-0.78-0.74c-0.01-0.39,0.35-0.77,0.74-0.78c0.39-0.01,0.77,0.35,0.78,0.74
C-28.99,16.47-29.34,16.84-29.73,16.85z"fill={color}></path>
<path d="M-138.77,16.35c0.11-0.34,0.19-0.7,0.33-1.02c0.63-1.41,1.71-2.27,3.27-2.34c1.1-0.05,2.23-0.07,3.29,0.14
c1.61,0.32,2.73,1.86,2.8,3.49c0.02,0.61-0.36,1.08-0.97,1.09c-2.57,0.02-5.15,0.01-7.73,0c-0.51,0-0.78-0.36-1-0.76
C-138.77,16.75-138.77,16.55-138.77,16.35z"fill={color}></path>
<path d="M-129.76,12.95c0.73,0,1.42-0.02,2.1,0.01c0.44,0.02,0.67-0.1,0.59-0.58c-0.01-0.03,0-0.07,0-0.1
c0-1.37-0.09-1.27,1.25-1.27c0.64,0,1.29,0.01,1.93,0c0.43-0.01,0.6,0.18,0.59,0.6c-0.01,0.33-0.02,0.66,0.01,0.99
c0.01,0.12,0.15,0.32,0.25,0.33c0.57,0.03,1.15,0.02,1.77,0.02c0-0.24,0-0.42,0-0.6c0-2.53-0.02-5.06,0.01-7.59
c0.01-0.53-0.16-0.62-0.65-0.62c-3.16,0.02-6.32,0.01-9.47,0.01c-0.66,0-0.66,0-0.66,0.69c0,0.23,0,0.46,0,0.7
c-0.61-0.17-1.19-0.32-1.82-0.5c0-0.45-0.06-0.96,0.01-1.46c0.12-0.84,0.71-1.28,1.62-1.28c2.99,0,5.98,0,8.98,0
c0.76,0,1.52-0.02,2.28,0.01c0.29,0.01,0.61,0.06,0.85,0.2c0.18,0.11,0.36,0.4,0.36,0.61c0.02,3.62,0.01,7.24,0.03,10.86
c0,0.51-0.32,0.65-0.68,0.76c-0.2,0.06-0.43,0.05-0.64,0.05c-2.3,0-4.6-0.01-6.89,0.01c-0.36,0-0.55-0.1-0.74-0.42
C-128.99,13.91-129.36,13.48-129.76,12.95z"fill={color}></path>
<path d="M-133.96,11.88c-1.63-0.01-2.83-1.26-2.82-2.92c0.02-1.55,1.31-2.81,2.87-2.79c1.59,0.02,2.86,1.32,2.85,2.93
C-131.06,10.67-132.34,11.89-133.96,11.88z"fill={color}></path>
<path d="M-56.9,9.5c-1.26,0-2.46,0-3.67,0c-1.71,0-2.97,1.24-2.98,2.96c-0.01,1.52,0,3.03,0,4.63c-0.42,0-0.89,0-1.36,0
c-0.61,0-1.22,0.01-1.83,0c-0.94-0.02-1.45-0.52-1.45-1.45c-0.01-3.77-0.01-7.54,0-11.31c0-0.89,0.57-1.42,1.48-1.43
c0.15,0,0.3-0.01,0.45,0c0.53,0.03,1.01,0.05,1.36-0.53c0.14-0.23,0.59-0.37,0.9-0.39c0.97-0.05,1.95-0.02,2.93-0.02
c0.5,0,0.86,0.25,1.17,0.64c0.12,0.15,0.35,0.26,0.55,0.28c0.39,0.04,0.79,0,1.19,0.02c0.66,0.03,1.26,0.53,1.27,1.16
C-56.88,5.85-56.9,7.64-56.9,9.5z M-62.57,3.86c0.44,0,0.89,0.01,1.33,0c0.35-0.01,0.62-0.15,0.61-0.55
c-0.01-0.39-0.29-0.49-0.61-0.5c-0.87-0.01-1.74-0.01-2.62,0c-0.35,0-0.62,0.14-0.61,0.55c0.01,0.38,0.29,0.49,0.61,0.5
C-63.43,3.87-63,3.86-62.57,3.86z"fill={color}></path>
<path d="M-58.28,10.53c0.79,0,1.59-0.01,2.38,0c1.1,0.01,1.86,0.78,1.87,1.88c0.01,1.26,0.01,2.51,0,3.77
c-0.01,1.09-0.78,1.86-1.88,1.86c-1.55,0.01-3.11,0-4.66,0c-1.12,0-1.92-0.76-1.94-1.88c-0.02-1.26-0.03-2.51,0-3.77
c0.02-1.11,0.83-1.86,1.96-1.86C-59.8,10.53-59.04,10.53-58.28,10.53z M-58.23,13.39c0.58,0,1.16,0.01,1.74,0
c0.35-0.01,0.63-0.13,0.63-0.54c0-0.39-0.28-0.51-0.6-0.51c-1.19-0.01-2.38-0.01-3.57,0c-0.34,0-0.65,0.12-0.64,0.53
c0.01,0.41,0.32,0.51,0.66,0.52C-59.42,13.4-58.83,13.39-58.23,13.39z M-58.26,15.19c-0.59,0-1.19-0.01-1.78,0
c-0.33,0-0.61,0.13-0.63,0.49c-0.02,0.4,0.26,0.55,0.61,0.55c1.19,0.01,2.38,0.01,3.57,0c0.35,0,0.63-0.13,0.62-0.54
c-0.01-0.42-0.32-0.5-0.66-0.51C-57.1,15.18-57.68,15.19-58.26,15.19z"fill={color}></path>
</svg>
  ];

  const profile = [
    <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    key={0}
  >
<path d="M17.91,9.8c0,1.44-0.03,2.88,0.01,4.31c0.04,1.39-1.16,2.31-2.48,1.85c-1.24-0.43-2.52-0.75-3.78-1.14
c-0.27-0.08-0.42-0.07-0.6,0.21c-0.75,1.19-2.14,1.72-3.48,1.35c-1.3-0.36-2.25-1.55-2.29-2.96c-0.01-0.39-0.13-0.56-0.5-0.64
c-0.48-0.11-0.95-0.27-1.42-0.42c-0.77-0.25-1.23-0.85-1.27-1.65c-0.02-0.61-0.03-1.22,0-1.83c0.04-0.81,0.48-1.41,1.27-1.64
c4.08-1.23,8.17-2.45,12.26-3.65c1.22-0.36,2.26,0.48,2.28,1.75C17.92,6.82,17.91,8.31,17.91,9.8z M6.46,13.29
c-0.12,0.91,0.47,1.73,1.39,2.01c0.89,0.27,2.03-0.21,2.23-0.94C8.88,14.01,7.68,13.65,6.46,13.29z"fill={color}
    ></path>
<path d="M174.83,9.48c0-2.25,0-4.49,0-6.74c0-0.92,0.24-1.16,1.18-1.16c0.84,0,1.68,0,2.53,0c0.71,0,1,0.29,1,0.99
c0,4.61,0,9.22,0,13.82c0,0.73-0.29,1.01-1.03,1.01c-0.86,0-1.72,0-2.58,0c-0.84,0-1.1-0.26-1.1-1.09
C174.83,14.04,174.83,11.76,174.83,9.48z M175.6,2.35c0,2.41,0,4.77,0,7.13c1.08,0,2.12,0,3.16,0c0-2.4,0-4.75,0-7.13
C177.7,2.35,176.67,2.35,175.6,2.35z M178.8,15.06c0-0.92-0.69-1.62-1.62-1.62c-0.9,0-1.6,0.69-1.61,1.58
c-0.01,0.93,0.68,1.64,1.59,1.65C178.09,16.67,178.8,15.98,178.8,15.06z"fill={color}
    ></path>
<path d="M180.39,9.45c0-2.26,0-4.53,0-6.79c0-0.8,0.27-1.07,1.07-1.07c0.89,0,1.78-0.01,2.68,0c0.67,0.01,0.97,0.3,0.97,0.97
c0,4.62,0,9.25,0,13.87c0,0.67-0.3,0.97-0.97,0.97c-0.92,0.01-1.85,0.01-2.77,0c-0.67,0-0.96-0.3-0.97-0.97
C180.38,14.11,180.39,11.78,180.39,9.45z M181.16,2.35c0,2.41,0,4.77,0,7.13c1.08,0,2.12,0,3.16,0c0-2.4,0-4.75,0-7.13
C183.26,2.35,182.22,2.35,181.16,2.35z M182.76,13.44c-0.93,0-1.63,0.69-1.63,1.61c0,0.9,0.68,1.61,1.57,1.62
c0.93,0.01,1.65-0.67,1.65-1.58C184.36,14.15,183.67,13.44,182.76,13.44z"fill={color}
    ></path>
<path d="M185.94,9.5c0-2.28,0-4.56,0-6.84c0-0.8,0.27-1.08,1.06-1.08c0.89,0,1.78-0.01,2.68,0c0.67,0,0.97,0.3,0.97,0.97
c0,4.62,0,9.25,0,13.87c0,0.69-0.3,0.97-1.01,0.98c-0.89,0-1.78,0-2.68,0c-0.73,0-1.02-0.29-1.02-1.02
C185.94,14.09,185.94,11.8,185.94,9.5z M189.88,9.5c0-2.41,0-4.77,0-7.13c-1.08,0-2.12,0-3.16,0c0,2.4,0,4.75,0,7.13
C187.78,9.5,188.81,9.5,189.88,9.5z M189.91,15.04c0-0.92-0.71-1.61-1.63-1.6c-0.89,0.01-1.59,0.7-1.59,1.6
c0,0.92,0.69,1.63,1.61,1.63C189.21,16.67,189.91,15.97,189.91,15.04z"fill={color}
    ></path>
<path d="M177.17,14.29c0.38-0.01,0.77,0.37,0.78,0.75c0.01,0.38-0.37,0.77-0.75,0.78c-0.38,0.01-0.77-0.37-0.78-0.75
C176.42,14.69,176.8,14.3,177.17,14.29z"fill={color}
    ></path>
<path d="M182.73,14.29c0.38-0.01,0.77,0.37,0.78,0.75c0.01,0.38-0.37,0.77-0.75,0.78c-0.38,0.01-0.77-0.37-0.78-0.75
C181.97,14.69,182.35,14.3,182.73,14.29z"fill={color}
    ></path>
<path d="M189.06,15.04c0.01,0.38-0.37,0.77-0.75,0.78c-0.38,0.01-0.77-0.37-0.78-0.75c-0.01-0.38,0.37-0.77,0.75-0.78
C188.66,14.28,189.05,14.66,189.06,15.04z"fill={color}
    ></path>
<path d="M140.34,15.67c0.06-0.22,0.12-0.44,0.17-0.66c0.53-2.06,2.29-3.48,4.47-3.57c0.69-0.03,1.38,0,2.17,0
c-1.55,1.59-2.42,3.35-1.93,5.59c-1.32,0-2.66,0.01-3.99-0.01c-0.47-0.01-0.7-0.38-0.89-0.75
C140.34,16.07,140.34,15.87,140.34,15.67z"fill={color}
    ></path>
<path d="M152.71,17.04c-1.78,0-3.57,0-5.35,0c-0.9,0-1.26-0.37-1.25-1.26c0.04-2.51,2.15-4.62,4.84-4.77
c1.27-0.07,2.54-0.05,3.81,0.02c2.47,0.14,4.57,2.4,4.59,4.87c0.01,0.72-0.42,1.13-1.2,1.13C156.35,17.04,154.53,17.04,152.71,17.04
z"fill={color}
    ></path>
<path d="M148.97,5.76c0-2.06,1.68-3.75,3.75-3.75c2.06,0,3.77,1.69,3.77,3.74c0,2.05-1.69,3.74-3.76,3.75
C150.67,9.51,148.97,7.82,148.97,5.76z"fill={color}
    ></path>
<path d="M148.45,3.61c-0.8,1.7-0.67,3.33,0.35,4.88c-0.86,1.15-2.88,1.32-4.21,0.36c-1.46-1.06-1.78-3.06-0.72-4.52
C144.91,2.88,146.93,2.54,148.45,3.61z"fill={color}
    ></path>
<path d="M112.07,17.91c0-1.1,0-2.09,0-3.16c-0.47,0-0.93,0-1.38,0c-1.14-0.01-1.78-0.64-1.78-1.78c0-1.97,0-3.93,0-5.9
c0-1.14,0.64-1.79,1.77-1.79c3.04,0,6.08,0,9.12,0c1.1,0,1.74,0.65,1.75,1.77c0,1.98,0,3.97,0,5.95c0,1.1-0.65,1.75-1.76,1.75
c-1.07,0-2.15-0.02-3.22,0.02c-0.3,0.01-0.65,0.13-0.89,0.31c-1.06,0.81-2.1,1.66-3.14,2.5C112.41,17.67,112.28,17.75,112.07,17.91z
"fill={color}
    ></path>
<path d="M123.19,11.55c0-0.97,0-1.91,0-2.85c0-1.16,0.01-2.31,0-3.47c-0.01-0.91-0.69-1.59-1.6-1.59c-2.97-0.01-5.95,0-8.92,0
c-0.18,0-0.36,0-0.54,0c0.07-0.92,0.65-1.52,1.53-1.53c3.17-0.02,6.35-0.02,9.52,0c0.88,0.01,1.54,0.67,1.55,1.55
c0.02,2.11,0.02,4.23,0,6.35C124.7,10.85,124.17,11.38,123.19,11.55z"fill={color}
    ></path>
<path d="M79.41,10.58c0,2.26,0,4.53,0,6.79c0,0.8-0.27,1.07-1.07,1.07c-0.89,0-1.78,0.01-2.68,0c-0.67-0.01-0.97-0.3-0.97-0.97
c0-4.62,0-9.25,0-13.87c0-0.67,0.3-0.97,0.97-0.97c0.92-0.01,1.85-0.01,2.77,0c0.67,0,0.96,0.3,0.97,0.97
C79.41,5.93,79.41,8.25,79.41,10.58z M78.63,10.53c0-2.41,0-4.77,0-7.13c-1.08,0-2.12,0-3.16,0c0,2.4,0,4.75,0,7.13
C76.53,10.53,77.57,10.53,78.63,10.53z M77.03,14.47c-0.91,0-1.6,0.71-1.6,1.64c0.01,0.89,0.71,1.58,1.61,1.58
c0.92,0,1.62-0.7,1.62-1.62C78.66,15.16,77.96,14.47,77.03,14.47z"fill={color}
    ></path>
<path d="M84.93,9.69c-1.28,0-2.53,0-3.83,0c0-2.34,0-4.67,0-7.04c1.27,0,2.54,0,3.83,0C84.93,4.99,84.93,7.31,84.93,9.69z"fill={color}
    ></path>
<path d="M86.63,2.65c1.31,0,2.57,0,3.86,0c0,2.35,0,4.67,0,7.03c-1.28,0-2.56,0-3.86,0C86.63,7.34,86.63,5.02,86.63,2.65z"fill={color}
    ></path>
<path d="M81.09,18.4c0-2.35,0-4.67,0-7.02c1.29,0,2.55,0,3.85,0c0,2.34,0,4.66,0,7.02C83.67,18.4,82.41,18.4,81.09,18.4z"fill={color}
    ></path>
<path d="M90.49,11.38c0,2.37,0,4.69,0,7.04c-1.29,0-2.56,0-3.86,0c0-2.34,0-4.68,0-7.04C87.92,11.38,89.18,11.38,90.49,11.38z"fill={color}
    ></path>
<path d="M77.08,16.85c-0.39,0.01-0.77-0.35-0.78-0.74c-0.01-0.39,0.35-0.77,0.74-0.78c0.39-0.01,0.77,0.35,0.78,0.74
C77.83,16.47,77.47,16.84,77.08,16.85z"fill={color}
    ></path>
<path d="M-31.96,16.35c0.11-0.34,0.19-0.7,0.33-1.02c0.63-1.41,1.71-2.27,3.27-2.34c1.1-0.05,2.23-0.07,3.29,0.14
c1.61,0.32,2.73,1.86,2.8,3.49c0.02,0.61-0.36,1.08-0.97,1.09c-2.57,0.02-5.15,0.01-7.73,0c-0.51,0-0.78-0.36-1-0.76
C-31.96,16.75-31.96,16.55-31.96,16.35z"fill={color}
    ></path>
<path d="M-22.95,12.95c0.73,0,1.42-0.02,2.1,0.01c0.44,0.02,0.67-0.1,0.59-0.58c-0.01-0.03,0-0.07,0-0.1c0-1.37-0.09-1.27,1.25-1.27
c0.64,0,1.29,0.01,1.93,0c0.43-0.01,0.6,0.18,0.59,0.6c-0.01,0.33-0.02,0.66,0.01,0.99c0.01,0.12,0.15,0.32,0.25,0.33
c0.57,0.03,1.15,0.02,1.77,0.02c0-0.24,0-0.42,0-0.6c0-2.53-0.02-5.06,0.01-7.59c0.01-0.53-0.16-0.62-0.65-0.62
c-3.16,0.02-6.32,0.01-9.47,0.01c-0.66,0-0.66,0-0.66,0.69c0,0.23,0,0.46,0,0.7c-0.61-0.17-1.19-0.32-1.82-0.5
c0-0.45-0.06-0.96,0.01-1.46c0.12-0.84,0.71-1.28,1.62-1.28c2.99,0,5.98,0,8.98,0c0.76,0,1.52-0.02,2.28,0.01
c0.29,0.01,0.61,0.06,0.85,0.2c0.18,0.11,0.36,0.4,0.36,0.61c0.02,3.62,0.01,7.24,0.03,10.86c0,0.51-0.32,0.65-0.68,0.76
c-0.2,0.06-0.43,0.05-0.64,0.05c-2.3,0-4.6-0.01-6.89,0.01c-0.36,0-0.55-0.1-0.74-0.42C-22.18,13.91-22.55,13.48-22.95,12.95z"fill={color}
    ></path>
<path d="M-27.14,11.88c-1.63-0.01-2.83-1.26-2.82-2.92c0.02-1.55,1.31-2.81,2.87-2.79c1.59,0.02,2.86,1.32,2.85,2.93
C-24.25,10.67-25.52,11.89-27.14,11.88z"fill={color}
    ></path>
<path d="M49.91,9.5c-1.26,0-2.46,0-3.67,0c-1.71,0-2.97,1.24-2.98,2.96c-0.01,1.52,0,3.03,0,4.63c-0.42,0-0.89,0-1.36,0
c-0.61,0-1.22,0.01-1.83,0c-0.94-0.02-1.45-0.52-1.45-1.45c-0.01-3.77-0.01-7.54,0-11.31c0-0.89,0.57-1.42,1.48-1.43
c0.15,0,0.3-0.01,0.45,0c0.53,0.03,1.01,0.05,1.36-0.53c0.14-0.23,0.59-0.37,0.9-0.39c0.97-0.05,1.95-0.02,2.93-0.02
c0.5,0,0.86,0.25,1.17,0.64c0.12,0.15,0.35,0.26,0.55,0.28c0.39,0.04,0.79,0,1.19,0.02c0.66,0.03,1.26,0.53,1.27,1.16
C49.93,5.85,49.91,7.64,49.91,9.5z M44.24,3.86c0.44,0,0.89,0.01,1.33,0c0.35-0.01,0.62-0.15,0.61-0.55
c-0.01-0.39-0.29-0.49-0.61-0.5c-0.87-0.01-1.74-0.01-2.62,0c-0.35,0-0.62,0.14-0.61,0.55c0.01,0.38,0.29,0.49,0.61,0.5
C43.39,3.87,43.82,3.86,44.24,3.86z"fill={color}
    ></path>
<path d="M48.54,10.53c0.79,0,1.59-0.01,2.38,0c1.1,0.01,1.86,0.78,1.87,1.88c0.01,1.26,0.01,2.51,0,3.77
c-0.01,1.09-0.78,1.86-1.88,1.86c-1.55,0.01-3.11,0-4.66,0c-1.12,0-1.92-0.76-1.94-1.88c-0.02-1.26-0.03-2.51,0-3.77
c0.02-1.11,0.83-1.86,1.96-1.86C47.02,10.53,47.78,10.53,48.54,10.53z M48.58,13.39c0.58,0,1.16,0.01,1.74,0
c0.35-0.01,0.63-0.13,0.63-0.54c0-0.39-0.28-0.51-0.6-0.51c-1.19-0.01-2.38-0.01-3.57,0c-0.34,0-0.65,0.12-0.64,0.53
c0.01,0.41,0.32,0.51,0.66,0.52C47.39,13.4,47.99,13.39,48.58,13.39z M48.56,15.19c-0.59,0-1.19-0.01-1.78,0
c-0.33,0-0.61,0.13-0.63,0.49c-0.02,0.4,0.26,0.55,0.61,0.55c1.19,0.01,2.38,0.01,3.57,0c0.35,0,0.63-0.13,0.62-0.54
c-0.01-0.42-0.32-0.5-0.66-0.51C49.71,15.18,49.14,15.19,48.56,15.19z"fill={color}
    ></path>
</svg>
  ];

  const signin = [
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      key={0}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6 2C5.44772 2 5 2.44772 5 3V4H4C2.89543 4 2 4.89543 2 6V16C2 17.1046 2.89543 18 4 18H16C17.1046 18 18 17.1046 18 16V6C18 4.89543 17.1046 4 16 4H15V3C15 2.44772 14.5523 2 14 2C13.4477 2 13 2.44772 13 3V4H7V3C7 2.44772 6.55228 2 6 2ZM6 7C5.44772 7 5 7.44772 5 8C5 8.55228 5.44772 9 6 9H14C14.5523 9 15 8.55228 15 8C15 7.44772 14.5523 7 14 7H6Z"
        fill={color}
      ></path>
    </svg>,
  ];

  const signup = [
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      viewBox="0 0 14 14"
      key={0}
    >
      <path
        d="M0,2A2,2,0,0,1,2,0H8a2,2,0,0,1,2,2V8a2,2,0,0,1-2,2H2A2,2,0,0,1,0,8Z"
        transform="translate(4 4)"
        fill={color}
      />
      <path
        d="M2,0A2,2,0,0,0,0,2V8a2,2,0,0,0,2,2V4A2,2,0,0,1,4,2h6A2,2,0,0,0,8,0Z"
        fill={color}
      />
    </svg>,
  ];

  return (
    <>
      <div className="brand" style={{ display: "flex" , justifyContent: "center"}}>
        <img src={Logo} alt="" />
       
      </div>
      <hr />
      <Menu theme="light" mode="inline">
        <Menu.Item key="1">
          <NavLink to="/auth/dashboard">
            <span
              className="icon"
              style={{
                background: page === "dashboard" ? color : "",
              }}
            >
              {dashboard}
            </span>
            <span className="label">Dashboard</span>
          </NavLink>
        </Menu.Item>
        <Menu.Item key="2">
          <NavLink to="/auth/users">
            <span
              className="icon"
              style={{
                background: page === "tables" ? color : "",
              }}
            >
              {tables}
            </span>
         
           
            <span className="label">Users</span>
          </NavLink>
        </Menu.Item>

        <Menu.Item className="menu-item-header" key="5">
          Support
        </Menu.Item>

        <Menu.Item key="6">
          <NavLink to="/auth/broadcast">
            <span
              className="icon"
              style={{
                background: page === "profile" ? color : "",
              }}
            >
              {profile}
            </span>
            <span className="label">Broadcast</span>
          </NavLink>
        </Menu.Item>


        <Menu.Item key="4">
          <NavLink to="/auth/tickets">
            <span
              className="icon"
              style={{
                background: page === "rtl" ? color : "",
              }}
            >
              {rtl}
            </span>
            <span className="label">Tickets</span>
          </NavLink>
        </Menu.Item>

        {/* <Menu.Item key="7">
          <NavLink to="/auth/chats">
            <span className="icon">{signin}</span>
            <span className="label">Chats</span>
          </NavLink>
        </Menu.Item>
        <Menu.Item key="8">
          <NavLink to="/auth/logs">
            <span className="icon">{signup}</span>
            <span className="label">Logs</span>
          </NavLink>
        </Menu.Item> */}
      </Menu>
      <div className="aside-footer">
        <div
          className="footer-box"
          style={{
            background: color,
          }}
        >
          <span className="icon" style={{ color }}>
            {dashboard}
          </span>
          <h6>Need Help?</h6>
          <p>please contact our support team</p>
          <Button type="primary" className="ant-btn-sm ant-btn-block">
          modsim@avconsulting.in
          </Button>
        </div>
      </div>
      
    </>
  );
}

export default Sidenav;
