import React, { useState, useEffect, useMemo } from 'react'
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import KeyboardArrowDownRoundedIcon from '@material-ui/icons/KeyboardArrowDownRounded';
import { Typography } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMovies } from '../../redux/accordion/accordionReducer';
import InputForm from './InputForm';
const data = [
    {
        title: 'Bode',
        id: 1,
        text: 'Hello BOde',
        isActive: false
    },

    {
        title: 'Roca',
        id: 2,
        text: 'By Rock',
        isActive: false
    }
];


function Accordio() {
    const dispatch = useDispatch();
    const { movies } = useSelector(state => state.accordionReducer);
    const { isFetching } = useSelector(state => state.accordionReducer);
    const { error } = useSelector(state => state.accordionReducer);
    const memoizedMovies = useMemo(() => movies, [movies])

    useEffect(() => {
        dispatch(fetchMovies())
    }, [])

    if (isFetching) return <h4>...Loading</h4>;

    if (error) return <h4>.Error</h4>;

    return (
        <>
            <InputForm />
            <Typography variant="h4">Accordion </Typography>
            {/* <AccordionItems movies={movies} /> */}
            <AccordionItems movies={memoizedMovies} />
        </>
    )
}

export default Accordio;

const AccordionItems = ({ movies }) => {
    console.log('%cAccordionItems=>Render', "color:brown")
    return (
        <>
            {movies.map(movie => {
                const { imdbID, Title, isActive } = movie;
                return (
                    <Accordion
                        key={imdbID}
                        expanded={isActive}
                    >
                        <AccordionSummary expandIcon={<KeyboardArrowDownRoundedIcon />}>
                            <Typography variant="h5">{Title}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            {Title}
                        </AccordionDetails>
                    </Accordion>
                )
            }
            )}
        </>
    )
};
