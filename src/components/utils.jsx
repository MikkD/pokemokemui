import { useState, useEffect, useCallback } from 'react';
import { Grid, Box, CardMedia } from '@material-ui/core';
import { CircularProgress } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useHistory, useLocation } from 'react-router-dom';


export const Loader = () => {
    return (
        <Box style={{ position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}>
            <CircularProgress />
        </Box>
    )
};


export const ZeroResults = ({ isQueryEmpty = false }) => {
    return (
        <Grid container justify="center">
            <Grid item>
                <Typography variant="h4">
                    {isQueryEmpty ? "Enter the movie" : "Search not found"}
                </Typography>
            </Grid>
        </Grid>
    )
};

export const FallbackPage = () => {
    return (
        <Grid container justify="center">
            <Grid item>
                <Typography variant="h4">
                    Page doesn't exist
                </Typography>
                <Link to="/">
                    Go to Main page
                </Link>
            </Grid>
        </Grid>
    )
};

export const getPosterImage = (imgQuery) => {
    if (imgQuery === "N/A") return "https://soilhealthinstitute.org/wp-content/uploads/2016/11/thumbnail-default.jpg";
    return imgQuery
};


export const useFetchAllMovies = (movieQuery, fetchSingleMovie = false, id) => {
    const location = useLocation();
    // console.log('0_useFetchAllMovies_Start')
    const [allMovies, setAllMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchSingleOrAllMoviesUrl = fetchSingleMovie
            ? `http://www.omdbapi.com/?apikey=3755d9aa&i=${id}`
            : `http://www.omdbapi.com/?apikey=3755d9aa&page=${location.pageNum}&s=${movieQuery}`;
        handleAllMoviesFetch(fetchSingleOrAllMoviesUrl)

    }, [movieQuery, fetchSingleMovie, id, location.pageNum])

    const handleAllMoviesFetch = async (fetchSingleOrAllMoviesUrl) => {
        // console.log('....1_Start_FETCHING_MOVIES')
        try {
            setIsLoading(true)
            const data = await fetch(fetchSingleOrAllMoviesUrl);
            const movies = await data.json();
            setIsLoading(false)
            setAllMovies(movies)
        } catch (err) {
            setIsLoading(false)
            setError(true)
        }
    };

    return { allMovies, isLoading, error }

};



export const getRatingScore = (allMovies) => {
    if (allMovies.Ratings && allMovies.Ratings.length > 0) {
        const rating = allMovies.Ratings[0].Value;
        return Math.round((Number(rating.split('/')[0]) / 2))
    }
    return 1
}
