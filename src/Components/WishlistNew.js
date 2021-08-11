import React, { Component } from 'react'
import styled from 'styled-components';
import NavBar from "./NavBar";
import Menubar from './Menubar';
import TopBar from './TopBar';
import Breadcrumb from './Breadcrumb';
import Footer2 from './Footer2';

export default class WishlistNew extends Component {
    componentWillMount() {
        window.scrollTo(0, 0)
    }
    render() {
        return (
            <React.Fragment>
                <TopBar />
                <NavBar />
                <Menubar />
                <WishlistNewWrap>
                    <Breadcrumb />
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-xs-12 col-md-12 col-sm-12">
                                <form className="woocommerce-cart-form">
                                    <table className="shop_table shop_table_responsive wishlist_table carttable woocommerce-cart-form__contents" cellspacing="0">
                                        <thead>
                                            <tr>
                                                <th className="product-thumbnail">Image</th>
                                                <th className="product-name">Product Name</th>
                                                <th className="product-price">Price</th>
                                                <th className="product-quantity">Stock</th>
                                                <th className="product-subtotal">Add to Cart</th>
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
                                                <td className="product-subtotal" data-title="Total">
                                                    <span className="inStock">
                                                        In Stock
                                                    </span>
                                                    <span className="outOfStock hide">
                                                        Out of Stock
                                                    </span>
                                                </td>
                                                <td class="product-add-to-cart">
                                                    <div class="add-cart">
                                                        <a href="#" rel="nofollow" data-product_id="994" data-product_sku="A1359" data-quantity="1" class="button product_type_simple add_to_cart_button ajax_add_to_cart product_type_simple add_to_cart button alt">
                                                            Add to Cart
                                                        </a>
                                                    </div>
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
                                                <td className="product-subtotal" data-title="Total">
                                                    <span className="inStock hide">
                                                        In Stock
                                                    </span>
                                                    <span className="outOfStock">
                                                        Out of Stock
                                                    </span>
                                                </td>
                                                <td class="product-add-to-cart">
                                                    <div class="add-cart">
                                                        <a href="#" rel="nofollow" data-product_id="994" data-product_sku="A1359" data-quantity="1" class="button product_type_simple add_to_cart_button ajax_add_to_cart product_type_simple add_to_cart button alt">
                                                            Add to Cart
                                                        </a>
                                                    </div>
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
                                                <td className="product-subtotal" data-title="Total">
                                                    <span className="inStock">
                                                        In Stock
                                                    </span>
                                                    <span className="outOfStock hide">
                                                        Out of Stock
                                                    </span>
                                                </td>
                                                <td class="product-add-to-cart">
                                                    <div class="add-cart">
                                                        <a href="#" rel="nofollow" data-product_id="994" data-product_sku="A1359" data-quantity="1" class="button product_type_simple add_to_cart_button ajax_add_to_cart product_type_simple add_to_cart button alt">
                                                            Add to Cart
                                                        </a>
                                                    </div>
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
                    </div>
                </WishlistNewWrap>
                <Footer2></Footer2>
            </React.Fragment>
        )
    }
}

const WishlistNewWrap = styled.div``