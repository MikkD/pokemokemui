import React from 'react'
import TextField from '@material-ui/core/TextField/TextField';
import { useHistory } from 'react-router-dom';
import { useDebounce } from 'use-debounce';
import { useState, useEffect } from 'react';


export default function Form({ movieQuery, setMovieQuery, setCurrentPageRoute }) {
    const history = useHistory();
    const [localValue, setLocalValue] = useState('');
    const [debouncedFormValue] = useDebounce(localValue, 500);

    // No_Debounce_Approach
    // const handleInputChange = (e) => {
    //     const eventValue = e.target.value;

    //     if (eventValue !== movieQuery) {
    //         history.push({
    //             pathname: '/',
    //             pageNum: 1
    //         })
    //         setCurrentPageRoute(1)
    //     }
    //     setMovieQuery(eventValue)
    // };

    useEffect(() => {
        if (debouncedFormValue !== movieQuery) {
            history.push({
                pathname: '/pokemoke',
                pageNum: 1
            })
            setCurrentPageRoute(1)
        }
        setMovieQuery(debouncedFormValue)
    }, [debouncedFormValue, movieQuery, history, setCurrentPageRoute, setMovieQuery])

    return (
        <>
            <TextField
                style={{ flexGrow: 1 }}
                color="primary"
                variant="outlined"
                label="Search Movie"
                fullWidth={true}
                autoFocus={true}
                onChange={(e) => setLocalValue(e.target.value)}
                value={localValue}
            // onChange={handleInputChange}
            // value={movieQuery}
            />
        </>
    )
}
