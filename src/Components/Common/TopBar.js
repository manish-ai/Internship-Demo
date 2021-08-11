import React, { Component } from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default class TopBar extends Component {


    render() {
        return (
            <TopWrap>
                <section className="top-bar2">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="top-left d-flex">

                                    <div className="map-loc">
                                        <p><i className="fal fa-map-marker-alt"></i>Bengaluru</p>
                                    </div>
                                    <div className="call-us">
                                        <p>
                                            {/* <img src="Assets/images/iconimages/phn.png" alt="" /> */}
                                            <i className="fal fa-envelope "></i>
                                            <span className="mb-2">poplr@gmail.com</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 float-right">
                                <div className="top-right text-right">
                                    <ul className="list-unstyled list-inline">
                                        <li className="list-inline-item">
                                        <Link to="/profile">
                                                <i className="fal fa-user"></i>
                                                My Account
                                            </Link>
                                        </li>

                                        <li className="list-inline-item">
                                            <Link to="/checkout">
                                                <i className="fal fa-share"></i>
                                                Checkout
                                            </Link>
                                        </li>
                                        <li className="list-inline-item">
                                            <Link to="/login">
                                                <i className="fal fa-lock"></i>
                                                Login
                                            </ Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </TopWrap>
        )
    }
}
const TopWrap = styled.div`
    .top-bar2 {
        height: 40px;
        background-color: #fcfcfc !important;
    }
    .top-bar2 .top-left .lang-box {
        position: relative;
        height: 40px;
        border-top: none;
        border-bottom: none;
        padding: 9px 15px;
        padding-left: 0;
    }
    .top-bar2 .top-left .lang-box span {
        cursor: pointer;
        font-size: 14px;
        color: #000;
    }
    .top-bar2 .top-left .lang-box span img {
        margin-right: 8px;
        vertical-align: text-bottom;
    }
    .top-bar2 .top-left .lang-box span i {
        margin-left: 5px;
    }
    .top-bar2 .top-left .lang-box span svg {
        margin-left: 5px;
    }
    .top-bar2 .top-left .lang-box ul {
        position: absolute;
        left: 0;
        top: 100%;
        border: 1px solid #eeeeee;
        min-width: 125px;
        background: #fff;
        -webkit-transition: 0.2s ease;
        -moz-transition: 0.2s ease;
        -ms-transition: 0.2s ease;
        -o-transition: 0.2s ease;
        transition: 0.2s ease;
        -webkit-box-shadow: 0 0 5px rgba(0, 0, 0, 0.05);
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.05);
        opacity: 0;
        -webkit-transform: scaleY(0);
        -ms-transform: scaleY(0);
        transform: scaleY(0);
        visibility: hidden;
        z-index: 999;
        -webkit-transform-origin: center top 0;
        -ms-transform-origin: center top 0;
        transform-origin: center top 0;
        padding-inline-start: 0px;
    }
    .top-bar2 .top-left .lang-box:hover ul {
        opacity: 1;
        -webkit-transform: scaleY(1);
        -ms-transform: scaleY(1);
        transform: scaleY(1);
        visibility: visible;
    }
    .list-unstyled {
        padding-left: 0;
        list-style: none;
    }
    .top-bar2 .top-left .lang-box ul li {
        padding: 8px 0 8px 20px;
        cursor: pointer;
        font-size: 14px;
        font-family: "Source Sans Pro", sans-serif;
        margin: 0;
        letter-spacing: 0.2px;
    }
    .top-bar2 .top-left .lang-box ul li img {
        margin-right: 8px;
        vertical-align: text-bottom;
    }
    .top-bar2 .top-left .mny-box {
        position: relative;
        height: 40px;
        padding: 9px 15px;
    }
    .top-bar2 .top-left .mny-box span {
        cursor: pointer;
        font-size: 14px;
    }
    .top-bar2 .top-left .mny-box span i {
        margin-left: 5px;
    }
    .top-bar2 .top-left .mny-box span svg {
        margin-left: 5px;
        color: #000;
    }
    .top-bar2 .top-left .mny-box ul {
        position: absolute;
        left: 0;
        top: 100%;
        border: 1px solid #eeeeee;
        min-width: 75px;
        background: #fff;
        -webkit-transition: 0.2s ease;
        -moz-transition: 0.2s ease;
        -ms-transition: 0.2s ease;
        -o-transition: 0.2s ease;
        transition: 0.2s ease;
        -webkit-box-shadow: 0 0 5px rgba(0, 0, 0, 0.05);
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.05);
        opacity: 0;
        -webkit-transform: scaleY(0);
        -ms-transform: scaleY(0);
        transform: scaleY(0);
        visibility: hidden;
        z-index: 999;
        -webkit-transform-origin: center top 0;
        -ms-transform-origin: center top 0;
        transform-origin: center top 0;
        padding-inline-start: 0px;
    }
    .top-bar2 .top-left .mny-box:hover ul {
        opacity: 1;
        -webkit-transform: scaleY(1);
        -ms-transform: scaleY(1);
        transform: scaleY(1);
        visibility: visible;
    }
    .top-bar2 .top-left .mny-box ul li {
        padding: 8px 0 8px 20px;
        cursor: pointer;
        font-size: 14px;
        font-family: "Source Sans Pro", sans-serif;
        margin: 0;
        letter-spacing: 0.2px;
    }
    .top-bar2 .top-left .map-loc {
        height: 40px;
        padding: 11px 15px 9px;
    }
    .top-bar2 .top-left .map-loc p {
        color: #000;
        font-weight: 500;
        font-size: 14px;
        font-family: "Source Sans Pro", sans-serif;
        margin: 0;
        letter-spacing: 0.2px;
        cursor: pointer;
    }
    .top-bar2 .top-left .map-loc p i {
        color: #000;
        width: 13px;
        margin-right: 5px;
        margin-top: -3px;
        vertical-align: middle;
    }
    .top-bar2 .top-left .map-loc:hover p, .top-bar2 .top-left .map-loc:hover p svg {
        color: #E68C45;
    }
    .top-bar2 .top-left .map-loc p svg {
        color: #000;
        font-weight: 600;
        width: 13px;
        margin-right: 5px;
        margin-top: -3px;
        vertical-align: middle;
    }
    .top-bar2 .top-left .call-us {
        height: 40px;
        padding: 11px 15px 9px;
    }
    .top-bar2 .top-left .call-us p {
        color: #000;
        font-weight: 500;
        font-size: 14px;
        font-family: "Source Sans Pro", sans-serif;
        margin: 0;
        letter-spacing: 0.2px;
        cursor: pointer;
    }
    .top-bar2 .top-left .call-us p img {
        width: 13px;
        margin-right: 5px;
        margin-top: -3px;
        vertical-align: middle;
    }
    .top-bar2 .top-left .call-us p svg {
        width: 13px;
        margin-right: 5px;
        margin-top: -3px;
        vertical-align: middle;
        color: #000;
    }
    .top-bar2 .top-left .call-us:hover p, .top-bar2 .top-left .call-us:hover p svg {
        color: #E68C45;
    }
    .list-inline {
        padding-left: 0;
        list-style: none;
        padding: 0;
        margin: 0;
        padding-inline-start: 0px;
    }
    .list-inline-item {
        display: inline-block;
    }
    .list-inline-item:not(:last-child) {
        margin-right: .5rem;
    }
    .top-bar2 .top-right ul li {
        margin: 0;
        font-size: 14px;
        font-family: "Source Sans Pro", sans-serif;
        letter-spacing: 0.2px;
    }
    .top-bar2 .top-right ul li a {
        color: #000;
        height: 40px;
        display: inline-block;
        padding: 9px 15px;
        font-size: 14px;
        font-family: "Source Sans Pro", sans-serif;
        margin: 0;
        letter-spacing: 0.2px;
        cursor: pointer;
    }
    .top-bar2 .top-right ul li a:hover, .top-bar2 .top-right ul li a:hover svg {
        color: #E68C45;
    }
    a:hover, a:active, a:focus, button:hover, button:focus {
        text-decoration: none;
        outline: none;
    }
    .top-bar2 .top-right ul li a img {
        width: 13px;
        margin-right: 5px;
        margin-top: -3px;
        vertical-align: middle;
    }

    .top-bar2 .top-right ul li a svg {
        width: 13px;
        margin-right: 5px;
        margin-top: -3px;
        vertical-align: middle;
        color: #000;
    }
    @media (max-width: 767px) {
        .top-bar, .top-bar2, .logo-area, .logo-area2, .cart-body, .cart-overlay, .menu-area, .menu-area2 {
            display: none;
        }
    }
    @media only screen and (max-width: 991px) {
        .top-bar2 .top-right ul li a {
            padding: 9px 5px;
        }
        top-bar2 .top-left .lang-box, 
        .top-bar2 .top-left .mny-box, 
        .top-bar2 .top-left .call-us, 
        .top-bar2 .top-left .map-loc {
            padding: 11px 8px 9px !important;
        }import SignIn from './SignIn';
import { MDBModal } from 'mdbreact';
import { Link } from 'react-router-dom';

    }
`