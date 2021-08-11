import React, { Component } from 'react'
import styled from 'styled-components';

export default class HowItWorks extends Component {
  render() {
    return (
      <HowitWrap>
        <section className="sec-pad-lg">
          <div className="container-fluid">
            <div className="header-text">
              <h3 className="mt-5 mb-4 featured">How it Works?</h3>
            </div>
            {/* <div className="section-text text-center">
              <p className="meta-head">How it Works?</p>
              <h3 className="h3">Get things done through one touch amazing process.</h3>
            </div> */}


            {/* <div className="row mt-4">
              <div className="col-md-4">
                <div className="advs-box advs-box-top-icon boxed-inverse shadow-1">
                  <i className="fa fa-hand-paper-o icon circle anima" aid="0.9426302363803853" style="position: relative; animation-duration: 500ms; transition-timing-function: ease; transition-delay: 0ms;"></i>
                  <h3>This is the title</h3>
                  <p>
                    Interdum iusto pulvinar consequuntur augue optio fugarus expedita fusce.
                        </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="advs-box advs-box-top-icon boxed-inverse shadow-1">
                  <i className="fa fa-wpexplorer icon circle anima" aid="0.5714054547115921" style="position: relative; animation-duration: 500ms; transition-timing-function: ease; transition-delay: 0ms;"></i>
                  <h3>This is the title</h3>
                  <p>
                    Interdum iusto pulvinar consequuntur augue optio fugarus expedita fusce.
                        </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="advs-box advs-box-top-icon boxed-inverse shadow-1">
                  <i className="fa fa-newspaper-o icon circle anima" aid="0.8152424621388425" style="position: relative; animation-duration: 500ms; transition-timing-function: ease; transition-delay: 0ms;"></i>
                  <h3>This is the title</h3>
                  <p>
                    Interdum iusto pulvinar consequuntur augue optio fugarus expedita fusce.
                        </p>
                </div>
              </div>
            </div> */}
          </div>
          <div className="container">
            <div className="">
              {/* <div className="section-text text-center">
                <p className="meta-head">How it Works?</p>
                <h3 className="h3">Get things done through one touch amazing process.</h3>
              </div> */}
              <div className="items grad-blue process">
                <div className="row text-center icon-shad">
                  <div className="col-sm-4 res-margin-sm">
                    <div className="item">
                      <div className="icon-bg-md grdnt-orange">
                        <span>
                          <i className="far fa-shopping-basket"></i>
                        </span>
                      </div>
                      <div className="spce"></div>
                      <h5 className="h5">Select Your Order</h5>
                      <p>A quick and simplified search</p>
                    </div>
                  </div>
                  <div className="col-sm-4 res-margin-sm">
                    <div className="item">
                      <div className="icon-bg-md grdnt-orange">
                        <span>
                          <i className="far fa-cart-plus"></i>
                        </span>
                      </div>
                      <div className="spce"></div>
                      <h5 className="h5">Preparing Your Cart</h5>
                      <p>Prepares an individual cart</p>
                    </div>
                  </div>
                  <div className="col-sm-4 res-margin">
                    <div className="item last-child">
                      <div className="icon-bg-md grdnt-orange">
                        <span>
                          <i className="far fa-truck"></i>
                        </span>
                      </div>
                      <div className="spce"></div>
                      <h5 className="h5">Delivery to Your Door</h5>
                      <p>Door-To-Door delivery</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <div className="container-fluid mx-auto">
          <div className="row mt-2">

            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12 cards rounded ">

              <i className="fa fa-shopping-basket mx-auto d-block rounded-circle mb-3  fa-3x  one"> </i>
              <div className="ml-0 d-block text1">  <h4 className="one head1">SELECT YOUR ORDER</h4>
                <span className="d-block sample-text"> A quick and simplified search</span>
              </div></div>
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12  cards rounded ">
              <i className="fa fa-cart-plus mx-auto d-block mb-3 fa-3x bg-transparent two"></i>
              <div className=" d-block text2 ml-1">  <h4 className="two head2">PREPARING YOUR CART</h4>
                <span className="d-block sample-text"> Prepares an individual cart </span>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12 cards rounded ">
              <i className="fa fa-truck-container  mx-auto d-block mb-3 fa-3x  tre "> </i>
              <div className=" text3 ml-1">  <h4 className="tre ml-2">DELIVERY TO YOUR DOOR</h4>
                <span className="d-block sample-text"> Door-To-Door delivery  </span>
              </div></div>
          </div>
        </div> 
        <svg viewBox="-2000 -1000 4000 2000">
          <path id="inf" d="M354-354A500 500 0 1 1 354 354L-354-354A500 500 0 1 0-354 354z"></path>
          <use xlink:href="#inf" stroke-dasharray="1570 5143" stroke-dashoffset="6713px"></use>
          </svg>
        */}
      </HowitWrap>
    )
  }
}

