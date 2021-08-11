import React, { Component } from 'react'
import styled from 'styled-components';
import { MDBTabPane, MDBTabContent, MDBNav, MDBNavItem, MDBNavLink } from "mdbreact";
import RelatedProducts2 from './RelatedProducts2';
import ImageGallery from 'react-image-gallery';
import TopBar from './Common/TopBar';
import NavBar from './Common/NavBar';
import Breadcrumb from './Common/Breadcrumb';
import Footer2 from './Common/Footer2';


const images = [
    {
        original: 'https://demo.thembay.com/greenmart/wp-content/uploads/2016/05/product-013.jpg',
        thumbnail: 'https://demo.thembay.com/greenmart/wp-content/uploads/2016/05/product-013-160x130.jpg',
    },
    {
        original: 'https://demo.thembay.com/greenmart/wp-content/uploads/2016/05/product-012.jpg',
        thumbnail: 'https://demo.thembay.com/greenmart/wp-content/uploads/2016/05/product-012-160x130.jpg',
    },
    {
        original: 'https://demo.thembay.com/greenmart/wp-content/uploads/2016/05/product-014.jpg',
        thumbnail: 'https://demo.thembay.com/greenmart/wp-content/uploads/2016/05/product-014-160x130.jpg',
    },
    {
        original: 'https://demo.thembay.com/greenmart/wp-content/uploads/2016/05/product-015.jpg',
        thumbnail: 'https://demo.thembay.com/greenmart/wp-content/uploads/2016/05/product-015-160x130.jpg',
    },
];
export default class ProductDetail extends Component {
    componentWillMount() {

        window.scrollTo(0, 0)
    }
    state = {
        activeItem: "1"
    };

    toggle = tab => e => {
        if (this.state.activeItem !== tab) {
            this.setState({
                activeItem: tab
            });
        }
    };

