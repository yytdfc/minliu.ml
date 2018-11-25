import React, { Component, Fragment } from 'react';
import flower from './assets/flower.svg';
import song from './assets/happybirthday.mp3'
import './App.css';

class Timer extends Component {
  state = {
    birthday: (new Date(2018, 11, 3, 0, 0, 0)),
    // birthday: (new Date(2018, 10, 26, 4, 43, 0)),
    d: "",
    h: "",
    m: "",
    s: "",
    passed: false,
  }

  componentWillMount(){
    this.updateTimer();
    setInterval(
      ()=>{
        this.updateTimer()
      },1000
    )
  }

  updateTimer=()=>{
    var timeLeft = this.state.birthday - (new Date());
    var passed = (timeLeft<0)
    if(passed && !this.state.passed){
      var birthday = new Date(1993, 11, 9);
      this.setState({
        birthday: birthday,
      });
      timeLeft = birthday - (new Date());
    }
    if(this.state.passed){
      var audio = document.getElementById("audio");
      audio.play();
    }
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
            <b>25 th</b>
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
          <audio id="audio" src={song}/>
        </div>
      )
  }
}

export default Timer;
