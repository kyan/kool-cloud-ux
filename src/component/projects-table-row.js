import React from "react";
import { Table } from 'semantic-ui-react'
import FadeIn from 'react-fade-in';
export default function ProjectTableRow ({ viewProjectAction, project, users }) {
    const getUserOwner = (ownerid) => {
      return users.filter((user) => {
        return ownerid === user.id
      }).map((user) => { 
        return user.nickname;
      }).pop();
    }
  
    const getPermission = (notifications) => {
      return notifications ? (
        <span><i className="bell outline icon"></i>{notifications}</span>
      ) : null;
    }
  
    return(
      <Table.Row>
        <Table.Cell ><FadeIn>{project.title}</FadeIn></Table.Cell>
        <Table.Cell><FadeIn>{ getUserOwner(project.ownerid) }</FadeIn></Table.Cell>
        <Table.Cell></Table.Cell>
        <Table.Cell><a href="" onClick={ viewProjectAction }><i className="eye icon"></i> View</a></Table.Cell>
        <Table.Cell positive={Boolean(project.notifications)}><FadeIn>{ getPermission(project.notifications) } </FadeIn></Table.Cell>
      </Table.Row>
    )
}

