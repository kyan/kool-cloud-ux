import React from "react";
import { Component } from "react";
import _ from "lodash";
import {  Search  } from 'semantic-ui-react'
import PropTypes from 'prop-types';
import filterProjects from '../pipes/filter-projects'

class SearchInput extends Component {

  resultSelectHandler = (e, { result }) => {
    this.props.setFilterAction(result.title);
  }

  searchChangeHandler = (e, { value }) => {
    this.props.setFilterAction(value);
  }

  render () {
    const { searchFilter, data} = this.props;
    return (
      <Search
        onResultSelect={this.resultSelectHandler}
        onSearchChange={_.debounce(this.searchChangeHandler, 50, { leading: true })}
        results={ filterProjects(searchFilter, data) }
        value={searchFilter}
      />
    )
  }
}

SearchInput.propTypes = {
  data: PropTypes.array,
  searchFilter: PropTypes.string,
  setFilterAction: PropTypes.func,
};

export default SearchInput;
