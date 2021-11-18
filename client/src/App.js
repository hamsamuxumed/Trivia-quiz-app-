import React from 'react';
import * as Pages from './pages';
import { Header } from './components';
import { Footer } from './components';
import { GeneralLeaderboard } from './components';
import { Switch, Route } from 'react-router-dom';
import './style.css'

function App (){
    return(
        <div id='app'>
                {/* <Pages.Home/> */}
                <Header />
                <Switch>
                    <Route exact path='/'>
                        <Pages.Home />
                    </Route>
                    <Route path='/leaderboard'>
                        <GeneralLeaderboard />
                    </Route>
                    <Route>
                        Nothing found, double check URL
                    </Route>
                </Switch>
                <Footer />
        </div>
    )
}

export default App;