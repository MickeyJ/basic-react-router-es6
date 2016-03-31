import React, { Component, PropTypes } from 'react'
import {Router, Route, Redirect, hashHistory} from 'react-router'

class Home extends Component{
  componentWillMount(){
    this.context.router.setRouteLeaveHook(
      this.props.route,
      this.routeWillLeave
    )
  }
  routeWillLeave(nextLocation){
    console.log(`leaving home for ${nextLocation.pathname}`);
  }
  render(){
    return(
      <div>
        <h1>Home</h1>
        <p>{this.props.params.message}</p>
      </div>
    )
  }
}

Home.contextTypes = {
  router: PropTypes.object.isRequired
};

export default Home