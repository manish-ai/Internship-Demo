import React, { Component } from 'react'
import styled from 'styled-components';

export default class SidebarCategory extends Component {
    render() {
        return (
            <SidebarCategoryWrap>
                <aside className="sidebar sidebar-left">
                    <div className="close-sidebar-btn hidden-lg hidden-md">
                        <i className="fas fa-times"></i>
                        <span>Close</span>
                    </div>
                    <div className="block woocommerce widget_price_filter">
                        <div className="">
                            <div className="block-title">
                                PRODUCT CATEGORIES
                            </div>
                            <div className="box-content box-category" id="accordionCategory">
                                <ul className="product-categories">
                                    <li className="cat-item cat-item-30">
                                        <a href="/#" data-toggle="collapse" data-target="#category1" className="subcat-item" aria-expanded="true">
                                            <span className="cat-name">Beans</span>
                                            <span className="plusminus plus">+</span>
                                            <span className="plusminus minus">_</span>
                                        </a>
                                        <ul className="children collapse show" id="category1" data-parent="#accordionCategory">
                                            <li className="cat-item cat-item-52 cat-parent">
                                                <a href="/#">Berries % Cherries</a>
                                                <ul className="children">
                                                    <li className="cat-item cat-item-54">
                                                        <a href="/#">
                                                            Blackberries
                                                        </a>
                                                    </li>
                                                    <li className="cat-item cat-item-56">
                                                        <a href="/#">
                                                            Cherries
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="cat-item cat-item-31">
                                        <a href="/#" data-toggle="collapse" data-target="#category2" className="subcat-item" aria-expanded="false">
                                            <span className="cat-name">Berries</span>
                                            <span className="plusminus plus">+</span>
                                            <span className="plusminus minus">_</span>
                                        </a>
                                        <ul className="children collapse" id="category2" data-parent="#accordionCategory">
                                            <li className="cat-item cat-item-52 cat-parent">
                                                <a href="/#">Berries % Cherries</a>
                                                <ul className="children">
                                                    <li className="cat-item cat-item-54">
                                                        <a href="/#">
                                                            Blackberries
                                                        </a>
                                                    </li>
                                                    <li className="cat-item cat-item-56">
                                                        <a href="/#">
                                                            Cherries
                                                        </a>
                                                    </li>
                                                    <li className="cat-item cat-item-89">
                                                        <a href="/#">
                                                            Raspberries
                                                        </a>
                                                    </li>
                                                    <li className="cat-item cat-item-95">
                                                        <a href="/#">
                                                            Strawberries
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="cat-item cat-item-57 cat-parent">
                                                <a href="/#">
                                                    Citrus Fruits
                                                </a>
                                                <ul className="children">
                                                    <li className="cat-item cat-item-65">
                                                        <a href="/#">Fresh Oranges</a>
                                                    </li>
                                                    <li className="cat-item cat-item-68">
                                                        <a href="/#">Grapefruits</a>
                                                    </li>
                                                    <li className="cat-item cat-item-81">
                                                        <a href="/#">Organic Limes</a>
                                                    </li>
                                                    <li className="cat-item cat-item-102">
                                                        <a href="/#">Yellow Lemons</a>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="block woocommerce widget_price_filter">

                        <div className="">
                            <div className="block-title">
                                <div className="">
                                    Filters
                                     <span className="clearAllFilters">Clear All</span>
                                </div>

                                {/* <div className="chip mt-2 d-inline-block">
                                    Tag 220
                                    <i className="close fas fa-times"></i>
                                </div> */}
                            </div>
                            <div id="accordion">
                                {/*    <div className="cardFilter">
                                    <div className="card-header">
                                        <a href="#collapse1" data-toggle="collapse" data-target="#collapse1" className="" aria-expanded="true">
                                            <span>Color</span>
                                            <i className="fa fa-angle-down"></i>
                                        </a>
                                    </div>
                                    <div id="collapse1" className="collapse show" data-parent="#accordion">
                                        <div className="card-body">

                                             <div className="clear-sidebar-btn">
                                                    <i className="fal fa-times-circle"></i>
                                                    <span>Clear all</span>
                                                </div> 
                                            <ul className="list-unstyled color-box">
                                                <li>
                                                    <div className="custom-control custom-checkbox">
                                                        <input type="checkbox" className="custom-control-input" id="red_check" />
                                                        <label className="custom-control-label" for="red_check">
                                                            <span className="bg-red"></span>
                                                            Red (25)
                                            </label>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="custom-control custom-checkbox">
                                                        <input type="checkbox" className="custom-control-input" id="blue_check" />
                                                        <label className="custom-control-label" for="blue_check">
                                                            <span className="bg-blue"></span>
                                                            Blue (210)
                                            </label>
                                                    </div>
                                                </li>
                                            </ul>
                                            <ul className="osahan-select-color">
                                                <li>
                                                    <Link data-toggle="tooltip" data-placement="top" title="" className="color-bg bg-blue" data-original-title="Blue"></Link>
                                                    <Link data-toggle="tooltip" data-placement="top" title="" className="color-bg bg-black" data-original-title="Black"></Link>
                                                    <Link data-toggle="tooltip" data-placement="top" title="" className="color-bg bg-white" data-original-title="white"></Link>
                                                    <Link data-toggle="tooltip" data-placement="top" title="" className="color-bg bg-grey" data-original-title="Grey"></Link>
                                                    <Link data-toggle="tooltip" data-placement="top" title="" className="color-bg bg-navy" data-original-title="Navy"></Link>
                                                    <Link data-toggle="tooltip" data-placement="top" title="" className="color-bg bg-red" data-original-title="Red"></Link>
                                                    <Link data-toggle="tooltip" data-placement="top" title="" className="color-bg bg-beige" data-original-title="Beige"></Link>
                                                    <Link data-toggle="tooltip" data-placement="top" title="" className="color-bg bg-maroon" data-original-title="Maroon"></Link>
                                                    <Link title="" >+ 37 more</Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div> */}
                                <div className="cardFilter">
                                    <div className="card-header">
                                        <a href="/#" data-toggle="collapse" data-target="#collapse2" className="collapsed" aria-expanded="false">
                                            <span>Sort By</span>
                                            <i className="fa fa-angle-down"></i>
                                        </a>
                                    </div>
                                    <div id="collapse2" className="collapse" data-parent="#accordion">
                                        <div className="card-body">
                                            <ul className="list-unstyled list-discount">
                                                <li>
                                                    <div className="custom-control custom-checkbox">
                                                        <input type="checkbox" className="custom-control-input" id="discount_check_1" />
                                                        <label className="custom-control-label" for="discount_check_1">
                                                            Price Low to High
                                                        </label>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="custom-control custom-checkbox">
                                                        <input type="checkbox" className="custom-control-input" id="discount_check_2" />
                                                        <label className="custom-control-label" for="discount_check_2">
                                                            Price High to Low
                                                        </label>
                                                    </div>
                                                </li></ul></div></div></div>
                                {/* <div className="cardFilter">
                                    <div className="card-header">
                                        <a href="/#" data-toggle="collapse" data-target="#collapse2" className="collapsed" aria-expanded="false">
                                            <span>Select by Discount</span>
                                            <i className="fa fa-angle-down"></i>
                                        </a>
                                    </div>
                                    <div id="collapse2" className="collapse" data-parent="#accordion">
                                        <div className="card-body">
                                            <ul className="list-unstyled list-discount">
                                                <li>
                                                    <div className="custom-control custom-checkbox">
                                                        <input type="checkbox" className="custom-control-input" id="discount_check_1" />
                                                        <label className="custom-control-label" for="discount_check_1">
                                                            40% or more
                                                        </label>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="custom-control custom-checkbox">
                                                        <input type="checkbox" className="custom-control-input" id="discount_check_2" />
                                                        <label className="custom-control-label" for="discount_check_2">
                                                            30% or more
                                                        </label>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="custom-control custom-checkbox">
                                                        <input type="checkbox" className="custom-control-input" id="discount_check_3" />
                                                        <label className="custom-control-label" for="discount_check_3">
                                                            20% or more
                                                        </label>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="custom-control custom-checkbox">
                                                        <input type="checkbox" className="custom-control-input" id="discount_check_4" />
                                                        <label className="custom-control-label" for="discount_check_4">
                                                            10% or more
                                                        </label>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="custom-control custom-checkbox">
                                                        <input type="checkbox" className="custom-control-input" id="discount_check_5" />
                                                        <label className="custom-control-label" for="discount_check_5">
                                                            10% and below
                                                        </label>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="custom-control custom-checkbox">
                                                        <input type="checkbox" className="custom-control-input" id="discount_check_6" disabled />
                                                        <label className="custom-control-label" for="discount_check_6">
                                                            50% or more
                                                        </label>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div> 
                                <div className="cardFilter">
                                    <div className="card-header">
                                        <a href="/#" data-toggle="collapse" data-target="#collapse3">
                                            <span>Product Tags</span>
                                            <i className="fa fa-angle-down"></i>
                                        </a>
                                    </div>
                                    <div id="collapse3" className="collapse" data-parent="#accordion">
                                        <div className="card-body">
                                            <div className="tagcloud">
                                                <a href="/#" className="tag-cloud-link tag-link-54 tag-link-position-1" aria-label="Apusfood (3 products)">Apusfood</a>
                                                <a href="/#" className="tag-cloud-link tag-link-54 tag-link-position-1" aria-label="Apusfood (3 products)">Fastfood</a>
                                                <a href="/#" className="tag-cloud-link tag-link-54 tag-link-position-1" aria-label="Apusfood (3 products)">Food</a>
                                                <a href="/#" className="tag-cloud-link tag-link-54 tag-link-position-1" aria-label="Apusfood (3 products)">Milk</a>
                                                <a href="/#" className="tag-cloud-link tag-link-54 tag-link-position-1" aria-label="Apusfood (3 products)">Organic</a>
                                                <a href="/#" className="tag-cloud-link tag-link-54 tag-link-position-1" aria-label="Apusfood (3 products)">Vegetables</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="cardFilter">
                                    <div className="card-header">
                                        <a href="/#" data-toggle="collapse" data-target="#collapse4">
                                            <span>Price</span>
                                            <i className="fa fa-angle-down"></i>
                                        </a>
                                    </div>
                                    <div id="collapse4" className="collapse" data-parent="#accordion">
                                        <div className="card-body">

                                            <ul className="list-unstyled list-discount">
                                                <li>
                                                    <div className="custom-control custom-checkbox">
                                                        <input type="checkbox" className="custom-control-input" id="price_check_1" />
                                                        <label className="custom-control-label" for="price_check_1">
                                                            ₹68 to ₹659
                                                        </label>
                                                        <span className="item-numbers">365548</span>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="custom-control custom-checkbox">
                                                        <input type="checkbox" className="custom-control-input" id="price_check_2" />
                                                        <label className="custom-control-label" for="price_check_2">
                                                            ₹660 to ₹1014
                                                        </label>
                                                        <span className="item-numbers">3658</span>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="custom-control custom-checkbox">
                                                        <input type="checkbox" className="custom-control-input" id="price_check_3" />
                                                        <label className="custom-control-label" for="price_check_3">
                                                            ₹1015 to ₹1679
                                                        </label>
                                                        <span className="item-numbers">7845</span>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="custom-control custom-checkbox">
                                                        <input type="checkbox" className="custom-control-input" id="price_check_4" />
                                                        <label className="custom-control-label" for="price_check_4">
                                                            ₹1680 to ₹1856
                                                        </label>
                                                        <span className="item-numbers">6548</span>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>*/}
                                <div className="cardFilter">
                                    <div className="card-header">
                                        <a href="/#" data-toggle="collapse" data-target="#collapse5">
                                            <span>Customer Ratings</span>
                                            <i className="fa fa-angle-down"></i>
                                        </a>
                                    </div>
                                    <div id="collapse5" className="collapse" data-parent="#accordion">
                                        <div className="card-body">
                                            <ul className="list-unstyled list-discount">
                                                <li>
                                                    <div className="custom-control custom-checkbox">
                                                        <input type="checkbox" className="custom-control-input" id="ratings_check_4" />
                                                        <label className="custom-control-label" for="ratings_check_4">
                                                            4★ & above
                                                        </label>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="custom-control custom-checkbox">
                                                        <input type="checkbox" className="custom-control-input" id="ratings_check_3" />
                                                        <label className="custom-control-label" for="ratings_check_3">
                                                            3★ & above
                                                        </label>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="custom-control custom-checkbox">
                                                        <input type="checkbox" className="custom-control-input" id="ratings_check_2" />
                                                        <label className="custom-control-label" for="ratings_check_2">
                                                            2★ & above
                                                        </label>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="custom-control custom-checkbox">
                                                        <input type="checkbox" className="custom-control-input" id="ratings_check_1" />
                                                        <label className="custom-control-label" for="ratings_check_1">
                                                            1★ & above
                                                        </label>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                {/* <div className="cardFilter">
                                    <div className="card-header">
                                        <a href="/#" data-toggle="collapse" data-target="#collapse6">
                                            <span>Type</span>
                                            <i className="fa fa-angle-down"></i>
                                        </a>
                                    </div>
                                    <div id="collapse6" className="collapse" data-parent="#accordion">
                                        <div className="card-body">
                                            <ul className="list-unstyled list-discount">
                                                <li>
                                                    <div className="custom-control custom-checkbox">
                                                        <input type="checkbox" className="custom-control-input" id="type_check_1" />
                                                        <label className="custom-control-label" for="type_check_1">
                                                            Type 1
                                                        </label>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="custom-control custom-checkbox">
                                                        <input type="checkbox" className="custom-control-input" id="type_check_2" />
                                                        <label className="custom-control-label" for="type_check_2">
                                                            Type 2
                                                        </label>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="custom-control custom-checkbox">
                                                        <input type="checkbox" className="custom-control-input" id="type_check_3" />
                                                        <label className="custom-control-label" for="type_check_3">
                                                            Type 3
                                                        </label>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="custom-control custom-checkbox">
                                                        <input type="checkbox" className="custom-control-input" id="type_check_4" />
                                                        <label className="custom-control-label" for="type_check_4">
                                                            Type 4
                                                        </label>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div> */}
                                <div className="cardFilter">
                                    <div className="card-header">
                                        <a href="/#" data-toggle="collapse" data-target="#collapse7" className="collapsed" aria-expanded="false">
                                            <span>Brands</span>
                                            <i className="fa fa-angle-down"></i>
                                        </a>
                                    </div>
                                    <div id="collapse7" className="collapse" data-parent="#accordion">
                                        <div className="card-body">
                                            <ul className="list-unstyled list-discount">
                                                <li>
                                                    <div className="custom-control custom-checkbox">
                                                        <input type="checkbox" className="custom-control-input" id="organic_check_1" />
                                                        <label className="custom-control-label" for="organic_check_1">
                                                            Amul
                                                        </label>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="custom-control custom-checkbox">
                                                        <input type="checkbox" className="custom-control-input" id="organic_check_2" />
                                                        <label className="custom-control-label" for="organic_check_3">
                                                            Nandini
                                                        </label>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="custom-control custom-checkbox">
                                                        <input type="checkbox" className="custom-control-input" id="organic_check_2" />
                                                        <label className="custom-control-label" for="organic_check_3">
                                                            Heritage
                                                        </label>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="custom-control custom-checkbox">
                                                        <input type="checkbox" className="custom-control-input" id="organic_check_2" />
                                                        <label className="custom-control-label" for="organic_check_3">
                                                            KMF
                                                        </label>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                {/* <div className="cardFilter">
                                    <div className="card-header">
                                        <a href="/#" data-toggle="collapse" data-target="#collapse8" className="collapsed" aria-expanded="false">
                                            <span>Availability</span>
                                            <i className="fa fa-angle-down"></i>
                                        </a>
                                    </div>
                                    <div id="collapse8" className="collapse" data-parent="#accordion">
                                        <div className="card-body">
                                            <ul className="list-unstyled list-discount">
                                                <li>
                                                    <div className="custom-control custom-checkbox">
                                                        <input type="checkbox" className="custom-control-input" id="availability_check" />
                                                        <label className="custom-control-label" for="availability_check">
                                                            Include Out of Stock
                                                        </label>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div> */}
                            </div>
                        </div>

                        {/* <div className="">
                            <div className="box-content box-category">
                            </div>
                        </div>
                        <div className="block-title">Filter by price</div> */}

                    </div>
                </aside>
            </SidebarCategoryWrap >
        )
    }
}

