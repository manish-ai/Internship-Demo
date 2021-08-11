import React, { Component } from 'react'
import styled from 'styled-components';

export default class Breadcrumb extends Component {
    render() {
        return (
            <BreadcrumbWrap>
                <div className="popolr-breadcrumb">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-12 col-md-12">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item">
                                        <a href="/#">
                                            Home
                                        </a>
                                        <i className="fa fa-angle-right"></i>
                                    </li>
                                    <li className="breadcrumb-item">
                                        <a href="/#">Pages</a>
                                        <i className="fa fa-angle-right"></i>
                                    </li>
                                    <li className="breadcrumb-item active">
                                        Page Name
                                        <i className="fa fa-angle-right"></i>
                                    </li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
            </BreadcrumbWrap>
        )
    }
}

const BreadcrumbWrap = styled.div`
.breadcrumb {
    padding: .75rem 1rem;
    margin-bottom: 1rem;
    list-style: none;
    background-color: #e9ecef;
    border-radius: .25rem;
    padding-inline-start: 0px;
}
.popolr-breadcrumb {
    width: 100%;
    display: flex;
    poisiton: relative;
}
// border-bottom: 1px solid #ededed;
.popolr-breadcrumb .breadcrumb {
    background: rgba(0,0,0,0) none repeat scroll 0 0;
    margin: 0;
    padding: 15px 0 15px;
}
.breadcrumb-item {
    float: left;
    color: #000;
    cursor: pointer;
    font-size: 14px;
    opacity: 0.8;
    font-weight: 600;
}
.breadcrumb-item a {
    color: #000;
    opacity: 0.7;
    max-width: 80px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    display: inline-block;
    vertical-align: middle;
}
.breadcrumb-item a:hover {
    color: #E68C45;
    max-width: 180px;
}
.breadcrumb-item a:hover {
    color: #E68C45;
    opcaity: 1;
}
.breadcrumb-item.active {
    color: #E68C45;
}
.breadcrumb-item i {
    color: #808080;
    font-size: 12px;
    padding: 0px 9px;
}
.breadcrumb-item svg {
    width: 22px;
    height: 13px;
    color: #808080;
    font-size: 26px;
}
.breadcrumb-item:last-child i {
    display: none;
}
.breadcrumb-item:last-child svg {
    display: none;
}
.breadcrumb-item+.breadcrumb-item::before {
    display: inline-block;
    padding-right: 0rem;
    color: #808080;
    content: none !important;
}
.breadcrumb-item+.breadcrumb-item {
    padding-left: 0rem;
}
`