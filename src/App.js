import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import { createRoot } from 'react-dom/client';
import './App.css';
import lyle from './lyle.jpg';
import port1 from './port1.jpg';
import port2 from './port2.jpg';
import TestComponent from './card';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container">
            <a className="navbar-brand" href="#about">About Me</a>
            <a className="navbar-brand" href="#portfolios">Portfolios</a>
          </div>
        </nav>
      </header>

      {/* About me */}
      <section id="about" className="jumbotron text-center mr-3 pb-3">
        <div className="bg-img"></div> 
        <div className="container content">
          <img src={lyle} alt="It's a me! Mario" className="rounded-circle shadow p-img mr-3 mt-3 mb-3" />
          <h1 className="jumbotron-heading">Welcome to my portfolio</h1>
          <p className="lead pb-3">~Well I'm a writer~</p>
        </div>
      </section>

      {/* Portfolios */}
      <div id="portfolios" className="App-body">
        
        {/* Writing Work Portfolios Heading */}
        <div className="writing-portfolios">
          <h2>Writing Work Portfolios:</h2>
        </div>
        
        {/* Flexbox container for cards */}
        <div className="cards-wrapper">
    <div className="card-container">
    <TestComponent title="Port1" img={port2} />
    <TestComponent title="Port2" img={port2} />
    <TestComponent title="Port3" img={port2} />
    <TestComponent title="Port4" img={port2} />
        </div>
        </div>
        </div>
    </div>
  );
}

export default App;
