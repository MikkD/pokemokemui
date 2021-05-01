import React, { useRef, useState } from 'react'
import { Container, Grid, IconButton, Typography } from '@material-ui/core';
import { Card, CardContent, CardHeader, Paper } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { List } from '@material-ui/core';
import { ListItem } from '@material-ui/core';
import { ListItemText } from '@material-ui/core';
import { Link } from 'react-router-dom';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import { withRouter } from 'react-router-dom';
import Fade from '@material-ui/core/Fade';
import Slide from '@material-ui/core/Slide';
import Grow from '@material-ui/core/Grow';
import { useDispatch } from 'react-redux';



function MyBread({ match, history, location: { pathname } }) {

    const routeMapping = [
        {
            name: 'inbox',
            path: `/${match.path}/inbox`,
            message: "Inbox snacks",
            severity: "success",
            transition: Fade
        },
        {
            name: 'trash',
            path: `/${match.path}/trash`,
            nestedRoute: `${match.path}/trash/nested`,
            message: "errro 606 ",
            severity: "error",
            transition: Slide
        },
        {
            name: 'spam',
            path: `/${match.path}/spam`,
            message: "Be aware of wolfs",
            severity: "warning",
            transition: Grow
        }
    ];


    const dispatch = useDispatch();

    const activateSnackBar = (severity, message, transition) => {
        dispatch({
            type: "OPEN_SNACKBAR",
            payload: { severity, message, transition }
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
                            {routeMapping.map((route) => {
                                const { name, path, severity, message, transition } = route;
                                return <ListItem
                                    key={name}
                                    button
                                    onClick={() => {
                                        history.push(`/mybread/${name}`)
                                        activateSnackBar(severity, message, transition)
                                    }}>
                                    <ListItemText primary={name} />
                                </ListItem>
                            }
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
    const cleanPathNames = pathname.split('/').filter((el, index) => index > 0);
    return (
        <Breadcrumbs>
            <Button component={Link} to={`/`} >Main</Button>
            {cleanPathNames.map((el, index) => {
                const lastItem = cleanPathNames.indexOf(cleanPathNames[cleanPathNames.length - 1]) === index;
                if (!lastItem) return <Button key={index} component={Link} to={`/${el}`} >{el}</Button>
                return <Typography key={index} color="inherit">{el}</Typography>
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



