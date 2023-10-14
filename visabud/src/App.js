import "./App.css";
import { Routes, Route } from 'react-router-dom';

import LandingPage from "./Pages/LandingPage/LandingPage";
import ChatPage from "./Pages/ChatPage/ChatPage"
import ContextFormPage from "./Pages/Context/ContextFormPage";

import Signup from "./Pages/Sign up/Signup";
import Login from "./Pages/Login/Login";

import VisaNotRequiredPage from "./Pages/VisaNotRequired/VisaNotRequiredPage";



function App() {
  return (
    <div className="">
      <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/chat" element={<ChatPage />} />
          <Route path="/visa-not-required" element={<VisaNotRequiredPage />} />
          <Route path="/start" element={<ContextFormPage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
       </Routes>
    </div>
  );
}

export default App;
