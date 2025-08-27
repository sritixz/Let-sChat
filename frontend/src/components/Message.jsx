import React ,{useContext} from 'react'
import { AuthContext } from '../context/AuthContext';
import { ChatContext } from '../context/ChatContext';

const Message = ({message}) => {
   const {currentUser}= useContext(AuthContext)
   const {data}=useContext(ChatContext);
  return (
    <div className='message owner'>
      <div className="messageInfo">
        <img src ='src\img\pexels-ernie-kravitz-1141360001-27499446.jpg' alt=''/>
 
      <span>Just Now</span>
           </div>
    <div className="messageContent">
      <p>hello</p>
    
    </div>
    </div>
  )
}

export default Message
