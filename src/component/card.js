import React from "react";
import { Component } from "react";

class Card extends Component {
  render () {
    return (
      <div className="ui card">
        <div className="content">
        <i class="icon user"></i> Eliot <div className="right floated meta">Plan 1 has a really long title</div>
        </div>
        <div className="image">
          <img src="./img/fake-image.png" alt=''/>
        </div>
        <div className="content">
          <span className="right floated">
            <i className="heart outline like icon"></i>
            17 likes
          </span>
          <i className="comment icon"></i>
          3 comments
        </div>
        <div className="extra content">
          <div className="ui large transparent left icon input">
            <i className="heart outline icon"></i>
            <input type="text" placeholder="Add Comment..."/>
          </div>
        </div>
      </div>
    )
  }
}

export default Card