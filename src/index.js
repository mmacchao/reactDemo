import React, {Component} from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import './index.css';
import {CommentBox} from './jike_demo'

var data = [
  {author: "Pete Hunt", text: "This is one comment"},
  {author: "Jordan Walke", text: "This is *another* comment"}
];

const root = document.getElementById('root')
ReactDOM.render(<CommentBox data={data}></CommentBox>, root)

/**
 * 官网例子1
 */
/*
// const case1 = React.createClass({
//   render() {
//     return `react已经运行了 ${this.props.name} 秒`
//   }
// })
function Case1(props) {
  // return 'react已经运行了 ${props.name} 秒'
  return <div>{props.second}</div>
}
// }
// const Case1 = React.createElement(
//   'div',
//   {},
//  
// )

let second = 0
setInterval(() => {
  second++
  ReactDOM.render(<Case1 second={second}></Case1>, root)
}, 1000)



/**
 *  表单
 */
/*
class NameForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: ''
    }
  }
  handleChange = (e) => {
    this.setState({value: e.target.value})
  }
  handleSubmit = (e) => {
    e.preventDefault()
    alert('input的值为: '+ this.state.value)
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          name: <input type="text" value={this.state.value} onChange={this.handleChange}/>
        </label>
      </form>
    )
  }
}

ReactDOM.render(<NameForm></NameForm>, root)


/*
const number = [1,2,3]
const list = number.map(n => <li>{n}</li>)

ReactDOM.render(<ul>{list}</ul>, root)

/*

function LogininBtn(props) {
  return <button onClick={props.onClick}>login in</button>
}
function LoginoutBtn(props) {
  return <button onClick={props.onClick}>login out</button>
}

class LoginControl extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoggedIn: false
    }
  }
  handleLogininClick = () => {
    this.setState({isLoggedIn: true})
  }
  handleLoginoutClick = () => {
    this.setState({isLoggedIn: false})
  }
  render() {
    const isLoggedIn = this.state.isLoggedIn
    let button = null
    if(!isLoggedIn) return <LogininBtn onClick={this.handleLogininClick}></LogininBtn>
    else return <LoginoutBtn onClick={this.handleLoginoutClick}></LoginoutBtn>
  }
}
ReactDOM.render(<LoginControl></LoginControl>, root)

/*
const data = {
  name: 'zma'
}
const element = (
  <div title={data.name}>hello world element {data.name}</div>
)



ReactDOM.render(
  // <App />,
  // <div>hello world</div>,
  element,
  document.getElementById('root')
);

function tick() {
  const el = <div>hello world <br/> It is:  {new Date().toLocaleTimeString()}</div>
  ReactDOM.render(el, document.getElementById('root'))
}

class Clock extends Component {
  constructor(props) {
    super(props)
    this.state = {
      date: new Date()
    }
  }
  componentDidMount() {
    this.timerId = setInterval(() => this.tick(), 1000)
  }
  componentWillUnmount() {
    clearInterval(this.timerId)
  }
  render() {
    return <div>hello world <br/> It is : {this.state.date.toLocaleString()}</div>
  }
  tick() {
    this.setState({date: new Date()})
  }
}

// ReactDOM.render(<Clock></Clock>, root)



// setInterval(tick, 1000)

function Welcome(prop) {
  return <div name={prop.name}>welcome {prop.name}</div>
}

let el = <Welcome name="zma2"></Welcome>

function App(prop) {
  return (
    <div>
      <Welcome name="zma1"></Welcome>
      <Welcome name="zma2"></Welcome>
      <Welcome name="zma3"></Welcome>
    </div>
  )
}

el = <App></App>
// ReactDOM.render(el, root)

class ToggleBtn extends Component {
  constructor(props) {
    super(props)
    this.state = {
      btnState: true
    }
    // this.handleClick = this.handleClick.bind(this)
  }
  render() {
    return <button onClick={this.handleClick}>{this.state.btnState ? 'ON' : 'OFF'}</button>
  }
  handleClick = () => {
    this.setState(prevState => ({
      btnState: !prevState.btnState
    }))
  }
}

ReactDOM.render(<ToggleBtn></ToggleBtn>, root)
*/