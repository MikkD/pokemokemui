import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { store } from './redux/store';
import { Provider } from 'react-redux';
import { routes } from './utils';
import MySnackBar from './components/MyBread/MySnackBar';
import { Menu } from '@material-ui/core';
import { useStyles } from './utils';
import { createMuiTheme, ThemeProvider, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';


function App() {
  const theme = createMuiTheme();

  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <div className="App">
          <BrowserRouter>
            <GlobalNav />
            {/* <CustomBlock /> */}
            <Switch>
              {routes.map(route =>
                <Route
                  key={route.path}
                  exact path={`${route.path}`}
                >
                  {route.component}
                </Route>)}
            </Switch>
          </BrowserRouter>
        </div >
      </Provider>
    </ThemeProvider>
  );
}

export default App;


function GlobalNav() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);


  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const theme = useTheme();
  const xsAndDown = useMediaQuery(theme.breakpoints.down("xs"));




  return (
    <AppBar position="static">
      <Toolbar variant="dense" style={{ display: "flex", justifyContent: "space-between" }}>
        {!xsAndDown && <TheList routes={routes} />}
        {xsAndDown &&
          <IconButton onClick={handleMenu} edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
        }
        <Menu
          anchorEl={anchorEl}
          anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
          keepMounted
          transformOrigin={{ vertical: 'top', horizontal: 'right' }}
          open={open}
          onClose={handleClose}
        >
          <TheList routes={routes} />
        </Menu>
      </Toolbar>
      <MySnackBar />
    </AppBar >
  )
};



const TheList = React.forwardRef(({ routes }, ref) => {
  const classes = useStyles()
  return (
    <List className={classes.menu} component="nav" aria-label="global-navigation-menu" >
      {routes.map(route => <TheListItem key={route.name} {...route} />)}
    </List >
  )
});

const TheListItem = ({ name, path }) => {
  return (
    <ListItem
      button
      component={Link}
      key={name}
      to={path}>
      <ListItemText primary={name} />
    </ListItem>
  )
};
