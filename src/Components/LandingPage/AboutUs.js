import styled from 'styled-components';
import React, { Component } from 'react'

export default class AboutUs extends Component {
  render() {
    return (
      <AboutWrap>

        <div className="classic-aboutus">
          <div className="footer-service margin-40px-bottom sm-margin-50px-bottom sm-padding-15px-tb">
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-3">
                  <div className="service-contact text-center padding-30px-all sm-padding-20px-tb md-padding-15px-lr sm-no-padding-lr">
                    <span className="d-block font-size36 line-height-30 sm-font-size32 sm-line-height-30 margin-15px-bottom">
                      <i className="fal fa-headset vertical-align-top"></i>
                    </span>
                    <div className="d-block vertical-align-top padding-10px-left">
                      <h5 className="no-margin text-uppercase font-size14">24/7 CUSTOMER SERVICE</h5>
                      <p className="no-margin line-height-normal">Hours: 6AM - 11PM</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="service-contact text-center padding-30px-all sm-padding-20px-tb md-padding-15px-lr sm-no-padding-lr">
                    <span className="d-block font-size36 line-height-30 sm-font-size32 sm-line-height-30 margin-15px-bottom">
                      <i className="fal fa-shipping-fast vertical-align-top"></i>
                    </span>
                    <div className="d-block vertical-align-top padding-10px-left">
                      <h5 className="no-margin text-uppercase font-size14">FREE SHIPPING</h5>
                      <p className="no-margin line-height-normal">On Order Over ₹100</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="service-contact text-center padding-30px-all sm-padding-20px-tb md-padding-15px-lr sm-no-padding-lr">
                    <span className="d-block font-size36 line-height-30 sm-font-size32 sm-line-height-30 margin-15px-bottom">
                      <i className="fal fa-gift vertical-align-top"></i>
                    </span>
                    <div className="d-block vertical-align-top padding-10px-left">
                      <h5 className="no-margin text-uppercase font-size14">WIN 100₹ TO SHOP</h5>
                      <p className="no-margin line-height-normal">Get Membership</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="service-contact text-center last-contact padding-30px-all sm-padding-20px-tb md-padding-15px-lr sm-no-padding-lr">
                    <span className="d-block font-size36 line-height-30 sm-font-size32 sm-line-height-30 margin-15px-bottom">
                      <i className="fal fa-exchange-alt vertical-align-top"></i>
                    </span>
                    <div className="d-block vertical-align-top padding-10px-left">
                      <h5 className="no-margin text-uppercase font-size14">Return &amp; Exchange</h5>
                      <p className="no-margin line-height-normal">Free Exchange Within 30days</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="container  mx-auto">
          <div className="row ">

            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-xs-12 card rounded mr-auto">
              <i className="fal fa-headset mx-auto d-block rounded-circle mb-4  fa-2x  one"> </i>
              <div className=" text1">  <h4 className="one ">24/7 CUSTOMER SERVICE</h4>
                <span className=" sample-text d-block align-center "> Hours: 6AM - 11PM </span>
              </div></div>

            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-xs-12  card rounded mx-auto">
              <i className="fal fa-shipping-fast  mx-auto d-block mb-4 fa-2x bg-transparent two"></i>
              <div className=" d-block text2 ">  <h4 className="two ">FREE SHIPPING</h4>
                <span className="  sample-text d-block align-center "> On Order Over ₹100</span>
              </div>
            </div>

            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-xs-12 card rounded ml-auto">
              <i className="fal fa-gift mx-auto d-block mb-4 fa-2x  tre  "> </i>
              <div className=" text3 ">  <h4 className="t ">WIN 100₹ TO SHOP</h4>
                <span className=" sample-text d-block align-center "> Get Membership </span>
              </div>
            </div>

            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-xs-12 card rounded ml-auto">
              <i className="fal fa-usd-circle mx-auto d-block mb-4 fa-2x  tre  "> </i>
              <div className=" text3 ">  <h4 className="t ">RETURN & EXCHANGE</h4>
                <span className=" sample-text d-block align-center ">Free Exchange Within 30days </span>
              </div>
            </div>
          </div>
        </div> */}
      </AboutWrap>

    )
  }
}

