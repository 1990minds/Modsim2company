import {Image } from 'antd';
import Img11 from '../../assets/images/helpCenter/P-BroadcastPage1.png';
import Img12 from '../../assets/images/helpCenter/P-BroadcastPage2.png';
import Img13 from '../../assets/images/helpCenter/P-BroadcastPage3.png';

import Img21 from '../../assets/images/helpCenter/PRASAD1.png';
import Img22 from '../../assets/images/helpCenter/PRASAD2.png';



const data = [
    {
        id:1,
        title:"How to create User ?",
        content:  <div >
                   <p className='helpDesc'><b>Step 1 : </b>Click on Create option in the Users tab.</p>
                  <div className='helpImg'>
                        <img src={Img11}  preview={false}  />
                        <p></p>
                  </div>
                  <p className='helpDesc'><b>Step 2 : </b>Fill necessary details in the fields, Generate Username and Password for the user and submit.</p>
                  <div className='helpImg'>
                        <img src={Img12}  preview={false} />
                        <p></p>
                  </div>
                  <p className='helpDesc'><b>Step 3 : </b>Share the details personally through convenient & safe communication channel to your user.</p> 
                  <div className='helpImg'>
                        <img src={Img13}  preview={false} /></div>
                        <p></p>
                  </div>
     },
    {
        id:2,
         title:"How to raise a Ticket ?",
         content:  <div>
                  <p className='helpDesc'><b>Step 1 : </b>Click on the Ticket tab on the side menu -> Click on raise ticket and fill necessary details. </p> 
                <div className='helpImg'>
                    <img src={Img21}  preview={false}  />
                    <p></p>
                </div>
                <p className='helpDesc'><b>Step 2 : </b>Ticket ID will be generated and shown in a Table. Admin will address the Ticket and respond to you by Mail.</p> 

                <div className='helpImg'>
                    <img src={Img22}  preview={false} />
                    <p></p>
                </div> 


            </div>
    },

]

export default data