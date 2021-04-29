import React from 'react'
import { Box, Typography, Container, Grid } from '@material-ui/core';
import { Loader, ZeroResults } from '../utils';
import Pagination from '@material-ui/lab/Pagination';
import PokieCard from './PokieCard/PokieCard';
import uuid from 'react-uuid'
import { useFetchAllMovies } from '../utils';
import { useHistory, useLocation } from 'react-router-dom';



function PokeCardsWrapper({ movieQuery, setCurrentPageRoute, currentPageRoute }) {
    const history = useHistory();
    const location = useLocation();

    const { allMovies, isLoading, error } = useFetchAllMovies(movieQuery);

    if (isLoading) return <Loader />

    if (allMovies && allMovies.Search === undefined) return <ZeroResults />

    if (error) return <Typography variant="h4">...Error</Typography>

    return (
        <>

            <Container>
                <Typography variant="h6" color="secondary">Total: {allMovies.totalResults}</Typography>
                <Box my={2} >
                    <Grid container spacing={3}>
                        {allMovies.Search.map(movie =>
                            <PokieCard
                                key={uuid()}
                                movie={movie}
                                currentPageRoute={currentPageRoute} />
                        )}
                    </Grid>
                </Box>
                <Box mb={2} style={{ display: "flex", justifyContent: "center" }}>
                    <Pagination
                        size="large"
                        onChange={(event, page) => {
                            history.push({
                                pathname: `/pokemoke/page${page || currentPageRoute}`,
                                pageNum: page
                            })
                            setCurrentPageRoute(page)
                        }}
                        page={location.pageNum || 1}
                        count={10} />
                </Box>
            </Container>

        </>
    )
}

export default PokeCardsWrapper



