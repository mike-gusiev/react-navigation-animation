import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Navigation from './components/Navigation/Navigation';
import { routes } from './routes';

const App = () => {
  const [menuOpen, setMenuOpen] = useState(true);
  return (
    <Router>
      <Layout>
        <Navigation menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Switch>
          {routes.map(({ link, Component }) => (
            <Route exact path={link} key={link}>
              <Component menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            </Route>
          ))}
          <Redirect exact from="/" to="/start"/>
        </Switch>
      </Layout>
    </Router>
  );
};

export default App;
