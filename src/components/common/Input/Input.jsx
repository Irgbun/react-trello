import React from "react";
import css from "./style.module.css"

export class Input extends React.Component {
    state = {
        value: ""
    }

    changeValue = (event) => {
        this.setState({ value: event.target.value })
    }

    render() {
        return(
            <input className={css.input} value={ this.state.value } onChange={ this.changeValue } />
        )
    }
}