import React from "react";
import css from "./style.module.css"

export class Button extends React.Component {
    state = {
        action: false
    }

    onClick = (event) => {
        
    }

    render() {
        return(
            <button className={css.button} onClick>
                button
            </button>
        )
    }
}