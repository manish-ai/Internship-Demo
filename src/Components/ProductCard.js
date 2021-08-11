import React from 'react'
import styled from 'styled-components';
import { MDBTooltip } from "mdbreact";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';

const ProductCard = ({ product, addToCart, cartItems, addToWish, wishItems, removeFromCart, removeFromWish }) => {

    const [count, setCount] = React.useState(1)
    const [showCounter, setShowCounter] = React.useState(false)

    const [favo, setFav] = React.useState(false)


    const showCounterOnClick = () => {
        setShowCounter(true);
        addToCart(cartItems, product);
        toast.success(<Foo />, { className: 'toast-success' })
    }

    const hideCounterOnClick = () => setShowCounter(false)

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
            <div className="classWithFontStyleOrWhatever"><i className="fal fa-ban"></i> &nbsp;&nbsp; Removed to Wishlist</div>
        </div>
    )
    const FooR = () => (
        <div>
            <div className="classWithFontStyleOrWhatever"><i className="fal fa-ban"></i> &nbsp;&nbsp; Removed to Cart</div>
        </div>
    )
    const Foo = () => (
        <div>
            <div className="classWithFontStyleOrWhatever"><i className="fal fa-check-circle"></i> &nbsp;&nbsp; Added to Cart</div>
        </div>
    )
    const WishA = () => (
        <div>
            <div className="classWithFontStyleOrWhatever"><i className="fal fa-check-circle"></i> &nbsp;&nbsp; Added to Wishlist</div>
        </div>
    )
    return (
        <div className="col-12 col-sm-6 col-md-3 col-xl-3">
            <Wrapper><ToastContainer position="top-right"
                autoClose={2100}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover />

                <div className="product-grid  margin-30px-bottom" key={product.id}>
                    <div className="product-img">
                        <a href="/productdetail">
                            {/* <div className="label-offer bg-red">Sale</div> */}
                            <img src={`${product.filename}`} alt="..." />
                        </a>
                    </div>
                    <div className="product-description">
                        <h3><a href="/productdetail" className="productTitle">{product.title}</a></h3>
                        <h4 className="price">
                            <span className="regular-price line-through">₹{product.price + 10}</span>
                            <span className="offer-price">₹{product.price}</span>
                        </h4>
                    </div>
                    <div className="product-buttons">
                        <ul>
                            <li>
                                {favo ?
                                    <span><MDBTooltip tag="span" domElement material placement="top">
                                        <Link className="btn-link" title="Add to wishlist" onClick={() => (offClickFav())}>
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
                                    // <div className="align-center mt-3 pb-2">
                                    //     <button onClick={() => counterDown()} className="pl-2 b1">-</button>
                                    //     <span className="">{count}</span>
                                    //     <button onClick={() => (counterUp(), addToCart(cartItems, product))} className="pr-2 b2">+</button>
                                    // </div> :
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
            </Wrapper>
        </div>

    )
}
export default ProductCard