const SidebarCategoryWrap = styled.div`

@media (min-width: 1200px) and (max-width: 1541px) {
   
    margin-right: -2px;
}
@media (max-width: 991px) {
    .sidebar {
        -webkit-transition: all .2s ease-in-out 0s;
        -o-transition: all .2s ease-in-out 0s;
        transition: all .2s ease-in-out 0s;
        z-index: 999;
        top: 0;
        width: 300px;
        height: 100%;
        max-width: 80%;
        background: #fff;
        position: fixed;
        padding: 10px;
    }
    .sidebar.sidebar-left {
        left: 0;
        -webkit-transform: translateX(-100%);
        -ms-transform: translateX(-100%);
        -o-transform: translateX(-100%);
        transform: translateX(-100%);
    }
}
.close-sidebar-btn, .mobile-sidebar-btn {
    cursor: pointer;
    font-weight: 500;
    margin-bottom: 10px;
    font-size: 14px;
    display: inline-block;
}
.close-sidebar-btn {
    padding-bottom: 10px;
    margin-bottom: 15px;
    border-bottom: 1px solid #ededed;
    width: 100%;
    text-align: center;
}
.block {
    margin: 0 0 35px;
}
.sidebar .block {
    padding: 0px;
    position: relative;
    background-color: #fff;
    border-width: 1px;
    border-style: solid;
    border-color: #eee #eee #d5d5d5 #eee;
    box-shadow: 0 1px 3px -1px rgba(0,0,0,.4);
    margin-top: 10px;
    margin-bottom: 0px;
}
aside.sidebar.sidebar-left .block:first-child {
    margin-top: 0;
}
.block .block-title {
    font-size: 15px;
    letter-spacing: 0.05em;
    font-weight: 600;
    padding: 15px 15px 15px 15px;
    position: relative;
    display: block;
    margin-top: 0px;
    color: #000;
    text-transform: uppercase;
    border-bottom: 1px #eaeaea solid;
    border-left: 2px #E68C45 solid;
}
.block .block-title {
    border-left: 2px #E68C45 solid;
}
.box-category ul {
    list-style: none;
    margin: 0;
    padding: 0px;
}
ul.color-box, ul.osahan-select-color {
    padding: 6px 0px;
    list-style: none;
}
ul.color-box li label span {
    display: inline-block;
    width: 12px;
    height: 12px;
    -webkit-border-radius: 30px;
    -moz-border-radius: 30px;
    -ms-border-radius: 30px;
    border-radius: 30px;
    margin-right: 8px;
}
.color-bg {
    border-radius: 32px;
    box-shadow: 0 0 2px #ccc;
    display: inline-block;
    height: 25px;
    width: 25px;
    margin-right: 3px;
}
.osahan-select-color a:last-child {
    display: flex;
    font-weight: bold;
}
.bg-blue {
    background-color: #0074d9;
}
.bg-black {
    background-color: #343a40;
}
.bg-white {
    background-color: #fff!important;
}
.bg-grey {
    background-color: #9fa8ab;
}
.bg-navy {
    background-color: #3c4477;
}
.bg-red {
    background-color: #d34b56;
}
.bg-beige {
    background-color: #e8e6cf;
}
.bg-maroon {
    background-color: #b03060;
}
.tagcloud {
    padding: 6px 0px;
}
.box-content.box-category{
    position: relative;
    display: flex;
}
.tagcloud a {
    text-transform: capitalize;
    margin-bottom: 8px;
    margin-right: 8px;
    font-size: 12px !important;
    display: inline-block;
    float: left;
    padding: 5px 18px;
    -webkit-transition: all .3s ease 0s;
    -o-transition: all .3s ease 0s;
    transition: all .3s ease 0s;
    background: #f2f3f5;
    color: #636363;
    font-weight: 600;
}
.tagcloud a:hover, .tagcloud a:focus, .tagcloud a.active {
    color: #fff;
    background: #E68C45;
    border-color: #E68C45;
}
.list-discount li {
    position: relative;
    border-bottom: 1px solid rgba(0,0,0,0.09);
    color: #808080;
    border-bottom: none;
    padding: 0 0 0 0px;
    margin-bottom: 12px;
}
li:first-child {
    padding-top: 10px;
}
.cardFilter {
    position: relative;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-direction: column;
    flex-direction: column;
    min-width: 0;
    word-wrap: break-word;
    background-color: #fff;
    background-clip: border-box;
    border: 1px solid rgba(0,0,0,.125);
    border-radius: .25rem;
}
.cardFilter {
    font-weight: 400;
    border: 0;
    box-shadow: none;
    margin-bottom: 0px;
}
.cardFilter .card-header {
    margin-bottom: 0;
    background-color: rgba(0,0,0,.03);
    border-bottom: 1px solid rgba(0,0,0,.125);
    cursor: pointer;
    padding: 10px 15px 10px;
}
.cardFilter .card-header:first-child {
    border-radius: calc(.25rem - 1px) calc(.25rem - 1px) 0 0;
}
.cardFilter .card-header {
    background: transparent;
    border-bottom: none;
}
.cardFilter .card-header a {
    display: block;
}
.cardFilter .card-header a span {
    color: #000;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: .3px;
    font-size: 14px;
}
.cardFilter .card-header a[aria-expanded="true"] span {
    color: #E68C45;
    font-weight: 600;
}
.cardFilter .card-header a i {
    float: right;
    margin-top: 4px;
}
.cardFilter .card-header a[aria-expanded="true"] i {
    -webkit-transform: rotate(180deg);
    -ms-transform: rotate(180deg);
    transform: rotate(180deg);
    color: #E68C45;
}

.cardFilter .card-header a svg {
    float: right;
    margin-top: 4px;
    color: #000;
}
.cardFilter .card-header a[aria-expanded="true"] svg {
    -webkit-transform: rotate(180deg);
    -ms-transform: rotate(180deg);
    transform: rotate(180deg);
    color: #E68C45;
}
.cardFilter .card-body ul li {
    margin-bottom: 0px;
}
.cardFilter .card-body ul li a {
    color: #808080;
    font-size: 14px;
}
.cardFilter .card-body ul li a i {
    color: #969696;
    margin-right: 3px;
}
.cardFilter .card-body ul li a svg {
    color: #808080;
    margin-right: 3px;
}
.cardFilter .card-body {
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
    min-height: 1px;
    padding: 1.25rem;
}
.cardFilter .card-body {
    padding: 5px 20px !important;
}
.custom-control .item-numbers {
    background: #ccc none repeat scroll 0 0;
    border-radius: 25px;
    color: #fff;
    float: right;
    font-size: 10px;
    font-weight: 700;
    line-height: 18px;
    margin: 8px 0 0;
    min-width: 30px;
    padding: 0 7px;
    text-align: center;
}
.custom-control .item-numbers {
    float: right;
    margin: 4px 0 0;
}
.clear-sidebar-btn {
    padding-bottom: 0px;
    margin-bottom: 0px;
    border-bottom: 0px solid transparent;
    width: 100%;
    text-align: left;
}
.clear-sidebar-btn {
    cursor: pointer;
    font-weight: 500;
    font-size: 14px;
    display: inline-block;
    color: #808080;
}
.clear-sidebar-btn:hover, .clear-sidebar-btn:hover svg {
    color: #E68C45;
}
.clear-sidebar-btn svg {
    margin-right: 5px;
}
.clearAllFilters {
    float: right;
    margin: 0px 0 0;
    color: #E68C45;
    font-size: 14px;
    font-weight: 600;
}
.custom-control-label {
    color: rgba(0,0,0,0.8);
    font-size: 14px;
}
.custom-control-label::before, .custom-control-label::after {
    top: .1rem !important;  
}
.plus-minus-toggle {
  cursor: pointer;
  height: 21px;
  position: relative;
  width: 21px;
}
.plus-minus-toggle:before,
.plus-minus-toggle:after {
  background: #000;
  content: '';
  height: 5px;
  left: 0;
  position: absolute;
  top: 0;
  width: 21px;
  transition: transform 500ms ease;
}
.plus-minus-toggle:after {
  transform-origin: center;
}
.plus-minus-toggle.collapsed:after {
  transform: rotate(90deg);
}
.plus-minus-toggle.collapsed:before {
  transform: rotate(180deg);
}
.box-category > ul.product-categories {
    width: 100%;
}
.box-category > ul > li {
    display: block;
    position: relative;
    margin: 0;
    border-bottom: 1px #ececec solid;
    padding: 0px 18px;
}
.box-category ul li {
    position: relative;
}
.box-category > ul > li:first-child {
    border-top: 0;
}
.box-category ul li a {
    padding: 12px 0px;
    display: block;
    font-weight: normal;
}
.box-category > ul > li > a {
    color: #000;
    text-transform: uppercase;
    display: block;
    font-size: 14px;
    font-weight: 500;
    letter-spacing: 0.5px;
}
.box-category > ul > li ul.children {
    padding-left: 0px !important;
    padding-bottom: 8px;
    padding-right: 0px!important;
}
.box-category ul li {
    position: relative;
}
.box-category > ul > li > ul li {
    padding: 0px;
}
.box-category > ul > li ul.children > li > a {
    border-bottom: 0 solid #EAEAEA;
    font-size: 13px !important;
    margin: 0 !important;
    padding: 3px 3px !important;
    text-decoration: none;
    padding-left: 0px;
    color: #898989;
}
.box-category > ul > li ul.children > li ul.children > li a {
    text-decoration: none;
    font-size: 13px !important;
    margin: 4px 8px!important;
    padding: 0px 16px!important;
    border-bottom: 0px solid #EAEAEA;
    color: #898989;
}
.box-category > ul.product-categories .cat-item a.subcat-item {
    display: block;
}
.box-category > ul.product-categories .cat-item a.subcat-item:hover,
.box-category > ul.product-categories .cat-item a.subcat-item:hover span.cat-name,
.box-category > ul.product-categories .cat-item:hover a.subcat-item span.plusminus,
.box-category > ul.product-categories .cat-item a.subcat-item[aria-expanded="false"]:hover span.plusminus.plus {
    color: #E68C45;
}
.box-category > ul.product-categories .cat-item a.subcat-item span.cat-name {
    color: #000;
    font-weight: 500;
    text-transform: uppercase;
    -webkit-letter-spacing: .3px;
    -moz-letter-spacing: .3px;
    -ms-letter-spacing: .3px;
    letter-spacing: .3px;
    font-size: 14px;
}
.box-category > ul.product-categories .cat-item a.subcat-item[aria-expanded="true"] span.cat-name {
    color: #E68C45;
    font-weight: 600;
}
.box-category > ul.product-categories .cat-item a.subcat-item span.plusminus {
    float: right;
    color: #000;
    font-size: 26px;
}
.box-category > ul.product-categories .cat-item a.subcat-item[aria-expanded="false"] span.plusminus.plus {
    margin-top: -9px;
}
.box-category > ul.product-categories .cat-item a.subcat-item[aria-expanded="true"] span.plusminus.minus {
    margin-top: -18px;
}
.box-category > ul.product-categories .cat-item a.subcat-item[aria-expanded="true"] span.plusminus.plus {
    display: none;
}
.box-category > ul.product-categories .cat-item a.subcat-item[aria-expanded="false"] span.plusminus.minus {
    display: none;
}
.box-category > ul.product-categories .cat-item a.subcat-item[aria-expanded="true"] span.plusminus.minus {
    color: #E68C45;
}
.box-category > ul.product-categories .cat-item a.subcat-item[aria-expanded="false"] span.plusminus.plus {
    color: #000;
}
`