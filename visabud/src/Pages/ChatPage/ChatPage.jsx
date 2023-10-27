import React from 'react'
import ChatInterface from '../../Components/Chat/ChatInterface/ChatInterface'
import Navbar from '../../Components/Navbar/Navbar'

export default function ChatPage(props) {
  return (
    <div>
        <Navbar />
        <ChatInterface context={props.context} debug={props.debug} />
    </div>
  )
}
