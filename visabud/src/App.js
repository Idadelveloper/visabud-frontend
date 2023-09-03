import "./App.css";
import { Routes, Route } from 'react-router-dom';

import LandingPage from "./Pages/LandingPage/LandingPage";
import ChatPage from "./Pages/ChatPage/ChatPage"
import ContextFormPage from "./Pages/Context/ContextFormPage";


function App() {
  return (
    <div className="">
      <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/chat" element={<ChatPage />} />
          <Route path="/start" element={<ContextFormPage />} />
       </Routes>
    </div>
  );
}

export default App;
