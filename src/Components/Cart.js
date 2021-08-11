import React, { Component } from "react";
import { connect } from "react-redux";
import { addToCart, removeFromCart } from "../actions/cartActions";
import NavBar from "./Common/NavBar";
import styled from "styled-components";
import TopBar from './Common/TopBar';
import Menubar from './Common/Menubar';
import Breadcrumb from './Common/Breadcrumb';
import Footer2 from "./Common/Footer2";
class Cart extends Component {
    state = {
        localProducts: []
    }

    componentWillMount() {
        const local1 = localStorage.getItem("CartItems")
        const local = JSON.parse(local1);
        this.setState({ localProducts: local });
        window.scroll(0, 0);
    }
    render() {

        const { cartItems } = this.props;

        return (
            <React.Fragment>
                <TopBar />
                <NavBar />
                <ViewCartWrap>
                    <Breadcrumb />{cartItems.length === 0 ?
                        (<h2 className="text-center mt-5 justify-content-center mb-5">NO ITEMS IN CART </h2>
                        )
                        :
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-xs-12 col-md-12 col-sm-12">
                                    <form className="woocommerce-cart-form">
                                        <table className="shop_table shop_table_responsive carttable woocommerce-cart-form__contents" cellspacing="0">
                                            <thead>
                                                <tr>
                                                    <th className="product-thumbnail">Image</th>
                                                    <th className="product-name">Product Name</th>
                                                    <th className="product-price">Price</th>
                                                    <th className="product-quantity">Quantity</th>
                                                    <th className="product-subtotal">Total</th>
                                                    <th className="product-remove">
                                                        <span className="remove">
                                                            <i className="fa fa-times"></i>
                                                        </span>
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody> {cartItems.map((cartItems) => (
                                                <tr className="woocommerce-cart-form__cart-item cart_item">

                                                    <td className="product-thumbnail">
                                                        <a href="/#">
                                                            <img width="300" height="240" src={cartItems.filename} className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail" alt="" />
                                                        </a>
                                                    </td>
                                                    <td className="product-name" data-title="Product">
                                                        <a href="/#">{cartItems.title}</a>
                                                    </td>
                                                    <td className="product-price" data-title="Price">
                                                        <span className="woocommerce-Price-amount amount">
                                                            <span className="woocommerce-Price-currencySymbol">₹</span>
                                                            {cartItems.price}
                                                        </span>
                                                    </td>
                                                    <td className="product-quantity" data-title="Quantity">
                                                        <div className="quantity-wrapper">
                                                            <label for="quantity_5f1bc3074b79b">Quantity</label>
                                                            <div className="quantity buttons_added">
                                                                <input type="button" value="-" className="minus" onClick={(e) => this.props.removeFromCart(this.props.cartItems, cartItems)} />
                                                                <input type="number" id="quantity_5f1bc3074b79b" className="input-text qty text" step="1" min="0" max="10" name="cart[934815ad542a4a7c5e8a2dfa04fea9f5][qty]" value={cartItems.count} title="Qty" size="4" pattern="[0-9]*" inputmode="numeric" aria-labelledby="American Grape quantity" />
                                                                <input type="button" value="+" className="plus" onClick={(e) => this.props.addToCart(this.props.cartItems, cartItems)} />
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="product-subtotal" data-title="Total">
                                                        <span className="woocommerce-Price-amount amount">
                                                            <span className="woocommerce-Price-currencySymbol">
                                                                ₹
                                                    </span>
                                                            {(cartItems.price * cartItems.count).toFixed(2)}
                                                        </span>
                                                    </td>
                                                    <td className="product-remove">
                                                        <span className="remove" aria-label="Remove this item" data-product_id="994" data-product_sku="A1359" onClick={(e) =>
                                                            this.props.removeFromCart(this.props.cartItems, cartItems)
                                                        }>
                                                            <i className="fa fa-times"></i>
                                                        </span>
                                                    </td>

                                                </tr>))}

                                                <tr>
                                                    <td colspan="6" className="actions">
                                                        {/* <div className="coupon">
                                                    <label for="coupon_code">Coupon:</label>
                                                    <input type="text" name="coupon_code" className="input-text" id="coupon_code" value="" placeholder="Coupon code" />
                                                    <input type="submit" className="btn btn-grey-dark" name="apply_coupon" value="Apply coupon" />
                                                // </div> */}
                                                        {/* <input type="submit" className="button" name="update_cart" value="Update cart" disabled="" /> */}
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </form>
                                </div>

                            </div>
                            <div className="shopping-cart">
                                <div className="row">
                                    <div className="col-md-4">
                                        <div className="shipping">
                                            <h6>Calculate Shipping and Tax</h6>
                                            <p>Enter your destination to get shipping estimate</p>
                                            <form action="#">
                                                <div className="country-box">
                                                    <select className="country">
                                                        <option>Select Country</option>
                                                        <option>United State</option>
                                                        <option>United Kingdom</option>
                                                        <option>Germany</option>
                                                        <option>Australia</option>
                                                    </select>
                                                </div>
                                                <div className="state-box">
                                                    <select className="state">
                                                        <option>State/Province</option>
                                                        <option>State 1</option>
                                                        <option>State 2</option>
                                                        <option>State 3</option>
                                                        <option>State 4</option>
                                                    </select>
                                                </div>
                                                <div className="post-box">
                                                    <input type="text" name="zip" value="" placeholder="Zip/Postal Code" />
                                                    <button type="button">Get Estimate</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="coupon">
                                            <h6>Discount Coupon</h6>
                                            <p>Enter your coupon code if you have one</p>
                                            <form action="#">
                                                <input type="text" name="zip" value="" placeholder="Your Coupon" />
                                                <button type="button">Apply Code</button>
                                            </form>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="crt-sumry">
                                            <h5>Cart Summery</h5>
                                            <ul className="list-unstyled">
                                                <li>Subtotal <span>₹ {
                                                    this.props.cartItems.reduce((a, c) => a + c.price * c.count, 0.0)
                                                }</span></li>
                                                <li>Shipping &amp; Tax <span>₹00.00</span></li>
                                                <li className="grandtotal">Grand Total <span>₹ {
                                                    (this.props.cartItems.reduce((a, c) => a + c.price * c.count, 0.0)).toFixed(2)
                                                }</span></li>
                                            </ul>
                                            <div className="cart-btns text-right">
                                                <button type="button" className="up-cart">Update Cart</button>
                                                <button type="button" className="chq-out">Checkout</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>}
                    <Footer2 />
                </ViewCartWrap>
            </React.Fragment>
        );
    }
}
const mapStateToProps = (state) => ({
    cartItems: state.cart.items,
});
export default connect(mapStateToProps, { addToCart, removeFromCart })(Cart);

const ViewCartWrap = styled.div`
`