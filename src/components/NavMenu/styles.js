import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    typoBreakpoints: {
        fontSize: "3rem",
        marginRight: theme.spacing(2),
        [theme.breakpoints.down('xs')]: {
            fontSize: "1.4rem",
            flexGrow: "1",
            marginBottom: theme.spacing(1),
        }
    },
    toolWrap: {
        [theme.breakpoints.down("xs")]: {
            flexWrap: "wrap"
        }
    },
    appWrap: {
        padding: '25px 0px',
        marginBottom: theme.spacing(4),
    }
}))