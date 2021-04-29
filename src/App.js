import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import PokeMokeApp from './components/PokiMokiApp/PokeMokeApp';
import MyBread from './components/MyBread/MyBread';
import Timer from './components/Timer/Timer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemLink from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

function App() {


  return (
    <div className="App">

      <BrowserRouter>
        <GlobalNav />
        <Switch>
          <Route exact path="/pokemoke">
            <PokeMokeApp />
          </Route>
          <Route path="/mybread">
            <MyBread />
          </Route>
          <Route exact path="/timer">
            <Timer />
          </Route>
        </Switch>
      </BrowserRouter>
    </div >
  );
}

export default App;


function GlobalNav() {

  const routes = [
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
    }
  ]


  return (
    <AppBar position="static">
      <Toolbar variant="dense" style={{ display: "flex", justifyContent: "space-between" }}>
        <List style={{ display: 'flex' }} component="nav" aria-label="global-navigation-menu">
          {routes.map(route =>
            <ListItem
              button
              component={Link}
              key={route.name}
              to={route.path}>
              <ListItemText primary={route.name} />
            </ListItem>
          )}
        </List>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
      </Toolbar>
    </AppBar >
  )
};
