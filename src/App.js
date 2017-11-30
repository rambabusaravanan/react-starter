import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

        <Router>
          <div>
            <NavBar />
            <Route exact path="/" component={Home} />
            <Route path="/home" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
          </div>
        </Router>
      </div>
    );
  }
}

/**
 * This could be a Sidebar or a Navbar
 * For nested routes, please refer https://stackoverflow.com/a/43846223/1747111
 */
function NavBar(props) {
  return (
    <div style={{ flex: 1 }}>
      <NavBarItem to="/home">Home</NavBarItem>
      <NavBarItem to="/about">About</NavBarItem>
      <NavBarItem to="/contact">Contact</NavBarItem>
    </div>
  );
}

const style = {
  margin: '10px 0',
  padding: '10px',
  display: 'inline-block',
  borderRadius: '3px'
};
const activeStyle = {
  ...style,
  background: 'grey',
  color: 'white'
};

function NavBarItem(props) {
  const active =
    props.to === '/'
      ? window.location.pathname === '/'
      : window.location.pathname.startsWith(props.to);

  return (
    <Link style={active ? activeStyle : style} to={props.to}>
      {props.children}
    </Link>
  );
}

function Home() {
  return <p className="App-intro">This is Home Page</p>;
}

function About() {
  return <p className="App-intro">This is About Us Page</p>;
}

function Contact() {
  return <p className="App-intro">Contact Us : user@example.com</p>;
}

export default App;
