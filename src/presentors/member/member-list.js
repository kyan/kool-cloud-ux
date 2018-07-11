import React from "react";
import PropTypes from 'prop-types';
import { Label } from 'semantic-ui-react'

export default function MemberList({ members }) {
  return (
    <div className="html ui top attached segment">
        {
          members.map(function(member, index) {
            return (
                <Label key={index} image>
                  <img alt='' src='./img/fake-image.png' />
                  { member.username }
                </Label>
            )
          })
        }
        <div className="ui top attached label">Members</div>
    </div>
  );
}

MemberList.defaultProps = {
  members: []
};

MemberList.propTypes = {
  members: PropTypes.array.isRequired
};

