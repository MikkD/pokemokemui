import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
    modalWrapper: {
        height: "100vh",
    },
    gridWrapper: {
        height: "90%"
    },
    cardStyles: {
        display: "flex",
        padding: theme.spacing(4),
        [theme.breakpoints.down("xs")]: {
            flexDirection: "column"
        }
    },
    CardContentStyles: {
        flexGrow: 1
    },
    CardActionStyles: {
        padding: '0px'
    },
    mediaStyles: {
        paddingTop: "50%",
        width: "100%",
        height: "100%"
    }

}));