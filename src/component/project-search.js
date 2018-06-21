import React from "react";
import { connect } from "react-redux"
import { Component } from "react";
import _ from "lodash";
import {  Search  } from 'semantic-ui-react'
import ProjectConstants from "../constant/project"

const state = state => {
  return {
    searchfilter : state.searchFilter,
    projects : state.projects
  }
};

const actions = dispatch => {
  return {
    dispatchFilter : (filterValue) => {
      dispatch({
      type: ProjectConstants.SEARCH_FILTER,
        payload: filterValue
      })
    }
  }
};

class ProjectSearch extends Component {

  handleResultSelect = (e, { result }) => {
    this.props.dispatchFilter(result.title);
  }

  handleSearchChange = (e, { value }) => {
    this.props.dispatchFilter(value);
  }

  filteredresults() {
    const re = new RegExp(_.escapeRegExp(this.props.searchfilter), 'i');
    const isMatch = result => re.test(result.title)
    return _.filter(this.props.projects, isMatch);
  }
  
  render () {
    const results  = this.filteredresults();
    return (
      <Search
        onResultSelect={this.handleResultSelect}
        onSearchChange={_.debounce(this.handleSearchChange, 50, { leading: true })}
        results={results}
        value={this.props.searchfilter}
      />
    )
  }
}

export default connect(state, actions)(ProjectSearch);

