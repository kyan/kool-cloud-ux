import React from "react";
import HeaderBar from "../presentors/header-bar";

export default function NotFound () {

  return (
    <div class="page-header">
      <HeaderBar/>
      <header class="masthead small ui">
        <div class="ui container">
            <h1>404</h1>
        </div>
      </header>
      <div class="ui container">
        Sorry page this page does not exist. 
      </div>
    </div>
  );
}
