import React from "react";
import PropTypes from 'prop-types';
import { Dropdown } from 'semantic-ui-react'

export default class MemberListEdit extends React.Component {

  deleteUser = (e) => {
    console.log('deleteUser', this.props.member)
  }

  onChange = () => {
    console.log('onChange');
  }

  render() {
    const { member } = this.props;
    const deleteButton = (member.role !== 'owner') ?
      (<button onClick={ this.deleteUser } className="ui icon negative button"><i className="icon trash small"></i></button>):
      (<i className="certificate icon"></i>)

    const dropdown = (member.role !== 'owner') ?
      (<Dropdown onChange={ this.onChange } placeholder='Role' value={ member.role } selection options={
      [
        { key: 1, text: 'Animator', value: 'animator' },
        { key: 2, text: 'Critic', value: 'critic' },
        { key: 3, text: 'Producer', value: 'producer' }
      ] } />)
       : (<span className="user-label"> owner </span>)

    
    return (
      <div>
        { deleteButton }
        <span className="user-label">Role:</span>
        {dropdown}
        <span className="user-label">{member.username} </span>
        <div className="ui divider"></div>
      </div>
    );
  }
}

MemberListEdit.defaultProps = {
  member: {
    username: '',
  }
};

MemberListEdit.propTypes = {
  member: PropTypes.object.isRequired
};

