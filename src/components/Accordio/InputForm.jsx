import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

function InputForm() {
    const { inputValue } = useSelector(state => state.accordionReducer);
    const dispatch = useDispatch();
    console.log('InputForm_Rendered')

    return (
        <div>
            <input
                value={inputValue}
                onChange={(e) =>
                    dispatch({ type: "HANDLE_INPUT", payload: e.target.value })}
            />
        </div>
    )
}

export default InputForm
