import React, { Component } from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { connect } from "react-redux";
import { addToCart, removeFromCart } from "../actions/cartActions";

class SidebarCart extends Component {
    componentWillMount() {
        window.scrollTo(0, 0)
    }
    render() {

        const { cartItems, toggle1 } = this.props;

        return (

            <SidebarCartWrap>
                <div className="cartstyle__CartSlidePopup cartPopupFixed">
                    <div className="cartstyle__CartPopupBody">
                        <div className="cartstyle__PopupHeader">
                            <div className="cartstyle__PopupItemCount">
                                <i className="fas fa-shopping-bag"></i>
                                <span>{cartItems.length}&nbsp;items</span>
                            </div>
                            <button onClick={toggle1} className="cartstyle__CloseButton" >
                                <i className="fas fa-times"></i>
                            </button>
                        </div>
                        <div className="cartstyle__Cartbody">
                            {cartItems.length === 0 ?
                                (
                                    <h2 className="text-center mt-5 justify-content-center mb-5">
                                        <svg className="margin-auto" xmlns="http://www.w3.org/2000/svg" width="231.91" height="292" viewBox="0 0 231.91 292">
                                            <defs>
                                                <linearGradient id="linear-gradient" x1="1" y1="0.439" x2="0.369" y2="1" gradientUnits="objectBoundingBox">
                                                    <stop offset="0" stop-color="#029477"></stop>
                                                    <stop offset="1" stop-color="#009e7f"></stop>
                                                </linearGradient>
                                            </defs>
                                            <g id="no_cart_in_bag_2" data-name="no cart in bag 2" transform="translate(-1388 -351)">
                                                <ellipse id="Ellipse_2873" data-name="Ellipse 2873" cx="115.955" cy="27.366" rx="115.955" ry="27.366" transform="translate(1388 588.268)" fill="#ddd" opacity="0.25"></ellipse>
                                                <path id="Path_18691" data-name="Path 18691" d="M29.632,0H170.368A29.828,29.828,0,0,1,200,30.021V209.979A29.828,29.828,0,0,1,170.368,240H29.632A29.828,29.828,0,0,1,0,209.979V30.021A29.828,29.828,0,0,1,29.632,0Z" transform="translate(1403 381)" fill="#FFF4DE"></path>
                                                <path id="Rectangle_1852" data-name="Rectangle 1852" d="M30,0H170a30,30,0,0,1,30,30v0a30,30,0,0,1-30,30H12.857A12.857,12.857,0,0,1,0,47.143V30A30,30,0,0,1,30,0Z" transform="translate(1403 381)" fill="#E68C45"></path>
                                                <path id="Rectangle_1853" data-name="Rectangle 1853" d="M42,0H158a42,42,0,0,1,42,42v0a18,18,0,0,1-18,18H18A18,18,0,0,1,0,42v0A42,42,0,0,1,42,0Z" transform="translate(1403 381)" fill="#E68C45"></path>
                                                <path id="Path_18685" data-name="Path 18685" d="M446.31,246.056a30,30,0,1,1,30-30A30.034,30.034,0,0,1,446.31,246.056Zm0-53.294A23.3,23.3,0,1,0,469.9,216.056,23.471,23.471,0,0,0,446.31,192.762Z" transform="translate(1056.69 164.944)" fill="#E68C45"></path>
                                                <path id="Path_18686" data-name="Path 18686" d="M446.31,375.181a30,30,0,1,1,30-30A30.034,30.034,0,0,1,446.31,375.181Zm0-53.294A23.3,23.3,0,1,0,469.9,345.181,23.471,23.471,0,0,0,446.31,321.887Z" transform="translate(1057.793 95.684)" fill="#FFF4DE"></path>
                                                <circle id="Ellipse_2874" data-name="Ellipse 2874" cx="28.689" cy="28.689" r="28.689" transform="translate(1473.823 511.046)" fill="#E68C45"></circle>
                                                <circle id="Ellipse_2875" data-name="Ellipse 2875" cx="15.046" cy="15.046" r="15.046" transform="translate(1481.401 547.854) rotate(-45)" fill="#FFF4DE"></circle>
                                                <path id="Path_18687" data-name="Path 18687" d="M399.71,531.27a71.755,71.755,0,0,1,12.65-13.6c3.4-2.863-1.5-7.726-4.882-4.882a78.392,78.392,0,0,0-13.73,15c-2.56,3.644,3.424,7.1,5.962,3.485Z" transform="translate(1060.579 -35.703)" fill="#E68C45"></path>
                                                <path id="Path_18688" data-name="Path 18688" d="M412.913,527.786a78.419,78.419,0,0,0-13.73-15c-3.38-2.843-8.289,2.017-4.882,4.882a71.785,71.785,0,0,1,12.65,13.6c2.535,3.609,8.525.162,5.962-3.485Z" transform="translate(1060.566 -35.704)" fill="#E68C45"></path>
                                                <path id="Path_18689" data-name="Path 18689" d="M583.278,527.786a78.417,78.417,0,0,0-13.73-15c-3.38-2.843-8.289,2.017-4.882,4.882a71.768,71.768,0,0,1,12.65,13.6c2.535,3.609,8.525.162,5.962-3.485Z" transform="translate(970.304 -35.704)" fill="#E68C45"></path>
                                                <path id="Path_18690" data-name="Path 18690" d="M570.075,531.27a71.77,71.77,0,0,1,12.65-13.6c3.4-2.863-1.5-7.726-4.882-4.882a78.407,78.407,0,0,0-13.73,15c-2.56,3.644,3.424,7.1,5.962,3.485Z" transform="translate(970.318 -35.703)" fill="#E68C45"></path>
                                                <path id="Path_18692" data-name="Path 18692" d="M301.243,287.464a19.115,19.115,0,0,1,8.071,9.077,19.637,19.637,0,0,1,1.6,7.88v26.085a19.349,19.349,0,0,1-9.672,16.957c-10.048-6.858-16.544-17.742-16.544-30S291.2,294.322,301.243,287.464Z" transform="translate(1292.301 101.536)" fill="#E68C45"></path>
                                                <path id="Path_18693" data-name="Path 18693" d="M294.371,287.464a19.115,19.115,0,0,0-8.071,9.077,19.637,19.637,0,0,0-1.6,7.88v26.085a19.349,19.349,0,0,0,9.672,16.957c10.048-6.858,16.544-17.742,16.544-30S304.419,294.322,294.371,287.464Z" transform="translate(1118.301 101.536)" fill="#E68C45"></path>
                                            </g>
                                        </svg>
                                        NO ITEMS IN CART
                                </h2>
                                )
                                :
                                <div>
                                    {cartItems.map((cartItems) => (
                                        <div className="cartstyle__CartSection">
                                            <div className="cartstyle__ItemWrapper">
                                                <div className="cart-itemstyle__ItemBox">
                                                    {/* <div className="counterstyle__CounterBox"></div> */}
                                                    <img src={cartItems.filename} class="cart-itemstyle__Image" alt="sd"></img>
                                                    <div className="cart-itemstyle__Information">
                                                        <span className="cart-itemstyle__Name">
                                                            {cartItems.title}
                                                        </span>
                                                        <span className="cart-itemstyle__Price">
                                                            ₹{cartItems.price}
                                                        </span>
                                                        <span className="cart-itemstyle__Weight">
                                                            {cartItems.count} pc(s)
                                                        </span>
                                                        <span className="quantity-wrapper d-block">
                                                            <div className="quantity buttons_added">
                                                                <input type="button" value="-" className="minus" onClick={(e) => this.props.removeFromCart(this.props.cartItems, cartItems)} />
                                                                <input type="number" id="quantity_5f1bc3074d46d" className="input-text qty text" step="1" min="0" max="10" name="cart[fba9d88164f3e2d9109ee770223212a0][qty]" value={cartItems.count} title="Qty" size="4" pattern="[0-9]*" inputmode="numeric" aria-labelledby="Australian Kiwi quantity" />
                                                                <input type="button" value="+" className="plus" onClick={(e) => this.props.addToCart(this.props.cartItems, cartItems)} />
                                                            </div>
                                                        </span>
                                                    </div>
                                                    <div className="cart-itemstyle__Total">
                                                        <span className="totalValue mt-2">₹{(cartItems.price * cartItems.count).toFixed(2)}</span>

                                                        {/* <span className="quantity-wrapper d-block mt-3">
                                                            <div className="quantity buttons_added">
                                                                <input type="button" value="-" className="minus" onClick={(e) => this.props.removeFromCart(this.props.cartItems, cartItems)} />
                                                                <input type="number" id="quantity_5f1bc3074d46d" className="input-text qty text" step="1" min="0" max="10" name="cart[fba9d88164f3e2d9109ee770223212a0][qty]" value={cartItems.count} title="Qty" size="4" pattern="[0-9]*" inputmode="numeric" aria-labelledby="Australian Kiwi quantity" />
                                                                <input type="button" value="+" className="plus" onClick={(e) => this.props.addToCart(this.props.cartItems, cartItems)} />
                                                            </div>
                                                        </span> */}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            }
                        </div>
                        <div className="cartstyle__CheckoutButtonWrapper">
                            {/* <span className="cartstyle__PromoCode">
                                <button>Do you have a voucher?</button>
                            </span>
                            <button className="cartstyle__CheckoutButton">
                                <a class="cartstyle__Title">Checkout</a>
                            </button>
                            <span class="cartstyle__PriceBox">
                                ₹ 7.30
                            </span> */}
                            <div className="cart-bottom">
                                <p class="total text-theme pl-3 pr-3">
                                    <strong>Total:</strong>
                                    <span class="woocommerce-Price-amount amount">
                                        <span class="woocommerce-Price-currencySymbol">₹</span>
                                        {
                                            (this.props.cartItems.reduce((a, c) => a + c.price * c.count, 0.0)).toFixed(2)
                                        }
                                    </span>
                                </p>
                                <p class="buttons clearfix pl-3 pr-3">
                                    <Link to="/cart" class="btn btn-theme-orange btn-block">View Cart</Link>
                                    <Link to="checkout" class="btn btn-primary-black btn-block checkout">Checkout</Link>
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
                {/* <div class="cart-overlay visible"></div> */}
            </SidebarCartWrap>
        )
    }
}

const mapStateToProps = (state) => ({
    cartItems: state.cart.items,
});
export default connect(mapStateToProps, { addToCart, removeFromCart })(SidebarCart);



const SidebarCartWrap = styled.div`
.margin-auto {
    margin: 10px auto;
    width: 100%;
    height: 180px;
}
.cart-overlay {
    position: fixed;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    display: block;
    background-color: rgba(0, 0, 0, 0.8);
    z-index: 99990;
    visibility: hidden;
    opacity: 0;
    -webkit-transition: 0.3s ease;
    -moz-transition: 0.3s ease;
    -ms-transition: 0.3s ease;
    -o-transition: 0.3s ease;
    transition: 0.3s ease;
}

.cartstyle__CartSlidePopup {
    width: 400px;
    height: 100vh;
    background-color: rgb(255, 255, 255);
    position: fixed;
    bottom: 0px;
    right: -450px;
    z-index: 1010;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 21px 36px;
    transition: all 0.35s ease-in-out 0s;
}
@media (min-width: 581px){
    .cartstyle__CartSlidePopup {
        display: block;
    }
}
.cartstyle__CartSlidePopup.cartPopupFixed {
    right: 0px;
}
.cartstyle__CartSlidePopup .cartstyle__CartPopupBody {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    background-color: rgb(255, 255, 255);
    box-sizing: content-box;
    border-radius: 6px;
}
.cartstyle__CartSlidePopup .cartstyle__PopupHeader {
    background-color: rgb(255, 255, 255);
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    justify-content: space-between;
    padding: 15px 25px;
    border-bottom: 1px solid rgb(241, 241, 241);
}
.cartstyle__PopupItemCount {
    display: inline-flex;
    -webkit-box-align: center;
    align-items: center;
    color: black;
}
.cartstyle__PopupItemCount svg {
    color: #E68C45;
}
.cartstyle__PopupItemCount span {
    font-size: 15px;
    font-weight: 700;
    color: black;
    padding-left: 10px;
}
.cartstyle__CloseButton {
    width: 14px;
    height: 14px;
    display: inline-flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    flex-shrink: 0;
    cursor: pointer;
    color: rgba(0, 0, 0, 0.25);
    background-color: transparent;
    padding: 0px;
    border-width: 0px;
    border-style: initial;
    border-color: initial;
    border-image: initial;
    outline: 0px;
    transition: all 0.4s ease 0s;
}
.cartstyle__Cartbody {
    position: relative;
    overflow: auto;
    width: 100%;
    height: auto;
    min-height: 0px;
    max-height: 100vh;
}
.cartstyle__CartSection {
    position: relative;
    overflow-y: auto;
    margin-right: 0px;
    margin-bottom: 0px;
    min-height: 0px;
    max-height: calc(100vh + 0px);
    margin-left: 0px;
}
.cartstyle__CartSlidePopup .cartstyle__ItemWrapper {
    max-height: calc(100vh - 245px);
    background-color: rgb(255, 255, 255);
    width: 100%;
    height: auto;
}
.cart-itemstyle__ItemBox {
    font-size: 15px;
    font-weight: 700;
    padding-top: 15px;
    padding-bottom: 15px;
    padding-left: 25px;
    padding-right: 25px;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    border-bottom: 1px solid rgb(247, 247, 247);
}
.counterstyle__CounterBox {
    display: flex;
    font-size: 14px;
    font-weight: 700;
    -webkit-box-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    align-items: center;
    flex-shrink: 0;
    width: 30px;
    height: 90px;
    flex-direction: column-reverse;
    background-color: rgb(247, 247, 247);
    color: rgb(13, 17, 54);
    border-radius: 200px;
    overflow: auto;
}
.cart-itemstyle__Image {
    width: 60px;
    height: 60px;
    object-fit: cover;
    margin: 0px 15px;
    max-width: 100%;
}
.cart-itemstyle__Information {
    display: flex;
    flex-direction: column;
    margin-left: 15px;
}
.cart-itemstyle__Name {
    color: #000;
    margin-bottom: 0px;
    line-height: 1.5;
    font-size: 15px;
    font-weight: 700;
}
.cart-itemstyle__Price {
    color: grey;
    margin-top: 5px;
    margin-bottom: 5px;
    font-size: 14px;
    font-weight: 700;
}
.cart-itemstyle__Weight {
    font-size: 13px;
    font-weight: 600;
    color: #000;
    margin-bottom: 5px; 
}
.cart-itemstyle__Total {
    color: #000;
    margin-left: auto;
    font-size: 14px;
    font-weight: 700;
}
.cart-itemstyle__Total .totalValue {
    font-size: 20px;
    text-align: center;
    display: block;
}
.cartstyle__CheckoutButtonWrapper {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-top: auto;
}
.cartstyle__PromoCode {
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    margin: 20px 0px;
}
.cartstyle__PromoCode > button {
    box-shadow: none;
    background-color: transparent;
    display: inline-flex;
    cursor: pointer;
    font-size: 14px;
    font-weight: 700;
    color: #E68C45;
    border-width: 0px;
    border-style: initial;
    border-color: initial;
    border-image: initial;
    outline: 0px;
    transition: color 0.35s ease 0s;
}
.cartstyle__CheckoutButton {
    height: 48px;
    width: calc(100% - 30px);
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    justify-content: space-between;
    background-color: #E68C45;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px;
    cursor: pointer;
    margin-bottom: 15px;
    margin-left: 15px;
    padding: 0px;
    border-radius: 48px;
    border-width: 0px;
    border-style: initial;
    border-color: initial;
    border-image: initial;
    outline: 0px;
    letter-spacing: normal;
    word-spacing: normal;
    text-transform: none;
    text-indent: 0px;
    text-shadow: none;
    color: #fff;
}
.cartstyle__CheckoutButton > a.cartstyle__Title {
    font-size: 15px;
    font-weight: 700;
    color: rgb(255, 255, 255);
    padding-right: 10px;
    width: 100%;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    justify-content: space-between;
    padding-left: 30px;
}
.cartstyle__PriceBox {
    width: auto;
    height: 44px;
    display: inline-flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    background-color: rgb(255, 255, 255);
    font-size: 15px;
    font-weight: 700;
    color: rgb(0, 158, 127);
    margin-right: 2px;
    padding: 0px 30px;
    overflow: hidden;
    border-radius: 28px;
}
.cart-bottom {
    align-self: flex-end;
    -webkit-align-self: flex-end;
    width: 100%;
}
.cart-bottom .total {
    color: black;
    border-top: 1px solid #ededed;
    overflow: hidden;
    position: relative;
    margin: 0;
    font-weight: 400;
    text-transform: uppercase;
    padding: 20px 0;
    font-size: 14px;
}
 .cart-bottom .total strong {
    font-weight: 600;
    font-size: 18px;
}
.cart-bottom .total .amount {
    font-size: 18px;
    float: right;
    font-weight: 600;
}
.cart-bottom .buttons {
    margin: 0;
}
.cart-bottom .buttons a {
    text-transform: uppercase;
    display: block;
    margin-bottom: 10px;
}
.cart-bottom .buttons:last-child {
    margin: 0;
}
`