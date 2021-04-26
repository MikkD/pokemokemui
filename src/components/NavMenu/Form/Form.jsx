import React from 'react'
import { TextField } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

export default function Form({ movieQuery, setMovieQuery, setCurrentPageRoute }) {
    const history = useHistory();
    return (
        <>
            <TextField
                style={{ flexGrow: 1 }}
                color="primary"
                variant="outlined"
                label="Search Movie"
                fullWidth={true}
                autoFocus={true}
                onChange={(e) => {
                    if (e.target.value !== movieQuery) {
                        history.push({
                            pathname: '/',
                            pageNum: 1
                        })
                        setCurrentPageRoute(1)
                    }
                    setMovieQuery(e.target.value)
                }}
                value={movieQuery}
            />
        </>
    )
}
