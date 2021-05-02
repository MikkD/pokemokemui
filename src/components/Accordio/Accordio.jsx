import React, { useState, useEffect, useMemo } from 'react'
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import KeyboardArrowDownRoundedIcon from '@material-ui/icons/KeyboardArrowDownRounded';
import { Typography } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMovies } from '../../redux/accordion/accordionReducer';
import { createSelector } from 'reselect'
import InputForm from './InputForm';
import CustomBlock from '../CustomBlock/CustomBlock';
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
    // const { movies, isFetching, error, inputValue } = useSelector(state => state.accordionReducer);
    const { movies } = useSelector(state => state.accordionReducer);
    const { isFetching } = useSelector(state => state.accordionReducer);
    const { error } = useSelector(state => state.accordionReducer);
    const memoizedMovies = useMemo(() => movies, [movies])

    useEffect(() => {
        dispatch(fetchMovies())
    }, [])

    // *MUI Approach
    // const toggleAccordion = (id) => (event, isExpanded) => {
    //     setActiveId(isExpanded ? id : false)
    // }


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

const AccordionItems = React.memo(({ movies }) => {
    console.log('%cAccordionItems=>Render', "color:brown")
    const [acc, setAcc] = useState(data);
    const toggleAccordion = (id) => {
        setAcc((state) => state.map((el =>
            el.id === id
                ? ({ ...el, isActive: !el.isActive })
                : ({ ...el, isActive: false })
        )))
    };

    return (
        <>
            {movies.map(movie => {
                const { imdbID, Title } = movie;
                return (
                    <Accordion key={imdbID} expanded={true} onChange={() => toggleAccordion(imdbID)}>
                        <AccordionSummary expandIcon={<KeyboardArrowDownRoundedIcon />}>
                            <Typography variant="h5">{imdbID}</Typography>
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
})