const Wrapper = styled.div`

.toast-success{
    top: 4em;
    background: rgb(237, 237, 237);
    width: 90%;
    float :right;
    color:rgb(30, 70, 32);
    padding-left: 9%;  
    display: flex;
    font-size: 0.875rem;
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    font-weight: 400;
    line-height: 1.43;
    border-radius: 3px;
    letter-spacing: 0.01071em;
    height: 20% !important;

}

.toast-red{
    top: 4em;
    background: rgb(253, 236, 234);
    width: 90%;
    float :right;
    color:rgb(97, 26, 21);
    padding-left: 9%;  
    display: flex;
    font-size: 0.875rem;
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    font-weight: 400;
    line-height: 1.43;
    border-radius: 3px;
    letter-spacing: 0.01071em;
  
}
.b1{
    border-right: none;
}
.b2{

    border-left: none;
}

@media screen and (max-width: 1199px){
    .md-padding-15px-lr {
        padding-left: 15px !important;
        padding-right: 15px !important;
    }
    h3 {
        margin: 0 0 18px;
        padding: 0;
    }
}
@media screen and (max-width: 991px){
    .sm-margin-35px-bottom {
        margin-bottom: 35px !important;
    }
}
.padding-30px-left {
    padding-left: 30px;
}
.margin-30px-bottom {
    margin-bottom: 30px;
}
.product-grid {
    position: relative;
    overflow: hidden;
    padding: 0px 0px 10px 0px;
    border: 1px solid rgba(0,0,0,0.08);
}
.product-grid .product-img {
    padding: 0 0 0px 0;
}
img {
    max-width: 100%;
    height: auto;
    vertical-align: middle;
    border-style: none;
}
.product-grid .product-description {
    padding: 5px 10px;
    border-top: 1px solid rgba(0,0,0,0.05);
    text-align: center;
}
.product-grid .product-description h3 {
    margin: 0;
    text-decoration: none;
    text-transform: capitalize;
    line-height: 28px;
    font-size: 14px;
    color: #000000;
    font-weight: 500;
}
.product-grid .product-description h3 Link.productTitle {
    color: #000 !important; 
    margin: 0;
    text-decoration: none;
    text-transform: capitalize;
    line-height: 28px;
    font-size: 14px;
    color: #000000;
    font-weight: 500;
}
.productTitle{
    color: #000 !important; 
    margin: 0;
    text-decoration: none;
    text-transform: capitalize;
    line-height: 28px;
    font-size: 15.5px;
    font-weight: 600;
    letter-spacing:0.3px;

}
.product-grid .product-description h3 Link.productTitle:hover {
    color: #E68C45 !important;
}
.product-grid:hover .product-description h3 Link.productTitle {
    color: #E68C45 !important;
}
.product-grid .product-description .price {
    margin-bottom: 0;
    margin: 0 0 5px;
    padding: 0;
    font-size: 13px;
    font-weight: 500;
}
.product-grid .product-description .regular-price {
    color: #808080;
    margin-right: 10px;
    letter-spacing: 1px;
    line-height: 28px;
    font-size: 13px;
}
.product-grid .product-description .offer-price {
    font-size: 13px;
    color: #000000;
    letter-spacing: 1px;
    line-height: 28px;
    font-weight: 600;
    opacity: 0.7;
}
.line-through {
    text-decoration: line-through;
}
.left-align {
    position: absolute;
    left: auto;
    right: 0;
}
.label-offer {
    position: absolute;
    left: 0;
    top: 0;
    height: 25px;
    line-height: 25px;
    display: inline-block;
    padding: 0px 12px;
    color: #fff;
    text-transform: uppercase;
    font-weight: 600;
    font-size: 12px;
    z-index: 1;
}
.bg-theme {
    background-color: #03a9f5;
}
.product-buttons ul {
    text-align: center
}
.product-buttons ul {
    margin-bottom: 0;
}
.product-buttons ul {
    padding-inline-start: 0px !important;
}
.product-buttons ul li {
    display: inline-block;
    margin-right: 5px;
    vertical-align: middle;
}
.product-buttons .btn-link {
    line-height: 38px;
    padding: 0 13px;
    display: block;
    border-radius: 3px;
    border: 1px solid rgba(0,0,0,0.125);
    text-align: center;
    text-decoration: none;
    font-weight: 600;
    font-size: 16px;
    color: #616161 !important;
    outline: 0;
}
.product-buttons .btn-link-sign {
    line-height: 38px;
    padding: 0 8px;
    display: block;
    border-radius: 3px;
    border: 1px solid rgba(0,0,0,0.125);
    text-align: center;
    text-decoration: none;
    font-weight: 300;
    font-size: 14px;
    color: #000 !important;
    background: transparent;
    outline: 0;
}
.product-buttons .btn-link-sign:hover {
    border: 1px solid #E68C45;
    background: #E68C45;
    color: #fff !important;
}
.form-control-number {
    line-height: 38px;
    padding: 0 5px;
    display: block;
    border-radius: 3px;
    border: 1px solid rgba(0,0,0,0.125);
    text-align: center;
    text-decoration: none;
    font-weight: 400;
    font-size: 16px;
    color: #000 !important;
    width: 60px;
}
.product-buttons .btn-link:hover {
    border: 1px solid #E68C45;
    background: #E68C45;
    color: #fff !important;
}
.butn-style2 {
    line-height: 38px;
    padding: 0 13px;
    display: block;
    border-radius: 3px;
    border: 1px solid rgba(0,0,0,0.125);
    text-align: center;
    
    -webkit-text-decoration: none;
    text-decoration: none;
    font-weight: 600;
    font-size: 14px;
    color: #000 !important;
    outline: 0;
    opacity: 0.6;
}
.product-buttons .butn-style2 {
}
.product-buttons .butn-style2:hover {
    color: #fff !important;
    background: #E68C45;
    border-color: #E68C45;
    opacity: 1;
}

.bg-red {
    background-color: #ed1b24;
}
`