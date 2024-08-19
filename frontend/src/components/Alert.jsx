import React from 'react'
import { CSSTransition } from 'react-transition-group'
import './Alert_.scss'

const Alert = ({ alertText, isShowAlert }) => {
    return (
        // <CSSTransition
        //     in={isShowAlert}
        //     timeout={2000}
        //     classNames='popup'
        // >
            <div className='alert'>
                <p>{alertText}</p>
            </div>
        // </CSSTransition>
    )
}

export default Alert