    renderLeftNav = (onClick, disabled) => {
        return (
            <button
                className="image-gallery-custom-left-nav"
                disabled={disabled}
                onClick={onClick} ><i className="far fa-angle-left"></i></button>
        )
    }
    renderRightNav(onClick, disabled) {
        return (
            <button
                className='image-gallery-custom-right-nav'
                disabled={disabled}
                onClick={onClick} ><i className="far fa-angle-right"></i></button>
        )
    }
    render() {
        return (
            <React.Fragment>
                <TopBar />
                <NavBar />

                <ProductDetailWrap>
                    <Breadcrumb />
                    {/* <SidebarCart /> */}
                    <section className="main-content container-fluid">
                        <div className="row">
                            <div className="col-xs-12 col-lg-12">
                                <div className="content-area">
                                    <main id="main" className="site-main woocommerce">
                                        <div id="content" className="singular-shop site-content" role="main">
                                            <div className="productBlock type-product product-type-variable">
                                                <div className="row">
                                                    <div className="image-mains">
                                                        <div className="images ">
                                                            <ImageGallery items={images} showPlayButton={false} thumbnailPosition="bottom" showFullscreenButton={false} renderLeftNav={this.renderLeftNav} renderRightNav={this.renderRightNav} />
                                                        </div>
                                                    </div>
                                                    <div className="information ">
                                                        <div className="summary entry-summary  has-buy-now">
                                                            <h1 className="product_title entry-title">Tesco Clementine</h1>


                                                            <div className="woocommerce-product-rating">
                                                                <div className="star-rating" role="img" aria-label="Rated 4.13 out of 5">
                                                                    <span>
                                                                        Rated
                                                                        <strong className="rating">4.13</strong>
                                                                        out of 5 based on
                                                                        <span className="rating">8</span>
                                                                        customer ratings
                                                                    </span>
                                                                </div>
                                                                <a href="#reviews" className="woocommerce-review-link" rel="nofollow">
                                                                    (<span className="count">8</span> customer reviews)
                                                                </a>
                                                                {/* <span className="rate-sold">
                                                                    <span className="count">367</span>
                                                                    <span className="sold-text">sold</span>
                                                                </span> */}
                                                            </div>
                                                            {/* <p className="price">
                                                                <span className="woocommerce-Price-amount amount">
                                                                    <span className="woocommerce-Price-currencySymbol">
                                                                        ₹
                                                                    </span>
                                                                    30.00
                                                                </span>
                                                                &nbsp;&nbsp;

                                                            </p> */}

                                                            <div className="product_meta ">
                                                                {/* <span className="sku_wrapper">SKU:&nbsp;
                                                                    <span className="sku">N/A</span>
                                                                </span> */}
                                                                <span className="posted_in">
                                                                    Categories:&nbsp;
                                                                    <a href="/#" rel="tag" >Butter &amp; Eggs</a>,&nbsp;
                                                                    <a href="/#" rel="tag" >Fruits</a>,&nbsp;
                                                                    <a href="/#" rel="tag" >Vegetables</a>
                                                                </span>

                                                                <span className="yith-wcbr-brands">
                                                                    Brand:&nbsp;
                                                                    <span itemProp="brand">
                                                                        <a href="/#" rel="tag">Big C</a>
                                                                    </span>
                                                                </span>
                                                               {/* <span className="yith-wcbr-brands-logo">
                                                                </span> <span className="tagged_as">
                                                                    Tags:&nbsp;
                                                                    <a href="/#" rel="tag">organic food</a>,&nbsp;
                                                                    <a href="" rel="tag">organic shop</a>,&nbsp;
                                                                    <a href="" rel="tag">organic theme</a>
                                                                </span> */}
                                                            </div>
                                                            <form className="variations_form cart">
                                                                <table className="variations" cellSpacing="0">
                                                                    <tbody>
                                                                        <tr>
                                                                            <td className="mr-2">
                                                                                <label htmlFor="pa_kg">Units</label>
                                                                            </td>
                                                                            <td className="value woo-variation-items-wrapper">
                                                                                {/* <select id="pa_kg" className=" hide woo-variation-raw-select woo-variation-raw-type-button" name="attribute_pa_kg" data-show_option_none="yes">
                                                                                    <option value="">Choose an option</option>
                                                                                    <option value="0-5-kg" className="attached enabled">0.5 Kg</option>
                                                                                    <option value="1-kg" className="attached enabled">1 Kg</option>
                                                                                    <option value="2-kg" className="attached enabled">2 Kg</option>
                                                                                    <option value="5-kg" className="attached enabled">5 Kg</option>
                                                                                    <option value="10-kg" className="attached enabled">10 Kg</option>
                                                                                </select> */}
                                                                                <ul className="variable-items-wrapper button-variable-wrapper">
                                                                                    <li data-wvstooltip="0.5 Kg" tabIndex="2" className="variable-item button-variable-item button-variable-item-0-5-kg selected" title="0.5 Kg" data-value="0-5-kg" role="button"><span className="variable-item-span variable-item-span-button">0.5 Kg</span>
                                                                                    </li>
                                                                                    <li data-wvstooltip="1 Kg" tabIndex="2" className="variable-item button-variable-item button-variable-item-1-kg" title="1 Kg" data-value="1-kg" role="button"><span className="variable-item-span variable-item-span-button">1 Kg</span>
                                                                                    </li>
                                                                                    <li data-wvstooltip="2 Kg" tabIndex="2" className="variable-item button-variable-item button-variable-item-2-kg" title="2 Kg" data-value="2-kg" role="button"><span className="variable-item-span variable-item-span-button">2 Kg</span>
                                                                                    </li>
                                                                                    <li data-wvstooltip="5 Kg" tabIndex="2" className="variable-item button-variable-item button-variable-item-5-kg" title="5 Kg" data-value="5-kg" role="button"><span className="variable-item-span variable-item-span-button">5 Kg</span>
                                                                                    </li>
                                                                                    <li data-wvstooltip="10 Kg" tabIndex="2" className="variable-item button-variable-item button-variable-item-10-kg" title="10 Kg" data-value="10-kg" role="button"><span className="variable-item-span variable-item-span-button">10 Kg</span>
                                                                                    </li>
                                                                                </ul><a className="reset_variations" href="/#" >Clear</a>
                                                                            </td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                                <div className="single_variation_wrap">
                                                                    <div className="woocommerce-variation single_variation">
                                                                        <div className="woocommerce-variation-description"></div>
                                                                        <div className="woocommerce-variation-price">
                                                                            <span className="price">
                                                                                <del>
                                                                                    <span className="woocommerce-Price-amount amount">
                                                                                        <span className="woocommerce-Price-currencySymbol">₹</span>
                                                                                        120.00
                                                                                    </span>
                                                                                </del>
                                                                                <ins>
                                                                                    <span className="woocommerce-Price-amount amount">
                                                                                        <span className="woocommerce-Price-currencySymbol">₹</span>
                                                                                        110.00
                                                                                    </span>
                                                                                </ins>
                                                                            </span>
                                                                        </div>
                                                                        <div className="woocommerce-variation-availability"></div>
                                                                    </div>
                                                                    <div className="woocommerce-variation-add-to-cart variations_button woocommerce-variation-add-to-cart-enabled">
                                                                        <div className="box-quantity">
                                                                            <span className="title-qty">Quantity</span>
                                                                            <div className="quantity">
                                                                                <label className="screen-reader-text" htmlFor="quantity_5f18f5e35e187">Quantity</label>
                                                                                <input className="minus" type="button" value="-     " />
                                                                                <input type="number" id="quantity_5f18f5e35e187" className="input-text qty text" data-step="1" data-min="1" data-max="" name="quantity" value="1" title="Qty" size="4" data-inputmode="numeric" min="1" max="10" />
                                                                                <input className="plus" type="button" value="+" />
                                                                            </div>
                                                                        </div>

                                                                        <button type="submit" className="single_add_to_cart_button button alt">
                                                                            <i className="fas fa-cart-plus"></i>
                                                                            Add to cart
                                                                        </button>
                                                                        <button className="tbay-buy-now button">
                                                                            <i className="fas fa-shopping-cart"></i>
                                                                            Buy Now
                                                                        </button>
                                                                        <div className="yith-wcwl-add-to-wishlist   wishlist-fragment on-first-load add-to-wishlist-2363 ">
                                                                            <div className="yith-wcwl-add-button">
                                                                                <a href="/#" className="add_to_wishlist single_add_to_wishlist">
                                                                                    <span>
                                                                                        <i className="fas fa-heart"></i>
                                                                                    </span>
                                                                                </a>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </form>
                                                            <div className="woocommerce-product-details__short-description ">
                                                                <h5><strong className="desc text-black bold">Description</strong></h5>
                                                                <p>
                                                                    Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                                                                    Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu
                                                                    libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.
                                                                </p>
                                                            </div>

                                                            {/* <a href="/#" className="compare button" rel="nofollow">
                                                                <i className="fas fa-sync"></i>
                                                                Compare
                                                            </a> */}

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </main>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* <div className="tbay-ywfbt-wrapper">
                        <div className="container-fluid">
                            <div className="yith-wfbt-section woocommerce">
                                <h3>Frequently Bought Together</h3>
                                <form className="yith-wfbt-form">
                                    <table className="yith-wfbt-images">
                                        <tbody>
                                            <tr>
                                                <td className="image-td">
                                                    <a href="/#" className="">
                                                        <img src="https://demo.thembay.com/greenmart/wp-content/uploads/2016/05/product-013-107x87.jpg" />
                                                    </a>
                                                </td>
                                                <td className="image_plus image_plus_1" data-rel="offeringID_1">+</td>
                                                <td className="image-td">
                                                    <a href="/#" className="">
                                                        <img src="https://demo.thembay.com/greenmart/wp-content/uploads/2017/08/product-30-107x87.jpg" />
                                                    </a>
                                                </td>
                                                <td className="image_plus image_plus_2" data-rel="offeringID_2">+</td>
                                                <td className="image-td">
                                                    <a href="/#" className="">
                                                        <img src="https://demo.thembay.com/greenmart/wp-content/uploads/2017/08/product-26-107x87.jpg" />
                                                    </a>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <div className="yith-wfbt-submit-block">
                                        <div className="price_text">
                                            <span className="total_price_label">
                                                Price for all three:
                                        </span>
                                            &nbsp;
                                        <span className="total_price">
                                                <del>
                                                    <span className="woocommerce-Price-amount amount">
                                                        <span className="woocommerce-Price-currencySymbol">₹</span>
                                                        1,039.00
                                                </span>
                                                </del>
                                                &nbsp;
                                            <ins>
                                                    <span className="woocommerce-Price-amount amount">
                                                        <span className="woocommerce-Price-currencySymbol">₹</span>
                                                        935.10
                                                </span>
                                                </ins>
                                            </span>
                                        </div>
                                        <input type="submit" className="yith-wfbt-submit-button button" value="Add all three to Cart" />
                                    </div>
                                    <ul className="yith-wfbt-items">
                                        <li className="yith-wfbt-item">
                                            <label htmlFor="offeringID_0">
                                                <input type="checkbox" name="offeringID[]" id="offeringID_0" className="active" value="2364" checked="checked" />
                                                <span className="product-name">
                                                    This Product: Tesco Clementine Kg: 1 Kg
                                            </span>
                                                &nbsp;-&nbsp;
                                            <span className="price">
                                                    <span className="woocommerce-Price-amount amount">
                                                        <span className="woocommerce-Price-currencySymbol">₹</span>
                                                        60.00
                                                </span>
                                                </span>
                                            </label>
                                        </li>
                                        <li className="yith-wfbt-item">
                                            <label htmlFor="offeringID_1">
                                                <input type="checkbox" name="offeringID[]" id="offeringID_1" className="active" value="87" checked="checked" />
                                                <a href="/#">
                                                    <span className="product-name">
                                                        Zest Jackfruit
                                                    </span>
                                                </a>
                                                &nbsp;- &nbsp;
                                            <span className="price">
                                                    <span className="woocommerce-Price-amount amount">
                                                        <span className="woocommerce-Price-currencySymbol">₹</span>
                                                        799.00
                                                </span>
                                                </span>
                                            </label>
                                        </li>
                                        <li className="yith-wfbt-item">
                                            <label htmlFor="offeringID_2">
                                                <input type="checkbox" name="offeringID[]" id="offeringID_2" className="active" value="90" checked="checked" />
                                                <a href="/#">
                                                    <span className="product-name">
                                                        Tesco  peach
                                                    </span>
                                                </a>
                                                &nbsp;- &nbsp;
                                                <span className="price">
                                                    <del>
                                                        <span className="woocommerce-Price-amount amount">
                                                            <span className="woocommerce-Price-currencySymbol">₹</span>
                                                            200.00
                                                    </span>
                                                    </del>
                                                    <ins>
                                                        <span className="woocommerce-Price-amount amount">
                                                            <span className="woocommerce-Price-currencySymbol">₹</span>
                                                            180.00
                                                    </span>
                                                    </ins>
                                                </span>
                                            </label>
                                        </li>
                                    </ul>
                                </form>
                            </div>
                        </div>
                    </div> */}

                    <div className="product-collateral container-fluid bounceInUp">
                        <div className="add_info">

                            <div className="woocommerce-tabs">
                                <MDBNav className="nav-tabs">
                                    <MDBNavItem>
                                        <MDBNavLink link to="#" active={this.state.activeItem === "2"} onClick={this.toggle("2")} role="tab" >
                                            <h5>Reviews</h5>
                                        </MDBNavLink>
                                    </MDBNavItem>
                                    <MDBNavItem>
                                        <MDBNavLink link to="#" active={this.state.activeItem === "2"} onClick={this.toggle("1")} role="tab" >
                                            {/* Description */}
                                        </MDBNavLink>
                                    </MDBNavItem>
                                </MDBNav>
                                <MDBTabContent activeItem={this.state.activeItem} >
                                    {/* <div className="tabs">
                                    <ul className="tabs nav nav-tabs product-tabs" id="product-detail-tab">
                                        <li className="description_tab">
                                            <a href="#tab-description">Description</a>
                                        </li>
                                        <li className="reviews_tab active">
                                            <a href="#tab-reviews">Reviews (2)</a>
                                        </li>
                                    </ul>
                                </div> */}
                                    <MDBTabPane tabId="2" role="tabpanel">
                                        <div className="panel entry-content" id="tab-description">
                                            {/* <h2>Product Description</h2> */}
                                            <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
                                        </div>
                                    </MDBTabPane>
                                    <MDBTabPane tabId="1" role="tabpanel" className="justify-content-center ">
                                        <div className="panel-review" role="tabpanel" aria-labelledby="heading-2" aria-expanded="true">
                                            <div className="entry-content">
                                                <div id="reviews" className="widget-primary widget-reviews justify-content-center">
                                                    <div className="comments-content">
                                                        <div className="reviews-summary">
                                                            <div className="row">
                                                                <div className="col-lg-12 col-md-12 col-sm-12 media reviews-col1">
                                                                    <h5>Customer reviews</h5>
                                                                    <div className="review-summary-total pull-left">
                                                                        <div className="review-summary-result">	<strong>4.13</strong>
                                                                        </div>8 ratings</div>
                                                                    <div className="media-body">
                                                                        <div className="review-summary-detal ">
                                                                            <div className="review-summery-item row">
                                                                                <div className="col-lg-1"></div>
                                                                                <div className="review-label col-lg-2">5 Star</div>
                                                                                <div className="col-lg-5">
                                                                                    <div className="progress">
                                                                                        <div className="progress-bar progress-bar-success progress-bar-striped progress1" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">38%</div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="review-summery-item row">
                                                                                <div className="col-lg-1"></div>
                                                                                <div className="review-label col-lg-2">4 Star</div>
                                                                                <div className="col-lg-5">
                                                                                    <div className="progress">
                                                                                        <div className="progress-bar progress-bar-success progress-bar-striped progress2" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">38%</div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="review-summery-item row">
                                                                                <div className="col-lg-1"></div>
                                                                                <div className="review-label col-lg-2">3 Star</div>
                                                                                <div className="col-lg-5">
                                                                                    <div className="progress">
                                                                                        <div className="progress-bar progress-bar-success progress-bar-striped progress3" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">25%</div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="review-summery-item row">
                                                                                <div className="col-lg-1"></div>
                                                                                <div className="review-label col-lg-2">2 Star</div>
                                                                                <div className="col-lg-5">
                                                                                    <div className="progress">
                                                                                        <div className="progress-bar progress-bar-success progress-bar-striped progress4" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">0%</div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="review-summery-item row">
                                                                                <div className="col-lg-1"></div>
                                                                                <div className="review-label col-lg-2">1 Star</div>
                                                                                <div className="col-lg-5">
                                                                                    <div className="progress">
                                                                                        <div className="progress-bar progress-bar-success progress-bar-striped progress5" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">0%</div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    {/* <div id="comments" className="comments">
                                                                        <h5>8 reviews for <span>Tesco Clementine</span></h5>
                                                                        <ul className="commentlist list-unstyled">
                                                                            <li className="review byuser comment-author-admin bypostauthor even thread-even depth-1" id="li-comment-48">
                                                                                <div id="comment-48" className="comment_container media">
                                                                                    <div className="tbay-avata pull-left">
                                                                                        <div className="tbay-image">
                                                                                            <img src="https://demo-10aba.kxcdn.com/greenmart/wp-content/uploads/2017/08/client_01-100x100.jpg" data-lazy-type="image" width="60" height="60" alt="Avatar" className="avatar avatar-60wp-user-avatar wp-user-avatar-60 alignnone photo avatar-default lazy-loaded" />
                                                                                        </div>
                                                                                        <div className="tbay-author clear" itemProp="author">admin</div>
                                                                                    </div>
                                                                                    <div className="comment-text media-body">
                                                                                        <p className="meta">
                                                                                            <time itemProp="datePublished" dateTime="2017-09-08T07:40:39+00:00">September 8, 2017</time>
                                                                                        </p>
                                                                                        <div itemProp="reviewRating" itemScope="" itemType="http://schema.org/Rating" className="star-rating clear" title="Rated 5 out of 5">	<span><strong itemProp="ratingValue">5</strong> out of 5</span>
                                                                                        </div>
                                                                                        <div itemProp="description" className="description clear">
                                                                                            <p>Best theme good luckey</p>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </li>
                                                                            <li className="review odd alt thread-odd thread-alt depth-1" id="li-comment-306">
                                                                                <div id="comment-306" className="comment_container media">
                                                                                    <div className="tbay-avata pull-left">
                                                                                        <div className="tbay-image">
                                                                                            <img src="https://secure.gravatar.com/avatar/70b03db954aa45fc2559e85f5d5bd13e?s=60&amp;d=https%3A%2F%2Fdemo.thembay.com%2Fgreenmart%2Fwp-content%2Fuploads%2F2017%2F08%2Fclient_01-100x100.jpg&amp;r=g" data-lazy-type="image" width="60" height="60" alt="Avatar" className="avatar avatar-60wp-user-avatar wp-user-avatar-60 alignnone photo avatar-default lazy-loaded" />
                                                                                        </div>
                                                                                        <div className="tbay-author clear" itemProp="author">name</div>
                                                                                    </div>
                                                                                    <div className="comment-text media-body">
                                                                                        <p className="meta">
                                                                                            <time itemProp="datePublished" dateTime="2018-03-07T02:20:40+00:00">March 7, 2018</time>
                                                                                        </p>
                                                                                        <div itemProp="reviewRating" itemScope="" itemType="http://schema.org/Rating" className="star-rating clear" title="Rated 3 out of 5">	<span><strong itemProp="ratingValue">3</strong> out of 5</span>
                                                                                        </div>
                                                                                        <div itemProp="description" className="description clear">
                                                                                            <p>sadas</p>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </li>
                                                                            <li className="review even thread-even depth-1" id="li-comment-307">
                                                                                <div id="comment-307" className="comment_container media">
                                                                                    <div className="tbay-avata pull-left">
                                                                                        <div className="tbay-image">
                                                                                            <img src="https://secure.gravatar.com/avatar/70b03db954aa45fc2559e85f5d5bd13e?s=60&amp;d=https%3A%2F%2Fdemo.thembay.com%2Fgreenmart%2Fwp-content%2Fuploads%2F2017%2F08%2Fclient_01-100x100.jpg&amp;r=g" data-lazy-type="image" width="60" height="60" alt="Avatar" className="avatar avatar-60wp-user-avatar wp-user-avatar-60 alignnone photo avatar-default lazy-loaded" />
                                                                                        </div>
                                                                                        <div className="tbay-author clear" itemProp="author">aasdf</div>
                                                                                    </div>
                                                                                    <div className="comment-text media-body">
                                                                                        <p className="meta">
                                                                                            <time itemProp="datePublished" dateTime="2018-03-07T04:35:36+00:00">March 7, 2018</time>
                                                                                        </p>
                                                                                        <div itemProp="reviewRating" itemScope="" itemType="http://schema.org/Rating" className="star-rating clear" title="Rated 4 out of 5">	<span><strong itemProp="ratingValue">4</strong> out of 5</span>
                                                                                        </div>
                                                                                        <div itemProp="description" className="description clear">
                                                                                            <p>asdf</p>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </li>
                                                                            <li className="review odd alt thread-odd thread-alt depth-1" id="li-comment-431">
                                                                                <div id="comment-431" className="comment_container media">
                                                                                    <div className="tbay-avata pull-left">
                                                                                        <div className="tbay-image">
                                                                                            <img src="https://secure.gravatar.com/avatar/e81d12692d5c867a628ad9a5c5bce4b0?s=60&amp;d=https%3A%2F%2Fdemo.thembay.com%2Fgreenmart%2Fwp-content%2Fuploads%2F2017%2F08%2Fclient_01-100x100.jpg&amp;r=g" data-lazy-type="image" width="60" height="60" alt="Avatar" className="avatar avatar-60wp-user-avatar wp-user-avatar-60 alignnone photo avatar-default lazy-loaded" />
                                                                                        </div>
                                                                                        <div className="tbay-author clear" itemProp="author">diego</div>
                                                                                    </div>
                                                                                    <div className="comment-text media-body">
                                                                                        <p className="meta">
                                                                                            <time itemProp="datePublished" dateTime="2018-08-17T01:35:55+00:00">August 17, 2018</time>
                                                                                        </p>
                                                                                        <div itemProp="reviewRating" itemScope="" itemType="http://schema.org/Rating" className="star-rating clear" title="Rated 5 out of 5">	<span><strong itemProp="ratingValue">5</strong> out of 5</span>
                                                                                        </div>
                                                                                        <div itemProp="description" className="description clear">
                                                                                            <p>cool</p>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </li>
                                                                            <li className="review even thread-even depth-1" id="li-comment-493">
                                                                                <div id="comment-493" className="comment_container media">
                                                                                    <div className="tbay-avata pull-left">
                                                                                        <div className="tbay-image">
                                                                                            <img src="https://demo-10aba.kxcdn.com/greenmart/wp-content/uploads/2017/08/client_01-100x100.jpg" data-lazy-type="image" width="60" height="60" alt="Avatar" className="avatar avatar-60wp-user-avatar wp-user-avatar-60 alignnone photo avatar-default lazy-loaded" />

                                                                                        </div>
                                                                                        <div className="tbay-author clear" itemProp="author">dada</div>
                                                                                    </div>
                                                                                    <div className="comment-text media-body">
                                                                                        <p className="meta">
                                                                                            <time itemProp="datePublished" dateTime="2018-12-27T05:54:35+00:00">December 27, 2018</time>
                                                                                        </p>
                                                                                        <div itemProp="reviewRating" itemScope="" itemType="http://schema.org/Rating" className="star-rating clear" title="Rated 3 out of 5">	<span><strong itemProp="ratingValue">3</strong> out of 5</span>
                                                                                        </div>
                                                                                        <div itemProp="description" className="description clear">
                                                                                            <p>cfsdsd</p>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </li>
                                                                            <li className="review odd alt thread-odd thread-alt depth-1" id="li-comment-657">
                                                                                <div id="comment-657" className="comment_container media">
                                                                                    <div className="tbay-avata pull-left">
                                                                                        <div className="tbay-image">
                                                                                            <img src="https://demo-10aba.kxcdn.com/greenmart/wp-content/uploads/2017/08/client_01-100x100.jpg" data-lazy-type="image" width="60" height="60" alt="Avatar" className="avatar avatar-60wp-user-avatar wp-user-avatar-60 alignnone photo avatar-default lazy-loaded" />

                                                                                        </div>
                                                                                        <div className="tbay-author clear" itemProp="author">SERTF</div>
                                                                                    </div>
                                                                                    <div className="comment-text media-body">
                                                                                        <p className="meta">
                                                                                            <time itemProp="datePublished" dateTime="2019-05-20T15:28:18+00:00">May 20, 2019</time>
                                                                                        </p>
                                                                                        <div itemProp="reviewRating" itemScope="" itemType="http://schema.org/Rating" className="star-rating clear" title="Rated 5 out of 5">	<span><strong itemProp="ratingValue">5</strong> out of 5</span>
                                                                                        </div>
                                                                                        <div itemProp="description" className="description clear">
                                                                                            <p>very good product</p>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </li>
                                                                            <li className="review even thread-even depth-1" id="li-comment-733">
                                                                                <div id="comment-733" className="comment_container media">
                                                                                    <div className="tbay-avata pull-left">
                                                                                        <div className="tbay-image">
                                                                                            <img src="https://demo-10aba.kxcdn.com/greenmart/wp-content/uploads/2017/08/client_01-100x100.jpg" data-lazy-type="image" width="60" height="60" alt="Avatar" className="avatar avatar-60wp-user-avatar wp-user-avatar-60 alignnone photo avatar-default lazy-loaded" />

                                                                                        </div>
                                                                                        <div className="tbay-author clear" itemProp="author">đấ</div>
                                                                                    </div>
                                                                                    <div className="comment-text media-body">
                                                                                        <p className="meta">
                                                                                            <time itemProp="datePublished" dateTime="2019-08-14T06:43:50+00:00">August 14, 2019</time>
                                                                                        </p>
                                                                                        <div itemProp="reviewRating" itemScope="" itemType="http://schema.org/Rating" className="star-rating clear" title="Rated 4 out of 5">	<span><strong itemProp="ratingValue">4</strong> out of 5</span>
                                                                                        </div>
                                                                                        <div itemProp="description" className="description clear">
                                                                                            <p>đ</p>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </li>
                                                                            <li className="review odd alt thread-odd thread-alt depth-1" id="li-comment-843">
                                                                                <div id="comment-843" className="comment_container media">
                                                                                    <div className="tbay-avata pull-left">
                                                                                        <div className="tbay-image">
                                                                                            <img src="https://demo-10aba.kxcdn.com/greenmart/wp-content/uploads/2017/08/client_01-100x100.jpg" data-lazy-type="image" width="60" height="60" alt="Avatar" className="avatar avatar-60wp-user-avatar wp-user-avatar-60 alignnone photo avatar-default lazy-loaded" />

                                                                                        </div>
                                                                                        <div className="tbay-author clear" itemProp="author">Nguyễn Văn A</div>
                                                                                    </div>
                                                                                    <div className="comment-text media-body">
                                                                                        <p className="meta">
                                                                                            <time itemProp="datePublished" dateTime="2019-12-01T03:11:43+00:00">December 1, 2019</time>
                                                                                        </p>
                                                                                        <div itemProp="reviewRating" itemScope="" itemType="http://schema.org/Rating" className="star-rating clear" title="Rated 4 out of 5">	<span><strong itemProp="ratingValue">4</strong> out of 5</span>
                                                                                        </div>
                                                                                        <div itemProp="description" className="description clear">
                                                                                            <p>đasấdsad</p>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </li>
                                                                        </ul>
                                                                    </div>*/}
                                                                </div>
                                                                <div className="col-lg-12 col-md-12 col-sm-12 reviews-col2">
                                                                    <h5>Write a customer review</h5>
                                                                    <div id="review_form_wrapper" className="review_form_wrapper">
                                                                        <div id="review_form">
                                                                            <div id="respond" className="comment-respond">
                                                                                <h3 id="reply-title" className="comment-reply-title">Add a review
                                                                                                                    <small>
                                                                                        <a rel="nofollow" id="cancel-comment-reply-link" href="/#">
                                                                                            Cancel reply
                                                                                                                        </a>
                                                                                    </small>
                                                                                </h3>
                                                                                <form id="commentform" className="comment-form">
                                                                                    <p className="comment-form-rating form-group clearfix">
                                                                                        <label htmlFor="rating" className="control-label">Your Rating</label>
                                                                                        <p className="stars">
                                                                                            <span>
                                                                                                <a className="star-1" href="/#">1</a>
                                                                                                <a className="star-2" href="/#">2</a>
                                                                                                <a className="star-3" href="/#">3</a>
                                                                                                <a className="star-4" href="/#">4</a>
                                                                                                <a className="star-5" href="/#">5</a>
                                                                                            </span>
                                                                                        </p>
                                                                                        <select name="rating" id="rating">
                                                                                            <option value="">Rate…</option>
                                                                                            <option value="5">Perfect</option>
                                                                                            <option value="4">Good</option>
                                                                                            <option value="3">Average</option>
                                                                                            <option value="2">Not that bad</option>
                                                                                            <option value="1">Very Poor</option>
                                                                                        </select>
                                                                                    </p>

