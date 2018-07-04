import React from "react";

import { Dropdown, Input, TextArea } from 'semantic-ui-react'
import HeaderBar from "../connectors/header-bar"
import MastheadSmall from "../presentors/masthead-small"

export default class ProjectEdit extends React.Component {

  onChange = () => {
    
    
    console.log(this.status.getSelectedItem())
      
  }

  onStatusChange = (e, data) => {
    console.log(this.projectName.inputRef.value)
    console.log(data.value)
    console.log(this.description.ref.value)
  }

  render() {
    const {project : {title, description, status}, submit} = this.props;
    const defaultStatus = status ? status: "private";
    const createTitle = 'Create Project';
  
    return (
      <div>
        <div className="page-header">
          <HeaderBar />
          <MastheadSmall title={ createTitle }/>
        </div>
        <div className="ui stackable form container grid">
          <div className="ui eight wide column">
            <h3>{ createTitle }</h3>
            
            <div className="field">
              <label>Project name</label>
              <Input ref={c => { this.projectName = c } } onChange={ this.onChange.bind(this) } defaultValue={title} placeholder="Enter Text"/>
            </div>

            <div className="fields">
              <div className="field">
                  <Dropdown ref={c => { this.status = c } } onChange={ this.onStatusChange.bind(this)  } value={ defaultStatus } selection  options={
                    [
                      { key: 1, text: 'Private', value: 'private' },
                      { key: 2, text: 'Public', value: 'public' }
                    ] } />
              </div>
            </div>
            <div className="field">
              <label>Project description</label>
              <TextArea rows={10} ref={c => { this.description = c } } placeholder="Enter Text" onChange={ this.onChange } value={ description }/>
            </div>
          </div>
          <div className="ui eight wide column">
          {/*
          <div className="ui segment">
              <h4>Shared with   
                <SearchInput 
                searchFilter={ '' }
                data={ [] }
                setFilterAction={ function() {} }
              /></h4> 
              <div className="ui grid stackable">
                <div className="ui stackable eight wide column">
                  <button className="ui icon tiny negative button"><i className="icon trash"></i></button>
                  <span className="user-label">User 2 </span>
                </div>
                <div className="ui eight wide column ">
                  <Dropdown placeholder='Role' value={4} search selection options={
                      [
                        { key: 1, text: 'Super', value: 1 },
                        { key: 2, text: 'Admin', value: 2 },
                        { key: 3, text: 'Animator', value: 3 },
                        { key: 4, text: 'Critic', value: 4 }
                      ] } />
                </div>
              </div>
            </div>
            */}
            {/*
            <div className="ui segment">
              <h4>User share request</h4>
              <div className="ui grid stackable">
                <div className="ui twelve wide column">
                  <span>User 2</span>
                </div>
                <div className="ui two wide column aligned right">
                  <a href="" className="ui text-positive">Accept</a>
                </div>
                <div className="ui two wide column aligned right">
                  <a href="" className="ui text-negative">Reject</a>
                </div>
              </div>
              <div className="ui grid stackable">
                <div className="ui twelve wide column">
                  <span>John Barrie</span>
                </div>
                <div className="ui two wide column aligned right">
                  <a href="" className="ui text-positive">Accept</a>
                </div>
                <div className="ui two wide column aligned right">
                  <a href="" className="ui text-negative">Reject</a>
                </div>
              </div>
            </div>
            
          */}
            <div className="ui field right aligned">
              <button className="ui submit primary button">Submit</button>
            </div>         
          </div>
          </div>   
        </div>
    )
  }
}