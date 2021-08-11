import React, { Component } from 'react'
import styled from 'styled-components';
import Cookies from 'universal-cookie';
import ProductCard from './ProductCard';
import { connect } from 'react-redux'
import { fetchProducts } from '../actions/productActions'
import { addToCart, removeFromCart } from '../actions/cartActions'
import { addToWish, removeFromWish } from './../actions/wishActions';

const cookies = new Cookies();
console.log(cookies.get('name')); // Pacman

class Products extends Component {

    componentDidMount() {
        this.props.fetchProducts();
    }


    render() {
        return (
            <ProductWrapper>
                <div className="justify-content-center">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-12 padding-30px-left md-padding-15px-lr sm-margin-35px-bottom">
                                <div className="row justify-content-center">
                                    {this.props.products.map((products) => (
                                        <ProductCard product={products} key={products.id}
                                            addToCart={this.props.addToCart}
                                            addToWish={this.props.addToWish}
                                            removeFromCart={this.props.removeFromCart} removeFromWish={this.props.removeFromWish} cartItems={this.props.cartItems} wishItems={this.props.wishItems} />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </ProductWrapper>
        )
    }

}
const mapStateToProps = state => ({
    products: state.products.items,
    cartItems: state.cart.items,
    wishItems: state.wish.items
})
export default connect(mapStateToProps, { fetchProducts, addToCart, addToWish, removeFromCart, removeFromWish })(Products)
const ProductWrapper = styled.div`
margin-top: 15px;
`