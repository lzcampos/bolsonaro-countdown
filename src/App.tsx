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

function getTweetUrl() {
  let url = "https://twitter.com/intent/tweet?text="
  let daysToMandateEnd = getDaysToMandateEnd()
  url += `Faltam ${daysToMandateEnd} dias para o fim do governo Bolsonaro.`
  url += `%0a %0ahttps://bolsonaro-countdown1.herokuapp.com/`
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
       
        <button onClick={ () => window.open(getTweetUrl(), '_blank') }
          className="Twitter-Button"
        >
          <img src={twitterLogo} className="Twitter-Logo" alt="" />
          <p>Poste isso no twitter</p>
        </button>
      </header>
    </div>
  );
}

export default App;
