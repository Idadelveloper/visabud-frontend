import React from 'react'
import { useState, useEffect } from 'react'
import './ChatInterface.css'
import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import {MainContainer, ChatContainer, MessageList, Message, MessageInput, TypingIndicator} from "@chatscope/chat-ui-kit-react";
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';


export default function ChatInterface() {
    const [typing, setTyping] = useState(false)
    const [messages, setMessages] = useState([
        {
            message: "Hello, I am VisaBud",
            sender: "ChatGPT"
        }
    ])
    const [history, setHistory] = useState([])

    const handleSend = async (message) => {
        const newMessage = {
            message: message,
            sender: "user",
            direction: "outgoing"
        }

        const newMessages = [...messages, newMessage]

        setMessages(newMessages)

        setTyping(true)

        await processMessageToChatGPT(message, newMessage, history)

        setTyping(false)
    }

    async function processMessageToChatGPT(message, newMessage, history){
        await axios.post("http://127.0.0.1:5000/enquire", {"question": message, "history": history})
        .then((response) => {
            console.log(response)
            const newResponseMessage = {
                message: response.data.answer,
                sender: "ChatGPT"
            }
            const newFinalMessages = [...messages, newMessage, newResponseMessage]
            setMessages(newFinalMessages)
            setHistory(response.data.history)
        })
        .catch(error => {
            console.log(error)
        });
        
        
    }

    
  return (
    <div className='row w-100 chat'>
        <div className='side-menu'>
            <div>
                <div className="faq-title">Suggested FAQs</div>
                <div className="questions">
                    <div className='question'>How much is a visa to Ethiopia?</div>
                    <div className='question'>US visa interview Questions</div>
                    <div className='question'>Visa application tips</div>
                    <div className='question'>US visa requirements</div>
                    <div className='question'>UK visa requirements</div>
                    <div className='question'>African visa free countries</div>
                    <div className='question'>Visa on arrival countries</div>
                </div>
            </div>
        </div>
        <div className='chat-interface col'>
            <MainContainer>
                <ChatContainer>
                    <MessageList
                        scrollBehavior='smooth'
                        typingIndicator={typing ? <TypingIndicator content="Visabud is typing"/> : null}
                    >
                        {messages.map((message, i) => {
                            return <Message key={i} model={message} className={message.sender} />
                        })}
                    </MessageList>
                    <MessageInput className='message-input' placeholder="Make your visa inquiries here" onSend={handleSend}/>
                </ChatContainer>
            </MainContainer>
        </div>
    </div>
  )
}

