import React from 'react';
import './App.css';
import Appss from './Appss'
import Apps from './Apps'
import Formmm from './Components/Formmm'
import LoginHero from './Components/LoginHero'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {
  return (
    <div>
      <Router>
         <Switch>
           <Route path='/' exact component={Appss}/>
           <Route path='/shopp' component={Apps}/>
           <Route path='/checkout' component={Formmm}/>
           <Route path='/mainpage' component={LoginHero}/>
          </Switch>
      </Router>
    </div>
  );
}

export default App;
