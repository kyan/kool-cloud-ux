import React from "react";
import PropTypes from 'prop-types';

export default function ShotCard ({shot}) {
    return (
      <div className="ui card">
        <div className="content">
           {shot.title}
          <div className="right floated meta"><i className="icon user"></i>{shot.userid} </div>
        </div>
        <div className="image">
          <img src="./img/fake-image.png" alt=''/>
        </div>

        <div className="ui two bottom attached buttons">
          <div className="tiny ui button disabled">
            <i className="icon edit"></i>
          </div>
          <div className="tiny ui button ">
          <i className="play icon"></i>
          </div>
        </div>
        <div className="extra content">
          <div className="description">
            {shot.description}
          </div>
        </div>
      </div>
    )
}

ShotCard.defaultProps = {
  shot: {
    
  }
};

ShotCard.propTypes = {
  shot: PropTypes.object
};
