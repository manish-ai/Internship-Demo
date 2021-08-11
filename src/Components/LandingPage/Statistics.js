import React, { Component } from 'react'
import styled from 'styled-components';

export default class Statistics extends Component {
    render() {
        return (
            <StatisticsWrap>
                <div className="counter-area bg_cover pt-80 pb-115">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="counter-item mt-30">

                                    <img src="Assets/logo/icons8-project-30.png" alt="$" />
                                    <h5 className="title"><span className="counter">869</span>+</h5>
                                    <p>Project We Have Done</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="counter-item mt-30">
                                    <i className="fal fa-users"></i>
                                    <h5 className="title"><span className="counter">100</span>+</h5>
                                    <p>People Involved With Us</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="counter-item mt-30">
                                    <i className="fal fa-globe-americas"></i>
                                    <h5 className="title"><span className="counter">50</span>+</h5>
                                    <p>We Are Worldwide</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="counter-item mt-30">
                                    <i className="fal fa-award"></i>
                                    <h5 className="title"><span className="counter">10</span>+</h5>
                                    <p>We Got Too Much Awards</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </StatisticsWrap>
        )
    }
}

const StatisticsWrap = styled.div`
.counter-area.bg_cover {
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
    width: 100%;
    height: 100%;
    // background-image: url(Assets/images/landing/video-bg.jpg);
    background: #fafafa;
}
.pt-80 {
    padding-top: 40px;
}
.pb-115 {
    padding-bottom: 40px;
}
.counter-area .counter-item {
    position: relative;
    padding-left: 0px;
    text-align: center;
}
.counter-item.mt-30 {
    margin-top: 10px;
}
.counter-area .counter-item .title {
    font-size: 16px;
    color: #000;
    font-weight: 400;
}
.counter-area .counter-item .title span {
    font-size: 16px;
    display: inline-block;
    font-weight: 600;
    letter-spacing: 0.6px;
    line-height: 23px;
    text-transform: uppercase;
    margin-top: -14px !important;
}
.counter-area .counter-item p {
    font-size: 13px;
    font-weight: 500;
    text-transform: capitalize;
    color: grey;
    opacity: 1;
    line-height: 28px;
    margin: 0;
}
.counter-area .counter-item svg {
    position: relative;
    color: #E68C45;
    font-size: 34px;
    width: auto;
    margin-bottom: 25px;
}

.counter-area .counter-item img {
    position: relative;
    color: #E68C45 !important;
    width: 34px;
    height: 34px;
    width: auto;
    margin-bottom: 25.9px;
    margin-top:0.9px;
}
@media only screen and (max-width: 1200px) and (min-width: 992px) {
  .counter-area .counter-item {
      padding-left: 55px;
  }
}
.sec-pad-lg {
    padding: 50px 0;
    border-top: 1px solid rgba(0,0,0,0.09);
}
`
