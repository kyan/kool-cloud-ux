import React from "react";
import HeaderBar from "../presentors/header-bar";

export default function NotFound () {

  return (
    <div className="page-header">
      <HeaderBar/>
      <header className="masthead small ui">
        <div className="ui container">
            <h1>404</h1>
        </div>
      </header>
      <div className="ui container">
        Sorry page this page does not exist. 
      </div>
    </div>
  );
}
