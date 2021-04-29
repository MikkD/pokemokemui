import React, { useRef } from 'react'
import { Container, Grid, Typography } from '@material-ui/core';
import { Card, CardContent, CardHeader, Paper } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { List } from '@material-ui/core';
import { ListItem } from '@material-ui/core';
import { ListItemText } from '@material-ui/core';
import { Collapse } from '@material-ui/core';
import { Link } from 'react-router-dom';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import { withRouter } from 'react-router-dom';



function MyBread({ match, history, location: { pathname } }) {
    console.log('_______')
    console.log('history', history);
    console.log('match', match);
    console.log('pathname', pathname);
    console.log('_______')
    console.log(match.path);


    const cleanPathNames = pathname.split('/').filter((el, index) => index > 0)

    const routeMapping = [
        {
            name: 'inbox',
            path: `${match.path}/inbox`
        },
        {
            name: 'trash',
            path: `${match.path}/trash`
        },
        {
            name: 'spam',
            path: `${match.path}/spam`
        }
    ];


    return (
        <Container>
            <ForwardComp />
            <Paper>
                <Card>
                    <CardHeader title="BreadCrumbs" />
                    <CardContent style={{ textAlign: "center" }}>
                        <Breadcrumbs>
                            {cleanPathNames.map((el, index) => {
                                const lastItem = cleanPathNames.indexOf(cleanPathNames[cleanPathNames.length - 1]) === index;
                                if (lastItem) return <Typography color="inherit">{el}</Typography>
                                return <Button component={Link} to={`/${el}`} >{el}</Button>
                            })}
                        </Breadcrumbs>
                        <List>
                            {routeMapping.map(route => (
                                <ListItem
                                    button
                                    // onClick={() => history.push(`/mybread/${route.name}`)}
                                    onClick={() => history.push(`/${match.path}/${route.name}`)}
                                    key={route.name}
                                >
                                    <ListItemText primary={route.name} />
                                </ListItem>
                            ))}
                        </List>

                    </CardContent>
                </Card>
            </Paper>
        </Container >
    )
}

export default withRouter(MyBread)


function ForwardComp() {
    const inputRef = useRef();
    const handleFocus = () => {
        inputRef.current.focus();
        inputRef.current.value = "Nick";
    }
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



