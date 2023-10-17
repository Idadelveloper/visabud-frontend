import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate, useLocation } from "react-router-dom";
import './ChatInterface.css'
import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import {MainContainer, ChatContainer, MessageList, Message, MessageInput, TypingIndicator} from "@chatscope/chat-ui-kit-react";
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignIn, faRefresh } from '@fortawesome/free-solid-svg-icons';


export default function ChatInterface(props) {
    const [typing, setTyping] = useState(false)
    const [messages, setMessages] = useState([
        {
            message: "Hello, I am VisaBud. A friendly agent aimed at guiding you make any visa inquiries",
            sender: "ChatGPT"
        }
    ])
    const location = useLocation();
    const [has_questions, setHasQuestions] = useState(true)
    const [history, setHistory] = useState([])
    const [initial_context, setContext] = useState("You are a kind helpful assistant chatbot. Your job is to assist people applying for visa to travel abroad. Use this personal background informaion to help me:" + location.state.context)
    console.log("context " + location.state.context)
    const [questions, setQuestions] = useState([])
    const [answers, setAnswers] = useState([])

    const [idx, setIdx] = useState(0)
    const url = "http://127.0.0.1:5000"



    const handleSend = (message) => {
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

        // Scroll to the bottom of the chat box
        const chatInterface = document.querySelector('.cs-message-list')
        chatInterface.scrollTop = chatInterface.scrollHeight
    }


    async function genQuestions(context) {
        //setTyping(true)
        await axios.post(url + "/questions", {"context": context})
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

    async function genCoverLetter(msg1, msg2) {
        setTyping(true)
        await axios.post("http://127.0.0.1:5000/cover", {"questions": questions, "answers": answers.slice(1)})
        .then((response) => {
            const cover = response.data.answer
            const newResponseMessage = {
                message: cover,
                sender: "ChatGPT"
            }
            setMessages([...messages, msg1, msg2, newResponseMessage])
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

        await axios.post(url + "/suggestions", {"questions": questions, "answers": answers.slice(1)})
        .then((response) => {
            const suggestion = response.data.answer
            const newResponseMessage = {
                message: suggestion,
                sender: "ChatGPT"
            }
            const coverInfo = {
                message: "Now, I'll generate a custom visa cover letter for you. ",
                sender: "ChatGPT"
            }
            setMessages([...messages, newResponseMessage, coverInfo])
            setTyping(true)
            genCoverLetter(newResponseMessage, coverInfo)
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
    <div className='chat'>
        {/* <div className='side-menu'>
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
        </div> */}
        <div className='chat-interface'>
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
                    <MessageInput placeholder="Make your visa inquiries here" onSend={handleSend}/>
                </ChatContainer>
            </MainContainer>
        </div>
    </div>
  )
}

