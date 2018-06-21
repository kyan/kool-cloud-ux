import React from "react";
import { connect } from "react-redux"
import { Component } from "react";
import FadeIn from 'react-fade-in';
import { Table, Button} from 'semantic-ui-react'
import _ from "lodash";

const TableRow = ({ viewProjectAction, project, users }) => {
  const getUserOwner = (ownerid) => {
    return users.filter((user) => {
      return ownerid === user.id
    }).map((user) => { 
      return user.nickname;
    }).pop();
  }

  return(
      <Table.Row >
        <Table.Cell ><FadeIn>{project.title}</FadeIn></Table.Cell>
        <Table.Cell><FadeIn>{ getUserOwner(project.ownerid) }</FadeIn></Table.Cell>
        <Table.Cell></Table.Cell>
        <Table.Cell><Button size='mini' onClick={ viewProjectAction } >View</Button> | <Button size='mini'>Modify</Button></Table.Cell>
        <Table.Cell positive={Boolean(project.notifications)}><FadeIn>{project.notifications}</FadeIn></Table.Cell>
      </Table.Row>
  )
}

class ProjectsTable extends Component {

  filterProjects(projects, searchFilter) {
    const re = new RegExp(_.escapeRegExp(searchFilter), 'i');
    const isMatch = result => re.test(result.title)
    return _.filter(projects, isMatch);
  }

  rows(projects, searchFilter) {
    const filteredProjects = this.filterProjects(projects, searchFilter)
    return (filteredProjects) ? filteredProjects.map((project, index) => {
      return  (
        
        <TableRow 
          viewProjectAction={ () => { this.props.actions.viewProject(project.id); } }
          project={ project }
          users={ this.props.projects }
          key={ index }
        />
        
      )
    }) : null;
  }

  render() {
    const {projects, searchFilter} = this.props;
    return (
      <Table >
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell >Project</Table.HeaderCell>
            <Table.HeaderCell>Owner</Table.HeaderCell>
            <Table.HeaderCell>Role</Table.HeaderCell>
            <Table.HeaderCell>Actions</Table.HeaderCell>
            <Table.HeaderCell>Notifications</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          { this.rows(projects, searchFilter) }
        </Table.Body>
        <Table.Footer>
          <Table.Row>
            <Table.HeaderCell colSpan='6'>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>
    )
  }
}

export default connect(
  state => {
    return {
      users : state.users,
      projects : state.projects,
      searchFilter: state.searchFilter
    }
  }, 
  dispatch => {
    return {
      actions: {
        viewProject : (id) => {
          window.location = `#/project/${id}`
        }
      }
    }
  }
)(ProjectsTable);

