import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'
import Header from './pages/header/Header';
import Home from './pages/home/Home';
import HomeMovie from './pages/home/HomeMovie';
import QueroAssistir from './pages/queroassistir/QueroAssistir';
import Assistido from './pages/assistido/Assistido';
import './App.css';


class App extends Component {
  
  render() {
    return (
      <div >
        <Header />
        <Switch>
          <Route path='/' component={Home} exact/>
          <Route path='/movie/:id' component={HomeMovie} exact/>
          <Route path='/quero-assistir' component={QueroAssistir} exact />
          <Route path='/assistido' component={Assistido} exact />
          <Redirect to="/" />
        </Switch>
      </div>
    );
  }
}

export default App;
