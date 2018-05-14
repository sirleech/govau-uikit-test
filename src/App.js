import React, { Component } from 'react';
import AUdirectionLink from '@gov.au/direction-links';
import AUaccordion from '@gov.au/accordion';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Hello Ui Kit!</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <h2>Direction links</h2>
        <AUdirectionLink link="#url" text="Back" direction="left" />
        <AUdirectionLink link="#url" text="Next" />
        <AUdirectionLink link="#url" text="Top" direction="up" />
        <AUdirectionLink link="#url" text="Skip to footer" direction="down" />

        <h2>Accordion</h2>
        <AUaccordion open header="Accordion title">
          Here <a href="#url">is</a> some accordion content
        </AUaccordion>

      </div>
    );
  }
}

export default App;
