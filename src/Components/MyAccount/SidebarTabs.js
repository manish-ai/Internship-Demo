import React, { Component } from 'react'
import styled from 'styled-components';

export default class SidebarTabs extends Component {
    render() {
        return (
            <SidebarTabsWrap>
                <aside className="sidebar sidebar-left">
                    <div className="close-sidebar-btn hidden-lg hidden-md">
                        <i className="fas fa-times"></i>
                        <span>Close</span>
                    </div>
                    <div className="block-profile">
                        <div className="">
                            <div className="block-title">
                                <div className="card promoting-card">
                                    <div className="card-body d-flex flex-row">
                                        <img src="https://mdbootstrap.com/img/Photos/Avatars/avatar-8.jpg" className="rounded-circle mr-3" alt="avatar" />
                                        <div>
                                            <h4 className="card-title font-weight-bold mb-2">Profile Name</h4>
                                            <p className="card-text">9880988000</p>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="block woocommerce widget_price_filter">
                        <div className="">
                            <div className="block-title">
                                <i className="fas fa-shopping-bag"></i>
                                My Orders
                                <span className="label label-rounded label-primary pull-right mt-1">10</span>
                            </div>
                        </div>
                    </div>
                    <div className="block woocommerce widget_price_filter">
                        <div className="">
                            <div className="block-title">
                                <i className="fas fa-network-wired"></i>
                                Networking
                                {/* <span className="label label-rounded label-primary pull-right mt-1">10</span> */}
                            </div>
                        </div>
                    </div>
                    <div className="block woocommerce widget_price_filter">
                        <div className="">
                            <div className="block-title">
                                <i className="fas fa-user-cog"></i>
                                Account Settings
                            </div>
                            <div>
                                <div className="profileFilter">
                                    <div className="card-header">
                                        <a href="javascript:void(0);" className="">
                                            <span>Dashboard</span>
                                        </a>
                                    </div>
                                </div>
                                <div className="profileFilter">
                                    <div className="card-header">
                                        <a href="javascript:void(0);" className="collapsed">
                                            <span>Profile Info</span>
                                        </a>
                                    </div>
                                </div>
                                <div className="profileFilter">
                                    <div className="card-header">
                                        <a href="javascript:void(0);" className="collapsed">
                                            <span>Address Book</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="block woocommerce widget_price_filter">
                        <div className="">
                            <div className="block-title">
                                <i className="fas fa-id-card-alt"></i>
                                My Stuff
                            </div>
                            <div>
                                <div className="profileFilter">
                                    <div className="card-header">
                                        <a href="javascript:void(0);">
                                            <span>Wishlist</span>
                                        </a>
                                    </div>
                                </div>
                                <div className="profileFilter">
                                    <div className="card-header">
                                        <a href="javascript:void(0);">
                                            <span>Coupons</span>
                                        </a>
                                    </div>
                                </div>
                                {/* <div className="profileFilter">
                                    <div className="card-header">
                                        <a href="javascript:void(0);">
                                            <span>My Tickets</span>
                                        </a>
                                    </div>
                                </div> */}
                                <div className="profileFilter">
                                    <div className="card-header">
                                        <a href="javascript:void(0);">
                                            <span>My Reviews &amp; Ratings</span>
                                        </a>
                                    </div>
                                </div>
                                <div className="profileFilter">
                                    <div className="card-header">
                                        <a href="javascript:void(0);" className="collapsed">
                                            <span>All Notifcation</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="block woocommerce widget_price_filter">
                        <div className="">
                            <div className="block-title">
                                <i className="fas fa-rupee-sign "></i>
                                Payments
                            </div>
                            <div>
                                <div className="profileFilter">
                                    <div className="card-header">
                                        <a href="javascript:void(0);">
                                            <span>PhonePe Wallet</span>
                                            {/* <i className="fa fa-angle-right"></i> */}
                                        </a>
                                    </div>
                                </div>
                                <div className="profileFilter">
                                    <div className="card-header">
                                        <a href="javascript:void(0);">
                                            <span>Gift Cards</span>
                                            {/* <i className="fa fa-angle-right"></i> */}
                                        </a>
                                    </div>
                                </div>
                                <div className="profileFilter">
                                    <div className="card-header">
                                        <a href="javascript:void(0);">
                                            <span>Saved Cards</span>
                                            {/* <i className="fa fa-angle-right"></i> */}
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="block woocommerce widget_price_filter">
                        <div className="">
                            <div className="block-title">
                                <i className="fas fa-comment-alt"></i>
                                My Chat
                            </div>
                        </div>
                    </div>
                </aside>
            </SidebarTabsWrap>
        )
    }
}

