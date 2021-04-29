import React, { useState } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import NavMenu from './NavMenu/NavMenu';
import PokeCardsWrapper from './PokeCardsWrapper/PokeCardsWrapper';
import PokeModal from './PokeModal/PokeModal';
import { ZeroResults, FallbackPage } from './utils';

function PokeMokeApp() {
    const [movieQuery, setMovieQuery] = useState('');
    const [currentPageRoute, setCurrentPageRoute] = useState(1);

    return (
        <BrowserRouter>
            <NavMenu
                setCurrentPageRoute={setCurrentPageRoute}
                movieQuery={movieQuery}
                setMovieQuery={setMovieQuery}
            />
            <Switch>
                <Redirect exact from="/pokemoke" to={`/pokemoke/page${currentPageRoute}`} />
                <Route exact path={`/pokemoke/page${currentPageRoute}`}>
                    {movieQuery
                        ? <PokeCardsWrapper
                            movieQuery={movieQuery}
                            // movieQuery={value}
                            setCurrentPageRoute={setCurrentPageRoute}
                            currentPageRoute={currentPageRoute}
                        />
                        : <ZeroResults isQueryEmpty={true} />
                    }
                </Route>
                <Route exact path={`/pokemoke/:page${currentPageRoute}/:id`}>
                    <PokeModal setCurrentPageRoute={setCurrentPageRoute} />
                </Route>
                <Route exact path={`/*`}>
                    <FallbackPage />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default PokeMokeApp
