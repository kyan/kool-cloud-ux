import React from "react";
import CreateShotCard from '../shot/create-shotcard';

import ShotCard from '../shot/shotcard';
import PropTypes from 'prop-types';

export default function ShotList({ shots, canCreateShots, projectid }) {

  return (
    <div>
      <div className="ui grid stackable shots-grid">
        <div className="four column row">
          {
            shots.map(function(shot, index) {
              return (
                <div key={index} className="ui column">
                  <ShotCard shot={shot} editable={ canCreateShots } /> 
                </div>
              )
            })
          }
        { canCreateShots &&  <div  className="ui column">
          <CreateShotCard projectid={projectid}/>
          </div> }
        { !canCreateShots && (shots.length===0) && 'No Shot have been created for this project, yet.'}
        </div>
      </div>
     </div>
  );
}

ShotList.defaultProps = {
  shots: [],
  projectid: ''
};

ShotList.propTypes = {
  shots: PropTypes.array.isRequired,
  projectid: PropTypes.string
};

