import logo from './logo.svg';
import './App.css';

import Cars from './components/Cars';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Cars />
      </header>
    </div>
  );
}

export default App;
