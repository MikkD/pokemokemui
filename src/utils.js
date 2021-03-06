import MySnackBar from './components/MyBread/MySnackBar';
import Accordio from './components/Accordio/Accordio';
import PokeMokeApp from './components/PokiMokiApp/PokeMokeApp';
import MyBread from './components/MyBread/MyBread';
import Timer from './components/Timer/Timer';
import TodosApp from './components/TodosApp/TodosApp';
import TodosApp2 from './components/TodosApp2/TodosApp2';
import { makeStyles } from '@material-ui/core';

export const routes = [
    {
        path: "/",
        name: "Main"
    },
    {
        path: "/pokemoke",
        component: <PokeMokeApp />,
        name: "PokeMokeApp"
    },
    {
        path: "/mybread",
        component: <MyBread />,
        name: "MyBread"
    },
    {
        path: "/timer",
        component: <Timer />,
        name: "Timer"
    },
    {
        path: "/accordion",
        component: <Accordio />,
        name: "Accordion"
    },
    {
        path: "/todos",
        component: <TodosApp />,
        name: "TodosApp"
    },
    {
        path: "/todos2",
        component: <TodosApp2 />,
        name: "TodosApp2"
    }
];

export const useStyles = makeStyles((theme) => ({
    menu: {
        display: "flex",
        [theme.breakpoints.down("xs")]: {
            flexDirection: "column",
        }
    }
}));