import css from './style.module.css'

export const Modal = (props) => {
    
    return <div className={css.root}>{props.children}</div>
}