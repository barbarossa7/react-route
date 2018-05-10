import React,{ Component } from 'react';
import { Link } from 'react-router'

import BrowserDemo from 'site/theme/template/BrowserDemo';
import AsideCollapse from './App'
import './App.css'

export default class App extends Component{

  render() {
    return (
      <div>
        <AsideCollapse />
      </div>
    );
  }
}