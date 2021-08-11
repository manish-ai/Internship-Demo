import React, { Component } from 'react'
import styled from 'styled-components';
import SidebarTabs from './SidebarTabs';
import ProfileDetails from './ProfileDetails';
import Breadcrumb from '../Common/Breadcrumb';
import TopBar from '../Common/TopBar';
import NavBar from '../Common/NavBar';
import Menubar from '../Common/Menubar';
import Footer2 from '../Common/Footer2';

export default class Categories extends Component {
    componentWillMount() {
        window.scrollTo(0, 0)
    }
    render() {
        return (
            <React.Fragment>
                <TopBar/>
                <NavBar />
                <Menubar />
                <CategoryWrap>
                    <Breadcrumb />
                    <section className="main-content container-fluid">
                        <div className="row">
                            <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 col-xl-2">
                                <SidebarTabs />
                            </div>
                            <div className="archive-shop col-lg-9 col-md-9 col-sm-12 col-xs-12 col-xl-10">
                                <ProfileDetails />
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