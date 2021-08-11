import React, { Component } from 'react'
import styled from 'styled-components';

export default class Footer2 extends Component {
    render() {
        return (
            <Foot2Wrap>
                {/* <footer className="footer-bs ">
                    <div className="row">
                        <div className=" offset-lg-1 offset-md-1 offset-sm-0 offset-xs-0 col-md-2 col-sm-12 col-lg-2 col-xl-2 col-xs-12 footer-nav animated fadeInUp fadeInLeft">
                            <h6>MENU</h6>
                            <ul className="list">
                                <li><a href="#">&nbsp;&nbsp;About Us</a></li>
                                <li><a href="#"> &nbsp;&nbsp;Contacts</a></li>
                                <li><a href="#"> &nbsp;&nbsp;Terms & Condition</a></li>
                                <li><a href="#"> &nbsp;&nbsp;Privacy Policy</a></li>
                            </ul>
                        </div>
                        <div className="col-md-3 col-xl-3 col-lg-3 col-sm-12 col-xs-12 footer-nav animated fadeInUp">
                            <h6>CONTACT US</h6><ul className="list">
                                <li><i className="fas fa-map-marker-alt"></i><a href="#">
                                    &nbsp;  60, 29th Street, San Francisco, CA 94110, USA</a></li>
                                <li><i className="far fa-phone-alt"></i><a href="#">&nbsp; Phone : (+00) 123-456-789</a></li>
                                <li><i className="far fa-envelope"></i><a href="#">&nbsp; E-mail : support@yourshop.in</a></li>
                            </ul>
                        </div>
                        <div className="col-md-2 col-xl-2 col-lg-3 col-sm-12 footer-social animated fadeInDown">
                            <h6>FOLLOW US</h6>
                            <ul>
                                <li><i className="fa fa-facebook"></i>&nbsp;<a href="#"> &nbsp;&nbsp;Facebook</a></li>
                                <li><i className="fa fa-twitter"></i>&nbsp;<a href="#"> &nbsp;Twitter</a></li>
                                <li><i className="fa fa-instagram"></i>&nbsp;<a href="#"> &nbsp;&nbsp;Instagram</a></li>

                            </ul>
                        </div>
                        <div className="  col-md-2 col-sm-12 col-lg-2 col-xl-2 col-xs-12 offset-lg-0 offset-md-0 offset-sm-0 offset-xl-0 offset-xs-0 footer-ns animated fadeInRight">
                            <h6>NEWSLETTER</h6>
                            <div>
                                <div className="input-grup">
                                    <input type="text" className="form-cont" placeholder=" Enter Email Address " autoFocus />
                                    <span className="input-group-btn">
                                        <button className="bt" type="button">SUBSCRIBE</button>
                                    </span>
                                </div>
                                <div className="mt-3">
                                    <i className="fab fa-cc-visa fa-2x mr-1 ml-2"></i><i className="fab fa-cc-mastercard fa-2x mr-1"></i><i className="fab fa-cc-apple-pay fa-2x mr-1"></i><i className="fa fa-cc-amex fa-2x mr-1"></i><i className="fab fa-cc-paypal fa-2x"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer> */}
                <footer className="classic-footer">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-4 col-md-6 sm-margin-40px-bottom">
                                <h3>Contact Us</h3>
                                <ul className="list-style margin-10px-bottom">
                                    <li>
                                        <strong className="fw-600">Address:</strong>
                                        <span className="padding-5px-left">74 Guild Street 542B, Town MT.</span>
                                    </li>
                                    <li>
                                        <strong className="fw-600">Phone: </strong>
                                        <span className="padding-5px-left">(+44) 123 456 789</span>
                                    </li>
                                    <li>
                                        <strong className="fw-600">Email: </strong>
                                        <span className="padding-5px-left">addyour@emailhere</span>
                                    </li>
                                </ul>

                                <ul className="list-style-two no-margin-bottom">
                                    <li>
                                        <a href="/#"><i className="fab fa-facebook-f"></i></a>
                                    </li>
                                    <li>
                                        <a href="/#"><i className="fab fa-twitter"></i></a>
                                    </li>
                                    {/* <li>
                                        <a href="/#"><i className="fab fa-google-plus-g"></i></a>
                                    </li> */}
                                    <li>
                                        <a href="/#"><i className="fab fa-linkedin-in"></i></a>
                                    </li>
                                </ul>
                            </div>

                            <div className="col-lg-4 col-md-6 sm-margin-40px-bottom">
                                <div className="row">
                                    <div className="col-md-6 col-6 no-padding-right xs-padding-15px-right">
                                        <h3>Quick Links</h3>
                                        <ul className="list-style">
                                            <li><a href="/#">News</a></li>
                                            <li><a href="/#">History</a></li>
                                            <li><a href="/#">Our shop</a></li>
                                            <li><a href="/#">Secure shopping</a></li>
                                            <li><a href="/#">Privacy policy</a></li>
                                        </ul>
                                    </div>
                                    <div className="col-md-6 col-6 no-padding-right xs-padding-15px-right">
                                        <h3>My Account</h3>
                                        <ul className="list-style">
                                            <li><a href="/#">My Account</a></li>
                                            <li><a href="/#">Order History</a></li>
                                            <li><a href="/#">Wish List</a></li>
                                            <li><a href="/#">Newsletter</a></li>
                                            <li><a href="/#">Returns</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-12">
                                <div className="padding-30px-left sm-no-padding-left">

                                    <div className="row">
                                        <div className="col-lg-12 col-md-6 margin-35px-bottom sm-no-margin-bottom xs-margin-40px-bottom vertical mt-5">
                                            <h3>News Letter</h3>
                                            <form method="post">
                                                <div className="form-group footer-subscribe join">
                                                    <input type="email" placeholder="Subscribe with us" id="email" className="form-control" />
                                                    <a href="/#" className="butn-style2 join"><span>Join</span></a>
                                                </div>
                                            </form>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer-bottom padding-25px-tb margin-70px-top sm-margin-50px-top">
                        <div className="container-fluid">
                            <div className="row align-items-center">
                                <div className="col-md-6 xs-margin-15px-bottom">
                                    <div className="xs-text-center">
                                        <p>Copyrights © 2020 Popolr. All Rights Reserved.</p>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <ul className="list-style-17 text-right sm-text-center">
                                        <li><img src="Assets/images/pay-cards/visa.png" alt="..." /></li>
                                        <li><img src="Assets/images/pay-cards/mastercard.png" alt="..." /></li>
                                        <li><img src="Assets/images/pay-cards/paypal.png" alt="..." /></li>
                                        <li><img src="Assets/images/pay-cards/amex.png" alt="..." /></li>
                                        <li><img src="Assets/images/pay-cards/discover.png" alt="..." /></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </Foot2Wrap>
        )
    }
}

