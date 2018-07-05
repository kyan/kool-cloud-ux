import React from "react";

import { Dropdown, Input, TextArea, Modal, Message } from 'semantic-ui-react'
import HeaderBar from "../connectors/header-bar"
import MastheadSmall from "../presentors/masthead-small"

export default class ProjectEdit extends React.Component {

  createOnChangeObject (status) {
    if(!status) {
      status = this.status.getSelectedItem().value
    }

    this.props.onChange(
      {
        title: this.projectName.inputRef.value,
        description: this.description.ref.value,
        status
      }
    )
  }

  onChange = () => { 
    this.createOnChangeObject();
  }

  onSubmit =  () => {
    this.props.onSubmit()
  }

  onStatusChange = (e, data) => {
    this.createOnChangeObject(data.value);
  }

  render() {
    const {flash, project : {title, description, status}, loading} = this.props;
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
            
            { !!flash && (
              <Message negative
                onDismiss={this.handleDismiss}
                header= { flash.header }
                content={ flash.message }
              />
            )}
            <h3>{ createTitle }</h3>
            
            <div className="field">
              <label>Name</label>
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
              <label>Description</label>
              <TextArea rows={10} ref={c => { this.description = c } } placeholder="Enter Text" onChange={ this.onChange } value={ description }/>
            </div>
            <div className="ui active field right aligned">
              <button onClick={ this.onSubmit } className="ui submit primary button">Create</button>              
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
       
          </div>
          </div> 
          <Modal open={loading } dimmer='inverted'>
            <Modal.Header></Modal.Header>
            <Modal.Content>
            <div className="ui segment">
              <div className="ui active inverted dimmer">
                <div className="ui small text loader">Creating Project</div>
              </div>
            </div>
            </Modal.Content>
          </Modal>  
        </div>
    )
  }
}