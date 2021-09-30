import React from "react";
import ReactDOM from "react-dom";
import css from './style.module.css'

const BaseModal = (props) => {
    
    return <div className={css.root}>{props.children}</div>
}


const Portal = ({ children }) => ReactDOM.createPortal(children, document.getElementsByTagName('body')[0])


export class Modal extends React.Component {
    render() {
        return (
            <Portal>
                <BaseModal>
                    { this.props.children }
                </BaseModal>
            </Portal>
        )
    }
} 