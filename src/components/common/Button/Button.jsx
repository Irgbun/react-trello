import React from "react";
import css from "./style.module.css"

export class Button extends React.Component {
    render() {
        return <button className={css.button} onClick={ this.props.onClick } />
    }
}