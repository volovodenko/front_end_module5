import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';

import Home from './containers/Home';
import Category from './containers/Category';
import Post from './containers/Post';
import SubMain from './containers/SubMain';
import NotFound from './components/NotFound';
import './app.scss';

export default class App extends Component {
    render() {
        return (
            <div className='wrapper'>
                <div className='main'>
                    <Switch>
                        <Route exact path='/' component={Home}/>
                        <Route exact path='/t/:tag' component={Category}/>
                        <Route exact path='/gallery/:hash' component={Post}/>

                        <Route component={NotFound}/>
                    </Switch>
                </div>

                <SubMain/>
            </div>
        );
    }
}