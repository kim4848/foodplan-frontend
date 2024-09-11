import { useState } from 'react'
import './App.css'
import { getChatMessage } from './clients/chat_client'
import ReactMarkdown from 'react-markdown'

function App() {
  const [message, setMessage] = useState<string>('')
  const [inputMessage, setInputMessage] = useState<string>('')



  const prompt = async (message: string) => {

    getChatMessage(message).then((data) => {
      console.log('Response from API:', data)
      setMessage(data.message)
      console.log('Message:', data.message)
    })
  }


  return (
    <>
    <input type="text" placeholder="Enter message" value={inputMessage} onChange={e=>setInputMessage(e.target.value)} />
    <button onClick={()=>prompt(inputMessage)}>Click</button>
    <div>
    <ReactMarkdown>{message.replace('\n', ' \n ' )}</ReactMarkdown>
    </div>
    
    </>
  )
}

export default App
