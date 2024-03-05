import {useState} from 'react'

export const Message = () => {      
    const[message,setmessage] = useState('welcome visitor')
    return (
    <div>
    <h1>{message}</h1>   
    <button onClick={() => setmessage ('Thank you for Subscribing')}>Subscribe</button>
    </div>
      
    )
  }