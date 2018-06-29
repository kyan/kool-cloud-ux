import React from "react";
import { connect } from "react-redux"
import { Component } from "react";
import { Table } from 'semantic-ui-react'
import filterProjects from '../pipes/filter-projects'
import ProjectTableRow from '../presentors/projects-table-row'
import changeLocation from "../signal/change-location"
class ProjectsTable extends Component {

  rows(projects) {
    return (projects) ? projects.map((project, index) => {
      return  (
        <ProjectTableRow className='ui celled table'
          viewProjectAction={ changeLocation(`#/project/show/${project.id}`) }
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
          { this.rows(filterProjects(searchFilter, projects)) }
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
      projects : state.projects,
      searchFilter: state.searchFilter
    }
  }
)(ProjectsTable);

