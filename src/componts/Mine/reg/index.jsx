import React, { Component } from 'react';
import './reg.scss';

import { List, InputItem, Toast, WhiteSpace, WingBlank, Button } from 'antd-mobile';









class reg extends Component {
    constructor() {
        super();
        this.gotoMine = this.gotoMine.bind(this)
        this.PUMA = this.PUMA.bind(this)
        this.showToast = this.showToast.bind(this)
    }
    componentDidMount() {
        // this.autoFocusInst.focus();
    }
    handleClick = () => {
        this.inputRef.focus();
        // console.log(this.autoFocusInst.state.value)//电话号码
   
    }


    PUMA() {
        let phone = this.autoFocusInst.state.value;
        if (phone.length) {
            if (!(/^1[3456789]\d{9}$/.test(phone))) {
                alert("手机号码有误，请重填");
            }

        } else {
            alert('号码不能为空')

        }

    }

    gotoMine() {
        this.props.history.push('/indexs/mine')
    }
    showToast() {
        Toast.info('发送验证成功', 1);
    }

    render() {
        return (
            <div className="reg_box">
                <div id="header">
                    <div className="fixtop">

                        <a href="javascript:;" className="t-fine" onClick={this.gotoMine.bind(this)}>
                            <img src="//jp.juancdn.com/jpwebapp_v1/images_v1/user/arrow_black.png?578e3149-1&sv=449ce9ee" alt="" />
                        </a>

                        <span id="t-index">注册</span>
                    </div>
                </div>
                <div className="wap_login">
                    <p className="reg_notice">请确保你的手机畅通，用于接收验证码短信</p>
                    <form action="" id="mobileFrom" style={{ position: 'relative' }}>

                        <List renderHeader={() => '请确保你的手机畅通，用于接收验证码短信'}>
                            <InputItem
                                clear
                                placeholder="请输入手机号码"
                                ref={el => this.autoFocusInst = el}
                                onBlur={this.PUMA}
                            ></InputItem>
                            <InputItem
                                clear
                                placeholder="请输入验证码"
                                type='password'
                                ref={el => this.inputRef = el}

                            >
                            </InputItem>
                            <List.Item>
                                <div style={{ marginTop: '25px', background: '#dbdbdb', textAlign: 'center', fontSize: '18px', lineHeight: '60px', height: '60px', color: '#fff' }}
                                    onClick={this.handleClick}>
                                    下一步
                                </div>
                            </List.Item>
                        </List>
                        <a href="javascript:;" className="PUMA"
                            style={{ display: 'block' }}
                            ref={el => this.PUMA = el}
                            onClick={this.showToast.bind(this)}
                        >
                            获取验证码
                             </a>

                    </form>
                </div>

            </div>
        )
    }
}




export default reg;