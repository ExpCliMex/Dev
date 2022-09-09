import React from 'react'
import { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Navbar from './components/navbar/navbar';
import Com from './components/com/com';
import './App.css';
import Paciente from './components/paciente';
import Laboratorio from './components/laboratorio';
import Hc from './components/hc';
import NotFound from './components/notFound';
import { Redirect } from 'react-router';

class App extends Component {
  render() { 
    return (
      <main className="container">
        <Navbar/>
        <Switch>
        <Route path="/com" component={Com}></Route>
        <Route path="/paciente" component={Paciente}></Route>
        <Route path="/laboratorio" component={Laboratorio}></Route>
        <Route path="/hc" component={Hc}></Route>
        <Route path="/notFound" component={NotFound}></Route>
        <Redirect from="/" exact to="com"/>
        <Redirect to="/notFound"/>
        </Switch>
      </main>
    );
  }
}

export default App;
