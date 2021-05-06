import React, { useState, useEffect, useRef } from 'react'
import { Container, Grid, Typography } from '@material-ui/core';
import { Card, CardContent, Paper } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { Badge } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    containerStyles: {
        marginTop: "50%",
        display: "flex"
    },
    badgeStyles: {
        "& .MuiBadge-badge": {
            border: '10px solid black',
            // width: '300px',
            width: '300px',
            height: '300px',
            fontSize: '10rem',
            borderRadius: '50%'
        }
    }
}));




function Timer() {
    const [timer, setTimer] = useState(0);
    const classes = useStyles();
    const timerRef = useRef();
    console.log('COMPONENT_RENDERED with timer++>', timer)
    console.log('COMPONENT_RENDERED with timerRef.current==>', timerRef.current)

    startTimer()


    // useEffect(() => {
    //     console.log('timer_useEffect=>', timer)
    //     startTimer()
    //     return (() => stopTimer())
    // }, [])


    function startTimer() {
        // *1
        timerRef.current = setTimeout(() => {
            setTimer(state => state + 1)
        }, 1000)

        // *2
        // timerRef.current = setInterval(() => {
        //     setTimer((state) => state + 1)
        // }, 1000);

        // *3


    };




    // useEffect(() => {

    //     return (() => stopTimer())
    // }, [])


    function stopTimer() {
        // *1
        clearTimeout(timerRef.current)

        // *2
        // clearInterval(timerRef.current)
    };






    return (
        <Container className={classes.containerStyles} >
            <Grid container justify="center" >
                <Grid item >
                    <Badge
                        className={classes.badgeStyles}
                        badgeContent={`${timer}`}
                        color="primary" />
                </Grid>
            </Grid>
            <Grid container>
                <Grid item>
                    <Button
                        onClick={stopTimer}
                        variant="contained"
                        color="secondary">
                        Stop Timer
                    </Button>
                    <Button
                        disabled={true}
                        onClick={startTimer}
                        variant="contained"
                        color="default">
                        Resume Timer
                    </Button>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Timer
