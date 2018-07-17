import React from "react";
import HeaderBar from "../connector/header-bar"
import HomeMastheadConnector from '../connector/home/home-masthead'
import HomeProjectList from '../connector/home/home-project-list'
import readProjectsList from '../action/projects/read-projects-list'
import { dispatch } from "../store/store"

export default function Home() {
  dispatch(readProjectsList);

  return (
    <div>
      <HeaderBar />
      <HomeMastheadConnector/>
      <HomeProjectList/>
    </div>
  );

}
