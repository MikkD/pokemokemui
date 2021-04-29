import React, { useRef, useState } from 'react'
import { Container, Grid, IconButton, Typography } from '@material-ui/core';
import { Card, CardContent, CardHeader, Paper } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { List } from '@material-ui/core';
import { ListItem } from '@material-ui/core';
import { ListItemText } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { Snackbar, } from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import { withRouter } from 'react-router-dom';
import Fade from '@material-ui/core/Fade';
import Slide from '@material-ui/core/Slide';
import Grow from '@material-ui/core/Grow';
import { useSelector, useDispatch } from 'react-redux';
import MySnackBar from './MySnackBar';



function MyBread({ match, history, location: { pathname } }) {

    const routeMapping = [
        {
            name: 'inbox',
            path: `${match.path}/inbox`,
            message: "Inbox snacks",
            severity: "success"
        },
        {
            name: 'trash',
            path: `${match.path}/trash`,
            nestedRoute: `${match.path}/trash/nested`,
            message: "errro 606 ",
            severity: "error"
        },
        {
            name: 'spam',
            path: `${match.path}/spam`,
            message: "Be aware of wolfs",
            severity: "warning"
        }
    ];


    const dispatch = useDispatch();

    const handleOpenSnackBar = (severity, message) => {
        dispatch({
            type: "OPEN_SNACKBAR",
            payload: { severity, message }
        })
    };


    return (
        <Container>
            <ForwardComp />
            <Paper>
                <Card>
                    <CardHeader title="BreadCrumbs and SnackBar" />
                    <CardContent style={{ textAlign: "center" }}>
                        <MyBreadCrumbs pathname={pathname} />
                        <List>
                            {routeMapping.map((route) => (
                                <ListItem
                                    key={route.name}
                                    button
                                    onClick={() => {
                                        history.push(`/mybread/${route.name}`)
                                        handleOpenSnackBar(route.severity, route.message)
                                    }}>
                                    <ListItemText primary={route.name} />
                                </ListItem>)
                            )}
                        </List>
                    </CardContent>
                </Card>
            </Paper>
        </Container >
    )
}

export default withRouter(MyBread)



const MyBreadCrumbs = ({ pathname }) => {
    const mappedState = useSelector(state => state.snackBarReducer.isActive);
    console.log('mappedState', mappedState)
    const dispatch = useDispatch();

    const cleanPathNames = pathname.split('/').filter((el, index) => index > 0);
    return (
        <Breadcrumbs>
            <Button component={Link} to={`/`} >Main</Button>
            {cleanPathNames.map((el, index) => {
                const lastItem = cleanPathNames.indexOf(cleanPathNames[cleanPathNames.length - 1]) === index;
                if (lastItem) return <Typography key={index} color="inherit">{el}</Typography>
                return <Button key={index} component={Link} to={`/${el}`} >{el}</Button>
            })}
        </Breadcrumbs>
    )
};

function ForwardComp() {
    const inputRef = useRef();

    const handleFocus = () => {
        inputRef.current.focus();
        inputRef.current.value = "Nick";
    };

    return (
        <Card>
            <CardContent style={{ textAlign: "center" }}>
                <Typography variant="h6">Refs Forwarding Composition</Typography>
                <Parent handleFocus={handleFocus} />
                <Child inputRef={inputRef} >
                    Hellor
                </Child>
            </CardContent>
        </Card>
    )

};

function Parent({ handleFocus }) {
    return (
        <>
            <Button
                onClick={handleFocus}
                variant="outlined">
                Click to forward ref
            </Button>
        </>
    )
};
const Child = React.forwardRef((props, inputRef) => {

    return (
        <Container>
            <Grid>
                <form>
                    <input ref={props.inputRef} type="text" />
                </form>
            </Grid>
        </Container>
    )
});



