import React,{Component} from 'react';

// import logo from './logo.svg';
import './App.css';
import './static/base.css';
import {Route,Redirect} from 'react-router-dom';
import { TabBar} from 'antd-mobile';

import SearchPage from './route/SearchPage';
import Indexs from './route/Indexs';



class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
         
        };
      }

    render(){return <div className="App">
            <Route path="/searchpage" component={SearchPage}/>
            <Route path="/indexs" component={Indexs}/>
            <Redirect from="/indexs" to="/indexs/home" exact/>
            <Redirect from="/" to="/indexs/home" exact/>
        </div>
    }

}

export default App;
