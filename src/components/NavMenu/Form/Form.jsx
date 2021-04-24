import React, { useState } from 'react'
import { TextField } from '@material-ui/core';

export default function Form({ movieQuery, setMovieQuery }) {
    return (
        <>
            <TextField
                style={{ flexGrow: 1 }}
                color="primary"
                variant="outlined"
                label="search pokemon"
                fullWidth={true}
                autoFocus={true}
                onChange={(e) => setMovieQuery(state => e.target.value)}
                value={movieQuery}
            />
        </>
    )
}
