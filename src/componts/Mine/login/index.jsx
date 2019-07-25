import React, { Component } from 'react';
import './login.scss';

import { Tabs } from 'antd-mobile';
import { List, InputItem, WhiteSpace } from 'antd-mobile';
import { StickyContainer, Sticky } from 'react-sticky';
import { relative } from 'path';


class login extends Component {
    constructor() {
        super();
        this.state = {
            tabs: [
                { title: '卷皮账号登录' },
                { title: '手机快捷登录' },
                
                
            ]
        }
        this.goBack = this.goBack.bind(this)
    }
    goBack() {
       this.props.history.push('/indexs/mine')
    }
    render() {
        return (
            <div className="login_box">
                <div className="login_head">
                    <div className="login_bg">
                        <a href="javascript:;" style={{zIndex:999,position:'relative'}} onClick={this.goBack.bind(this)}>
                            <img src="//jp.juancdn.com/jpwebapp_v1/images_v1/user/arrow_white.png?5123297e-1&sv=449ce9ee" alt="" />
                        </a>
                        <span className="login_color login_Fsize">登录</span>
                        <a href="javascript:;" className="login_color login_reg">
                            注册
                        </a>
                    </div>
                </div>
                {/* 登录 */}
                <Tabs tabs={this.state.tabs}  animated swipeable  >
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' }}>
                        {/* 卷皮账号登录 */}
                    
                        <List style={{width:'100%'}}>
                            <InputItem
                                clear
                                placeholder="手机号/邮箱/用户名"
                                ref={el => this.autoFocusInst = el}
                            ></InputItem>
                            <InputItem
                                clear
                                placeholder="密码"
                                type='password'
                                ref={el => this.inputRef = el}

                            >
                            </InputItem>

                        </List>
      </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' }}>
                        {/* 手机快捷登录 */}

                        <List style={{width:'100%'}}>
                        <InputItem
                                clear
                                placeholder="请输入手机号码"
                                ref={el => this.autoFocusInst = el}
                            ></InputItem>
                            
                            <InputItem
                                clear
                                placeholder="请输入验证码"
                                type='password'
                                ref={el => this.inputRef = el}

                            >
                            </InputItem>

                        </List>
                        
      </div>
                </Tabs>

                <List.Item>
                                <div
                                    style={{ marginTop: '25px', background: '#dbdbdb', textAlign: 'center', fontSize: '18px', lineHeight: '60px', height: '60px', color: '#fff' }}
                                    onClick={this.handleClick}
                                >
                                    下一步
            </div>
                            </List.Item>

                            {/* 两周内免登陆、忘记密码 */}
                    <div id="login_l">
                        <label className="freeLogin ">
                            <input type="checkbox"  className="ck"/>
                            <i className="before"><img src="//jp.juancdn.com/jpwebapp_v1/images_v1/user/label_on.png?63443b91-1&sv=449ce9ee" alt="" /></i>
                            两周内免登陆
                        </label>
                        <a href="javascript:;">
                            忘记密码？
                        </a>
                    </div>   
                    {/* 第三方账号快速登录 */}
                    <div className="wap_app ">
                        <h3 className="third_txt">第三方账号快速登录</h3>
                        <div className="third_app clearfix">
                            <a href="javascript:;">
                                <img src="//jp.juancdn.com/jpwebapp_v1/images_v1/user/tencent.png?29cf7667-1&sv=449ce9ee" alt=""/>
                            </a>
                            <a href="javascript:;">
                                <img src="//jp.juancdn.com/jpwebapp_v1/images_v1/user/taobao.png?b6b2268f-1&sv=449ce9ee" alt=""/>
                            </a>
                            <a href="javascript:;">
                                <img src="//jp.juancdn.com/jpwebapp_v1/images_v1/user/sina.png?e6100489-1&sv=449ce9ee" alt=""/>
                            </a>
                        </div>
                    </div>

                    {/* 全场包邮 */}
                    <ul className="protection clearfix">
                        <li className="fl">
                            <img src="//jp.juancdn.com/jpwebapp_v1/images_v1/user/unexpress.png?6a15f6a5-1&sv=449ce9ee" alt=""/>
                            
                            <span>全场包邮</span>
                        </li>
                        <li>
                            <img src="//jp.juancdn.com/jpwebapp_v1/images_v1/user/search.png?597c2e82-1&sv=449ce9ee" alt=""/>
                            100%人工质检
                        </li>
                        <li className="fr">
                            <img src="//jp.juancdn.com/jpwebapp_v1/images_v1/user/seven.png?902d32d9-1&sv=449ce9ee" alt=""/>
                            7天放心退
                        </li>
                    </ul>

                {/* 尾部div */}
            </div>
        )
    }
}

export default login