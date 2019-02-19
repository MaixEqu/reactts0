import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const sVersion = "ver 0.3.1 (J219)";

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
    console.log("dd: " + this.props.text);
    return (
      <div className="Elem1">
          <h3>It is just 'hello' test. Prop: {this.props.text}</h3>
      </div>
    );
  }
}

const sGetTxt = async (path: string): Promise<void> => {
  /*
  fetch(path)
    .then((response) => response.text())
    .then((sRes) => {
      console.log(sRes);
    })
    .catch((error: Error) => {
      console.error(error);
    });
  */
  try {
    const response = await fetch(path);
    const text = await response.text();
    console.log(text);
  } catch(error) {
    console.error(error);
  }
}

const sDataUrl = location.href + '/data/1.txt'
console.log(sDataUrl)
sGetTxt(sDataUrl)
ReactDOM.render(<Main />, document.getElementById('app'));
ReactDOM.render(<Hello text="prop = 01" />, document.getElementById('hello1'));
ReactDOM.render(<Hello text="prop = 02" />, document.getElementById('hello2'));


