import React from 'react';
import * as Pages from './Pages';
import { Header } from './components';
import './style.css'

function App (){
    return(
        <div id='app'>
            <Header />
            <Pages.Home />
        </div>
    )
}

export default App;