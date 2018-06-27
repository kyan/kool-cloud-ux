import React from "react";
import { Component } from "react";
import HeaderBar from "../partials/header-bar"
import MastheadBig from '../partials/masthead-big'
import HomeProjectList from '../partials/home-project-list'

class Home extends Component {
  
  render() {
    return (
      <div>
        <HeaderBar />
        <MastheadBig/>
        <HomeProjectList/>
      </div>
    );
  }

}

export default Home