const AboutWrap = styled.div`
i{
  font-size:33px;
}
footer {
    padding: 50px 0 0;
}
.no-padding-top {
    padding-top: 0 !important;
}
.margin-40px-bottom {
    margin-bottom: 40px;
}
.footer-service {
    border-bottom: 1px solid rgba(255,255,255,0.09);
}
.padding-30px-all {
    padding: 35px;
}
.font-size36 {
    font-size: 36px;
}
.line-height-30 {
    line-height: 30px;
}
.width-40px {
    width: 40px;
}
.width-48px {
    width: 48px;
}
.classic-aboutus .service-contact i {
    color: #000;
}
.classic-aboutus .service-contact span svg {
    color: #E68C45;
    position: relative;
    margin: 0 auto 15px;
}
.classic-aboutus .service-contact h5 {
    font-size: 14px;
    font-weight: 600;
    line-height: 23px;
    text-transform: uppercase;
    margin-bottom: 5px;
    color: #000000;
    opacity: 0.8;
}
.vertical-align-top {
    vertical-align: top;
}

.padding-10px-left {
    padding-left: 10px;
}
.width-75 {
    width: 75%;
}
.no-margin {
    margin: 0 !important;
}
.font-size14 {
    font-size: 14px;
}
.classic-aboutus .service-contact p {
    color: #808080;
    font-size: 13px;
    line-height: 22px;
    margin-top: 0;
    font-weight: 400;
}
.line-height-normal {
    line-height: normal;
}

.margin-35px-bottom {
    margin-bottom: 35px;
}
@media screen and (max-width: 991px) {
    .sm-margin-40px-bottom{
        margin-bottom:40px !important
    }
    .classic-aboutus .service-contact {
        border-right: 0px solid rgba(0,0,0,0.09);
    }
    .sm-margin-50px-top {
        margin-top: 50px !important;
    }
    .sm-no-padding-left {
        padding-left: 0 !important;
    }
    .sm-no-border-right {
        border-right: 0 !important;
    }
    .sm-padding-20px-tb {
        padding-top: 20px !important;
        padding-bottom: 35px !important;
    }
    .sm-padding-15px-tb {
        padding-top: 15px !important;
        padding-bottom: 25px !important;
    }
    .sm-margin-50px-bottom {
        margin-bottom: 50px !important;
    }
    .sm-no-padding-lr {
        padding-left: 0 !important;
        padding-right: 0 !important;
    }
    .sm-font-size32 {
        font-size: 32px;
    }
    .sm-line-height-30 {
        line-height: 30px;
    }
    .sm-no-margin-bottom {
        margin-bottom: 0 !important;
    }
    .classic-aboutus h3 {
        margin-bottom: 18px;
    }
    p {
        margin: 0 0 20px;
    }
    .sm-text-center {
        text-align: center !important;
    }
}
@media screen and (max-width: 767px){
    .xs-padding-15px-right{
        padding-right:15px !important
    }
    .xs-margin-40px-bottom {
        margin-bottom: 40px !important;
    }
    .xs-margin-5px-left {
        margin-left: 5px !important;
    }
    .xs-margin-5px-top {
        margin-top: 5px !important;
    }
    .xs-margin-15px-bottom {
        margin-bottom: 15px !important;
    }
    .xs-text-center {
        text-align: center !important;
    }
}
@media screen and (max-width: 1199px) {
    .md-padding-15px-lr {
        padding-left: 15px !important;
        padding-right: 15px !important;
    }
    .md-margin-10px-bottom {
        margin-bottom: 10px !important;
    }
    .md-no-margin-left {
        margin-left: 0 !important;
    }
}





// .card{
//   background-color: #f0f0f0;
// }
// background-color: #f0f0f0;
// font-family: 'Source Sans Pro', sans-serif;
// color: black;
// opacity: 0.95;
// border-radius: 0.05em;
// .fa-2x{
//   margin-bottom: 40px !importnt;
//   color: black;
// }
// .text{
//   margin-bottom: 20px;
// }
// .fa-usd-circle{
//   font-size: 2.1em;
// }
// .sample-text{
//   font-size: 16px;
//   text-align: center;
//   font-weight: 400;
// }
// h4{
//   text-decoration: capitalise;
//   text-align:center;
//   font-weight: 500;
// }
// .card{
//   padding-top: 4vw;
//   padding-bottom: 5vw;
//   border: none;
// }

// @media only screen and (min-width: 750px) and (max-width: 980px) {
  
//   h4{
      
//       font-size: 1.2rem;
//   }
//   .text{
    
//     font-size: 0.9em;
//   }
  
//   }
  `