import React, { Component } from 'react'
import styled from 'styled-components';
import Breadcrumb from './Common/Breadcrumb';
import Footer2 from './Common/Footer2';
import Menubar from './Common/Menubar';
import NavBar from './Common/NavBar';
import TopBar from './Common/TopBar';

export default class OrderRecieved extends Component {
    componentWillMount() {
        window.scrollTo(0, 0)
    }
    render() {
        return (
            <React.Fragment>
                <TopBar />
                <NavBar />
                <Menubar />
                <OrderRecievedWrap>
                    <Breadcrumb />
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-12 col-xs-12">
                                <div className="order_receivedstyle__OrderReceivedContainer">
                                    <a className="home-btn" href="/">
                                        Back to Home
                                    </a>
                                    <div className="order_receivedstyle__OrderInfo">
                                        <h2 className="order_receivedstyle__BlockTitle">Order Received</h2>
                                        <p className="order_receivedstyle__Text">Thank you. Your order has been received</p>
                                        <div className="order_receivedstyle__InfoBlockWrapper">
                                            <div className="order_receivedstyle__InfoBlock">
                                                <p className="order_receivedstyle__Text title">Order Number</p>
                                                <p className="order_receivedstyle__Text desc">1444</p>
                                            </div>
                                            <div className="order_receivedstyle__InfoBlock">
                                                <p className="order_receivedstyle__Text title">Date</p>
                                                <p className="order_receivedstyle__Text desc">March 14, 2019</p>
                                            </div>
                                            <div className="order_receivedstyle__InfoBlock">
                                                <p className="order_receivedstyle__Text title">Total</p>
                                                <p className="order_receivedstyle__Text desc">₹10,944.00</p>
                                            </div>
                                            <div className="order_receivedstyle__InfoBlock">
                                                <p className="order_receivedstyle__Text title">Payment Method</p>
                                                <p className="order_receivedstyle__Text desc">Cash on delivery</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="order_receivedstyle__OrderDetails">
                                        <h2 className="order_receivedstyle__BlockTitle">Order Details</h2>
                                        <div className="order_receivedstyle__ListItem">
                                            <div className="order_receivedstyle__ListTitle">
                                                <p className="order_receivedstyle__Text">Total Item</p>
                                            </div>
                                            <div className="order_receivedstyle__ListDes">
                                                <p className="order_receivedstyle__Text">6 Items</p>
                                            </div>
                                        </div>
                                        <div className="order_receivedstyle__ListItem">
                                            <div className="order_receivedstyle__ListTitle">
                                                <p className="order_receivedstyle__Text">Order Time</p>
                                            </div>
                                            <div className="order_receivedstyle__ListDes">
                                                <p className="order_receivedstyle__Text">1.00pm 10/12/19</p>
                                            </div>
                                        </div>
                                        <div className="order_receivedstyle__ListItem">
                                            <div className="order_receivedstyle__ListTitle">
                                                <p className="order_receivedstyle__Text">Delivery Time</p>
                                            </div>
                                            <div className="order_receivedstyle__ListDes">
                                                <p className="order_receivedstyle__Text">90 Minute Express Delivery</p>
                                            </div>
                                        </div>
                                        <div className="order_receivedstyle__ListItem">
                                            <div className="order_receivedstyle__ListTitle">
                                                <p className="order_receivedstyle__Text">Delivery Location</p>
                                            </div>
                                            <div className="order_receivedstyle__ListDes">
                                                <p className="order_receivedstyle__Text">1st Floor, House 149, Road-22, Mohakhali DOHS, Dhaka - North</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="order_receivedstyle__TotalAmount">
                                        <h2 className="order_receivedstyle__BlockTitle">Total Amount</h2>
                                        <div className="order_receivedstyle__ListItem">
                                            <div className="order_receivedstyle__ListTitle">
                                                <p className="order_receivedstyle__Text">Sub Total</p>
                                            </div>
                                            <div className="order_receivedstyle__ListDes">
                                                <p className="order_receivedstyle__Text">₹10,864.00</p>
                                            </div>
                                        </div>
                                        <div className="order_receivedstyle__ListItem">
                                            <div className="order_receivedstyle__ListTitle">
                                                <p className="order_receivedstyle__Text">Payment Method</p>
                                            </div>
                                            <div className="order_receivedstyle__ListDes">
                                                <p className="order_receivedstyle__Text">Cash On Delivery</p>
                                            </div>
                                        </div>
                                        <div className="order_receivedstyle__ListItem">
                                            <div className="order_receivedstyle__ListTitle">
                                                <p className="order_receivedstyle__Text">Cash on delivery</p>
                                            </div>
                                            <div className="order_receivedstyle__ListDes">
                                                <p className="order_receivedstyle__Text">10</p>
                                            </div>
                                        </div>
                                        <div className="order_receivedstyle__ListItem">
                                            <div className="order_receivedstyle__ListTitle">
                                                <p className="order_receivedstyle__Text">Total</p>
                                            </div>
                                            <div className="order_receivedstyle__ListDes">
                                                <p className="order_receivedstyle__Text">₹10,874.00</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </OrderRecievedWrap>
                <Footer2 />
            </React.Fragment>
        )
    }
}

