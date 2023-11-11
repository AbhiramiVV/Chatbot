import Image from 'next/image'
import { useState,useEffect } from 'react';
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  consdt [inputValue,setInputValue] = useState('');
  const [chatLog,setChatLog]= useState([]);
  const [isLoading,setIsloading] = useState(false)

  return (
   <>
   <h1>ChatGPT</h1>
   <form>
    <input type='text' placeholder='Type your message....' value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
    <button type="submit">Send</button>
   </form>
   </>
  )
}