const Foot2Wrap = styled.div`
vertical-align-middle{
    vertical-align: middle;
    margin: 2em 0;
}
.fa-2x{
     color: grey;
}
.bt{color: white;}
footer {
    padding: 50px 0 0;
}
.no-padding-top {
    padding-top: 0 !important;
}
.classic-footer {
    background: #fcfcfc !important;
}
.margin-70px-bottom {
    margin-bottom: 70px;
}
.footer-service {
    border-bottom: 1px solid rgba(255,255,255,0.09);
}
// .classic-footer .footer-service {
//     border: 1px solid rgba(0,0,0,0.09);
//     border-width: 1px 0;
//     background: #fbfbfb;
// }
.padding-30px-all {
    padding: 30px;
}
// .classic-footer .service-contact {
//     border-right: 1px solid rgba(0,0,0,0.09);
// }
// .classic-footer .service-contact.last-contact {
//     border-right: 0px solid rgba(0,0,0,0.09);
// }
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
.classic-footer .service-contact i {
    color: #000;
}
.classic-footer .service-contact span svg {
    color: #000;
    position: relative;
    margin: 0 auto 5px;
}
.classic-footer .service-contact h5 {
    font-size: 14px;
    font-weight: 600;
    line-height: 23px;
    text-transform: uppercase;
    margin-bottom: 5px;
    color: #000000;
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
.classic-footer .service-contact p {
    color: #808080;
    font-size: 13px;
    line-height: 22px;
    margin-top: 0;
    font-weight: 400;
}
.line-height-normal {
    line-height: normal;
}
.classic-footer h3 {
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 20px;
    line-height: 1;
    position: relative;
    color: #000;
    margin: 0 0 30px;
    padding: 0;
    letter-spacing: 0;
    opacity: 0.8;
}
ul.list-style {
    list-style-position: outside;
    margin-bottom: 0;
    margin-top: 0;
    padding-inline-start: 0px !important;
}
ul.list-style li a, ul.list-style li a:active, ul.list-style li a:focus {
    color: #808080;
    text-decoration: none;
    transition-timing-function: ease-in-out;
    -ms-transition-timing-function: ease-in-out;
    -moz-transition-timing-function: ease-in-out;
    -webkit-transition-timing-function: ease-in-out;
    -o-transition-timing-function: ease-in-out;
    transition-duration: .2s;
    -ms-transition-duration: .2s;
    -moz-transition-duration: .2s;
    -webkit-transition-duration: .2s;
    -o-transition-duration: .2s;
    font-size: 14px;
}
ul.list-style li a:hover {
    color: #E68C45;
}
.margin-10px-bottom {
    margin-bottom: 10px;
}

.margin-15px-bottom {
    margin-bottom: 15px;
}
.classic-footer ul.list-style li {
    margin-bottom: 12px;
}
// color {
//     color: #1b55e3 #2C6DE9, #007bff;
// }
ul { 
    padding-inline-start: 0px !important;
}
ul li {
    list-style: none;
    color: #808080;
    font-size: 14px;
}
.fw-600 {
    font-weight: 600 !important;
}
.padding-5px-left {
    padding-left: 5px;
}
.no-margin-bottom {
    margin-bottom: 0 !important;
}
.classic-footer .list-style-two li {
    display: inline-block;
    margin-right: 10px;
}
.classic-footer .list-style-two li a {
    border: none;
    width: auto;
    height: auto;
    display: block;
    line-height: 31px;
    color: #808080;
    border-radius: 100%;
    text-align: center;
    margin-top: 5px;
    margin-right: 5px;
    font-size: 18px;
    text-decoration: none;
    background-color: transparent;
}
.classic-footer .list-style-two li a:hover {
    color: #E68C45;
}
.classic-footer .list-style-two li:last-child {
    margin-right: 0;
}
.margin-35px-bottom {
    margin-bottom: 35px;
}
@media screen and (max-width: 991px) {
    .sm-margin-40px-bottom{
        margin-bottom:40px !important
    }
    .classic-footer .service-contact {
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
        padding-bottom: 20px !important;
    }
    .sm-padding-15px-tb {
        padding-top: 15px !important;
        padding-bottom: 15px !important;
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
    .classic-footer h3 {
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
.padding-30px-left {
    padding-left: 30px;
}
.margin-5px-left {
    margin-left: 5px;
}
.padding-15px-right {
    padding-right: 15px;
}
.font-size24 {
    font-size: 24px;
}
.font-size12 {
    font-size: 12px;
}
.font-size10 {
    font-size: 10px;
}
.classic-footer .footer-subscribe {
    position: relative;
    margin-bottom: 0;
}
.classic-footer .footer-subscribe input {
    padding: 20px 100px 20px 15px;
    font-size: 14px;
    box-shadow: none;
    height: 42px;
}
.butn-style2 {
    display: inline-block;
    font-size: 14px;
    padding: 6px 18px;
    border: 0px solid #45cafc;
    background: #E68C45 !important;
    color: #fff !important;
    letter-spacing: .5px;
    line-height: 26px;
    border-radius: 4px;
    width: auto;
    font-weight: 600;
    transition-duration: 0.3s;
    transition-timing-function: ease-in-out;
}
.classic-footer .footer-subscribe .butn-style2 {
    text-align: center;
    border-radius: 0;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    padding: 6px 20px;
    text-decoration: none;
}
.classic-footer .btn.bordered {
    border: 1px solid rgba(183, 188, 200, 0.8);
    color: #808080;
    box-shadow: none;
    font-size: 13px;
    padding: .84rem 0.4rem;
}
.classic-footer .btn.bordered .media svg {
    width: 40px;
}
.margin-70px-top {
    margin-top: 40px;
}
.padding-25px-tb {
    padding-top: 20px;
    padding-bottom: 20px;
}
.footer-bottom {
    border-top: 1px solid rgba(255,255,255,0.09);
}
.classic-footer .footer-bottom {
    background: #fafafa;
    border-top: 1px solid rgba(0,0,0,0.09);
}
.classic-footer .footer-bottom p {
    color: #000;
    margin-bottom: 0;
}
.list-style-17 {
    list-style: none;
    margin: 0;
    padding: 0;
}
.list-style-17 li {
    display: inline-block;
    margin-right: 5px;
}
.pad-right-0 {
    padding-right: 0px;
}
.pad-left-0 {
    padding-left: 0px;
}


// .footer-bs {
//     background-color: #E68C40;
// 	padding: 2vw 1vw 1vw 2vw !important;
// 	color: rgba(255,255,255,1.00);
// 	border-bottom-right-radius: 6px;
//     border-top-left-radius: 0px;
//     margin-top:20px;
//     margin-bottom:20px
//     border-bottom-left-radius: 6px;
// }
// .footer-bs .footer-nav ul.pages { list-style:none; padding:0px; }
// .footer-bs .footer-nav ul.pages li { padding:5px 0px;}
// .footer-bs .footer-nav ul.pages a { color:rgba(255,255,255,1.00); font-weight:bold; text-transform:uppercase; }
// .footer-bs .footer-nav ul.pages a:hover { color:rgba(255,255,255,0.80); text-decoration:none; }
// .footer-bs .footer-nav h4 {
// 	text-transform: uppercase;
// 	letter-spacing: 1px;
// 	margin-bottom:1vw;
// }

// .footer-bs .footer-nav ul.list { list-style:none; padding:0px; }
// .footer-bs .footer-nav ul.list li { padding:5px 0px;}
// .footer-bs .footer-nav ul.list a { color:rgba(255,255,255,1); }
// .footer-bs .footer-nav ul.list a:hover { color:rgba(255,255,255,0.60); text-decoration:none; }

// .footer-bs .footer-social ul { list-style:none; padding:0px; }
// .footer-bs .footer-social h4 {
// 	text-transform: uppercase;
//     letter-spacing: 0.5px;
//     text-align:center;
// 	margin-bottom:1vw;
// }
// .footer-bs .footer-social li { padding:5px 0px;}
// .footer-bs .footer-social a { color:rgba(255,255,255,1.00); display: inline-block; }
// .footer-bs .footer-social a:hover { color:rgba(255,255,255,0.80); text-decoration:none; }

// .footer-bs .footer-ns h6 {
// 	text-transform: uppercase;
//     letter-spacing: 0px;
//     text-align: center;

// }

// input:focus{
//     outline: none;
//  box-shadow: none;
//  }
// .footer-bs .footer-ns{ background-color: white; color:black; margin-top:-3.1vw; padding-top:2vw; margin-bottom: -3.1vw; box-shadow: 0.2em 0.2em 0.25em 0.2em rgba(136, 134, 134, 0.236); z-index: 22; }
// .footer-bs .footer-ns input { border-radius: 16px; border-color: transparent; background: #f0f0f0;margin:3vw 0vw 0vw 0vw; width:96%; height:2.3em;}
// .footer-bs .footer-ns button { border-radius: 16px; border-color: transparent; background-color: #E68C40; margin:1vw 0vw 0vw 0vw; width:95%;height:2.3em; }
// @media (min-width: 768px) {
// 	.footer-bs .footer-nav, .footer-bs .footer-social, .footer-bs .footer-ns { border-left:solid 1px rgba(255,255,255,0.199); }
// }
`
