import React from 'react';
import Home from '../Home/Home';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Chart from '../Chart/Chart';
import NotFound from '../NotFound/NotFound';
import Navication from '../Navication/Navication';
import OneTodo from '../OneTodo/OneTodo';

const TodoApp = () => {
    return (
        <div>
           <Router>
               <Navication/>
               <Switch>
                   <Route path='/home'>
                       <Home/>
                   </Route>
                   <Route exact path='/'>
                       <Home/>
                   </Route>
                   <Route path='/chart'>
                        <Chart/>
                   </Route>
                   <Route path='/onetodo/:id'>
                       <OneTodo/>
                   </Route>
                   <Route path='*'>
                     <NotFound/>
                   </Route>
               </Switch>
           </Router>
        </div>
    );
};

export default TodoApp;