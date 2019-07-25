import React,{Component} from 'react';
import {withRouter} from 'react-router';
import './Head_mine.scss';
import { Icon } from 'antd';


// console.log(login)




class head_mine extends Component {
    constructor(props){
        super();
        this.state = {}
        this.gotoLogin = this.gotoLogin.bind(this);
        this.gotoReg = this.gotoReg.bind(this)
    }
    gotoReg(){
        // console.log(this.props)
        this.props.history.push('/reg');
    }
    gotoLogin() {
        this.props.history.push('/login')
    }
    render(){
        return <header id="head">
            <div className="userTop">
                <a href="javasctipt:;" id="t-goback">
                    <Icon type="arrow-left"     />
                </a>
                <span id="t-index">个人中心</span>  
            </div>
            <div className="user_login">
                <a href="javascript:;" onClick={this.gotoReg.bind(this)}>
                    注册
                </a>
                <i className="line"></i>
                <a href="javascript:;" onClick={this.gotoLogin.bind(this)}>
                    登录
                </a>
            </div>
        </header>
    }
}

head_mine = withRouter(head_mine)
export default head_mine