                                                                                    <p className="comment-form-author form-group"><span className="fa fa-user"></span>
                                                                                        <input id="author" className="form-control" placeholder="Name" name="author" type="text" value="" size="30" aria-required="true" />
                                                                                    </p>
                                                                                    <p className="comment-form-email form-group"><span className="fa fa-envelope"></span>
                                                                                        <input id="email" placeholder="Email" className="form-control" name="email" type="text" value="" size="30" aria-required="true" />
                                                                                    </p>
                                                                                    {/* <div className="gglcptch gglcptch_v2">
                                                                                                                        <div id="gglcptch_recaptcha_664448881" className="gglcptch_recaptcha">
                                                                                                                            <div>
                                                                                                                                <div>
                                                                                                                                    <iframe src="https://www.google.com/recaptcha/api2/anchor?ar=2&amp;k=6LcUc7oUAAAAALAqwGu0GNc_O_M1ZOAEnS69wC7w&amp;co=aHR0cHM6Ly9kZW1vLnRoZW1iYXkuY29tOjQ0Mw..&amp;hl=en&amp;v=r8WWNwsCvXtk22_oRSVCCZx9&amp;theme=light&amp;size=normal&amp;cb=f1ly0xxny2r2" width="304" height="78" role="presentation" name="a-le9nhobaaq23" frameborder="0" scrolling="no" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox"></iframe>
                                                                                                                                </div>
                                                                                                                                <textarea id="g-recaptcha-response" name="g-recaptcha-response" className="g-recaptcha-response" ></textarea>
                                                                                                                            </div>
                                                                                                                        </div>
                                                                                                                        <noscript>
                                                                                                                            <div>
                                                                                                                                <div>
                                                                                                                                    <div>
                                                                                                                                        <iframe src="https://www.google.com/recaptcha/api/fallback?k=6LcUc7oUAAAAALAqwGu0GNc_O_M1ZOAEnS69wC7w" frameborder="0" scrolling="no"></iframe>
                                                                                                                                    </div>
                                                                                                                                </div>
                                                                                                                                <div >
                                                                                                                                    <textarea id="g-recaptcha-response" name="g-recaptcha-response" className="g-recaptcha-response"></textarea>
                                                                                                                                </div>
                                                                                                                            </div>
                                                                                                                        </noscript>
                                                                                                                    </div> */}
                                                                                    <p className="form-submit mt-4">
                                                                                        <input name="submit" type="submit" id="submit" className="submit" value="Submit" />
                                                                                    </p>
                                                                                </form>
                                                                            </div>

                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="clear"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </MDBTabPane>
                                </MDBTabContent>
                            </div>
                        </div>
                    </div>
                </ProductDetailWrap>
                <div className="mt-3 mb-3 pb-2"><RelatedProducts2 />
                </div>
                <Footer2 />
            </React.Fragment>
        )
    }
}

