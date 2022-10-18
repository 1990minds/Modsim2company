import {Image } from 'antd';
import Img11 from '../../assets/images/helpCenter/P-BroadcastPage1.png';
import Img12 from '../../assets/images/helpCenter/P-BroadcastPage2.png';
import Img13 from '../../assets/images/helpCenter/P-BroadcastPage3.png';

import Img21 from '../../assets/images/helpCenter/PRASAD1.png';
import Img22 from '../../assets/images/helpCenter/PRASAD2.png';



const data = [
    {
        id:1,
        title:"How to create User",
        content:  <div >
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                  <div className='helpImg'>
                        <p>Lorem ipsum dolcommodo  adipisicing elit, sed do eiusmod consequat adipisicing elit, sed do eiusmod consequat.</p>
                        <img src={Img11}  preview={false}  />
                  </div>
                  <div className='helpImg'>
                        <p>Lorem ipsum dolcommodo  adipisicing elit, sed do eiusmod consequat adipisicing elit, sed do eiusmod consequat.</p>
                        <img src={Img12}  preview={false} />
                  </div> 
                  <div className='helpImg'>
                        <p>Lorem ipsum dolcommodo  adipisicing elit, sed do eiusmod consequat adipisicing elit, sed do eiusmod consequat.</p>
                        <img src={Img13}  preview={false} /></div>
                  </div>
     },
    {
        id:2,
         title:"How to raise Ticket",
         content:  <div>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <div className='helpImg'>
                    <p>Lorem ipsum dolcommodo  adipisicing elit, sed do eiusmod consequat adipisicing elit, sed do eiusmod consequat.</p>
                    <img src={Img21}  preview={false}  />
                </div>
                <div className='helpImg'>
                    <p>Lorem ipsum dolcommodo  adipisicing elit, sed do eiusmod consequat adipisicing elit, sed do eiusmod consequat.</p>
                    <img src={Img22}  preview={false} />
                </div> 


            </div>
    },

]

export default data