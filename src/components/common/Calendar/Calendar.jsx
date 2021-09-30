import React from "react";
import css from "./style.module.css"

export class Calendar extends React.Component {
  // changeValue = (event) => {
  //   this.setState({ value: event.target.value });
  // };


  render () {
    return (
      <div>
        <input className={css.calendar} type="date" value={this.props.value} onChange={this.props.changeValue} />
      </div>
    );
  }
}
