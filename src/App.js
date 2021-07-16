import React, { useState }  from 'react';
import Chatbot from 'react-chatbot-kit'
import './App.css';

import ActionProvider from './ActionProvider';
import MessageParser from './MessageParser';
import config from './config';

function App() {
  const [login,setLogin]=useState(false);
  const [bot,setBot]=useState(false);
  const goToCredentialsPage = () =>{
    setLogin(true);
  }
  const goToLandingPage = () =>{
    setBot(true);
  }
  return (
    <div className="App">
      <header className="App-header">
        {!login &&
        <div className="react-chatbot-kit-chat-container">
          <div className="logo"></div>
          <div className="summary">
            <h1>DXC Chatbot</h1>
            <p>Welcome to DXC Chatbot</p>
          </div>
          <button onClick={goToCredentialsPage}>Login</button>
        </div>
        }
        {login && !bot &&
        <div className="react-chatbot-kit-chat-container">
          <h2>Login Form</h2>

          <form>
            <div class="container">
              <label for="uname"><b>Username</b></label>
              <input type="text" placeholder="Enter Username" name="uname" required/>

              <label for="psw"><b>Password</b></label>
              <input type="password" placeholder="Enter Password" name="psw" required/>
                  
              <button onClick={goToLandingPage}>Login</button>
            </div>
          </form>
        </div>
        }

        {bot &&
        <Chatbot config={config} actionProvider={ActionProvider} messageParser={MessageParser} />
        }
      </header>
    </div>
  );
}
export default App;