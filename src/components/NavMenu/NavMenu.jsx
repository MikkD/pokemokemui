import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { useStyles } from './styles';
import Form from './Form/Form';


const NavMenu = ({ movieQuery, setMovieQuery, setCurrentPageRoute }) => {



    const classes = useStyles();
    return (
        <AppBar position="sticky" color="secondary" className={classes.appWrap}>
            <Toolbar className={classes.toolWrap}>
                <Typography className={classes.typoBreakpoints} variant="h4">PokiMoki</Typography>
                <Form
                    movieQuery={movieQuery}
                    setMovieQuery={setMovieQuery}
                    setCurrentPageRoute={setCurrentPageRoute}
                />
            </Toolbar>
        </AppBar >
    )
}

export default NavMenu;