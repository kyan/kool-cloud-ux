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
    return (
      <div>
        <button onClick={ this.deleteUser } className="ui icon tiny negative button"><i className="icon trash small"></i></button>
        <span className="user-label">Role:</span>
        <Dropdown onChange={ this.onChange } placeholder='Role' value={ member.role } selection options={
            [
              { key: 1, text: 'Owner', value: 'owner' },
              { key: 2, text: 'Animator', value: 'animator' },
              { key: 3, text: 'Critic', value: 'critic' }
            ] } />
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