const SidebarTabsWrap = styled.div`
        
@media (min-width: 1200px) and (max-width: 1541px) {

                    margin-right: -2px;
            }
@media (max-width: 991px) {
    .sidebar {
                    -webkit-transition: all .2s ease-in-out 0s;
                -o-transition: all .2s ease-in-out 0s;
                transition: all .2s ease-in-out 0s;
                z-index: 999;
                top: 0;
                width: 300px;
                height: 100%;
                max-width: 80%;
                background: #fff;
                position: fixed;
                padding: 10px;
            }
    .sidebar.sidebar-left {
                    left: 0;
                -webkit-transform: translateX(-100%);
                -ms-transform: translateX(-100%);
                -o-transform: translateX(-100%);
                transform: translateX(-100%);
            }
        }
.close-sidebar-btn, .mobile-sidebar-btn {
                    cursor: pointer;
                font-weight: 500;
                margin-bottom: 10px;
                font-size: 14px;
                display: inline-block;
            }
.close-sidebar-btn {
                    padding-bottom: 10px;
                margin-bottom: 15px;
                border-bottom: 1px solid #ededed;
                width: 100%;
                text-align: center;
            }
.block {
                    margin: 0 0 35px;
            }
.sidebar .block {
                    padding: 0px;
                position: relative;
                background-color: #fff;
                border-width: 1px;
                border-style: solid;
                border-color: #eee #eee #d5d5d5 #eee;
                box-shadow: 0 1px 3px -1px rgba(0,0,0,.4);
                margin-top: 10px;
                margin-bottom: 0px;
            }
aside.sidebar.sidebar-left .block:first-child {
                    margin-top: 0;
            }
.block-profile {
                    padding: 0px;
                position: relative;
                background-color: #fff;
                border-width: 1px;
                border-style: solid;
                border-color: #eee #eee #d5d5d5 #eee;
                box-shadow: 0 1px 3px -1px rgba(0,0,0,.4);
                margin-top: 10px;
                margin-bottom: 0px;
            }
.block-profile .card {
                    box-shadow: none !important;
                background-color: transparent;
                border-radius: 0px;
            }
.block-profile .card .card-body img {
                    width: 60px;
                height: 60px;
            }
.block-profile .card .card-body h4 {
                    font-size: 15px !important;
                margin-top: 10px !important;
            }
.block .block-title {
                    font-size: 15px;
                letter-spacing: 0.05em;
                font-weight: 600;
                padding: 15px 15px 15px 15px;
                position: relative;
                display: block;
                margin-top: 0px;
                color: #000;
                text-transform: uppercase;
                border-bottom: 0px #eaeaea solid;
                border-left: 2px #E68C45 solid;
            }
.block-profile .block-title {
                    font-size: 15px;
                letter-spacing: 0.05em;
                font-weight: 600;
                padding: 0px;
                position: relative;
                display: block;
                margin-top: 0px;
                color: #000;
                text-transform: uppercase;
                border-bottom: 0px #eaeaea solid;
                border-left: 0px #E68C45 solid;
            }
.block:hover .block-title {
                color: #E68C45;
            }
.block .block-title {
                    border-left: 2px #E68C45 solid;
            }
.block .block-title svg {
                color: #E68C45;
                margin-right: 12px;
            }
.box-category ul {
                    list-style: none;
                margin: 0;
                padding: 0px;
            }
ul.color-box, ul.osahan-select-color {
                    padding: 6px 0px;
                list-style: none;
            }
ul.color-box li label span {
                    display: inline-block;
                width: 12px;
                height: 12px;
                -webkit-border-radius: 30px;
                -moz-border-radius: 30px;
                -ms-border-radius: 30px;
                border-radius: 30px;
                margin-right: 8px;
            }
.color-bg {
                    border-radius: 32px;
                box-shadow: 0 0 2px #ccc;
                display: inline-block;
                height: 25px;
                width: 25px;
                margin-right: 3px;
            }
.osahan-select-color a:last-child {
                    display: flex;
                font-weight: bold;
            }
.bg-blue {
                    background-color: #0074d9;
            }
.bg-black {
                    background-color: #343a40;
            }
.bg-white {
                    background-color: #fff!important;
            }
.bg-grey {
                    background-color: #9fa8ab;
            }
.bg-navy {
                    background-color: #3c4477;
            }
.bg-red {
                    background-color: #d34b56;
            }
.bg-beige {
                    background-color: #e8e6cf;
            }
.bg-maroon {
                    background-color: #b03060;
            }
.tagcloud {
                    padding: 6px 0px;
            }
.box-content.box-category{
                    position: relative;
                display: flex;
            }
.tagcloud a {
                    text-transform: capitalize;
                margin-bottom: 8px;
                margin-right: 8px;
                font-size: 12px !important;
                display: inline-block;
                float: left;
                padding: 5px 18px;
                -webkit-transition: all .3s ease 0s;
                -o-transition: all .3s ease 0s;
                transition: all .3s ease 0s;
                background: #f2f3f5;
                color: #636363;
                font-weight: 600;
            }
.tagcloud a:hover, .tagcloud a:focus, .tagcloud a.active {
                    color: #fff;
                background: #E68C45;
                border-color: #E68C45;
            }
.list-discount li {
                    position: relative;
                border-bottom: 1px solid rgba(0,0,0,0.09);
                color: #808080;
                border-bottom: none;
                padding: 0 0 0 0px;
                margin-bottom: 12px;
            }
li:first-child {
                    padding-top: 10px;
            }
.profileFilter {
                    position: relative;
                display: -ms-flexbox;
                display: flex;
                -ms-flex-direction: column;
                flex-direction: column;
                min-width: 0;
                word-wrap: break-word;
                background-color: #fff;
                background-clip: border-box;
                border: 1px solid rgba(0,0,0,.125);
                border-radius: .25rem;
            }
.profileFilter {
                    font-weight: 400;
                border: 0;
                box-shadow: none;
                margin-bottom: 0px;
            }
.profileFilter .card-header {
                    margin-bottom: 0;
                background-color: rgba(0,0,0,.03);
                border-bottom: 1px solid rgba(0,0,0,.125);
                cursor: pointer;
                padding: 10px 10px 10px 50px;
            }
.profileFilter .card-header:first-child {
                    border-radius: calc(.25rem-1px) calc(.25rem-1px) 0 0;
            }
.profileFilter .card-header {
                    background: transparent;
                border-bottom: none;
            }
.profileFilter .card-header a {
                    display: block;
            }
.profileFilter .card-header a span {
                    color: #000;
                font-weight: 500;
                text-transform: uppercase;
                letter-spacing: .3px;
                font-size: 14px;
            }
.profileFilter .card-header a span {
                    color: #000;
                font-weight: 600;
            }
.profileFilter .card-header a i {
                    float: right;
                margin-top: 4px;
            }
.profileFilter .card-header a i {
                    -webkit-transform: rotate(180deg);
                -ms-transform: rotate(180deg);
                transform: rotate(180deg);
                color: #E68C45;
            }
            
.profileFilter .card-header a svg {
                    float: right;
                margin-top: 4px;
                color: #000;
            }
.profileFilter .card-body ul li {
                    margin-bottom: 0px;
            }
.profileFilter .card-body ul li a {
                    color: #808080;
                font-size: 14px;
            }
.profileFilter .card-body ul li a i {
                    color: #969696;
                margin-right: 3px;
            }
.profileFilter .card-body ul li a svg {
                    color: #808080;
                margin-right: 3px;
            }
.profileFilter .card-body {
                    -ms-flex: 1 1 auto;
                flex: 1 1 auto;
                min-height: 1px;
                padding: 1.25rem;
            }
.profileFilter .card-body {
                    padding: 5px 20px !important;
            }
.custom-control .item-numbers {
                    background: #ccc none repeat scroll 0 0;
                border-radius: 25px;
                color: #fff;
                float: right;
                font-size: 10px;
                font-weight: 700;
                line-height: 18px;
                margin: 8px 0 0;
                min-width: 30px;
                padding: 0 7px;
                text-align: center;
            }
.custom-control .item-numbers {
                    float: right;
                margin: 4px 0 0;
            }
.clear-sidebar-btn {
                    padding-bottom: 0px;
                margin-bottom: 0px;
                border-bottom: 0px solid transparent;
                width: 100%;
                text-align: left;
            }
.clear-sidebar-btn {
                    cursor: pointer;
                font-weight: 500;
                font-size: 14px;
                display: inline-block;
                color: #808080;
            }
.clear-sidebar-btn:hover, .clear-sidebar-btn:hover svg {
                    color: #E68C45;
            }
.clear-sidebar-btn svg {
                    margin-right: 5px;
            }
.clearAllFilters {
                    float: right;
                margin: 0px 0 0;
                color: #E68C45;
                font-size: 14px;
                font-weight: 600;
            }
.custom-control-label {
                    color: rgba(0,0,0,0.8);
                font-size: 14px;
            }
.custom-control-label::before, .custom-control-label::after {
                    top: .1rem !important;
            }
.plus-minus-toggle {
                    cursor: pointer;
                height: 21px;
                position: relative;
                width: 21px;
              }
              .plus-minus-toggle:before,
.plus-minus-toggle:after {
                    background: #000;
                content: '';
                height: 5px;
                left: 0;
                position: absolute;
                top: 0;
                width: 21px;
                transition: transform 500ms ease;
              }
.plus-minus-toggle:after {
                    transform-origin: center;
              }
.plus-minus-toggle.collapsed:after {
                    transform: rotate(90deg);
              }
.plus-minus-toggle.collapsed:before {
                    transform: rotate(180deg);
              }
.box-category > ul.product-categories {
                    width: 100%;
            }
.box-category > ul > li {
                    display: block;
                position: relative;
                margin: 0;
                border-bottom: 1px #ececec solid;
                padding: 0px 18px;
            }
.box-category ul li {
                    position: relative;
            }
.box-category > ul > li:first-child {
                    border-top: 0;
            }
.box-category ul li a {
                    padding: 12px 0px;
                display: block;
                font-weight: normal;
            }
.box-category > ul > li > a {
                    color: #000;
                text-transform: uppercase;
                display: block;
                font-size: 14px;
                font-weight: 500;
                letter-spacing: 0.5px;
            }
.box-category > ul > li ul.children {
                    padding-left: 0px !important;
                padding-bottom: 8px;
                padding-right: 0px!important;
            }
.box-category ul li {
                    position: relative;
            }
.box-category > ul > li > ul li {
                    padding: 0px;
            }
.box-category > ul > li ul.children > li > a {
                    border-bottom: 0 solid #EAEAEA;
                font-size: 13px !important;
                margin: 0 !important;
                padding: 3px 3px !important;
                text-decoration: none;
                padding-left: 0px;
                color: #898989;
            }
.box-category > ul > li ul.children > li ul.children > li a {
                    text-decoration: none;
                font-size: 13px !important;
                margin: 4px 8px!important;
                padding: 0px 16px!important;
                border-bottom: 0px solid #EAEAEA;
                color: #898989;
            }
.box-category > ul.product-categories .profile-item a.subprofile-item {
                    display: block;
            }
            .box-category > ul.product-categories .profile-item a.subprofile-item:hover,
            .box-category > ul.product-categories .profile-item a.subprofile-item:hover span.cat-name,
            .box-category > ul.product-categories .profile-item:hover a.subprofile-item span.plusminus,
.box-category > ul.product-categories .profile-item a.subprofile-item[aria-expanded="false"]:hover span.plusminus.plus {
                    color: #E68C45;
            }
.box-category > ul.product-categories .profile-item a.subprofile-item span.cat-name {
                    color: #000;
                font-weight: 500;
                text-transform: uppercase;
                -webkit-letter-spacing: .3px;
                -moz-letter-spacing: .3px;
                -ms-letter-spacing: .3px;
                letter-spacing: .3px;
                font-size: 14px;
            }
.box-category > ul.product-categories .profile-item a.subprofile-item[aria-expanded="true"] span.cat-name {
                    color: #E68C45;
                font-weight: 600;
            }
.box-category > ul.product-categories .profile-item a.subprofile-item span.plusminus {
                    float: right;
                color: #000;
                font-size: 26px;
            }
.box-category > ul.product-categories .profile-item a.subprofile-item[aria-expanded="false"] span.plusminus.plus {
                    margin-top: -9px;
            }
.box-category > ul.product-categories .profile-item a.subprofile-item[aria-expanded="true"] span.plusminus.minus {
                    margin-top: -18px;
            }
.box-category > ul.product-categories .profile-item a.subprofile-item[aria-expanded="true"] span.plusminus.plus {
                    display: none;
            }
.box-category > ul.product-categories .profile-item a.subprofile-item[aria-expanded="false"] span.plusminus.minus {
                    display: none;
            }
.box-category > ul.product-categories .profile-item a.subprofile-item[aria-expanded="true"] span.plusminus.minus {
                    color: #E68C45;
            }
.box-category > ul.product-categories .profile-item a.subprofile-item[aria-expanded="false"] span.plusminus.plus {
                    color: #000;
            }
`