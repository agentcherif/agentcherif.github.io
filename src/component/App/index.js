import '../../App.css';

import React from 'react';

import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import Acceuil from '../Acceuil';
import Competence from '../Competence';
import ErrorPage from '../ErrorPage';
import Footer from '../Footer';
import Formation from '../Formation';
import Menu from '../Menu';
import Projet from '../Projet';

function App() {
  return (
    <Router>
      <Menu />
      <Switch>
        <Route exact path='/' component={Acceuil} />
        <Route path='/formation' component={Formation} />
        <Route path='/competence' component={Competence} />
        <Route path='/projet' component={Projet} />
        <Route  component={ErrorPage} />
      </Switch>
      <Footer />
    </Router>
   
  );
}

export default App;