const OrderRecievedWrap = styled.div`

.order_receivedstyle__OrderReceivedContainer {
    padding: 0px;
    position: relative;
    margin-top: 0px;
    margin-bottom: 0px;
    background-color: rgb(255, 255, 255);
    position: relative;
    margin-bottom: 20px;
    box-shadow: rgba(0, 0, 0, 0.08) 0px 2px 16px 0px;
    padding: 60px 60px 30px;
    border-radius: 6px;
    overflow: hidden;
    margin-bottom: 20px;
}
.order_receivedstyle__OrderReceivedContainer .home-btn {
    display: inline-flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    font-family: Lato, sans-serif;
    font-size: 15px;
    font-weight: 400;
    color: rgb(119, 121, 140);
    height: 36px;
    position: absolute;
    top: 15px;
    right: 15px;
    padding: 5px 15px;
    border-width: 1px;
    border-style: solid;
    border-color: rgb(230, 230, 230);
    border-image: initial;
    border-radius: 6px;
    transition: all 0.15s ease-in-out 0s;
}
.order_receivedstyle__OrderReceivedContainer .home-btn:hover {
    background-color: #E68C45;
    color: #fff;
    border-color: #E68C45);
}
.order_receivedstyle__OrderInfo,
.order_receivedstyle__OrderDetails,
.order_receivedstyle__TotalAmount {
    margin-bottom: 60px;
}
.order_receivedstyle__BlockTitle {
    font-size: 21px;
    font-weight: 700;
    color: #000;
    line-height: 1;
    margin-bottom: 32px;
}
.order_receivedstyle__Text {
    font-family: Lato, sans-serif;
    font-size: 15px;
    color: #000;
    font-weight: 400;
    line-height: 1.2;
    display: block;
    margin: 0px;
}
.order_receivedstyle__InfoBlockWrapper {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    justify-content: space-between;
    margin-top: 30px;
}
.order_receivedstyle__InfoBlock {
    -webkit-box-flex: 1;
    flex-grow: 1;
    padding: 0px 15px;
    border-left: 1px solid rgb(241, 241, 241);
}
.order_receivedstyle__InfoBlock:first-child {
    padding-left: 0px;
    border-left: 0px;
}
.order_receivedstyle__InfoBlock .order_receivedstyle__Text.title {
    margin-bottom: 10px;
}
.order_receivedstyle__InfoBlock .order_receivedstyle__Text.title {
    font-size: 15px;
    color: #000;
    font-weight: 700;
    line-height: 1.2;
    display: block;
    margin: 0px;
}
.order_receivedstyle__InfoBlock .order_receivedstyle__Text.desc {
    font-size: 15px;
    color: #000;
    font-weight: 400;
    line-height: 1.2;
    display: block;
    margin: 0px;
}
.order_receivedstyle__InfoBlock .order_receivedstyle__Text.desc:last-child {
    color: rgba(0, 0, 0, 0.7);
}
.order_receivedstyle__InfoBlock:last-child {
    padding-right: 0px;
}
.order_receivedstyle__ListItem {
    display: flex;
    margin-bottom: 20px;
}
.order_receivedstyle__ListItem .order_receivedstyle__ListTitle {
    flex-basis: 210px;
    max-width: 210px;
    flex-shrink: 0;
    position: relative;
}
.order_receivedstyle__ListItem .order_receivedstyle__ListTitle .order_receivedstyle__Text {
    font-size: 15px;
    color: #000;
    font-weight: 700;
    line-height: 1.2;
    display: block;
    margin: 0px;
}
.order_receivedstyle__ListTitle::after {
    content: ":";
    position: absolute;
    top: -1px;
    right: -2px;
    line-height: 1;
}
.order_receivedstyle__ListDes {
    padding-left: 90px;
}
.order_receivedstyle__ListDes .order_receivedstyle__Text {
    font-size: 15px;
    color: rgba(0, 0, 0, 0.7);
    font-weight: 400;
    line-height: 1.2;
    display: block;
    margin: 0px;
}
.order-receivedstyle__OrderDetails .order_receivedstyle__ListItem:last-child,
order_receivedstyle__TotalAmount .order_receivedstyle__ListItem:last-child {
    margin-bottom: 0px;
}
@media (max-width: 990px){
    .order_receivedstyle__OrderReceivedContainer {
        padding: 50px 45px;
    }
}
@media (max-width: 767px){
    .order_receivedstyle__OrderReceivedContainer .home-btn {
        font-size: 13px;
        height: 34px;
        padding: 5px 12px;
    }
    .order_receivedstyle__InfoBlock {
        max-width: 100%;
        margin-bottom: 20px;
        flex: 0 0 100%;
        padding: 0px;
        border-width: 0px;
        border-style: initial;
        border-color: initial;
        border-image: initial;
    }
    .order_receivedstyle__ListItem .order_receivedstyle__ListTitle {
        flex-basis: 105px;
        max-width: 105px;
    }
    .order_receivedstyle__ListDes {
        padding-left: 20px;
    }
    .order_receivedstyle__OrderReceivedContainer {
        padding: 50px 25px;
    }
}
`