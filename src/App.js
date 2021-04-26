import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import NavMenu from './components/NavMenu/NavMenu';
import PokeCardsWrapper from './components/PokeCardsWrapper/PokeCardsWrapper';
import PokeModal from './components/PokeModal/PokeModal';
import { ZeroResults } from './components/utils';

function App() {
  const [movieQuery, setMovieQuery] = useState('');
  const [currentPageRoute, setCurrentPageRoute] = useState(1);

  console.log('currentPageRoute', currentPageRoute)

  return (
    <div className="App">
      <BrowserRouter>

        <NavMenu
          setCurrentPageRoute={setCurrentPageRoute}
          movieQuery={movieQuery}
          setMovieQuery={setMovieQuery}
        />

        <Switch>
          <Redirect exact from="/" to={`/page${currentPageRoute}`} />
          {/*  */}
          <Route path={`/:page${currentPageRoute}/:id`}>
            <PokeModal setCurrentPageRoute={setCurrentPageRoute} />
          </Route>
          {/*  */}
          <Route exact path={`/page${currentPageRoute}`}>
            {movieQuery
              ? <PokeCardsWrapper
                movieQuery={movieQuery}
                setCurrentPageRoute={setCurrentPageRoute}
              />
              : <ZeroResults isQueryEmpty={true} />
            }
          </Route>
          {/*  */}
        </Switch>

      </BrowserRouter>
    </div >
  );
}

export default App;
