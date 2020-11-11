
import './App.css';
import React from 'react';

import Nav from './Nav';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './About';
import Shop from './Shop';
import Home from './Home';
import ShopItem from './Shopitem';

function App() {
  return (
    <div className="App">

      <Router>
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/shop" component={Shop} exact />
          <Route path="/shop/:id" component={ShopItem} />
          <Route path="*" exact component={About} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
