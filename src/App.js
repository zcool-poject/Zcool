import React,{Component} from 'react';

// import logo from './logo.svg';
import './App.css';
import './static/base.css';
import {Route,Redirect} from 'react-router-dom';

import SearchPage from './route/SearchPage';
import Indexs from './route/Indexs';
import Fengqiang from './route/Fengqiang';
import Miaosha from './route/Miaosha';



class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        };
      }

    render(){return <div className="App">
            <Route path="/searchpage" component={SearchPage}/>
            <Route path="/indexs" component={Indexs}/>
            <Route path="/fengqiang" component={Fengqiang}/>
            <Route path="/miaosha" component={Miaosha}/>
            <Redirect from="/indexs" to="/indexs/home" exact/>
            <Redirect from="/" to="/indexs/home" exact/>
        </div>
    }

}

export default App;
