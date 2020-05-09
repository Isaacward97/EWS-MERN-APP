import React, {Component} from 'react';
import {BrowserRouter as Router, Link} from 'react-router-dom';
import Route from 'react-router-dom/Route';
import About from './About';
import Home from './Home';
import './App.css';


//route for navbar to allow multiple pages to be rendered
//sets navbar to be on every page
class App extends Component{
  render(){
    return(
      <Router>
      <div className="topnav">
        <li>
        <Link to = "/">Home</Link>
        </li>
        <li>
        <Link to="/about">About</Link>
        </li>
    </div>
      <Route path = "/" exact component={Home}render={
        () => {
        }
      }/>
      <Route path = "/about" exact component={About} render={
        () => {
        }
      }/>

      </Router>
    );
  }
}

export default App;
