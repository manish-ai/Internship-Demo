import React from 'react'
import styled from 'styled-components';
import { MDBTooltip } from "mdbreact";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';
const CategoryProducts = ({ product, addToCart, cartItems, addToWish, wishItems, removeFromCart, removeFromWish }) => {
    const [count, setCount] = React.useState(1)
    const [showCounter, setShowCounter] = React.useState(false)

    const showCounterOnClick = () => {
        setShowCounter(true);
        addToCart(cartItems, product);
        toast.success(<Foo />, { className: 'toast-success' })
    }

    const hideCounterOnClick = () => setShowCounter(false)

    const [favo, setFav] = React.useState(false)

    const onClickFav = () => {
        setFav(true);
        addToWish(wishItems, product);
        toast.success(<WishA />, { className: 'toast-success' });
    }

    const offClickFav = () => {
        setFav(false);
        removeFromWish(wishItems, product);
        toast.error(<WishR />, { className: 'toast-red' });

    }
    const counterUp = () => {

        setCount(count + 1);
        addToCart(cartItems, product);
        toast.success(<Foo />, { className: 'toast-success' })

    }

    const counterDown = (cartItems, product) => {
        if (count === 1) {
            hideCounterOnClick()
            removeFromCart(cartItems, product);
            toast.error(<FooR />, { className: 'toast-red' })
        }
        else setCount(count - 1)
    }
    const WishR = () => (
        <div>
            <div className="text"><i className="far fa-ban"></i><span> &nbsp;&nbsp; Removed to Wishlist</span></div>
        </div>
    )
    const FooR = () => (
        <div>
            <div className="text"><i className="far fa-ban"></i><span> &nbsp;&nbsp; Removed to Cart</span></div>
        </div>
    )
    const Foo = () => (
        <div>
            <div className="text"><i className="far fa-check-circle"></i><span> &nbsp;&nbsp; Added to Cart</span></div>
        </div>
    )
    const WishA = () => (
        <div>
            <div className="text"><i className="far fa-check-circle"></i><span> &nbsp;&nbsp; Added to Wishlist</span></div>
        </div>
    )




    return (<><ToastContainer position="top-right"
        autoClose={2200}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover />

        <div className="item col-lg-3 col-xl-2 col-md-6 col-sm-6 col-12">
            <Wrap>
                <div className="item-inner">
                    <div className="item-img">
                        <div className="item-img-info">
                            <span className="onsale">
                                {/* <span className="featured not-sale">Hot</span> */}
                            </span>
                            <Link to="/productdetail" className="product-image">
                                <img src={product.filename} alt="Fresh Organic Mustard Leaves"></img>
                            </Link>
                        </div>
                    </div>
                    <div className="item-info">
                        <div className="info-inner">
                            <div className="item-title">
                                <a href="/#" className="">
                                    {product.title}
                                </a>
                                <div className="tbay-subtitle">(Approx 800g)</div>
                            </div>
                            <div className="item-content">
                                <div className="item-price">
                                    <div className="price-box">
                                        <span className="regular-price">
                                            <span className="price">
                                                <del className="pr-1">
                                                    <span className="woocommerce-Price-amount amount">
                                                        <span className="woocommerce-Price-currencySymbol">₹</span>
                                                        {product.price + 2}
                                                    </span>
                                                </del>
                                                <ins>
                                                    <span className="woocommerce-Price-amount amount">
                                                        <span className="woocommerce-Price-currencySymbol">₹</span>
                                                        {product.price}
                                                    </span>
                                                </ins>
                                            </span>
                                        </span>
                                    </div>
                                </div>
                                <div className="product-buttons">
                                    <ul>
                                        <li>
                                            {favo ?
                                                <span><MDBTooltip tag="span" domElement material placement="top">
                                                    <Link className="btn-link" title="Add to wishlist" onClick={() => offClickFav()}>
                                                        <i className="fas fa-heart"></i>
                                                    </Link>
                                                    <span>Add to wishlist</span>
                                                </MDBTooltip> </span> :
                                                <MDBTooltip tag="span" domElement material placement="top">
                                                    <Link className="btn-link" title="Add to wishlist" onClick={() => (onClickFav())}>
                                                        <i className="far fa-heart"></i>
                                                    </Link>
                                                    <span>Add to wishlist</span>
                                                </MDBTooltip>
                                            }
                                        </li>
                                        <li>
                                            {showCounter ?
                                                <div className="input-group quantity-input">
                                                    <span className="input-group-btn">
                                                        <button type="button" onClick={() => counterDown(cartItems, product)} className="btn-link-sign">
                                                            <span className="fal fa-minus"></span>
                                                        </button>
                                                    </span>
                                                    <input type="text" name="quant[1]" className="text-center form-control-number" value={count} disabled="disabled" max="20" />
                                                    <span className="input-group-btn">
                                                        <button type="button" onClick={() => (counterUp())} className="btn-link-sign ">
                                                            <span className="fal fa-plus"></span>
                                                        </button>
                                                    </span>
                                                </div> :

                                                <MDBTooltip tag="span" domElement material placement="top">
                                                    <Link className="butn-style2" title="Add to Cart" onClick={() => (showCounterOnClick())}>
                                                        Add to Cart
                                        </Link>
                                                    <span>Add to Cart</span>
                                                </MDBTooltip>
                                            }
                                        </li>
                                        <li>
                                            <MDBTooltip tag="span" domElement material placement="top">
                                                <Link href="/#" className="btn-link" title="Quick view">
                                                    <i className="fas fa-eye"></i>
                                                </Link>
                                                <span>Quick view</span>
                                            </MDBTooltip>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Wrap>  </div>
    </>
    )
}

export default CategoryProducts
const Wrap = styled.div`
margin-bottom: 10px;
width: 100% !important;;

`
