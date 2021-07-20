import { useEffect, useState } from 'react';

import logo from './logo.svg';
import './App.css';

import Cars from './components/Cars';

function App() {
  const [welcomeMessage, setWelcomeMessage] = useState([]);

  useEffect(() => {
    const getWelcomeMessage = async() => {
      const { welcomeMessage } = await fetch('/api/welcome-message')
          .then(response => response.json());
      setWelcomeMessage(welcomeMessage);
    }

    getWelcomeMessage();
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>{welcomeMessage}</h1>
        <Cars />
      </header>
    </div>
  );
}

export default App;
