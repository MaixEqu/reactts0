import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const sVersion = "ver 0.3.9 (J219)";

class Main extends Component {
  render() {
    let sVerInfo = `${sVersion}`;
    return (
      <div className="App">
        <header className="App-header">
          {sVerInfo}
        </header>
        <hr />
        <div id="hello1">hello 1</div>
        <div id="hello2">hello 2</div>
        <hr />
        <div id="textarea1"></div>
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
  constructor(props: IProps, states: IState) {
    super(props, states);
    //states.text = "sdfdsf"
  }
  //onClick(e: React.MouseEvent<HTMLInputElement>): void {
  onClick() {
    //this.setState({text: "dd -- ww"})
    console.log("click on 3")
  }
  render() {
    const sFPath = location.href + '/data/' + this.props.path
    console.log("path: " + sFPath);
    sGetTxt(sFPath);
    const sText = (this.state && 'text' in this.state) ? this.state.text : "no text now."
    return (
      <div className="Elem1">
          <h4>It is just 'hello' test. Path: '{sFPath}'</h4>
          <input type="button" defaultValue={" + " + this.props.path} onClick={this.onClick} />
          <div>Text: {sText}</div>
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

const sGetTxt_ = async (path: string, callback: Function) => {
  try {
    const response = await fetch(path);
    const text = await response.text();
    console.log(text);
    callback(text)
  } catch(error) {
    console.error(error);
  }
}

interface IPropsTA {
  text?: string;
}
interface IStateTA {
  text?: string
}
class TextAreaCounter extends Component<IPropsTA, IStateTA> {
  constructor(props: IPropsTA) {
    super(props)
    const sText = this.props.text || "no text"
    this.state = {text: sText,}
    const sFPath = location.href + '/data/1.txt'
    console.log("path: " + sFPath);
    this.sGetTxt_2(sFPath) //, this._callBack)
    this._onChange = this._onChange.bind(this);
    //this._callBack = this._callBack.bind(this);
    //this.state = {}
  }

  sGetTxt_2 = async (path: string): Promise<void> => {
    try {
      const response = await fetch(path);
      const text = await response.text();
      console.log("cb2:\n" + text);
      this.setState({text});
      //this.state = {text: text,}
    } catch(error) {
      console.error(error);
    }
  }

  _onChange(ev: React.ChangeEvent<HTMLTextAreaElement>) {
    //console.log(ev.target.value);
    //console.log("5 " + ev);
    //this.setState({'text': ev.target.value});
  };

  _callBack(sData: string) {
    //this.setState({'text': sData});
  }

  render() {
    //const sText = this.props.text || 'no state'
    const sText = this.state.text || ''
    return (
      <div id="textareacounter">
        <textarea defaultValue={sText} rows={14} cols={40} onChange={this._onChange} />
        <h3>{sText.length}</h3>
      </div>
    );
  }
} 

// const Hello1 = <Hello path = "1.txt" text = "one text..." />

ReactDOM.render(<Main />, document.getElementById('app'));
// ReactDOM.render(Hello1, document.getElementById('hello1'));
// ReactDOM.render(<Hello path = "2.txt" />, document.getElementById('hello2'));
ReactDOM.render(<TextAreaCounter />, document.getElementById('textarea1'));


