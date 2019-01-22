import React from 'react';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import ClassList from './components/ClassList/ClassList';
import Home from './components/Home/Home';
import About from './components/About/About';
import Student from './components/Student/Student';


export default (
    <Switch>
        <Route path='/students/:id' component={ Student } />
        <Route path='/classlist/:class' component={ ClassList } />
        <Route path='/about' component={ About } />
        <Route exact path='/' component={ Home } />
    </Switch>
)