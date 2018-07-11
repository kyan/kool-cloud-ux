import React from "react";
import PropTypes from 'prop-types';

import MemberEditable from './member-editable'
import SearchList from '../search-input'
import { Grid, Image } from 'semantic-ui-react'
export default function MemberListEdit({ members }) {
  return (
    <div className="ui segment">
      <Grid>
        <Grid.Row columns={2}>
        <Grid.Column><h4>Shared with</h4></Grid.Column>
        <Grid.Column>  <SearchList /></Grid.Column>
          </Grid.Row>
        </Grid>
      
      {members.map (
        (member, index)=> <MemberEditable key={index}member={ member } />
      )}
    </div>
  );
}

MemberListEdit.defaultProps = {
  members: []
};

MemberListEdit.propTypes = {
  members: PropTypes.array.isRequired
};

