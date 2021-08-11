import React, { Component } from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

export default class RelatedProduct extends Component {

    constructor(props, context) {
        super(props, context);

        this.state = {
            items: [
                <li key={1} className="item">
                    <div className="item-inner">
                        <div className="item-img">
                            <div className="item-img-info">
                                <span className="onsale">
                                    <span className="saled">Sale</span>
                                    <span className="featured featured-saled">Hot</span>
                                </span>
                                <a href="/#" className="product-image">
                                    <img src="https://klbtheme.com/qualis/wp-content/uploads/2018/12/p12-265x265.jpg" alt="Fresh Organic Mustard Leaves"></img>
                                </a>
                                <div className="item-box-hover">
                                    <div className="box-inner">
                                        <div className="product-detail-bnt">
                                            <a href="/#" className="button detail-bnt">
                                                <i className="fas fa-search"></i>
                                                <span>Quick View</span>
                                            </a>
                                        </div>
                                        <div className="actions">
                                            <a href="/#" className="add-to-links">
                                                <i className="fas fa-heart"></i>
                                                <span>Quick View</span>
                                            </a>
                                        </div>
                                        {/* <div className="actions">
                                            <div className="add-to-links">
                                                <div className="tinv-wraper woocommerce tinv-wishlist tinvwl-shortcode-add-to-cart">
                                                    <div className="tinv-wishlist-clear"></div>
                                                    <a href="/#" className="tinvwl_add_to_wishlist_button tinvwl-position-shortcode">
                                                        <i className="fal fa-heart"></i>
                                                        <span className="tinvwl_add_to_wishlist-text"></span>
                                                    </a>
                                                    <div className="tinv-wishlist-clear"></div>
                                                </div>
                                            </div>
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                            <div className="add_cart">
                                {/* <a href="/#" className="button btn-cart button product_type_simple add_to_cart_button ajax_add_to_cart added" href="/#">
                                    <i className="fas fa-minus"></i>
                                    <span>Remove cart</span>
                                </a> */}
                                {/* <a href="/#" className="added_to_cart wc-forward">
                                    <i className="fas fa-check"></i>
                                </a> */}
                                <a href="/#" className="button btn-cart button product_type_simple add_to_cart_button ajax_add_to_cart added" >
                                    <i className="fas fa-plus"></i>
                                    <span>Add to cart</span>
                                </a>
                            </div>
                        </div>
                        <div className="item-info">
                            <div className="info-inner">
                                <div className="item-title">
                                    <a href="/#" className="" >
                                        Fresh Organic Mustard Leaves
                                                </a>
                                    <div className="tbay-subtitle">₹60 / Kg</div>
                                </div>
                                <div className="item-content">
                                    <div className="rating">
                                        <div className="ratings">
                                            <div className="star-rating" role="img" aria-label="Rated 5.00 out of 5">
                                                <span>
                                                    Rated
                                                                <strong className="rating">5.00</strong>
                                                    out of 5
                                                            </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item-price">
                                        <div className="price-box">
                                            <span className="regular-price">
                                                <span className="price">
                                                    <del className="pr-1">
                                                        <span className="woocommerce-Price-amount amount">
                                                            <span className="woocommerce-Price-currencySymbol">₹</span>
                                                            9.00
                                                                    </span>
                                                    </del>
                                                    <ins>
                                                        <span className="woocommerce-Price-amount amount">
                                                            <span className="woocommerce-Price-currencySymbol">₹</span>
                                                            6.00
                                                                    </span>
                                                    </ins>
                                                </span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>,

                <li key={2} className="item">
                    <div className="item-inner">
                        <div className="item-img">
                            <div className="item-img-info">
                                <div class="sale-label sale-top-left">-34%</div>
                                <a href="/#" className="product-image">
                                    <img src="https://klbtheme.com/qualis/wp-content/uploads/2018/12/p16-270x270.jpg" alt="Fresh Organic Mustard Leaves"></img>
                                </a>
                                <div className="item-box-hover">
                                    <div className="box-inner">
                                        <div className="product-detail-bnt">
                                            <a className="button detail-bnt" href="/#">
                                                <i className="fas fa-search"></i>
                                                <span>Quick View</span>
                                            </a>
                                        </div>
                                        <div className="actions">
                                            <a className="add-to-links" href="/#">
                                                <i className="fas fa-heart"></i>
                                                <span>Add to wishlist</span>
                                            </a>
                                        </div>
                                        {/* <div className="actions">
                                            <div className="add-to-links">
                                                <div className="tinv-wraper woocommerce tinv-wishlist tinvwl-shortcode-add-to-cart">
                                                    <div className="tinv-wishlist-clear"></div>
                                                    <a className="tinvwl_add_to_wishlist_button tinvwl-position-shortcode">
                                                        <i className="fal fa-heart"></i>
                                                        <span className="tinvwl_add_to_wishlist-text"></span>
                                                    </a>
                                                    <div className="tinv-wishlist-clear"></div>
                                                </div>
                                            </div>
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                            <div className="add_cart">
                                {/* <a className="button btn-cart button product_type_simple add_to_cart_button ajax_add_to_cart added" href="/#">
                                    <i className="fas fa-minus"></i>
                                    <span>Remove cart</span>
                                </a> */}
                                {/* <a className="added_to_cart wc-forward">
                                    <i className="fas fa-check"></i>
                                </a> */}
                                <a className="button btn-cart button product_type_simple add_to_cart_button ajax_add_to_cart added" href="/#">
                                    <i className="fas fa-plus"></i>
                                    <span>Add to cart</span>
                                </a>
                            </div>
                        </div>
                        <div className="item-info">
                            <div className="info-inner">
                                <div className="item-title">
                                    <a href="/#" className="" >
                                        Fresh Red Seedless
                                                </a>
                                    <div className="tbay-subtitle">₹30 / Piece</div>
                                </div>
                                <div className="item-content">
                                    <div className="rating">
                                        <div className="ratings">
                                            <div className="star-rating" role="img" aria-label="Rated 5.00 out of 5">
                                                <span>
                                                    Rated
                                                                <strong className="rating">5.00</strong>
                                                    out of 5
                                                            </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item-price">
                                        <div className="price-box">
                                            <span className="regular-price">
                                                <span className="price">
                                                    <del className="pr-1">
                                                        <span className="woocommerce-Price-amount amount">
                                                            <span className="woocommerce-Price-currencySymbol">₹</span>
                                                            50.00
                                                                    </span>
                                                    </del>
                                                    <ins>
                                                        <span className="woocommerce-Price-amount amount">
                                                            <span className="woocommerce-Price-currencySymbol">₹</span>
                                                            60.00
                                                                    </span>
                                                    </ins>
                                                </span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>,

                // <li key={3} className="item">
                //   <div className="item-inner">
                //     <div className="item-img">
                //       <div className="item-img-info">
                //         <span className="onsale">
                //           <span className="featured not-sale">Hot</span>
                //         </span>
                //         <a href="/#" className="product-image">
                //           <img src="https://klbtheme.com/qualis/wp-content/uploads/2018/12/p4.jpg" alt="Fresh Organic Mustard Leaves"></img>
                //         </a>
                //         <div className="item-box-hover">
                //           <div className="box-inner">
                //             <div className="product-detail-bnt">
                //               <a className="button detail-bnt">
                //                 <i className="fas fa-search"></i>
                //                 <span>Quick View</span>
                //               </a>
                //             </div>
                //             <div className="actions">
                //               <a href="/#" className="add-to-links">
                //                 <i className="fas fa-heart"></i>
                //                 <span>Add to wishlist</span>
                //               </a>
                //             </div>
                //             {/* <div className="actions">
                //                                     <div className="add-to-links">
                //                                         <div className="tinv-wraper woocommerce tinv-wishlist tinvwl-shortcode-add-to-cart">
                //                                             <div className="tinv-wishlist-clear"></div>
                //                                             <a className="tinvwl_add_to_wishlist_button tinvwl-position-shortcode">
                //                                                 <i className="fal fa-heart"></i>
                //                                                 <span className="tinvwl_add_to_wishlist-text"></span>
                //                                             </a>
                //                                             <div className="tinv-wishlist-clear"></div>
                //                                         </div>
                //                                     </div>
                //                                 </div> */}
                //           </div>
                //         </div>
                //       </div>
                //       <div className="add_cart">
                //         {/* <a className="button btn-cart button product_type_simple add_to_cart_button ajax_add_to_cart added" href="/#">
                //                             <i className="fas fa-minus"></i>
                //                             <span>Remove cart</span>
                //                         </a> */}
                //         {/* <a className="added_to_cart wc-forward">
                //                             <i className="fas fa-check"></i>
                //                         </a> */}
                //         <a className="button btn-cart button product_type_simple add_to_cart_button ajax_add_to_cart added" href="/#">
                //           <i className="fas fa-plus"></i>
                //           <span>Add to cart</span>
                //         </a>
                //       </div>
                //     </div>
                //     <div className="item-info">
                //       <div className="info-inner">
                //         <div className="item-title">
                //           <a className="" href="/#">
                //             Native Organic Cucumber
                //                                     </a>
                //           <div className="tbay-subtitle">(Approx 800g)</div>
                //         </div>
                //         <div className="item-content">
                //           <div className="rating">
                //             <div className="ratings">
                //               <div className="star-rating" role="img" aria-label="Rated 5.00 out of 5">
                //                 <span>
                //                   Rated
                //                                                     <strong className="rating">5.00</strong>
                //                                             out of 5
                //                                                 </span>
                //               </div>
                //             </div>
                //           </div>
                //           <div className="item-price">
                //             <div className="price-box">
                //               <span className="regular-price">
                //                 <span className="price">
                //                   <del className="pr-1">
                //                     <span className="woocommerce-Price-amount amount">
                //                       <span className="woocommerce-Price-currencySymbol">₹</span>
                //                                                     7.00
                //                                                         </span>
                //                   </del>
                //                   <ins>
                //                     <span className="woocommerce-Price-amount amount">
                //                       <span className="woocommerce-Price-currencySymbol">₹</span>
                //                                                     3.99
                //                                                         </span>
                //                   </ins>
                //                 </span>
                //               </span>
                //             </div>
                //           </div>
                //         </div>
                //       </div>
                //     </div>
                //   </div>
                // </li>,

                // <li key={4} className="item">
                //   <div className="item-inner">
                //     <div className="item-img">
                //       <div className="item-img-info">
                //         <span className="onsale">
                //           <span className="saled">Sale</span>
                //           <span className="featured featured-saled">Hot</span>
                //         </span>
                //         <a href="/#" className="product-image">
                //           <img src="https://klbtheme.com/qualis/wp-content/uploads/2018/12/p3.jpg" alt="Fresh Organic Mustard Leaves"></img>
                //         </a>
                //         <div className="item-box-hover">
                //           <div className="box-inner">
                //             <div className="product-detail-bnt">
                //               <a className="button detail-bnt">
                //                 <i className="fas fa-search"></i>
                //                 <span>Quick View</span>
                //               </a>
                //             </div>
                //             <div className="actions">
                //               <a className="add-to-links">
                //                 <i className="fas fa-heart"></i>
                //                 <span>Quick View</span>
                //               </a>
                //             </div>
                //             {/* <div className="actions">
                //                                     <div className="add-to-links">
                //                                         <div className="tinv-wraper woocommerce tinv-wishlist tinvwl-shortcode-add-to-cart">
                //                                             <div className="tinv-wishlist-clear"></div>
                //                                             <a className="tinvwl_add_to_wishlist_button tinvwl-position-shortcode">
                //                                                 <i className="fal fa-heart"></i>
                //                                                 <span className="tinvwl_add_to_wishlist-text"></span>
                //                                             </a>
                //                                             <div className="tinv-wishlist-clear"></div>
                //                                         </div>
                //                                     </div>
                //                                 </div> */}
                //           </div>
                //         </div>
                //       </div>
                //       <div className="add_cart">
                //         {/* <a className="button btn-cart button product_type_simple add_to_cart_button ajax_add_to_cart added" href="/#">
                //                             <i className="fas fa-minus"></i>
                //                             <span>Remove cart</span>
                //                         </a> */}
                //         {/* <a className="added_to_cart wc-forward">
                //                             <i className="fas fa-check"></i>
                //                         </a> */}
                //         <a className="button btn-cart button product_type_simple add_to_cart_button ajax_add_to_cart added" href="/#">
                //           <i className="fas fa-plus"></i>
                //           <span>Add to cart</span>
                //         </a>
                //       </div>
                //     </div>
                //     <div className="item-info">
                //       <div className="info-inner">
                //         <div className="item-title">
                //           <a className="" href="/#">
                //             Organic Grape Tomatoes
                //                                         </a>
                //           <div className="tbay-subtitle">₹60 / Kg</div>
                //         </div>
                //         <div className="item-content">
                //           <div className="rating">
                //             <div className="ratings">
                //               <div className="star-rating" role="img" aria-label="Rated 5.00 out of 5">
                //                 <span>
                //                   Rated
                //                                                         <strong className="rating">5.00</strong>
                //                                             out of 5
                //                                                     </span>
                //               </div>
                //             </div>
                //           </div>
                //           <div className="item-price">
                //             <div className="price-box">
                //               <span className="regular-price">
                //                 <span className="price">
                //                   <del className="pr-1">
                //                     <span className="woocommerce-Price-amount amount">
                //                       <span className="woocommerce-Price-currencySymbol">₹</span>
                //                                                     9.00
                //                                                             </span>
                //                   </del>
                //                   <ins>
                //                     <span className="woocommerce-Price-amount amount">
                //                       <span className="woocommerce-Price-currencySymbol">₹</span>
                //                                                     6.00
                //                                                             </span>
                //                   </ins>
                //                 </span>
                //               </span>
                //             </div>
                //           </div>
                //         </div>
                //       </div>
                //     </div>
                //   </div>
                // </li>,
            ],

            itemNo: 1,
            loop: true,
            nav: true,
            rewind: true,
            responsiveClass: true,
            dots: false,
            navText: ["Prev", "Next"],
            autoplay: true,
            smartSpeed: 1000,
            responsive: {
                0: {
                    items: 1,
                },
                450: {
                    items: 2,
                },
                600: {
                    items: 3,
                },
                1000: {
                    items: 3,
                },
                1200: {
                    items: 4,
                },
                1300: {
                    items: 5,
                },
                1400: {
                    items: 6,
                },
            },
        };
    }
    render() {
        const options = {
            items: this.state.itemNo,
            loop: this.state.loop,
            nav: this.state.nav,
            rewind: this.state.rewind,
            autoplay: this.state.autoplay,
            responsive: this.state.responsive,
        };

        const events = {
            onDragged: function (event) { console.log('onDragged: ' + event.type); },
            onChanged: function (event) { console.log('onChanged: ' + event.type); },
            onTranslate: function (event) { console.log('onTranslate: ' + event.type); }
        };
        return (
            <React.Fragment>
                <div className="container-fluid">
                    <div className="category-products col-12">
                        <div className="products-grid row">
                            <h3 className="widget-title">
                                <span>Related products</span>
                            </h3>
                            <OwlCarousel
                                loop={true}
                                margin={10}
                                nav={true}
                                dots={true}
                                autoplay={true}
                                navText={" "}
                                autoplayTimeout={10000}
                                rewindNav={true}
                                items={6}
                                responsive={this.state.responsive}
                                ref="car"
                                className="owl-theme"
                                options={options}
                                events={events}
                            >
                                {this.state.items}
                            </OwlCarousel>
                        </div>
                    </div>
                </div>
            </React.Fragment >
        )
    }
}