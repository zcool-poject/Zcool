import React, { Component } from 'react';

// import logo from './logo.svg';
import './App.css';
import './static/base.css';
import { Route, Redirect,Switch } from 'react-router-dom';
import { TabBar } from 'antd-mobile';


import Reg from '../src/componts/Mine/reg';
import Login from '../src/componts/Mine/login';


import SearchPage from './route/SearchPage';
import Indexs from './route/Indexs';



class App extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return <div className="App">
            <Switch>
                <Route path="/searchpage" component={SearchPage} />
                <Route path="/indexs" component={Indexs} />
                <Route path="/login" component={Login} />
                <Route path="/reg" component={Reg} />
                <Redirect from="/indexs" to="/indexs/home" exact />
                <Redirect from="/" to="/indexs/home" exact />
            </Switch>
        </div>
    }

}

export default App;
