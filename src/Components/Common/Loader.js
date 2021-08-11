import React, { Component } from 'react'
import styled from 'styled-components';

export default class Loader extends Component {
    render() {
        return (
            <FooterWrap>
                <div class="gooey">
                    <span class="dot span"></span>
                    <div class="dots">
                        <span class="span"></span>
                        <span class="span"></span>
                        <span class="span"></span>
                    </div>
                </div>
            </FooterWrap>
        )
    }
}

const FooterWrap = styled.nav`

.gooey{
    position: absolute;
    top: 50%;
    left: 50%;
    width: 142px;
    height: 40px;
    margin: -20px 0 0 -71px;
    background: white;
    filter: contrast(20);
  }.dot{
  position: absolute;
  width: 10px;
  height: 10px;
  top: 12px;
  left: 15px;
  filter: blur(0px);
  background: #4b689e;
  border-radius: 50%;
  transform: translateX(0);
  animation: dot 3s infinite;
  }
  .dots{
  transform: translateX(0);
  margin-top: 12px;
  margin-left: 31px;
  animation: dots 2.99s infinite;
  }.span{
    display: block;
    float: left;
    width: 11px;
    height: 11px;
    margin-left: 16px;
    filter: blur(1px);
    background: #476091;
    border-radius: 50%;
  }
  @keyframes dot{
    50%{
      transform: translateX(96px)}
    }
  @keyframes dots{
    50%{
      transform: translateX(-31px)}
    }
  
`