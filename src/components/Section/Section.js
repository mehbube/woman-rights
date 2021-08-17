import React from 'react';
import Home from '../Section/Home';
import Blog from '../Section/Blog';
import Contact from '../Section/Contact';
import About from '../Section/About';
import Login from '../Section/Login';
import { Route } from 'react-router-dom';


function Section() {
  
    return (
        <section>
            <Route path="/" component={Home} exact/>
            <Route path="/blog" component={Blog} />
            <Route path="/login" component={Login} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            
            
        
        </section>
    )
}

export default Section
