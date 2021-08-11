import React, { useState, useEffect, useRef } from 'react';
import NavBar from '../Common/NavBar';
import Products from '../Products';
import Menubar from '../Common/Menubar';
import styled, { css } from 'styled-components';
import AboutUs from './AboutUs';
// import Footer from './footer';
import HowItWorks from './HowItWorks';
import CategoryCards from '../Category/CategoryCards';
// import Scroll from './Scroll';
import Footer2 from '../Common/Footer2';
import Corousel from './Corousel';
import TopBar from '../Common/TopBar';
import Statistics from './Statistics';
import { Link } from 'react-router-dom';

const LandingPage = () => {

    const controls = useRef();
    const [fixedPosition, setFixedPos] = useState(false)
    useEffect(() => {
        const initialTop = controls.current.getBoundingClientRect().top;
        const handleScroll = () => {
            setFixedPos(window.scrollY > initialTop);
        }
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    }, [])

    return (
        <React.Fragment>

            <TopBar />
            <LandingWrap fixed={fixedPosition} ref={controls}>
                <NavBar />
            </LandingWrap>
            {fixedPosition && <Placeholder />}
            {/* <Menubar /> */}
            <Corousel />
            <Land>
                <div className="container">
                    <div class="header-text">
                        <Link to="/categories"> <h3 className="mt-5 featured">Categories</h3></Link>
                    </div>
                </div>
                <CategoryCards />

                <div className="container">
                    <div class="header-text">
                        <h3 className="mt-4 mb-1 featured">Special Products</h3>
                    </div>
                </div>
                <Products />
                <Statistics />
                <HowItWorks />

                <AboutUs />
                <Footer2 />
                {/* <Footer /> */}
            </Land>
        </React.Fragment >
    )

}
const LandingWrap = styled.div`
width: 100%;

${props => props.fixed && css`
width: 100%;
position:sticky;
top: 0;
border-bottom:1.5px solid #f0f0f0;
z-index:20;
`}
`
const Placeholder = styled.div`
width:100%;
`
const Land = styled.div`
.header-text {
    margin: 0;
    padding: 0 0 10px;
    width: 100%;
    text-align: center;
    position: relative;
}
.header-text h3 {
    color: #000000;
    display: inline-block;
    font-size: 24px;
    font-weight: 600;
    letter-spacing: 2px;
    margin: 0;
    position: relative;
    text-transform: uppercase;
    vertical-align: center;
    width: auto;
}
`
export default LandingPage;
