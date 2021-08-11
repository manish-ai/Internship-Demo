import React, { Component } from 'react'
import styled from 'styled-components';
import { connect } from 'react-redux'
import { fetchProducts } from '../../actions/productActions'
import { addToCart, removeFromCart } from '../../actions/cartActions'
import { addToWish, removeFromWish } from '../../actions/wishActions';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import _ from "lodash";
import CategoryProducts from './CategoryProducts';
import Breadcrumb from '../Common/Breadcrumb';
import Pagination from '../Common/Pagination';

class ContentCategory extends Component {
    state = {
        pageSize: 6,
        currentPage: 1,
        sort: { path: "", order: "asc" }
    };

    componentDidMount() {
        this.props.fetchProducts();
    }
    paginate = (items, pageNumber, pageSize) => {
        const startIndex = (pageNumber - 1) * pageSize;
        return _(items).slice(startIndex).take(pageSize).value();
    }

    handlePageChange = (page) => {
        this.setState({ currentPage: page });
    }
    previousPage = () => {
        this.setState({ currentPage: this.state.currentPage - 1 })
    }
    nextpage = () => {
        this.setState({ currentPage: this.state.currentPage + 1 })
    }
    onSortl = (path) => {
        console.log("clicked");
        this.setState({ sort: { path, order: "asc" } });
    };

    onSorth = (path) => {
        this.setState({ sort: { path, order: "desc" } });
    };

    handleSortChange = (event) => {
        const value = event.target.value;
        this.onSortl(value);

    }




    render() {
        const sort = this.state.sort;

        const sorted = _.orderBy(this.props.products, [sort.path], [sort.order]);
        const products = this.paginate(sorted, this.state.currentPage, this.state.pageSize);
        return (
            <ContentCategoryWrap><ToastContainer position="top-right"
                autoClose={2900}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover />
                <div className="pro-coloumn row">
                    <Breadcrumb />
                    <div className="wrapper-fillter col-12">
                        <div className="apus-filter">
                            <div className="row">
                                <div className="col-md-9 col-xs-12 right-inner">
                                    <h1 className="shop-page-title pull-left">
                                        Tomato
                                        <span className="showCounts">(Showing 1 - {products.length} products of {this.props.products.length} products)</span>
                                    </h1>
                                    <span className="mobile-sidebar-btn hidden-lg hidden-md"> <i className="fa fa-bars"></i> Show Sidebar</span>
                                    <div className="mobile-sidebar-panel-overlay"></div>
                                </div>
                                <div className="col-md-2 col-xs-12 wrapper-lert ml-5">
                                    <div className="left-inner clearfix">
                                        <div className="pull-left orderby-wrapper">

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="category-products col-12">
                        <div className="products-grid  row ">
                            {products.map((products) => (
                                <CategoryProducts product={products} key={products.id}
                                    addToCart={this.props.addToCart}
                                    addToWish={this.props.addToWish}
                                    removeFromCart={this.props.removeFromCart} removeFromWish={this.props.removeFromWish} cartItems={this.props.cartItems} wishItems={this.props.wishItems} />

                            ))}
                        </div>
                    </div>
                    <Pagination

                        className="2 pagination"
                        itemsCount={this.props.products.length}
                        pageSize={this.state.pageSize}
                        currentPage={this.state.currentPage}
                        onPageChange={this.handlePageChange}
                        previousPage={this.previousPage}
                        nextPage={this.nextpage}
                    />

                </div>
            </ContentCategoryWrap>
        )
    }
}

const mapStateToProps = state => ({
    products: state.products.items,
    cartItems: state.cart.items,
    wishItems: state.wish.items
})
export default connect(mapStateToProps, { fetchProducts, addToCart, addToWish, removeFromCart, removeFromWish })(ContentCategory)


