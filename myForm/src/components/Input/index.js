import React, {useState, useCallback} from 'react'

import './Input.css'

/*
type PropsType = {
    id: string,
    locked: boolean,
    focussed:boolean,
    value: string,
    error: string,
    label: string,
    onChange: () => void,
}
*/

const Input = ({
    id,
    locked = false,
    focussed = false,
    value = '',
    error = '',
    label = '',
    onChange = () => '',
    ...other
}) => {
    const [inputFocussed, setInputFocussed] = useState(locked && focussed);
    const [inputValue, setInputValue] = useState(value || '');
    const [inputLabel, setInputLabel] = useState(label || '');

    const fieldClassName = `field ${(locked ? inputFocussed : inputFocussed || inputValue) && 'focussed'} ${locked && !inputFocussed && 'locked'}`;

    console.log("other", value)
    return (
        <div className={fieldClassName}>
            <input
            id={id}
            placeholder={label}
            onFocus={ () => !locked && setInputFocussed(true) }
            onBlur={ () => !locked && setInputFocussed(false) }
            {...other}
            />
            <label htmlFor={id} className={error && 'error'}>
                {error ? error.message : label}
            </label>
        </div>
    )
}

export default Input
