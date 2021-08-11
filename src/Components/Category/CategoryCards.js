import React, { Component } from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default class CategoryCards extends Component {
    render() {
        return (
            <CardsWrap>
                <div className=" mt-4 mb-4">
                    {/* <div class="header-text">
                        <h3 className="mt-5 featured">Special Products</h3>
                    </div> */}
                    <div className="elementor elementor-6">
                        <section className="elementor-element elementor-element-00bd342 elementor-section-boxed elementor-section-height-default elementor-section-height-default elementor-section elementor-top-section">
                            <div className="elementor-container elementor-column-gap-default">
                                <div className="elementor-row">
                                    <div className="elementor-element elementor-element-36ff660 sm-percent-50 elementor-column elementor-col-25 elementor-md-50 elementor-top-column mr-2">
                                        <div className="elementor-column-wrap  elementor-element-populated">
                                            <div className="elementor-widget-wrap">
                                                <div className="elementor-element elementor-element-97f8a39 elementor-widget elementor-widget-ogami_woo_category_banner">
                                                    <div className="elementor-widget-container">
                                                        <div className="widget-category-banner ">
                                                            <div className="category-item updow">
                                                                <Link to="/categories" title="Oranges">
                                                                    <div className="image-wrapper image-loaded"><img width="128" height="178" src="https://demoapus.com/ogami/wp-content/uploads/2019/01/category1.jpg" className="attachment-full size-full unveil-image" alt="" /></div>
                                                                    <h3 className="cat-title">Food &amp; Grocery</h3>
                                                                    <div className="product-nb">12 Items</div>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className=" ml-2 mr-1 elementor-element elementor-element-8e9689d sm-percent-50 elementor-column elementor-col-25  elementor-md-50 elementor-top-column" data-id="8e9689d" data-element_type="column">
                                        <div className="elementor-column-wrap  elementor-element-populated">
                                            <div className="elementor-widget-wrap">
                                                <div className="elementor-element elementor-element-0b8fb71 elementor-widget elementor-widget-ogami_woo_category_banner" data-id="0b8fb71" data-element_type="widget" data-widget_type="ogami_woo_category_banner.default">
                                                    <div className="elementor-widget-container">
                                                        <div className="widget-category-banner ">
                                                            <div className="category-item updow">
                                                                <Link to="/categories" title="Fastfood">
                                                                    <div className="image-wrapper image-loaded">
                                                                        <img width="129" height="178" src="https://demoapus.com/ogami/wp-content/uploads/2019/01/category2.jpg" className="attachment-full size-full unveil-image" alt="" /></div>
                                                                    <h3 className="cat-title">Condiments</h3>
                                                                    <div className="product-nb">8 Items</div>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className=" ml-2 mr-2 elementor-element elementor-element-4ea29e1 sm-percent-50 elementor-column elementor-col-25  elementor-md-50 elementor-top-column" data-id="4ea29e1" data-element_type="column">
                                        <div className="elementor-column-wrap  elementor-element-populated">
                                            <div className="elementor-widget-wrap">
                                                <div className="elementor-element elementor-element-02dd52c elementor-widget elementor-widget-ogami_woo_category_banner" data-id="02dd52c" data-element_type="widget" data-widget_type="ogami_woo_category_banner.default">
                                                    <div className="elementor-widget-container">
                                                        <div className="widget-category-banner ">
                                                            <div className="category-item updow">
                                                                <Link to="/categories" title="Vegetables">
                                                                    <div className="image-wrapper image-loaded"><img width="158" height="178" src="https://demoapus.com/ogami/wp-content/uploads/2019/01/category3.jpg" className="attachment-full size-full unveil-image" alt="" /></div>
                                                                    <h3 className="cat-title">Personal Care</h3>
                                                                    <div className="product-nb">2 Items</div>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className=" ml-2 elementor-element elementor-element-f8a69d0 sm-percent-50 elementor-column elementor-col-25 elementor-md-50 elementor-top-column" data-id="f8a69d0" data-element_type="column">
                                        <div className="elementor-column-wrap  elementor-element-populated">
                                            <div className="elementor-widget-wrap">
                                                <div className="elementor-element elementor-element-b47f184 elementor-widget elementor-widget-ogami_woo_category_banner" data-id="b47f184" data-element_type="widget" data-widget_type="ogami_woo_category_banner.default">
                                                    <div className="elementor-widget-container">
                                                        <div className="widget-category-banner ">
                                                            <div className="category-item updow">
                                                                <a href="/#" title="Organic Drinks">
                                                                    <div className="image-wrapper image-loaded"><img width="101" height="178" src="https://demoapus.com/ogami/wp-content/uploads/2019/01/category4.jpg" className="attachment-full size-full unveil-image" alt="" /></div>
                                                                    <h3 className="cat-title">Essential</h3>
                                                                    <div className="product-nb">12 Items</div>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </CardsWrap>
        )
    }
}
const CardsWrap = styled.div`


margin-top:-2em;


// .img{ 
//     max-width: 45vw;
//     margin-top: 1em;
//     box-shadow: 0.3em 0.29em rgba(136, 134, 134, 0.136);
//     border:0px solid white;
// }
    
// @media only screen and (min-width: 1200px) and (max-width: 2200px) {
//     margin-left: 7.5vw !important;
//     margin-right: 8.9vw !important;
//    .img{ 
//     max-width: 45vw;
//     margin-top: 1em;
//     border:10px solid #f0f0f0;
//     box-shadow: none;
// height: 24vw;
// opacity: 0.9;
// border-radius: 18px !important;
//    }
// }
// .img1{
    
// background-image: url("Assets/vegetable_banner.webp");
// background-size: cover; 
// background-position: bottom;
// height: 26vw;
// opacity: 0.9;
// border-radius: 10px;

// }
// .text {
//     position: realative;
//     line-height:42vw;
//     text-align:center;
//     font-weight: 700;
//     font-size: 1.6em ;
//   }
  
// @media only screen and (min-width: 750px) and (max-width: 1210px) {
  
    
//     .text{
      
//       font-size: 1.4em !important;
//     }
    
//     }
// .img2{
//     background-image: url("Assets/condiment.jpg");
//     background-size: cover; 
//     background-position: bottom;
//     height: 26vw;    
// opacity: 0.9;
// border-radius: 10px;
    
// }
// .img3{
//     background-image: url("Assets/personal.jpg");
//     background-size: cover; 
//     background-position: top;
//     height: 26vw;
//     opacity: 0.9;
//     border-radius: 10px;
    
// }
// .img4{
//     background-image: url("Assets/essentail.jpg");
//     background-size: cover; 
//     background-position: left;
//     height: 26vw;
//     opacity: 0.9;
//     border-radius: 10px;
    
// }

`