const ContentCategoryWrap = styled.div`
.wrapper-fillter{
border-top: 1.2px solid #f0f0f0;}

.toast-success{
    top: 6.2em;
    background: rgb(237, 237, 237);
    width: 90%;
    float :right;
    color:rgb(30, 70, 32);
    padding-left: 9%;  
    display: flex;
    font-size: 0.975rem;
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    font-weight: 400;
    line-height: 1.43;
    border-radius: 3px;
    letter-spacing: 0.01071em;
    height: 20% !important;

}

.toast-red{
    top: 6.2em;
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
 .btn11{
     border-radius: 4px;
     background: #E68C45;
     font-size:12px;
}
.item{
border: 1px solid #f0f0f0;

}
.category-products{
border-bottom: 1px solid #e0e0e0;
}
@media (min-width: 1200px) and (max-width: 1541px) {
   
    margin-left: 3px;
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




.pro-coloumn {
    padding: 0px;
    position: relative;
    margin-top: 0px;
    padding-bottom: 0px;
    background-color: #fff;
    border-width: 1px;
    border-style: solid;
    border-color: #eaeaea #eaeaea #d5d5d5 #eaeaea;
    box-shadow: 0 1px 3px -1px rgba(0,0,0,.4);
    margin-top: 10px;
}
.apus-filter {
    padding: 12px 12px 12px;
    margin: 0 0 0px;
    border-bottom: 1px solid #ededed;
}

// @media (min-width: 1200px) {
//     .apus-filter {
//         margin-bottom: 40px;
//     }
// }
@media (min-width: 992px) {
    .col-md-1, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-md-10, .col-md-11, .col-md-12 {
        float: left;
    }
}
.apus-filter .shop-page-title {
    margin-top: 6px;
    margin-bottom: 0;
    font-size: 20px;
    color: #000;
    font-weight: 600;
}
.close-sidebar-btn, .mobile-sidebar-btn {
    cursor: pointer;
    font-weight: 500;
    margin-bottom: 10px;
    font-size: 14px;
    display: inline-block;
}
.mobile-sidebar-btn {
    margin: 0 0 10px;
    color: #E68C45;
}
// .mobile-sidebar-panel-overlay {
//     position: fixed;
//     top: 0;
//     left: 0;
//     z-index: -10;
//     width: 100%;
//     height: 100%;
//     background: rgba(0,0,0,.15);
//     opacity: 0;
//     filter: alpha(opacity=0);
//     -webkit-transition: all .2s ease-in-out 0s;
//     -o-transition: all .2s ease-in-out 0s;
//     transition: all .2s ease-in-out 0s;
// }
@media (max-width: 991px) {
    .col-xs-1, .col-sm-1, .col-md-1, .col-lg-1, .col-xs-2, .col-sm-2, .col-md-2, .col-lg-2, .col-xs-3, .col-sm-3, .col-md-3, .col-lg-3, .col-xs-4, .col-sm-4, .col-md-4, .col-lg-4, .col-xs-5, .col-sm-5, .col-md-5, .col-lg-5, .col-xs-6, .col-sm-6, .col-md-6, .col-lg-6, .col-xs-7, .col-sm-7, .col-md-7, .col-lg-7, .col-xs-8, .col-sm-8, .col-md-8, .col-lg-8, .col-xs-9, .col-sm-9, .col-md-9, .col-lg-9, .col-xs-10, .col-sm-10, .col-md-10, .col-lg-10, .col-xs-11, .col-sm-11, .col-md-11, .col-lg-11, .col-xs-12, .col-sm-12, .col-md-12, .col-lg-12 {
        padding-left: 10px;
        padding-right: 10px;
    }
    .apus-filter .right-inner {
        margin-bottom: 10px;
        overflow: hidden;
    }
    .apus-filter .mobile-sidebar-btn {
        float: right;
        margin: 5px 0 0;
    }
}
.apus-filter .form-ogami-ppp, .apus-filter .orderby-wrapper {
    margin-right: 10px;
}
.apus-filter .woocommerce-ordering {
    margin: 0;
}
.apus-filter .orderby-wrapper>* {
    display: inline-block;
    vertical-align: middle;
    float: none;
}
.apus-filter select {
    font-size: 14px;
    color: #808080;
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    background: url(Assets/images/select.png) #fff right 10px center no-repeat;
    font-weight: 400;
    padding: 3px 12px 3px 15px;
    border-radius: 2px;
    -webkit-border-radius: 2px;
    -moz-border-radius: 2px;
    -ms-border-radius: 2px;
    -o-border-radius: 2px;
    margin: 0;
    border: 1px solid #ededed;
}
.woocommerce .woocommerce-ordering select {
    vertical-align: top;
}
.form-ogami-ppp {
    float: left;
}   
.form-ogami-ppp select {
    font-size: 16px;
    color: #808080;
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    background: url(Assets/images/select.png) #fff right 10px center no-repeat;
    font-weight: 400;
    border: 1px solid #ededed;
    padding: 3px 12px 3px 20px;
    border-radius: 2px;
    -webkit-border-radius: 2px;
    -moz-border-radius: 2px;
    -ms-border-radius: 2px;
    -o-border-radius: 2px;
    margin: 0;
    border: 1px solid #ededed;
}
.apus-filter .display-mode {
    margin-top: 4px;
}
.apus-filter .change-view {
    color: #808080;
    display: inline-block;
}
.apus-filter .change-view:first-child {
    margin-right: 4px;
}
.apus-filter .change-view:hover, .apus-filter .change-view.active {
    color: #E68C45;
}
.apus-filter .change-view i {
    font-size: 24px;
    vertical-align: middle;
}
.apus-filter .change-view svg {
    font-size: 24px;
    vertical-align: middle;
}
`