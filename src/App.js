import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer/Footer';
import RouteX from './RouteX';
import './App.css';

function App() {
  return (
       <>
       <Router>
         <Sidebar />
         <Switch>
            <RouteX />
         </Switch>
         <Footer />
       </Router>
       </>
  );
}

export default App;
