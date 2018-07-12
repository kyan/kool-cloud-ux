import React from "react";
import PropTypes from 'prop-types';

export default function ShotCard ({shot, editable}) {
    const editShot = (e) => {
      window.location = `#/shot/edit/345678`
    }

    const editableButton = () => 
    editable && (<div onClick={editShot} disabled className="tiny ui button">
            <i className="icon edit"></i>
          </div>)
    

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
          { editableButton() }
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
