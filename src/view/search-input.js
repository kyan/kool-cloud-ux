import React from "react";
import { Component } from "react";
import _ from "lodash";
import {  Search  } from 'semantic-ui-react'
import PropTypes from 'prop-types';

class SearchInput extends Component {

  resultSelectHandler = (e, { result }) => {
    this.props.onSelect(result);
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
        results={ data }
        value={searchFilter}
      />
    )
  }
}

SearchInput.propTypes = {
  data: PropTypes.array,
  searchFilter: PropTypes.string,
  setFilterAction: PropTypes.func,
  onSelect: PropTypes.func,
};

export default SearchInput;
