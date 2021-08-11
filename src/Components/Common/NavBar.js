
import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { connect } from "react-redux";
import SidebarCart from '../SidebarCart';
import { MDBModal } from 'mdbreact';

class NavBar extends Component {

    state = {
        modal: false
    }


    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    }

    render() {
        const { cartItems } = this.props;
        console.log(cartItems);
        const { wishItems } = this.props;
        return (
            <React.Fragment>
                <NavWrapper>
                    <div className="header-middle">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="header-left col-lg-2 w-auto pl-0 mr-3">
                                    <button className="mobile-menu-toggler active" type="button">
                                        <i className="icon-menu"></i>
                                    </button>
                                    <Link to="/" className="logo">
                                        <img src="\Assets\logo\Popolr.png" alt="Popolr Logo" />
                                    </Link>
                                </div>

                                <div className="header-right w-lg-max">
                                    <div className="header-icon header-search header-search-category header-search-inline w-lg-max hidden-sm hidden-xs">

                                        <div className="tbay-search-form ">
                                            <form >
                                                <div className="form-group">
                                                    <div className="input-group">
                                                        <input type="text" placeholder="I’m searching for..." name="search" className="tbay-search form-control input-sm" />
                                                        <div className="tbay-preloader"></div>
                                                        <div className="button-group input-group-addon">
                                                            <button type="submit" className="button-search btn btn-sm">
                                                                <i className="far fa-search"></i>  Search </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>

                                    {/* <div className="header-contact d-none d-lg-flex pl-1 mr-xl-5 pr-4">
                                    <img alt="phone" src="assets/images/phone.png" width="30" height="30" className="pb-1" />
                                    <h6>Call us now<a href="tel:#" className="text-dark font1">+123 5678 890</a></h6>
                                    </div> */}

                                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#menuOpen" aria-expanded="true">
                                        <i className="fal fa-bars"></i>
                                    </button>
                                    <Link to="wish" className="header-icon wish-link pl-1">
                                        <i className="fal fa-heart"></i>
                                        <span className="cart-count badge-circe fav ">{wishItems.length}</span>
                                    </Link>

                                    <Link onClick={this.toggle} className="header-icon wish-link pl-1 mr-4">
                                        <i className="fal fa-shopping-cart"></i>
                                        <span className="cart-cout badge-circle">{cartItems.length}</span>
                                    </Link>
                                    <MDBModal isOpen={this.state.modal} toggle={this.toggle} fullHeight position="right">
                                        <SidebarCart toggle1={this.toggle} />
                                    </MDBModal>
                                    {/* <div className="dropdown cart-dropdown">
                                        <a href="/#" className="dropdown-toggle dropdown-arrow" role="button" data-toggle="dropdown">
                                            <i className="fal fa-shopping-basket"></i>
                                            <span className="cart-count badge-circle">2</span>
                                        </a>

                                        <div className="dropdown-menu">
                                            <div className="dropdownmenu-wrapper">
                                                <div className="dropdown-cart-header">
                                                    <span>2 Items</span>

                                                    <a href="cart.html" className="float-right">View Cart</a>
                                                </div>

                                                <div className="dropdown-cart-products">
                                                    <div className="product">
                                                        <div className="product-details">
                                                            <h4 className="product-title">
                                                                <a href="product.html">Woman Ring</a>
                                                            </h4>

                                                            <span className="cart-product-info">
                                                                <span className="cart-product-qty">1</span>
                                                                x $99.00
												        </span>
                                                        </div>

                                                        <figure className="product-image-container">
                                                            <a href="product.html" className="product-image">
                                                                <img src="Assets/images/iconimages/product-1.jpg" alt="product" width="80" height="80" />
                                                            </a>
                                                            <a href="/#" className="btn-remove fa fa-times" title="Remove Product"></a>
                                                        </figure>
                                                    </div>

                                                    <div className="product">
                                                        <div className="product-details">
                                                            <h4 className="product-title">
                                                                <a href="product.html">Woman Necklace</a>
                                                            </h4>

                                                            <span className="cart-product-info">
                                                                <span className="cart-product-qty">1</span>
                                                                x $35.00
												        </span>
                                                        </div>

                                                        <figure className="product-image-container">
                                                            <a href="product.html" className="product-image">
                                                                <img src="Assets/images/iconimages/product-2.jpg" alt="product" width="80" height="80" />
                                                            </a>
                                                            <a href="/#" className="btn-remove fa fa-times" title="Remove Product"></a>
                                                        </figure>
                                                    </div>
                                                </div>

                                                <div className="dropdown-cart-total">
                                                    <span>Total</span>

                                                    <span className="cart-total-price float-right">$134.00</span>
                                                </div>

                                                <div className="dropdown-cart-action">
                                                    <a href="checkout-shipping.html" className="btn btn-dark btn-block">Checkout</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <nav className="navbar navbar-expand-samll navbar-dark">
                        <Link to='/' className="nav-link col-xs-2">
                            <h1 > <span className="text-center  shop"><img src="\Assets\logo\Popolr.png" alt="$"></img></span></h1>
                        </Link>
                        <span className="m-auto mr-auto col-xs-1">  <i className="fa fa-map-marker-alt loc fa-lg " aria-hidden="true"></i>
                            <span className="bangalore">&nbsp; Bangalore </span>
                        </span>
                        <input type="search" className=" search ml-auto col-xs-3" id="ser" placeholder="  What Are You Looking For?" />
                        <i className="fa fa-search sicon mr-auto"></i>
                        <span className="  phone-container col-xs-1"><i className="far fa-phone-alt helpimg "></i><span className="phone">&nbsp;1800-000-000</span></span>
                        <Link to="/wish">  <span className=" ml-2 pl-2 col-xs-1"><i className="far fa-heart  fav" aria-hidden="true"></i>
                            <span className="badge badge-danger" id='lblCartCount'> {wishItems.length} </span>&nbsp;</span>
                        </Link>
                        <Link to="/cart"><span className="ml-2 pl-1 col-xs-1"><i className="far fa-shopping-cart fav " aria-hidden="true"></i>
                            <span className="badge badge-danger" id='lblCartCount'> {cartItems.length} </span>&nbsp;</span>
                        </Link>
                        <Link to='/loginnew' className="user mr-auto ml-2 pl-2 col-xs-2" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true"><img src="https://mdbootstrap.com/img/Photos/Avatars/avatar-5.jpg" alt="$" className="rounded-circle userimg"
                        /></Link>
                        <div className="dropdown-menu " aria-labelledby="navbarDropdownMenuLink">
                            <a className="dropdown-item" href="/login">Login</a>
                            <a className="dropdown-item" onClick={this.toggle}>Sign Up</a>
                            <a className="dropdown-item" >Close</a>
                        </div>
                    </nav> */}
                </NavWrapper>

            </React.Fragment >

        )
    }
}
const mapStateToProps = (state) => ({
    cartItems: state.cart.items,
    wishItems: state.wish.items
});

