import { useState, useEffect } from 'react';
import { Grid, Box, CardMedia } from '@material-ui/core';
import { CircularProgress } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';


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




// const useFetchAllMovies = (movieQuery) => {
//     console.log("useFetchAllMovies=>movieQuery=>", movieQuery)
//     const [allMovies, setAllMovies] = useState([]);
//     const [isLoading, setIsLoading] = useState(false);
//     const [error, setError] = useState(false);


//     useEffect(() => {
//         handleAllMoviesFetch(movieQuery)
//     }, [movieQuery])

//     const handleAllMoviesFetch = (movieQuery) => {
//         setIsLoading(true)
//         fetch(`http://www.omdbapi.com/?apikey=3755d9aa&page=1&s=${movieQuery}`)
//             .then(data => data.json())
//             .then(movies => {
//                 setIsLoading(false)
//                 setAllMovies(movies)
//                 console.log('fm', movies);
//             })
//             .catch(error => {
//                 setIsLoading(false)
//                 setError(true)
//             })
//     }

//     return { allMovies, isLoading, error }

// };
// export default useFetchAllMovies;



const useFetchAllMovies = (movieQuery, fetchSingleMovie = false, id) => {
    const [allMovies, setAllMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchSingleOrAllMoviesUrl = fetchSingleMovie
            ? `http://www.omdbapi.com/?apikey=3755d9aa&i=${id}`
            : `http://www.omdbapi.com/?apikey=3755d9aa&page=1&s=${movieQuery}`;
        handleAllMoviesFetch(fetchSingleOrAllMoviesUrl)
    }, [movieQuery, fetchSingleMovie, id])

    function handleAllMoviesFetch(fetchSingleOrAllMoviesUrl) {
        setIsLoading(true)
        fetch(fetchSingleOrAllMoviesUrl)
            .then(data => data.json())
            .then(movies => {
                setIsLoading(false)
                setAllMovies(movies)
                console.log('<<<<<>>>>>>>>', movies);
            })
            .catch(error => {
                setIsLoading(false)
                setError(true)
            })
    }

    return { allMovies, isLoading, error }

};

export default useFetchAllMovies;