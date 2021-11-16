import React from 'react';
import * as Pages from './Pages';
import { Header } from './components';
import { Footer } from './components';
import { Switch, Route } from 'react-router-dom';
import './style.css'

function App (){
    return(
        <div id='app'>
            <Header />

                <Switch>
                    <Route exact path='/'>
                        <Pages.Home />
                    </Route>
                    <Route path='/lobby'>
                        <Pages.Lobby />
                    </Route>
                    <Route path='/game'>
                        <Pages.Game />
                    </Route>
                </Switch>
            <Footer />
        </div>
    )
}

export default App;