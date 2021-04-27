import React from 'react';
import { Button, Card, CardActions, CardHeader, CardContent, CardMedia, Grid, Paper, Typography } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core';
import { getPosterImage } from '../../utils';

const useStyles = makeStyles((theme) => ({
    media: {
        height: "0",
        paddingTop: "50%",
        width: "100%"
    }
}));

const PokieCard = ({ movie: { Title, Year, Poster, imdbID }, currentPageRoute }) => {
    const history = useHistory();
    const classes = useStyles();


    return (
        <>
            <Grid item xs={12} sm={6} md={4}>
                <Paper >
                    <Card style={{ minHeight: "300px" }}>
                        <CardHeader
                            style={{ height: "50px" }}
                            title={Title} />
                        <CardContent>
                            <CardMedia
                                className={classes.media}
                                image={getPosterImage(Poster)}
                            />
                            <CardActions style={{ justifyContent: "space-between" }}>
                                <Typography variant="h6">Year: {Year}</Typography>
                                <Button
                                    variant="outlined"
                                    color="primary"
                                    onClick={() => history.push({
                                        pathname: `/page${currentPageRoute}/${imdbID}`,
                                        imdbID,
                                        pageNum: currentPageRoute
                                    })}>
                                    Read more
                                </Button>
                            </CardActions>
                        </CardContent>
                    </Card>
                </Paper>
            </Grid>
        </>
    )
}

export default PokieCard
