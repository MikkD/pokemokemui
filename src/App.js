import React, { useState } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import NavMenu from './components/NavMenu/NavMenu';
import PokeCardsWrapper from './components/PokeCardsWrapper/PokeCardsWrapper';
import PokeModal from './components/PokeModal/PokeModal';
import { ZeroResults, FallbackPage } from './components/utils';

function App() {
  const [movieQuery, setMovieQuery] = useState('');
  const [currentPageRoute, setCurrentPageRoute] = useState(1);

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
          <Route exact path={`/page${currentPageRoute}`}>
            {movieQuery
              ? <PokeCardsWrapper
                movieQuery={movieQuery}
                setCurrentPageRoute={setCurrentPageRoute}
                currentPageRoute={currentPageRoute}
              />
              : <ZeroResults isQueryEmpty={true} />
            }
          </Route>

          <Route exact path={`/:page${currentPageRoute}/:id`}>
            <PokeModal setCurrentPageRoute={setCurrentPageRoute} />
          </Route>

          <Route exact path={`/*`}>
            <FallbackPage />
          </Route>

        </Switch>
      </BrowserRouter>
    </div >
  );
}

export default App;
