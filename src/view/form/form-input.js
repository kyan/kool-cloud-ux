import React from "react";
import classNames from "classnames"

export default class FormInput extends React.Component {

  get value() {
    return (this.refs.input.value);
  }

  render() {
    const { error, label, type, icon } = this.props;
    const iconClasses = classNames(icon, 'icon inverted');
    const errorIcon = error && (<div className="floating ui red label"><i className="exclamation triangle icon"></i></div>);

    return(
      <div className="field">
        <label>{ label }</label>
        <div className="ui left icon input" data-tooltip={ error } data-position="top center">
            { errorIcon }
            <i className={ iconClasses }></i>
          <input type={ type } ref='input'/>
        </div>
      </div>
    )
  }
}