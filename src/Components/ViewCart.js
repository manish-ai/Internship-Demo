import React, { Component } from 'react'
import styled from 'styled-components';
import NavBar from "./NavBar";
import Menubar from './Menubar';
import TopBar from './TopBar';
import Breadcrumb from './Breadcrumb';
import Footer2 from './Footer2';

export default class ViewCart extends Component {
    componentWillMount() {
        window.scrollTo(0, 0)
    }
    render() {
        return (
            <React.Fragment>
                <TopBar />
                <NavBar />
                <Menubar />
                <ViewCartWrap>
                    <Breadcrumb />
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
                                        <tbody>
                                            <tr className="woocommerce-cart-form__cart-item cart_item">
                                                <td className="product-thumbnail">
                                                    <a href="#">
                                                        <img width="300" height="240" src="https://demoapus.com/ogami/wp-content/uploads/2019/02/product13-300x240.jpg" className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail" alt="" />
                                                    </a>
                                                </td>
                                                <td className="product-name" data-title="Product">
                                                    <a href="#">American Grape</a>
                                                </td>
                                                <td className="product-price" data-title="Price">
                                                    <span className="woocommerce-Price-amount amount">
                                                        <span className="woocommerce-Price-currencySymbol">₹</span>
                                                        120.00
                                                    </span>
                                                </td>
                                                <td className="product-quantity" data-title="Quantity">
                                                    <div className="quantity-wrapper">
                                                        <label for="quantity_5f1bc3074b79b">Quantity</label>
                                                        <div className="quantity buttons_added">
                                                            <input type="button" value="-" className="minus" />
                                                            <input type="number" id="quantity_5f1bc3074b79b" className="input-text qty text" step="1" min="0" max="" name="cart[934815ad542a4a7c5e8a2dfa04fea9f5][qty]" value="1" title="Qty" size="4" pattern="[0-9]*" inputmode="numeric" aria-labelledby="American Grape quantity" />
                                                            <input type="button" value="+" className="plus" />
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="product-subtotal" data-title="Total">
                                                    <span className="woocommerce-Price-amount amount">
                                                        <span className="woocommerce-Price-currencySymbol">
                                                            ₹
                                                        </span>
                                                        120.00
                                                    </span>
                                                </td>
                                                <td className="product-remove">
                                                    <a href="#" className="remove" aria-label="Remove this item" data-product_id="994" data-product_sku="A1359">
                                                        <i className="fa fa-times"></i>
                                                    </a>
                                                </td>
                                            </tr>
                                            <tr className="woocommerce-cart-form__cart-item cart_item">
                                                <td className="product-thumbnail">
                                                    <a href="#">
                                                        <img width="300" height="240" src="https://demoapus.com/ogami/wp-content/uploads/2019/02/product_b_19-300x240.jpg" className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail" alt="" />
                                                    </a>
                                                </td>
                                                <td className="product-name" data-title="Product">
                                                    <a href="#">Anpan Bread</a>
                                                </td>
                                                <td className="product-price" data-title="Price">
                                                    <span className="woocommerce-Price-amount amount">
                                                        <span className="woocommerce-Price-currencySymbol">₹</span>
                                                        125.00
                                                    </span>
                                                </td>
                                                <td className="product-quantity" data-title="Quantity">
                                                    <div className="quantity-wrapper">
                                                        <label for="quantity_5f1bc3074c633">Quantity</label>
                                                        <div className="quantity buttons_added">
                                                            <input type="button" value="-" className="minus" />
                                                            <input type="number" id="quantity_5f1bc3074c633" className="input-text qty text" step="1" min="0" max="" name="cart[3948ead63a9f2944218de038d8934305][qty]" value="1" title="Qty" size="4" pattern="[0-9]*" inputmode="numeric" aria-labelledby="Anpan Bread quantity" />
                                                            <input type="button" value="+" className="plus" />
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="product-subtotal" data-title="Total">
                                                    <span className="woocommerce-Price-amount amount">
                                                        <span className="woocommerce-Price-currencySymbol">₹</span>
                                                        125.00
                                                    </span>
                                                </td>
                                                <td className="product-remove">
                                                    <a href="#" className="remove" aria-label="Remove this item" data-product_id="1216" data-product_sku="A1355">
                                                        <i className="fa fa-times"></i>
                                                    </a>
                                                </td>
                                            </tr>
                                            <tr className="woocommerce-cart-form__cart-item cart_item">
                                                <td className="product-thumbnail">
                                                    <a href="#">
                                                        <img width="300" height="240" src="https://demoapus.com/ogami/wp-content/uploads/2019/02/product41-300x240.jpg" className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail" alt="" />
                                                    </a>
                                                </td>
                                                <td className="product-name" data-title="Product">
                                                    <a href="#">Australian Kiwi</a>
                                                </td>
                                                <td className="product-price" data-title="Price">
                                                    <span className="woocommerce-Price-amount amount">
                                                        <span className="woocommerce-Price-currencySymbol">₹</span>
                                                        169.00
                                                    </span>
                                                </td>
                                                <td className="product-quantity" data-title="Quantity">
                                                    <div className="quantity-wrapper">
                                                        <label for="quantity_5f1bc3074d46d">Quantity</label>
                                                        <div className="quantity buttons_added">
                                                            <input type="button" value="-" className="minus" />
                                                            <input type="number" id="quantity_5f1bc3074d46d" className="input-text qty text" step="1" min="0" max="" name="cart[fba9d88164f3e2d9109ee770223212a0][qty]" value="1" title="Qty" size="4" pattern="[0-9]*" inputmode="numeric" aria-labelledby="Australian Kiwi quantity" />
                                                            <input type="button" value="+" className="plus" />
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="product-subtotal" data-title="Total">
                                                    <span className="woocommerce-Price-amount amount">
                                                        <span className="woocommerce-Price-currencySymbol">₹</span>
                                                        169.00
                                                    </span>
                                                </td>
                                                <td className="product-remove">
                                                    <a href="#" className="remove" aria-label="Remove this item" data-product_id="1002" data-product_sku="A1355">
                                                        <i className="fa fa-times"></i>
                                                    </a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td colspan="6" className="actions">
                                                    {/* <div className="coupon">
                                                        <label for="coupon_code">Coupon:</label>
                                                        <input type="text" name="coupon_code" className="input-text" id="coupon_code" value="" placeholder="Coupon code" />
                                                        <input type="submit" className="btn btn-grey-dark" name="apply_coupon" value="Apply coupon" />
                                                    </div> */}
                                                    <input type="submit" className="button" name="update_cart" value="Update cart" disabled="" />
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
                                            <li>Subtotal <span>₹328.00</span></li>
                                            <li>Shipping &amp; Tax <span>₹00.00</span></li>
                                            <li className="grandtotal">Grand Total <span>₹328.00</span></li>
                                        </ul>
                                        <div className="cart-btns text-right">
                                            <button type="button" className="up-cart">Update Cart</button>
                                            <button type="button" className="chq-out">Checkout</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </ViewCartWrap>
                <Footer2></Footer2>
            </React.Fragment>
        )
    }
}

const ViewCartWrap = styled.div`
`