import React, { Component } from 'react'
import styled from 'styled-components';

export default class Corousel extends Component {
    render() {
        return (
            <CorWrap>
                <div className="container-fluid">
                    <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
                        <ol className="carousel-indicators">
                            <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
                            <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                            <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                            <li data-target="#carouselExampleCaptions" data-slide-to="3"></li>
                        </ol>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src="Assets/images/landing/how.jpg" className="d-block w-100" alt="..." />
                                <div className="carousel-caption d-none d-md-block">
                                    <h5>Food &amp; Grocery</h5>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img src="Assets/images/landing/condi2.jpg" className="d-block w-100" alt="..." />
                                <div className="carousel-caption d-none d-md-block">
                                    <h5>Condiments</h5>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img src="Assets/images/landing/ps1.jpg" className="d-block w-100" alt="..." />
                                <div className="carousel-caption d-none d-md-block">
                                    <h5>Personal Care</h5>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img src="Assets/images/landing/es3.jpg" className="d-block w-100" alt="..." />
                                <div className="carousel-caption d-none d-md-block">
                                    <h5>Essentials</h5>
                                </div>
                            </div>
                        </div>
                        <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                </div>
            </CorWrap>
        )
    }
}
const CorWrap = styled.div`
margin-bottom: 0.5em;
    .carousel.slide .carousel-item{
        height: 5% !important;
        margin-button: 1em;
        margin-top: 1em;
    }
    .carousel.slide .carousel-inner {
        // padding: 4px 40px !important;
        width: 100%;
        height: 400px !important;
    }
    .carousel .carousel-indicators li {
        width: 30px !important;
        height: 3px !important;
        cursor: pointer;
        border-radius: 0px !important;
    }
`