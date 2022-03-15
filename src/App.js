import './App.css';
import Home from './components/Home/Home'
import Login from './components/auth/Login/Login'
import Navbar from './components/auth/Navbar/Navbar';
import { ChatEngine } from 'react-chat-engine'
import ChatFeed from './components/ChatFeed'
const App = () => {
  return (
    <ChatEngine
      height= "100vh"
      projectID = "ab55c953-a90a-488e-ad90-ccc0da6e1dd6"
      userName="Dragon"
      userSecret="secret"
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} /> }
    />
  );
}

export default App;
