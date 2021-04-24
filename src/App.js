import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NavMenu from './components/NavMenu/NavMenu';
import PokeCardsWrapper from './components/PokeCardsWrapper/PokeCardsWrapper';
import PokeModal from './components/PokeModal/PokeModal';




function App() {
  const [movieQuery, setMovieQuery] = useState('');


  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <NavMenu
              movieQuery={movieQuery}
              setMovieQuery={setMovieQuery}
            />
            <PokeCardsWrapper
              movieQuery={movieQuery}
            />
          </Route>
          <Route path="/:id">
            <PokeModal />
          </Route>
        </Switch>
      </BrowserRouter>
    </div >
  );
}

export default App;