const ProductDetailWrap = styled.div`
.variable-item{
    background: grey ;
    color: black;
}
.yith-wcbr-brands{
    margin-top: -0.3em !important;
    margin-bottom: -0.2em !important;

}
.yith-wcwl-add-to-wishlist{
    margin-left:1.2em !important;
    margin-top: 0.55em !important;
}
.add_to_wishlist{
    font-size: 0.9em !important;
    letter-spacing: 0.5px !important;
    padding: 13px 12px 13px 16px !important;
    border-radius: 6px;
    color: white !important;
    font-weight: 300 !important;
    background: #E68C45;
}
.product_meta{
    border-top: none !important; 
    margin-top: -0.5em !important;
}
.image-mains{
    
    height: 24em !imporant;
    width: 32em !important;
    margin-left: 0.5em;
margin-top:0em;
}
.images{
}
.information{
    margin-left:0.5em;
}
.image-gallery-custom-left-nav{
    border: none !important;
    position: absolute;
    color: #e0e0e0 !important;
    margin-top: 3.7em !important;
    background: transparent !important;
    font-size: 3em;
    z-index: 4;
    margin-left: 0.5em;
}
.image-gallery-custom-left-nav i{
    box-shadow: 4px 4px 4px 4px black;
}
.image-gallery-custom-right-nav{
    border: none !important;
    position: absolute;
    color: #e0e0e0 !important;
    margin-top: 3.7em !important;
    background: transparent !important;
    font-size: 3em;
    z-index: 4;
    float:right;
    margin-left: 9em;
}

.image-gallery-custom-right-nav:focus{
    outline: none !important;
    border: none !important;

}
.image-gallery-custom-right-nav :active{
    outline: none !important;
    border: none !important;

}
.image-gallery-custom-right-nav i{
    box-shadow: 4px 4px 4px 4px black;
}
.image-gallery-custom-left-nav:focus{
    outline: none !important;
    border: none !important;

}
.image-gallery-custom-left-nav :active{
    outline: none !important;
    border: none !important;
import RelatedProducts2 from './RelatedProducts2';
import Menubar from './Menubar';

}
`