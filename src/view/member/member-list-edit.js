import React from "react";
import PropTypes from 'prop-types';
import MemberEditable from './member-editable'
import SearchList from '../search-input'
import { Grid } from 'semantic-ui-react'
import setUserFilterAction from '../../signal/set-user-filter';
import createMember from '../../action/members/create-member';
import filterUsers from '../../store/pipe/filter-users';
export default function MemberListEdit({ members }) {

  return (
    <div className="ui segment">
      <Grid>
        <Grid.Row columns={2}>
          <Grid.Column><h4>Shared with</h4></Grid.Column>
          <Grid.Column>

            <SearchList onSelect={ createMember } data={filterUsers()} setFilterAction={setUserFilterAction}/>
          
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <div className="ui divider"></div>
      { members.map (
          (member, index) => <MemberEditable key={index} member={ member } />
        )
      }
    </div>
  );
}

MemberListEdit.defaultProps = {
  members: []
};

MemberListEdit.propTypes = {
  members: PropTypes.array.isRequired
};

