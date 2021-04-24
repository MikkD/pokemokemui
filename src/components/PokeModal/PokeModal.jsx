import React, { useState, useEffect } from 'react';
import { Container, Grid } from '@material-ui/core';
import { Button, Card, CardContent, CardMedia, CardHeader, CardActions, Paper } from '@material-ui/core';
import { useStyles } from './styles';
import { Typography, Chip, Divider, Box } from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
import { useHistory } from "react-router-dom"
import { getPosterImage, Loader, FallbackPage } from '../utils';
import useFetchAllMovies from '../utils';



const PokeModal = () => {
    const classes = useStyles();
    const history = useHistory()
    const id = history.location.imdbID;

    const { allMovies, isLoading, error } = useFetchAllMovies(null, true, id);

    const getRatingScore = () => {
        if (allMovies.Ratings && allMovies.Ratings.length > 0) {
            const rating = allMovies.Ratings[0].Value;
            return Math.round((Number(rating.split('/')[0]) / 2))
        }
        return 1
    }


    if (isLoading || allMovies === undefined) return <Loader />

    if (error) return <FallbackPage />

    console.log('allMovies', allMovies);

    return (
        <>
            <Container >
                <Grid container className={classes.modalWrapper} justify="center" alignItems="center">
                    <Grid className={classes.gridWrapper} item xs={12} s={8} >
                        <Card className={classes.cardStyles} elevation={5}>
                            <CardMedia
                                image={getPosterImage(allMovies.Poster)}
                                className={classes.mediaStyles}
                            />
                            <CardContent className={classes.CardContentStyles}>
                                <Box>
                                    <Typography variant="h3"> {allMovies.Title}</Typography>
                                </Box>
                                <Box  >
                                    <Typography color="textSecondary" variant="h5">
                                        {allMovies.Year} {allMovies.Country} {allMovies.Director}
                                    </Typography>
                                </Box>
                                <Box mb={2}>
                                    <Divider />
                                </Box>
                                <Box mb={1}>
                                    <Chip label={allMovies.Runtime} variant="outlined" />
                                    <Chip label={allMovies.imdbRating} variant="outlined" />
                                    <Chip label={allMovies.Language} variant="outlined" />
                                </Box>
                                <Box mb={1} borderColor="transparent">
                                    <Typography component="legend">Rating: </Typography>
                                    <Rating
                                        name="read-only"
                                        value={getRatingScore()}
                                        readOnly />
                                </Box>
                                <Box mb={1}>
                                    <Typography component="h6">Overview:</Typography>
                                    <Typography color="textSecondary" variant="subtitle1">{allMovies.Plot}</Typography>
                                </Box>
                                <CardActions className={classes.CardActionStyles}>
                                    <Button
                                        component={Button}
                                        onClick={() => history.push('/')}
                                        variant="outlined">Go Back
                                    </Button>
                                </CardActions>
                            </CardContent>

                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}

export default PokeModal;
