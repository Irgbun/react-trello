import React from "react";
import css from "./style.module.css"
import { Button, Input } from "../common/"


export class Card extends React.Component {


    
    render() {
        return(
            <div className={css.card}>
                <div>
                    <div>
                        {/* { title } */}
                    </div>
                    <div>
                        <Input />
                    </div>
                </div>
                <div>
                    <div>
                        <Button>
                            zdgsdg
                        </Button>
                    </div>
                </div>
            </div>
        )
    }
}