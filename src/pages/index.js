import Image from 'next/image'
import { useState,useEffect } from 'react';
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  consdt [inputValue,setInputValue] = useState('');
  return (
   <>
   <h1>ChatGPT</h1>
   <form>
    <input type='text' placeholder='Type your message....'/>
   </form>
   </>
  )
}
