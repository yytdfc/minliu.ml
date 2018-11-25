import React, { Component, Fragment } from 'react';
import flower from './assets/flower.svg';
import './App.css';
import song from './audio/happybirthday.mp3'

class Timer extends Component {
  state = {
    birthday: (new Date("03:25:00 11/25/2018")),
    d: "",
    h: "",
    m: "",
    s: "",
    passed: false,
  }

  componentDidMount(){
    setInterval(
      ()=>{
        this.updateTimer()
      },500
    )
  }

  updateTimer=()=>{
    var timeLeft = this.state.birthday - (new Date());
    var passed = (timeLeft<0)
    timeLeft = Math.abs(Math.floor(timeLeft / 1000));
    this.setState({
      d: Math.floor(timeLeft / 86400),
      h: Math.floor(timeLeft % 86400 / 3600),
      m: Math.floor(timeLeft % 3600 / 60),
      s: Math.floor(timeLeft % 60),
      passed: passed,
    });
  };

  render() {
    const get_timer=()=>{
      if(this.state.d>0)
        return(
          <Fragment>
            {this.state.d}天
            {this.state.h}小时
            <br/>
            {this.state.m}分
            {this.state.s}秒
          </Fragment>
        )
      else if(this.state.h>0)
        return(
          <Fragment>
            {this.state.h}小时
            {this.state.m}分
            {this.state.s}秒
          </Fragment>
        )
      else if(this.state.m>0)
        return(
          <Fragment>
            {this.state.m}分
            {this.state.s}秒
          </Fragment>
        )
      else
        return(
          <Fragment>
            {this.state.s}秒
          </Fragment>
        )
    }
    if(!this.state.passed)
      return (
        <div className="Timer">
          <img src={flower} className="Timer-Logo"/>
          <p className="Timer-Text">
            距离小可爱
            <br/>
            25
            <br/>
            周岁生日还有
            <br/>
            {get_timer()}
          </p>
        </div>
      )
    else
      return (
        <div className="Timer">
          <img src={flower} className="Timer-Logo"/>
          <p className="Timer-Text">
            小可爱出生
            <br/>
            {get_timer()}
          </p>
        </div>
      )
  }
}

export default Timer;
