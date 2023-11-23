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
    sendMessage(inputValue);
    setInputValue('');
  }

  const sendMessage = (message) => {
    const url ='https://api.openai.com/v1/chat/completions';
    const headers = {
      'Content-type' : 'application/json',
      'Authorization' :`Bearer ${process.env.NEXT_PUBLIC_API_KEY}`
    };
    const data ={
      model : "gpt-4",
      messages : [{"role":"user","content":message}]
    };
    setIsloading(true);

    axios.post(url,data,{headers:headers}).then((response)=>{
      console.log(response);
      setChatLog((prevChatLog)=>[...prevChatLog ,{type:'bot',message:response.data.choices[0].message.content}])
      setIsloading(false);
    }).catch((error)=>{
      setIsloading(false);
      console.log(error);
    })

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
