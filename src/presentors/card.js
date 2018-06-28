import React from "react";

export default function Card ({title, creator, imageUrl, likes}) {
    return (
      <div className="ui card">
        <div className="content">
        <i className="icon user"></i> Eliot <div className="right floated meta">Plan 1 has a really long title</div>
        </div>
        <div className="image">
          <img src="./img/fake-image.png" alt=''/>
        </div>
        <div className="content">
          <span className="right floated">
            <i className="heart outline like icon"></i>
            17 likes
          </span>
        </div>
        <div className="extra content">
        </div>
      </div>
    )
}