export default connect(mapStateToProps, [])(NavBar);

const NavWrapper = styled.nav`

.fa-search{
    margin-bottom: -0.1em; 
}
.header-middle {
    padding-top: 1rem;
    padding-bottom: 1rem;
    color: #000;
    background: #fff;
    padding-left: 25px;
    padding-right: 25px;
    -webkit-box-shadow: 0px 10px 30px 0px rgba(82, 63, 105, 0.08);
    box-shadow: 0px 10px 30px 0px rgba(82, 63, 105, 0.08);
}
.header-icon.login-link svg, .header-icon.wish-link svg {
    font-size: 24px;
    color: #000;
    opacity: 1;
}
.header-icon.login-link:hover svg, .header-icon.wish-link:hover svg  {
    color: #E68C45;
    opacity: 1;
}
.header-left, .header-center, .header-right {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: center;
    align-items: center;
}
.mobile-menu-toggler {
    border: 0;
    background: transparent;
    color: #000;
    padding: 1rem .5rem;
    margin-right: .5rem;
    font-size: 20px;
    line-height: 0;
    cursor: pointer;
}
.header-search-wrapper {
    box-shadow: 0 1px 1px rgba(0,0,0,0.15);
}
.header-search-wrapper {
    display: flex;
    display: -ms-flexbox;
    position: absolute;
    right: -2.3rem;
    z-index: 999;
    margin-top: 10px;
    color: #8d8d8d;
    box-sizing: content-box;
    height: 40px;
    border-radius: 0px;
    border: 1.4px solid #dddddd;
}
.header-search:not(.show) .header-search-wrapper {
    display: none;
}
[type=search] {
    outline-offset: -2px;
    -webkit-appearance: none;
}
.select-custom select {
    -webkit-appearance: none;
    -moz-appearance: none;
    -ms-appearance: none;
    position: relative;
    z-index: 1;
    background: transparent;
}
.header-search .form-control, .header-search select {
    margin: 0;
    border: 0;
    color: inherit;
    font-size: 14px;
    height: 100%;
    box-shadow: none;
    transition: all .3s;
    font-weight: 400;
    line-height: 1.5;
    display: block;
    width: 100%;
}
.header-search .form-control, .header-search .select-custom {
    background: #fff;
    outline: 0;
    border: 1.4px solid #dddddd;
}
.header-search-category .form-control {
    border-radius: 0px 0 0 0px;
}
.header-search-inline .form-control {
    min-width: 21rem;
    padding: 1rem 1rem;
    font-size: 14px;
}
.select-custom {
    position: relative;
}
.header-search-wrapper .select-custom {
    margin: 0;
    min-width: 13rem;
    flex: 0 0 13rem;
}
.header-search-wrapper select {
    width: 100%;
    border-left: 1px solid #fff;
    padding-left: 1rem;
    padding-right: 1.7rem;
    line-height: 36px;
    color: inherit;
    -moz-appearance: none;
    -webkit-appearance: none;
    outline: 0;
}
.select-custom:after {
    display: inline-block;
    position: absolute;
    top: 50%;
    right: 1.9rem;
    transform: translateY(-50%);
    font-family: 'FontAwesome';
    font-size: 1.5rem;
    content: "\f107";
}
.header-search-wrapper .select-custom:after {
    font-size: 14px;
    line-height: 0;
    right: 1.7rem;
}
.header-search-category .btn {
    border-radius: 0 4px 4px 0;
}
.header-search-wrapper .btn {
    position: relative;
    padding: 0 0 3px 0;
    border-left: 0px solid #dddddd;
    border-top: 1.4px solid #dddddd;
    border-right: 1.4px solid #dddddd;
    border-bottom: 1.4px solid #dddddd;
    min-width: 45px;
    color: #000;
    background: #fff;
    box-shadow: none;
    margin: 0px;
}
.header-search-wrapper .btn svg {
    font-size: 20px;
    height: 2em;
    opacity: 1;
    color: #000;
}
.header-search-wrapper:after {
    display: block;
    clear: both;
    content: '';
}
.header-contact {
    align-items: center;
    text-transform: uppercase;
}
.pb-1, .py-1 {
    padding-bottom: .25rem!important;
}
.header-contact img {
    margin-right: .8rem;
}
.header-contact h6 {
    margin: 0;
    font-size: 1.1rem;
    line-height: 1.3;
    color: #777;
    font-weight: 600;
}
.header-contact a {
    display: block;
    font-size: 1.8rem;
    font-weight: 700;
    white-space: nowrap;
}
.text-dark {
    color: #000 !important;
}
.header-icon:not(:last-child) {
    margin-right: 2.2rem;
}
.header-middle a.header-icon {
    padding-bottom: 2px;
}
.dropdown-arrow svg {
    font-size: 27px;
    color: #000;
    opacity: 1;
}
.dropdown-arrow:hover svg {
    color: #E68C45;
    opacity: 1;
}
.dropdown-arrow .badge-circle {
    top: -18px;
    left: 19px;
}
// .badge-circle {
//     position: absolute;
//     top: 1px;
//     right: 0;
//     width: 25px;
//     height: 25px;
//     border-radius: 50%;
//     color: #fff;
//     background: #E68C45;
//     font-weight: 600;
//     font-size: 13px;
//     line-height: 25px;
//     text-align: center;
// }
.header-icon .badge-circle {
    font-size: 12px;
    color: #fff;
    background: #E68C45;
    position: absolute;
    width: 20px;
    height: 20px;
    margin-top: -1.1em;
    margin-left: -0.45em;
    text-align: center;
    font-weight: 600;
    padding-top: 0.5px;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    -ms-border-radius: 50%;
    border-radius: 50%;
}
.header-icon .fav{
    font-size: 12px;
    color: #fff;
    background: #E68C45;
    position: absolute;
    width: 20px;
    height: 20px;
    margin-top: -1.0em;
    margin-left: -0.4em;
    text-align: center;
    font-weight: 600;
    padding-top: 0.5px;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    -ms-border-radius: 50%;
    border-radius: 50%;

}
.dropdown, .dropleft, .dropright, .dropup {
    position: relative;
}
.dropdown-toggle i {
    font-size: 2.8rem;
}

// .dropdown-arrow .badge-circle {
//     font-size: 12px;
//     color: #fff;
//     background: #5677fc;
//     position: absolute;
//     width: 20px;
//     height: 20px;
//     bottom: -12px;
//     right: -8px;
//     text-align: center;
//     font-weight: 600;
//     padding-top: 1px;
//     -webkit-border-radius: 50%;
//     -moz-border-radius: 50%;
//     -ms-border-radius: 50%;
//     border-radius: 50%;
// }
// .dropdown-arrow:after {
//     border: 0;
//     margin: -5px 2px 0 11px;
//     font-size: 15px;
//     width: auto;
//     height: auto;
//     display: inline-block;
//     vertical-align: .255em;
//     font-family: 'FontAwesome';
//     font-size: 1.5rem;
//     content: "\f107";
// }
.dropdown-toggle.dropdown-arrow::after {
    margin-left: 1.255em;
    color: #000;
    opacity: 1;
}
.dropdown-toggle.dropdown-arrow:hover::after {
    color: #007bff;
    opacity: 1;
}
.cart-dropdown .dropdown-menu, .compare-dropdown .dropdown-menu {
    display: block;
    left: 0;
    top: -999rem;
    width: 300px;
    padding-top: 10px;
    z-index: 100;
    font-size: 1.1rem;
    color: #696969;
    border: 0;
    margin: 0;
    background-color: transparent;
    box-shadow: none;
    visibility: hidden;
    opacity: 0;
    transition: opacity .2s;
}
.cart-dropdown .dropdown-menu {
    right: 0;
    left: auto;
    padding-top: 8px;
}
.cart-dropdown .dropdown-menu.show, .compare-dropdown .dropdown-menu.show {
    opacity: 1;
    visibility: visible;
}
.cart-dropdown .dropdown-menu:before {
    content: '';
    position: absolute;
    top: -12px;
    right: 28px;
    border: 10px solid;
    border-color: transparent transparent #fff;
}
.dropdownmenu-wrapper {
    position: relative;
    background-color: #fff;
    padding: 0.5rem 0.7rem .5rem;
    box-shadow: 0 5px 8px rgba(0,0,0,0.15);
}
.dropdown-cart-header, .dropdown-cart-total {
    padding: .1rem 1rem;
    color: #474747;
    font-weight: 700;
    line-height: 30px;
    text-transform: uppercase;
}
.dropdown-cart-header {
    border-bottom: 1px solid #e6ebee;
    color: #696969;
    font-size: 13px;
}
.dropdown-cart-header a {
    color: #474747;
}
.float-right {
    float: right!important;
}
.cart-dropdown:hover .dropdown-menu, .compare-dropdown:hover .dropdown-menu {
    top: 100%;
    opacity: 1;
    visibility: visible;
}
.cart-dropdown .product {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: center;
    align-items: center;
    margin: 0 !important;
    padding: 1rem 1rem;
    border-bottom: 1px solid #e6ebee;
    box-shadow: none !important;
}
.cart-dropdown .product-details {
    font-size: 14px;
}
.cart-dropdown .product-title {
    padding-right: 1.5rem;
    margin-bottom: 8px;
    font-size: 14px;
    line-height: 19px;
}
.cart-dropdown .product-title a {
    color: #696969;
}
.cart-dropdown .product-image-container {
    position: relative;
    max-width: 85px;
    margin: 0;
    margin-left: auto;
    border: 1px solid #ededed;
}
.cart-dropdown .product-image-container img {
    object-fit: none;
}
.cart-dropdown .btn-remove {
    position: absolute;
    top: -9px;
    right: -3px;
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    color: inherit;
    background-color: #fff;
    box-shadow: 0 2px 6px rgba(0,0,0,0.5);
    text-align: center;
    line-height: 2rem;
    text-decoration: none;
}
.dropdown-cart-total {
    margin-bottom: 1.1rem;
    font-size: 1.4rem;
}
.dropdown-cart-total .cart-total-price {
    margin-left: auto;
    font-size: 1.5rem;
}
.dropdown-cart-action {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: center;
    align-items: center;
    -ms-flex-pack: justify;
    justify-content: space-between;
    padding: .2rem 1rem 1.5rem;
}
.dropdown-cart-action .btn {
    padding: 1.4rem 2.5rem;
    border-radius: .2rem;
    color: #fff;
    font-size: 1.2rem;
    font-weight: 400;
    letter-spacing: .025em;
}
@media (min-width: 1200px) {
    .mr-xl-5, .mx-xl-5 {
        margin-right: 3rem!important;
    }
}
.header-icon i {
    font-size: 2.7rem;
}
.header-left a {
    color: inherit;
}
.logo {
    max-width: 120px;
}
.logo img {
    width: 100px;
}
.header-right {
    margin-left: auto;
}
.header-search {
    position: relative;
}
.header-search form {
    margin: 0;
}
.navbar-toggle {
    display: none;
}
@media (max-width: 992px) {
    .navbar-toggle {
        display: block !important;
        position: relative;
        float: right;
        margin-right: 15px;
        padding: 0px 10px;
        margin-top: 8px;
        margin-bottom: 8px;
        background-color: transparent;
        background-image: none;
        border: 1px solid transparent;
        border-radius: 4px;
        outline: 0;
    }
    .navbar-toggle:hover svg {
        color: #E68C45;
    }
    .navbar-toggle svg {
        font-size: 24px;
    }
}
@media (min-width: 992px) {
    .mobile-menu-toggler {
        display: none;
    }
    .w-lg-max {
        flex: 1;
        -ms-flex: 1;
        max-width: 100%;
    }
    .pr-lg-4, .px-lg-4 {
        padding-right: 1.5rem!important;
    }
    .mr-lg-5, .mx-lg-5 {
        margin-right: 3rem!important;
    }
    .header-search-inline .search-toggle, .header-search-inline .btn:after {
        display: none;
    }
    .header-search-inline.header-search .header-search-wrapper {
        display: flex;
        display: -ms-flex;
        position: static;
        margin: 0;
        border-width: 0;
    }
    .header-middle .header-search-inline .header-search-wrapper {
        box-shadow: none;
    }
}

.tbay-search-form {
    background-color: #fff;
    border: solid 1px #eee;
    margin: 0 auto;
    border-radius: 1px;
    -webkit-border-radius: 1px;
    -moz-border-radius: 1px;
    -ms-border-radius: 1px;
    -o-border-radius: 1px;
    -webkit-transition: all .3s ease;
    -o-transition: all .3s ease;
    transition: all .3s ease;
    z-index: 10;
}
.tbay-search-form .form-group {
    margin-bottom: 0;
}
.input-group {
    position: relative;
    display: table;
    border-collapse: separate;
}
.tbay-search-form .tbay-search, .tbay-search-form .input-group .tbay-search.form-control {
    padding-left: 20px;
    background-color: transparent;
    border: 0;
    height: 44px;
    font-size: 14px;
    display: table-cell;
    position: relative;
    z-index: 2;
    float: left;
    width: 100%;
    margin-bottom: 0;
    line-height: 1.5;
    border-radius: 0;
    border-bottom-right-radius: 0;
    border-top-right-radius: 0;
}
.tbay-preloader {
    cursor: pointer;
    height: 100%;
    position: absolute;
    right: 106px;
    top: 0;
    width: 40px;
    z-index: 1;
    background-repeat: no-repeat;
    background-position: right 15px center;
    background-size: auto 44%;
}
.tbay-search-form .button-group {
    padding-left: 0;
    padding-right: 0;
    padding: 0;
    border: 0;
    background-color: transparent;
    border-radius: 0 8px 8px 0!important;
    overflow: hidden!important;
    font-size: 14px;
    font-weight: 400;
    line-height: 1;
    color: #555;
    text-align: center;
    width: 1%;
    white-space: nowrap;
    vertical-align: middle;
    display: table-cell;
}
.tbay-search-form .button-search {
    font-size: 13px!important;
    text-transform: uppercase;
    font-weight: 700;
    letter-spacing: 0;
    color: #fff;
    background-color: #E68C45;
    border-radius: 5px;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    -ms-border-radius: 5px;
    -o-border-radius: 5px;
    width: 110px !important;
    height: 39px!important;
    padding: 0 10px!important;
    border: 1px solid #E68C45!important;
    margin: 0 4px 0;
    line-height: 1.5;
}
.tbay-search-form .button-search i {
    font-size: 14px;
    margin-right: 5px;
    margin-left: 0;
}
.tbay-search-form .button-search svg {
    font-size: 14px;
    margin-right: 5px;
    margin-left: 0;
    color: #fff;
}
@media (max-width: 1200px) and (min-width: 992px) {
    .header-v1 .tbay-search-form {
        margin-left: 40px;
        margin-right: 0;
    }
}





// background-color: white;
// font-family: 'Source Sans Pro', sans-serif;
// color: #55688C;
// .navbar {
//     box-shadow: none !important;
// }
// .sc-fzoLsD.klNcYP .kUFTZQ .navbar {
//     box-shadow: 0 2px 5px 0 rgba(0,0,0,0.16), 0 2px 10px 0 rgba(0,0,0,0.12);
// }
// .dropdown-menu {
//     margin-left: 85vw !important;
//     float: right !important;
// }
// .fav{
//     font-size:1.4em;
//     color:#55688C;
// }
// a:hover {
// text-decoration: none;
// }
  
//   a:active {
//     text-decoration: none;
//   }
  
// .fav: hover{
//     text-decoration:none !important;

// }
// img{
//     margin-top: 5px;
//     height: 46px;
//     width:130px;
//     text-shadow: black;
// }
// #lblCartCount {
//     font-size: 14px;
//     background: #E68C46;
//     color: #fff;
//     padding: 1px 5px;
//     vertical-align: top;
//     margin-left: -1.3px;
// }
// .loc{
//     color:#E68C45;
// }
// .bangalore{
//     font-size: 18.5px;
//     font-weight:600;
//     z-index:1;
// }
// .phone{
//     font-size: 18.5px;
//     font-weight:600;

// }
// .helpimg{
//     color:#E68C45;
//     margin-botton: -10px;
//     font-size:1.3em;

// }
// .badge {
//     padding-left: 9px;
//     padding-right: 9px;
//     margin-top:-8px;
//     -webkit-border-radius: 9px;
//     -moz-border-radius: 9px;
//     border-radius: 4px;
//   }
//     .userimg{
//         height:2.8em;
//         width:3em;
//     }
//     .search{
//         border-radius: 0.5rem;
//         border: 2px solid white; 
//         font-size:1vw;
//         line-height:2.9;
//         width: 40%;
//         z-index:2;
//         color: #55688C;
//         background-color: rgba(136, 134, 134, 0.106); 
//     }
//    .search:focus{
//        outline: none;
//     box-shadow: none;
//     }
//     .sicon{
//         margin-top:0.15vw;
//         margin-left: -2vw;
//         z-index:10;
//         color: grey;
//     }
//     .search:active{
//         z-index: 21;
//     }
// 	.cart: hover{
// 		transition: all .5s ease-in-out;
//     }
//     .nav2{
//         allign: center;
//     }
    
// @media only screen and (min-width: 1210px){
//     .search{
//         margin-left:-1vw !important;
//     } 
//     .userimg{
//         margin-top:-0.4vw;
//     }
    
// }


// @media only screen and (min-width: 1000px) and (max-width: 1210px) {
// .phone{
//     display:none;
// }
// .phone-container{
//     margin-top: -1px;
// }
// .bangalore{
//     font-size: 15px !important;
//     font-weight: 500;
// }
// .search{
//     margin-left: -1em !important;
// }

// }

// @media only screen  and (max-width: 1000px) {
//     .phone{
//         display:none;
//     }
//     .phone-container{
//         margin-top: -1px;
//     }
//     .bangalore{
//         font-size: 14px !important;
//         font-weight: 400;
//     }
//     .search{
//         margin-left: -1em !important;
//     }
//     i{
//         font-size: 0.4em !important;
//     }
//     .shop{
//         height: 36px !important;
//         width:120px !important;
//     }
// }

// @media only screen and (min-width: 750px) and (max-width: 880px) {
  
//     .search{
//         width: 30% !important;
//     }
//     .bangalore{
//         font-size: 10px !important;
//         font-weight: 300;
//     }
//     .loc{
//         font-size: 0.9em;
//     }
//     img{  height: 36px !important;
//         width:90px !important;
//     }
//     .phone{
//         font-size: 0.8em !important;
//     }
//     .fav{
//         font-size:0.8em;
//     }
//     .sicon{
//         margin-left:-2.89vw !important;
//     } .userimg{
//         height:2.8em;
//         width:2.4em !important;
//         margin-top:-0.4vw;
//     }

//     }

    
// @media only screen and (max-width: 760px){
//     .bangalore{
//         display: none !important;
//     }
//     .loc{
//         display: none !important;

//     }
//     .search{
//         height: 6.5em;
//         width: 40%;
//     }
//     img{
//         margin-left:-1em;
//         width: 1.9em;
//         height: 0.9em;
//     }
//     .sicon{
//         font-size:1.3em;
//         margin-left:-1.5em;
//         margin-right:2em;
//     }
//     .helpimg{
//         margin-left:1.5em;
//     }
//     .fav{
//         font-size:1.3em;
//     }
//     ::placeholder {
//         font-size: 30px !important;
//     }
//     input::-webkit-input-placeholder{
//         font-size: 11px !important;
//     }
//     input:-moz-placeholder {
//         font-size: 30px !important;
//     }

//     .userimg{
//         margin-top:-0.1em;
//         margin-left: 0.2em;
//         width: 2.4em;
//         height: 2.4em;
//     }
// }

//     .login-modal-main.modal-dialog .modal-content {
//         border-radius: .3rem !important;
//     }
`
