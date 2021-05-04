import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
    listStyles: {
        padding: [theme.spacing(2)],
        marginTop: [theme.spacing(2)]
    },
    formContainer: {
        display: "flex",
    },
    divider: {
        height: 28,
        margin: 4,
    },
    inputStyle: {
        flexGrow: 1,
        paddingLeft: [theme.spacing(1.5)]
    }
}))