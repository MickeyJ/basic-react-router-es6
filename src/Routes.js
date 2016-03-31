import React, { Component } from 'react'
import {Router, Route, browserHistory} from 'react-router'

import Layout from './components/Layout'
import Home from './components/Pages/Home'
import About from './components/Pages/About'
import Contact from './components/Pages/Contact'

export default class App extends Component {
  render(){
    return(
      <Router history={browserHistory}>
        <Route component={Layout}>
          <Route path="/" component={Home} />
          <Route path="/about/(:message)" component={About} />
          <Route path="/contact" component={Contact} />
        </Route>
      </Router>
    )
  }
}


