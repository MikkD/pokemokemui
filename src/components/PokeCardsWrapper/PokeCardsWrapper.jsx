import React from 'react'
import { Box, Typography, Container, Grid, Paper } from '@material-ui/core';
import { Loader, ZeroResults } from '../utils';

import PokieCard from './PokieCard/PokieCard';
import uuid from 'react-uuid'
import useFetchAllMovies from '../utils';



function PokeCardsWrapper({ movieQuery }) {
    const { allMovies: { Search }, isLoading, error } = useFetchAllMovies(movieQuery);

    if (!movieQuery) return <ZeroResults isQueryEmpty={true} />

    if (error || Search === undefined) return <ZeroResults />

    if (isLoading) return <Loader />

    return (
        <>
            <Container>
                <Grid container spacing={3}>
                    {Search.map(movie =>
                        <PokieCard key={uuid()} movie={movie} />
                    )}
                </Grid>
            </Container>
        </>
    )
}

export default PokeCardsWrapper



