import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ProductList from './app/components/ProductList';
import Shipping from './app/components/Shipping';
import Header from './app/components/Header';

function App() {
  return (
    <div className="App">
        <Router>
          <Header />
          <Route path="/shipping" component={Shipping} />
          <Route path="/" exact component={ProductList} />
        </Router>
    </div>
  );
}

export default App;
