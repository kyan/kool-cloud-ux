import React from "react";
import HeaderBar from "../connectors/header-bar"
import HomeMastheadConnector from '../connectors/home/home-masthead'
import HomeProjectList from '../connectors/home/home-project-list'

export default function Home() {

  return (
    <div>
      <HeaderBar />
      <HomeMastheadConnector/>
      <HomeProjectList/>
    </div>
  );

}
