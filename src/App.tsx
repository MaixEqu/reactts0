import React, { Component } from 'react';

const sVersion = "ver 0.1.0 (J219)";

export class Main extends Component {
  render() {
    let sVerInfo = `[]: ${sVersion}`;
    return (
      <div className="App">
        <header className="App-header">
          {sVerInfo}
        </header>
      </div>
    );
  }
}

