import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
import './App.css'

const App = () => {
  return (
    <ChatEngine 
      height="100vh"
      projectID="a6367a83-deb9-4af7-827e-e6b43974db33"
      userName="azisulyagifari"
      userSecret="azisulyagifari"
      renderChatFeed={(chatAppProps)=> <ChatFeed {...chatAppProps}/>}
    />
  );
}

export default App;