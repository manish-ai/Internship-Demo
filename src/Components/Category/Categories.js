import React, { Component } from 'react'
import styled from 'styled-components';
import SidebarCategory from './SidebarCategory';
import ContentCategory from './ContentCategory';
import TopBar from '../Common/TopBar';
import NavBar from '../Common/NavBar';
import Footer2 from '../Common/Footer2';

export default class Categories extends Component {
    componentWillMount() {
        window.scrollTo(0, 0)
    }
    render() {
        return (
            <React.Fragment>
                <TopBar />
                <NavBar />
                <CategoryWrap>
                    <section className="main-content container-fluid">
                        <div className="row">
                            <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 col-xl-2">
                                <SidebarCategory />
                            </div>
                            <div className="archive-shop col-lg-9 col-md-9 col-sm-12 col-xs-12 col-xl-10">
                                <ContentCategory />
                            </div>
                        </div>
                    </section>
                </CategoryWrap>
                <Footer2 />
            </React.Fragment>
        )
    }
}

const CategoryWrap = styled.div`
.main-content {
    display: block;
    padding-bottom: 30px;    
    padding-left: 15px;
    padding-right: 25px;
}
`