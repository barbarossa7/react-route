import React from 'react'
import { Router, Route,IndexRoute,hashHistory } from 'react-router'
import App from './App'

import Duck from './pages/Duck'
import marquis from './pages/marquis'
import count from './pages/count'
import viscount from './pages/viscount'
import baron from './pages/baron'
import login from './pages/login'


export default () =>(
    <Router history={hashHistory}>
        <Route path='/' component={App}>
            <IndexRoute component={Duck} />
            <Route path='/marquis' component={marquis} />
            <Route path='/count' component={count} />
            <Route path='/viscount' component={viscount} />
            <Route path='/baron' component={baron} />
        </Route>
        <Route path='/login' component={login} />
    </Router>
)