import React from "react";
import css from "./style.module.css"
import { Button, Input } from "../common/"


export class Card extends React.Component {
    state = {
        value: '',
        isVisible: false,

    }

    changeValue = (event) => {
        this.setState({ value: event.target.value })
    }

    onClickAdd = () => {
        this.setState({ isVisible: true })
    }

    onClickCancel = () => {
        this.setState({ isVisible: false })
    }

    
    render() {
        return(
            <div className={css.card}>
                { this.props.children }
            </div>
        )
    }
}