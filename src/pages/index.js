import Image from 'next/image'
import { useState,useEffect } from 'react';
import { Inter } from 'next/font/google'
import axios from 'axios';


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [inputValue,setInputValue] = useState('');
  const [chatLog,setChatLog]= useState([]);
  const [isLoading,setIsloading] = useState(false)
  const handleSubmit = (event) =>{
    event.preventDefault();

    setChatLog((prevChatLog) => [...prevChatLog,{type:'user',message:inputValue}])
    setInputValue('');
  }

  const sendMessage = (message) => {
    const url ='https://api.openai.com/v1/completions';
    const headers = {
      'Content-type' : 'application/json',
      'Authorization' :`Bearer ${process.env.NEXT_PUBLIC_API_KEY}`
    }
  }
  return (
   <>
   <h1>ChatGPT</h1>
   {
     chatLog.map((message,index) => (
      <div key="index">{message.message}</div>
     ))
   }
   <form onSubmit={handleSubmit}>
    <input type='text' placeholder='Type your message....' value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
    <button type="submit">Send</button>
   </form>
   </>
  )
}
