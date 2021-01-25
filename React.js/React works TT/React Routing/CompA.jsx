import React from 'react';
import {Route,Switch} from 'react-router-dom'
import About from './About';
import Contact from './Contact';

const CompA = ()=>{ 

  const errorPage = ()=>{ 
    return(
      <h1>Oops page not found!!</h1>
    )
  }
   
  const Name = ()=>{ 
    return(
      <h1>Gulab Jamoon </h1>
    )
  }

//switch is used for swicth url 
// render about page exactly as '/'
// render contact page exactly '/contact'
// if any error in url render without any path


  return(
    <>
     <Switch>
        <Route exact path='/' component={About} />
        <Route exact path='/contact' component={Contact} />
        <Route path='/contact/name' component={Name} />
        <Route component={errorPage} />
     </Switch>
    </>
  )
}

export default CompA;