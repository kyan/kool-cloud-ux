import React from "react";
import PropTypes from 'prop-types';
import { TextArea } from 'semantic-ui-react'
import create from '../../action/shots/create-shot'

export default class CreateShotCard extends React.Component {

    onSubmit = (e) => {
      e.preventDefault();
      if(this.title.value !=='' && this.description.ref.value !=='') {
        create({
          title: this.title.value,
          description: this.description.ref.value
        });
      }
    }

    render () {
      return (
        <div className="ui card">
          <div className="content">
            Create Shot
          </div>
          <div className="content">
            <input key='pageTitle' rows={1} ref={c => { this.title = c } } onChange={ this.onChange }  placeholder="Enter title"/>
          </div>
          <div className="content">
            <TextArea key='pageTitle' rows={4} ref={c => { this.description = c } } onChange={ this.onChange } placeholder="Enter description"/>
          </div>
          <div className="ui two bottom attached buttons">
            <div className="tiny ui button disabled">
            </div>
            <div className="tiny ui button primary" onClick={ this.onSubmit }>
              <i className="icon save"></i> Create 
            </div>
          </div>
          <div className="extra content">
          </div>
        </div>
      )
    }
}

CreateShotCard.defaultProps = {
  shot: {}
};

CreateShotCard.propTypes = {
  shot: PropTypes.object
};
