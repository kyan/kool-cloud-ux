import React from "react";
import { Component } from "react";
import { Container } from 'semantic-ui-react'
import { connect } from "react-redux"
import ProjectsTable from "./projects-table"
import SearchInput from "../../presentors/search-input"
import setProjectFilterAction from "../../signal/set-project-filter"
import filterProjects from '../../pipes/filter-projects'
class HomeProjectList extends Component {

  render () {
    const { searchFilter, projects } = this.props;

    return (
      <Container>
        <SearchInput 
          searchFilter={ searchFilter }
          data={ filterProjects(searchFilter, projects) }
          setFilterAction={ setProjectFilterAction }
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
)(HomeProjectList);
