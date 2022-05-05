import React from 'react';
import bolsologo from './img/bolsonaro-cartoon.jpg';
import twitterLogo from './img/twitter-logo.png';
import './App.css';

function getDaysToMandateEnd() {
  const now = new Date();
  const start = new Date(now.getFullYear(), 0, 0);
  let diff = (now.valueOf() - start.valueOf()) + ((start.getTimezoneOffset() - now.getTimezoneOffset()) * 60 * 1000);
  const oneDay = 1000 * 60 * 60 * 24;
  const day = Math.floor(diff / oneDay);
  return 365 - day
}

function getTweetText() {
  let url = "https://twitter.com/intent/tweet?text="
  let daysToMandateEnd = getDaysToMandateEnd()
  url += `Faltam ${daysToMandateEnd} dias para o fim do governo Bolsonaro.`
  return url
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={bolsologo} width="200px" height="200px" className="App-logo" alt="bolsonaro" />
        <p>
          Faltam <span className="Days-Span">{getDaysToMandateEnd()}</span> dias para o fim do governo Bolsonaro.
        </p>
        <div className="Twitter-Container">
          <a href={getTweetText()}
            target="_blank"
          >
            <img src={twitterLogo} className="Twitter-Logo" alt="" />
          </a>
          <p>Poste isso no twitter</p>
        </div>
      </header>
    </div>
  );
}

export default App;
