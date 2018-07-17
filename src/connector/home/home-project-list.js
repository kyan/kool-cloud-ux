import React from "react";
import { Component } from "react";
import { Container } from 'semantic-ui-react'
import { connect } from "react-redux"
import ProjectsTable from "./projects-table"
import SearchInput from "../../view/search-input"
import setProjectFilterAction from "../../signal/set-project-filter"
import filterProjects from '../../store/pipe/filter-projects'

class HomeProjectListConnector extends Component {

  render () {
    const { searchFilter } = this.props;
    const selectProject = (project) => {
      setProjectFilterAction(project.title)
    }
    return (
      <Container>
        <SearchInput 
          searchFilter={ searchFilter }
          data={ filterProjects() }
          setFilterAction={ setProjectFilterAction }
          onSelect={ selectProject }
        />
        <ProjectsTable/>
      </Container>
    )
  }
}

export default connect(
  state => {
    return {
      sessions : state.sessions,
      projects : state.projects,
      searchFilter: state.searchFilter
    }
  }
)(HomeProjectListConnector);
