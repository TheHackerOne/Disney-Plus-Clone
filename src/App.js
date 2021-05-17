import React from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';
import Header from './components/Header';
import Home from './components/Home'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Details from './components/Details';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Route path='/detail/:id' component={Details} exact/>
        <Route path='/login' component={Login} exact/>
        <Route path='/' component={Home} exact/>
      </Router>
    </div>
  );
}

export default App;
