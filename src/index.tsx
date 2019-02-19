import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const sVersion = "ver 0.3.2 (J219)";

class Main extends Component {
  render() {
    let sVerInfo = `${sVersion}`;
    return (
      <div className="App">
        <header className="App-header">
          {sVerInfo}
        </header>
        <hr />
        <div id="hello1"></div>
        <div id="hello2"></div>
        <hr />
      </div>
    );
  }
}

interface IProps {
  text?: string;
  path?: string;
}
interface IState {
  text?: string
}
class Hello extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    // this.setState({text: "state text"});
  }
  render() {
    const sFPath = location.href + '/data/' + this.props.path
    console.log("path: " + sFPath);
    sGetTxt(sFPath);
    return (
      <div className="Elem1">
          <h3>It is just 'hello' test. Path: '{sFPath}'</h3>
      </div>
    );
  }
}

const sGetTxt = async (path: string): Promise<void> => {
  try {
    const response = await fetch(path);
    const text = await response.text();
    console.log(text);
  } catch(error) {
    console.error(error);
  }
}

//const sDataUrl = location.href + '/data/1.txt'
//console.log(sDataUrl)
//sGetTxt(sDataUrl)
ReactDOM.render(<Main />, document.getElementById('app'));
ReactDOM.render(<Hello path = "1.txt" />, document.getElementById('hello1'));
ReactDOM.render(<Hello path = "2.txt" />, document.getElementById('hello2'));


