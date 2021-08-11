import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { addToWish, removeFromWish } from './../actions/wishActions';
import { addToCart } from './../actions/cartActions';
import Breadcrumb from "./Common/Breadcrumb";
import TopBar from "./Common/TopBar";
import NavBar from "./Common/NavBar";
import Menubar from "./Common/Menubar";
import Footer2 from "./Common/Footer2";
class Wishlist extends Component {
    render() {
        const { wishItems } = this.props;
        return (
            <React.Fragment>
                <TopBar />
                <NavBar />
                <Menubar />
                <WishlistNewWrap>
                    <Breadcrumb />
                    {wishItems.length === 0 ?
                        (<h2 className="text-center mt-5 justify-content-center mb-5">NO ITEMS IN WISHLIST </h2>
                        )
                        :
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
                                                {wishItems.map((wish) => (
                                                    <tr className="woocommerce-cart-form__cart-item cart_item">
                                                        <td className="product-thumbnail">
                                                            <a href="/#">
                                                                <img width="300" height="240" src={wish.filename} className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail" alt="" />
                                                            </a>
                                                        </td>
                                                        <td className="product-name" data-title="Product">
                                                            <a href="/#">{wish.title}</a>
                                                        </td>
                                                        <td className="product-price" data-title="Price">
                                                            <span className="woocommerce-Price-amount amount">
                                                                <span className="woocommerce-Price-currencySymbol">₹</span>
                                                                {wish.price}
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
                                                                <button href="/#" rel="nofollow" data-product_id="994" data-product_sku="A1359" data-quantity="1" onClick={(e) => this.props.addToCart(this.props.cartItems, wish)} class="cart-button alt">
                                                                    Add to Cart
                                                    </button>
                                                            </div>
                                                        </td>
                                                        <td className="product-remove">
                                                            <span href="/#" className="remove" aria-label="Remove this item" data-product_id="994" data-product_sku="A1359" onClick={(e) => this.props.removeFromWish(this.props.wishItems, wish)}>
                                                                <i className="fa fa-times"></i>
                                                            </span>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </form>
                                </div>
                            </div>
                        </div>}
                    <Footer2 />
                </WishlistNewWrap>
            </React.Fragment>
        );
    }
}
const mapStateToProps = (state) => ({
    wishItems: state.wish.items,
    cartItems: state.cart.items,
});
export default connect(mapStateToProps, { addToWish, removeFromWish, addToCart })(Wishlist);

const WishlistNewWrap = styled.div`

.cart-button{
color: white !important;
background: #E68C45;
border: #E68C45;
border-radius: 5px;
padding: 5px 6px; 

}`