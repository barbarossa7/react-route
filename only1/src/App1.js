import React,{ Component } from 'react';
import { Link } from 'react-router'
import { Button } from 'antd';
import './App.css'

export default class App extends Component{

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="boxed">
          <ul roles="nav">
              <li><Link to='/Duck'>Duck</Link></li>
              <li><Link to='/marquis'>marquis</Link></li>
              <li><Link to='/count'>count</Link></li>
              <li><Link to='/viscount'>viscount</Link></li>
              <li><Link to='/baron'>baron</Link></li>
          </ul>
          <div id="content-container" className="content-container">
            <div id="page-content">
              {this.props.children}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
