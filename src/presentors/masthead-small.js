import React from "react";
import { Breadcrumb } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import changeLocation from "../signal/change-location"

function MastheadSmall({title}) {

  return (
    <header className="masthead small ui">
      <div className="ui container">
        <div className="ui container">
            <Breadcrumb>
              <Breadcrumb.Section onClick={ changeLocation('#/') }>Home</Breadcrumb.Section>
              <Breadcrumb.Divider />
              <Breadcrumb.Section >{title}</Breadcrumb.Section>
            </Breadcrumb>
        </div>
      </div>
    </header>
  )
}

MastheadSmall.propTypes = {
  title: PropTypes.string
};

export default MastheadSmall


