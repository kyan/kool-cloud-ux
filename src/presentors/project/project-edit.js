import React from "react";
import { Dropdown, TextArea, Message } from 'semantic-ui-react'
import HeaderBar from "../../connectors/header-bar"
import MastheadSmall from "../../presentors/masthead-small"
import MemberListEdit from "../../presentors/member/member-list-edit"

export default class ProjectEdit extends React.Component {

  createOnChangeObject (status) {
    if(!status) {
      status = this.status.getSelectedItem().value
    }
    this.props.onChange(
      {
        title: this.projectName.ref.value,
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
    const {submitTitle, pageTitle, flash, project : {title, description, status}} = this.props;
    const { project } = this.props;
    const defaultStatus = status ? status: "private";
    
    return (
      <div>
        <div className="page-header">
          <HeaderBar />
          <MastheadSmall title={ pageTitle }/>
        </div>
        <div className="ui stackable form container grid">
          <div className="ui eight wide column">
            <div className="ui segment">
              { !!flash && (
                <Message negative
                  onDismiss={this.handleDismiss}
                  header= { flash.header }
                  content={ flash.message }
                />
              )}
              <h3>{ pageTitle }</h3>
              <div className="field">
                <label>Name</label>
                <TextArea key={pageTitle}rows={1} ref={c => { this.projectName = c } } onChange={ this.onChange.bind(this) } value={title} placeholder="Enter Text"/>
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
                <TextArea key={pageTitle} rows={10} ref={c => { this.description = c } } placeholder="Enter Text" onChange={ this.onChange } value={ description }/>
              </div>
              
            </div>
          </div>
          <div className="ui eight wide column">
            <MemberListEdit members={project.members} />
          </div>
          <div className="ui eight wide column">
            <div className="ui active field right aligned">
                  <button onClick={ this.onSubmit } className="ui submit primary button">{submitTitle}</button>              
            </div>
          </div>  
        </div>
      </div>
    )
  }
}