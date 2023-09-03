import React from 'react'
import { useState, useEffect } from 'react'
import './ChatInterface.css'
import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import {MainContainer, ChatContainer, MessageList, Message, MessageInput, TypingIndicator} from "@chatscope/chat-ui-kit-react";
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import { useLocation } from "react-router-dom";


export default function ChatInterface(props) {
    //const location = useLocation()
    const { data } = useLocation()
    console.log(data)
    const [typing, setTyping] = useState(false)
    const [messages, setMessages] = useState([
        {
            message: "Hello, I am VisaBud",
            sender: "ChatGPT"
        }
    ])
    const [has_questions, setHasQuestions] = useState(true)
    const [history, setHistory] = useState([])
    const [initial_context, setContext] = useState("You are a kind helpful assistant chatbot. Your job is to assist people applying for visa to travel abroad." + "My country of origin is Cameroon and I am currently residing in Cameroon and I want to travel to Canada.")
    const [questions, setQuestions] = useState([])
    const [answers, setAnswers] = useState([])
    const [idx, setIdx] = useState(0)


    const handleSend = (message) => {
        console.log(message)
        if (!message) {
            return
        }
        const newMessage = {
            message: message,
            sender: "user",
            direction: "outgoing"
        }
        const newMessages = [...messages, newMessage]
        setMessages(newMessages)
        setTyping(true)
        processMessageToChatGPT(newMessage)
        if (idx <= questions.length) {
            setAnswers([...answers, message])
        }
        console.log(questions, answers)
        setTyping(false)
    }


    async function genQuestions(context) {
        setTyping(true)
        await axios.post("http://127.0.0.1:5000/questions", {"context": context})
        .then((response) => {
            setQuestions(response.data.answer)
            if (questions) {
                setHasQuestions(true)
                const newResponseMessage = {
                    message: response.data.first,
                    sender: "ChatGPT"
                }
                setMessages([...messages, newResponseMessage])
            }
            setTyping(false)
        })
        .catch(error => {
            console.log(error)
        });
    }

    useEffect(() => {
        genQuestions(initial_context)
     }, []);

     async function genSuggestions() {
        setTyping(true)
        await axios.post("http://127.0.0.1:5000/suggestions", {"questions": questions, "answers": answers})
        .then((response) => {
            const suggestion = response.data.answer
            setHasQuestions(true)
            const newResponseMessage = {
                message: suggestion,
                sender: "ChatGPT"
            }
            setMessages([...messages, newResponseMessage])
            setTyping(false)
        })
        .catch(error => {
            console.log(error)
        });
    }

    function processMessageToChatGPT(newMessage){
        let len = questions.length
        if (idx >= len) {
            console.log(answers)
            setHasQuestions(false)
            const newResponseMessage = {
                message: "Cool, we have enough information :). Generating suggestions...",
                sender: "ChatGPT"
            }
            setTyping(true)
            setMessages([...messages, newResponseMessage])
            genSuggestions()
            return
        }
        let newResponseMessage = {}
        newResponseMessage = {
            message: questions[idx],
            sender: "ChatGPT"
        }
        setIdx(idx+1)
        const newFinalMessages = [...messages, newMessage, newResponseMessage]
        setMessages(newFinalMessages)
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
                        typingIndicator={typing ? <TypingIndicator content="Visabud is typing..."/> : null}
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

