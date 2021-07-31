import React from 'react';
import './App.css';
import {Switch, Route, useLocation} from 'react-router-dom';
import Home from './pages/Home';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import {AnimatePresence} from 'framer-motion';


function App() {
  
  let location = useLocation();

  return (
    <>
      <AnimatePresence exitBeforeEnter>
      <Switch location={location} key={location.pathname}>
        <Route path="/" exact component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/portfolio" component={Portfolio}/>
        <Route path="/contact" component={Contact} />
      </Switch>
      </AnimatePresence>
            </>
  );
}

export default App;
