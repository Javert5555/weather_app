import React from 'react'
import { Transition } from 'react-transition-group'
import { useRef } from 'react'
import './Alert_.scss'

const Alert = ({ alertText, isShowAlert }) => {
    const alertRef = useRef(null)

    return (
        <Transition
            nodeRef={alertRef}
            in={isShowAlert}
            timeout={500}
            mountOnEnter
            unmountOnExit
        >
            {state => (
                <div ref={alertRef} className={`alert ${state}`}>
                    <p>{alertText}</p>
                </div>
            )}
        </Transition>
    )
}

export default Alert