import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const sVersion = "ver 0.2.2 (J219)";

class Main extends Component {
  render() {
    let sVerInfo = `${sVersion}`;
    return (
      <div className="App">
        <header className="App-header">
          {sVerInfo}
        </header>
        <hr />
        <div id="hello"></div>
        <hr />
      </div>
    );
  }
}

interface IProps {}
interface IState {}
class Hello extends Component<IProps, IState> {
  render() {
    return (
      <div className="Elem1">
          <h3>It is just 'hello' test</h3>
      </div>
    );
  }
}

ReactDOM.render(<Main />, document.getElementById('app'));
ReactDOM.render(<Hello />, document.getElementById('hello'));