const HowitWrap = styled.div`

@media only screen and (max-width: 992px) {
  .item:before {
        display: none;
    }
}

.item.last-child:before, .item.last-child:after {
    display: none;
}
.item:before {
    content: '';
    position: absolute;
    width: 1px;
    right: 29px;
    top: 50%;
    margin-top: -38px;
    height: 70px;
}
.item:after {
    content: '\f061';
    font-family: 'FontAwesome';
    position: absolute;
    top: 50%;
    right: 5px;
    margin-top: -12.5px;
    font-size: 25px;
    opacity: .5;
}
.item:after {
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
    margin-left: -21px;
    top: 19px;
    position: absolute;
    content: "";
    width: 6px;
    height: 6px;
    transition: all .15s;
}
.item:after {
    opacity: 1;
    width: 18px;
    height: 18px;
    top: 50%;
    margin-right: 15px;
    background: #fff;
    border-top-width: 1px;
    border-right-width: 1px;
}
.header-text {
    margin: 0;
    padding: 0 0 30px;
    width: 100%;
    text-align: center;
    position: relative;
}
.header-text h3 {
    color: #000000;
    display: inline-block;
    font-size: 24px;
    font-weight: 600;
    letter-spacing: 2px;
    margin: 0;
    position: relative;
    text-transform: uppercase;
    vertical-align: top;
    width: auto;
}
.counter-area.bg_cover {
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
    width: 100%;
    height: 100%;
    background-image: url(Assets/images/landing/video-bg.jpg);
}
.pt-80 {
    padding-top: 80px;
}
.pb-115 {
    padding-bottom: 115px;
}
.counter-area .counter-item {
    position: relative;
    padding-left: 80px;
}
.counter-item.mt-30 {
    margin-top: 30px;
}
.counter-area .counter-item .title {
    font-size: 16px;
    color: #fff;
    font-weight: 400;
}
.counter-area .counter-item .title span {
    font-size: 50px;
    font-weight: 700;
    display: inline-block;
}
.counter-area .counter-item p {
    font-size: 14px;
    font-weight: 700;
    text-transform: capitalize;
    color: #fff;
    opacity: .6;
    line-height: 28px;
    margin: 0;
}
.counter-area .counter-item svg {
    position: absolute;
    left: 0;
    top: 12px;
    color: #fff;
    font-size: 50px;
}
@media only screen and (max-width: 1200px) and (min-width: 992px) {
  .counter-area .counter-item {
      padding-left: 55px;
  }
}
.sec-pad-lg {
    padding: 30px 0;
}
.section-text {
    max-width: 750px;
    margin: 0 auto 60px auto;
}
.meta-head {
    font-size: 40px;
    font-weight: 700;
    margin-bottom: 15px;
    color: #555;
    letter-spacing: .2px;
}
h3.h3 {
    font-size: 24px;
    line-height: 1.3;
    font-weight: 700;
    color: #444;
    margin: 0 0 10px 0;
    letter-spacing: -.01em;
}
.choose-left ul {
    padding-inline-start: 0px;
    margin: 0;
    padding: 0;
}
.choose-left ul li.choose-box {
	margin-top: 20px;
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	-ms-flex-line-pack: center;
	align-content: center;
	-webkit-box-align: center;
	-ms-flex-align: center;
	align-items: center;
	padding: 20px 20px 20px 30px;
	border-radius: 10px;
	-webkit-transition: all .7s ease 0s;
	transition: all .7s ease 0s;
	overflow: hidden;
	position: relative;
	z-index: 1;
}

.choose-left ul li.choose-box:before {
	position: absolute;
	content: '';
	top: 30%;
	left: -90px;
	width: 540px;
	height: 540px;
	background-color: rgba(255, 255, 255, 0.1);
	z-index: -1;
	-webkit-transition: all .5s ease;
	transition: all .5s ease;
	-webkit-transform: translateY(100%) rotate(10deg);
	transform: translateY(100%) rotate(10deg);
}

.choose-left ul li.active.choose-box:before {
	position: absolute;
	content: '';
	top: 30%;
	left: -90px;
	width: 540px;
	height: 540px;
	background-color: rgba(255, 255, 255, 0.1);
	z-index: -1;
	-webkit-transition: all .5s ease;
	transition: all .5s ease;
	-webkit-transform: translateY(0) rotate(10deg);
	transform: translateY(0) rotate(10deg);
}

.choose-left ul li.choose-box:hover:before {
	-webkit-transition-delay: .2s;
	transition-delay: .2s;
	-webkit-transform: translateY(0) rotate(10deg);
	transform: translateY(0) rotate(10deg);
}

.choose-icon {
	width: 70px;
	height: 60px;
	line-height: 60px;
	margin-right: 10px;
	background: #007bff none repeat scroll 0 0;
	border-radius: 10px;
	-webkit-transform: rotate(42deg);
	transform: rotate(42deg);
	position: relative;
	z-index: 1;
	text-align: center;
}

.choose-icon:after {
	position: absolute;
	content: "";
	width: 100%;
	height: 100%;
	background: rgba(0, 123, 255, 0.46);
	border-radius: 5px;
	color: #fff;
	-webkit-transform: rotate(-41deg);
	transform: rotate(-41deg);
	left: 0;
	top: 0;
	z-index: -1;
}

.choose-text {
	padding-left: 15px
}

.choose-icon svg {
	-webkit-transform: rotate(-42deg);
	transform: rotate(-42deg);
	width: 100%;
	left: 0;
	top: 0;
}

.choose-icon svg {
	font-size: 24px;
	color: #fff;
}

.choose-text h3 {
	font-weight: 600;
	color: #000;
	text-transform: capitalize;
	font-size: 16px;
	margin-bottom: 7px;
	-webkit-transition: all 0.4s ease 0s;
	transition: all 0.4s ease 0s
}
.choose-text p {
	font-weight: 600;
	color: #808080;
}

.choose-left ul li.active.choose-box,
.choose-left ul li.choose-box:hover {
	background: #007bff none repeat scroll 0 0;
	color: #fff
}

.choose-left ul li.active.choose-box .choose-text h3,
.choose-left ul li.choose-box:hover .choose-text h3 {
	color: #fff
}

.choose-left ul li.active.choose-box .choose-text p,
.choose-left ul li.choose-box:hover .choose-text p {
	color: #fff
}

.choose-left ul li.active.choose-box .choose-icon svg,
.choose-left ul li.choose-box:hover .choose-icon svg {
	color: #007bff;
}

.choose-left ul li.active.choose-box .choose-icon,
.choose-left ul li.choose-box:hover .choose-icon {
	background: rgba(255, 255, 255, 0.75) none repeat scroll 0 0;
}

.choose-left ul li.active.choose-box .choose-icon:after,
.choose-left ul li.choose-box:hover .choose-icon:after {
	background: rgba(255, 255, 255, 0.7) none repeat scroll 0 0;
}

.choose-right {
	margin-top: 5px;
}

.single-choose-item {
    padding: 10px;
    text-align: center;
    border-radius: 10px;
}
.single-choose-item img {
    width: 90% !important;
    margin: 0 auto;
}
.process [class*="col-"] {
    padding: 0 40px;
}
@media only screen and (max-width: 992px) {
  h3.h3 {
      font-size: 18px;
  }
  .process [class*="col-"] {
    padding: 0 15px;
  }
  h5.h5 {
      font-size: 1em;
  }
  // .process [class*="col-"]::after {
  //     font-size: 30px;
  // }
  // .process [class*="col-"]::after {
  //     content: "\e64b";
  //     font-size: 30px;
  //     top: 80%;
  //     right: 47%;
  // }
  .icon-bg-md {
      width: 50px;
      height: 50px;
  }
}
// .process [class*="col-"]:after {
//     position: absolute;
//     content: "\e649";
//     font-family: 'themify';
//     font-size: 48px;
//     top: 50%;
//     right: 0;
//     color: #cfcade;
// }
.item {
    height: 100%;
    padding: 40px 0px;
}
[class*=icon-bg] {
    border-radius: 50%;
    color: #fff;
    margin: 0 auto;
    text-align: center;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
}
div[class*=grdnt-] {
    transition: .5s;
    -webkit-transition: .5s;
    background-size: 250% auto;
}
.icon-bg-md {
    width: 70px;
    height: 70px;
    font-size: 1.5em;
}
.icon-bg-md span svg {
    font-size: 26px;
}
.grdnt-orange:not(.overly) {
    background-image: linear-gradient(135deg, #ffa03a 0, #f4be56 51%, #ffa03a 100%);
    background-image: -webkit-linear-gradient(135deg, #ffa03a 0, #f4be56 51%, #ffa03a 100%);
}
// .icon-shad [class*=icon-bg-].grdnt-orange, .icon-shad [class*=icon-bg].grdnt-orange {
//     box-shadow: 0 6px 10px rgba(244,186,75,.7);
//}
.spce {
    clear: both;
    height: 20px;
    width: 100%;
}
h5.h5 {
    font-size: 1.25em;
    font-weight: 500;
    color: #000;
    margin: 10 0 10px 0;
    line-height: 1.4;
    letter-spacing: -.01em;
}
.grdnt-blue:not(.overly) {
    background-image: -webkit-linear-gradient(90deg, #5722ff 0, #8103ff 51%, #5722ff 100%);
    background-image: linear-gradient(90deg, #5722ff 0, #8103ff 51%, #5722ff 100%);
}
.icon-shad [class*=icon-bg-].grdnt-blue, .icon-shad [class*=icon-bg].grdnt-blue {
    box-shadow: 0 20px 38px rgba(82, 37, 220, .4);
}
.grdnt-cyan:not(.overly) {
    background-image: -webkit-linear-gradient(45deg, #35abe6 0, #3bbeff 51%, #35abe6 100%);
    background-image: linear-gradient(45deg, #35abe6 0, #3bbeff 51%, #35abe6 100%);
}
.icon-shad [class*=icon-bg-].grdnt-cyan, .icon-shad [class*=icon-bg].grdnt-cyan {
    box-shadow: 0 20px 38px rgba(59, 190, 255, .4);
}

@media only screen and (max-width: 767px) {
  .process [class*="col-"] {
      padding: 0px 15px 20px 15px;
  }
  .res-margin, .res-margin-sm {
      margin-bottom: 20px;
  }
  h5.h5 {
    font-size: 1.1em !important;
    font-weight: 500;
    color: #000;
  }
  .item p {
    font-size: 13px;
  }
  .item:after {
    margin-right: -10px;
}
  // .process [class*="col-"]::after {
  //     content: "\e64b";
  //     font-size: 30px;
  //     top: 80%;
  //     right: 47%;
  // }
}

.base-box.boxed, .base-box.boxed-inverse, .boxed-inverse, [class*="col-md-"].boxed, [class*="col-md-"].boxed-inverse, .grid-box > .grid-item.boxed-inverse, .row.vertical-row > div.boxed-inverse, .row.vertical-row > div.boxed {
    border-style: none !important;
    padding: 25px 25px 25px 25px;
}
.advs-box-top-icon {
    padding-top: 45px !important;
    text-align: center;
    margin-top: 45px !important;
    position: relative;
}
.shadow-1, .adv-img-down-text.shadow-1 .img-box, .two-blocks-container.shadow-1 > .row, .section-bg-color .advs-box.boxed-inverse, .section-bg-color .adv-img.boxed-inverse {
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.13) !important;
}
.advs-box-top-icon {
    overflow: visible;
    position: relative;
    padding-top: 0 !important;
}
.base-box.boxed, .advs-box.boxed, .base-box.boxed-inverse, .advs-box.boxed-inverse {
    background-color: #FDFDFD;
    border: 1px solid #F1F1F1;
    padding: 25px;
    border: none;
}
.img-box:not(.circle), .img-box:not(.circle) > span, .img-box:not(.circle) img, .img-box:before, .navbar-nav > li .dropdown-menu, .advs-box.boxed, .advs-box.boxed-inverse, .google-map, .advs-box-multiple, .social-group a i:not(.circle) {
    border-radius: 6px !important;
}
.advs-box-top-icon.boxed-inverse, .advs-box-side-icon.boxed-inverse, .advs-box-top-icon.boxed, .advs-box-side-icon.boxed {
    margin-top: 0 !important;
    padding: 45px 30px !important;
}
.advs-box-top-icon .icon {
    position: relative;
    left: auto;
    margin: 0;
    box-shadow: none !important;
    font-size: 100px;
    line-height: 110px;
    height: 110px;
    width: 110px;
    padding: 0;
    background: none;
}

// font-family: 'Source Sans Pro', sans-serif;
// background-image: url("Assets/Foodies.jpeg");
// background-position: top;
// background-size: cover; 
// border-radius: 0.05em;
// margin-bottom: 25px;
// margin-top: 10px;
// color: white;
// opacity: 0.85;
// .fa-3x{
//   font-size: 3em;
//   color: orange;
// }
// .cards{
//   margin-top: 4.5vw;
//   margin-bottom: 5.5vw;
// }
// .sample-text{
//   color: grey;
//   font-size: 16px;
//   text-align: center;
//   font-weight: 400;
// }
// h4{
//   text-capitalize: true;
//   text-align:center;
//   color: white;
//   font-weight: 500;
// }

// @media only screen and (min-width: 750px) and (max-width: 980px) {
  
//   h4{
      
//       font-size: 1.2rem;
//   }
//   .text{
    
//     font-size: 0.9em;
//   }
  
//   }
// .text{
//   margin-bottom: 20px;
//   font-weight: 600;
  
// opacity: 1;
// }
// .sample-text{
//   font-size:18px;
//   font-weight: 400;
// }
// i{
//   background-color: #f0f0f0 !important;
//   color: #E68C46;
// }


`
