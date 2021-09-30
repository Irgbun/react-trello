import React from "react";
import css from "./style.module.css"

export class Input extends React.Component {
    render() {
        return <input className={css.input} value={ this.props.value } onChange={ this.props.onChange } />
    }
}