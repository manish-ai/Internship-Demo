import React, { Component } from 'react'
import styled from 'styled-components';

export default class Navbar2 extends Component {
    render() {
        return (
            <NavWrap>
                <nav className="navbar navbar-expand-md nav2 navbar-dark">
                    <div className="container-fluid">
                        <button className="navbar-toggler nav-link m-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <i className="fa fa-bars i-primary fa-lg"></i>
                        </button>
                        <div className=" text-center navbar2  collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ">
                                <li className="nav-item active">
                                    <a href="/#" className="nav-link" >Home <span className="sr-only">(current)</span></a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a href="/#" className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Food &amp; Grocery<i className=" fal fa-angle-down "></i>

                                    </a>
                                    <div className="dropdown-menu menu1" aria-labelledby="navbarDropdownMenuLink">
                                        <li class="dropdown-submenu  " >
                                            <a href="/#" className="dropdown-item">Even More1
                                                <i className="fal fa-angle-right pull-right"></i>
                                            </a>
                                            <ul class="dropdown-menu">
                                                <li><a href="/#" className="dropdown-subsubmenu">3rd level</a></li>
                                                <li><a href="/#" className="dropdown-subsubmenu">3rd level</a></li>
                                            </ul>
                                        </li>
                                        <li class="dropdown-submenu" >
                                            <a href="/#" className="dropdown-item">Even More2
                                                <i className="fal fa-angle-right pull-right"></i>
                                            </a>
                                            <ul class="dropdown-menu">
                                                <li><a href="/#" className="dropdown-subsubmenu">3rd level</a></li>
                                                <li><a href="/#" className="dropdown-subsubmenu">3rd level</a></li>
                                            </ul>
                                        </li>
                                        <li class="dropdown-submenu">
                                            <a href="/#" className="dropdown-item">Even More3
                                                <i className="fal fa-angle-right pull-right"></i>
                                            </a>
                                            <ul class="dropdown-menu">
                                                <li><a href="/#" className="dropdown-subsubmenu">3rd level</a></li>
                                                <li><a href="/#" className="dropdown-subsubmenu">3rd level</a></li>
                                            </ul>
                                        </li>
                                        <li class="dropdown-submenu">
                                            <a href="/#" className="dropdown-item">Even More4
                                                <i className="fal fa-angle-right pull-right"></i>
                                            </a>
                                            <ul class="dropdown-menu">
                                                <li><a href="/#" className="dropdown-subsubmenu">3rd level</a></li>
                                                <li><a href="/#" className="dropdown-subsubmenu">3rd level</a></li>
                                            </ul>
                                        </li>
                                        <li class="dropdown-submenu  ">
                                            <a href="/#" className="dropdown-item">Even More5
                                                <i className="fal fa-angle-right pull-right"></i>
                                            </a>
                                            <ul class="dropdown-menu">
                                                <li><a href="/#" className="dropdown-subsubmenu">3rd level</a></li>
                                                <li><a href="/#" className="dropdown-subsubmenu">3rd level</a></li>
                                            </ul>
                                        </li>
                                    </div>
                                </li>
                                <li className="nav-item dropdown">
                                    <a href="/#" className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Condiments<i className=" fal fa-angle-down "></i>

                                    </a>
                                    <div className="dropdown-menu menu1" aria-labelledby="navbarDropdownMenuLink">
                                        <li class="dropdown-submenu  " >
                                            <a href="/#" className="dropdown-item">Even More1
                                                <i className="fal fa-angle-right pull-right"></i>
                                            </a>
                                            <ul class="dropdown-menu">
                                                <li><a href="/#" className="dropdown-subsubmenu">3rd level</a></li>
                                                <li><a href="/#" className="dropdown-subsubmenu">3rd level</a></li>
                                            </ul>
                                        </li>
                                        <li class="dropdown-submenu  " >
                                            <a href="/#" className="dropdown-item">Even More2
                                                <i className="fal fa-angle-right pull-right"></i>
                                            </a>
                                            <ul class="dropdown-menu">
                                                <li><a href="/#" className="dropdown-subsubmenu">3rd level</a></li>
                                                <li><a href="/#" className="dropdown-subsubmenu">3rd level</a></li>
                                            </ul>
                                        </li>
                                        <li class="dropdown-submenu  ">
                                            <a href="/#" className="dropdown-item">Even More3
                                                <i className="fal fa-angle-right pull-right"></i>
                                            </a>
                                            <ul class="dropdown-menu">
                                                <li><a href="/#" className="dropdown-subsubmenu">3rd level</a></li>
                                                <li><a href="/#" className="dropdown-subsubmenu">3rd level</a></li>
                                            </ul>
                                        </li>
                                        <li class="dropdown-submenu  ">
                                            <a href="/#" className="dropdown-item">Even More4
                                                <i className="fal fa-angle-right pull-right"></i>
                                            </a>
                                            <ul class="dropdown-menu">
                                                <li><a href="/#" className="dropdown-subsubmenu">3rd level</a></li>
                                                <li><a href="/#" className="dropdown-subsubmenu">3rd level</a></li>
                                            </ul>
                                        </li>
                                        <li class="dropdown-submenu  ">
                                            <a href="/#" className="dropdown-item">Even More5
                                                <i className="fal fa-angle-right pull-right"></i>
                                            </a>
                                            <ul class="dropdown-menu">
                                                <li><a href="/#" className="dropdown-subsubmenu">3rd level</a></li>
                                                <li><a href="/#" className="dropdown-subsubmenu">3rd level</a></li>
                                            </ul>
                                        </li>
                                    </div>
                                </li>
                                <li className="nav-item dropdown">
                                    <a href="/#" className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Personal Care<i className=" fal fa-angle-down "></i>

                                    </a>
                                    <div className="dropdown-menu menu1" aria-labelledby="navbarDropdownMenuLink">
                                        <li class="dropdown-submenu  " >
                                            <a href="/#" className="dropdown-item">Even More1
                                                <i className="fal fa-angle-right pull-right"></i>
                                            </a>
                                            <ul class="dropdown-menu">
                                                <li><a href="/#" className="dropdown-subsubmenu">3rd level</a></li>
                                                <li><a href="/#" className="dropdown-subsubmenu">3rd level</a></li>
                                            </ul>
                                        </li>
                                        <li class="dropdown-submenu  " >
                                            <a href="/#" className="dropdown-item">Even More2
                                                <i className="fal fa-angle-right pull-right"></i>
                                            </a>
                                            <ul class="dropdown-menu">
                                                <li><a href="/#" className="dropdown-subsubmenu">3rd level</a></li>
                                                <li><a href="/#" className="dropdown-subsubmenu">3rd level</a></li>
                                            </ul>
                                        </li>
                                        <li class="dropdown-submenu  ">
                                            <a href="/#" className="dropdown-item">Even More3
                                                <i className="fal fa-angle-right pull-right"></i>
                                            </a>
                                            <ul class="dropdown-menu">
                                                <li><a href="/#" className="dropdown-subsubmenu">3rd level</a></li>
                                                <li><a href="/#" className="dropdown-subsubmenu">3rd level</a></li>
                                            </ul>
                                        </li>
                                        <li class="dropdown-submenu  ">
                                            <a href="/#" className="dropdown-item">Even More4
                                                <i className="fal fa-angle-right pull-right"></i>
                                            </a>
                                            <ul class="dropdown-menu">
                                                <li><a href="/#" className="dropdown-subsubmenu">3rd level</a></li>
                                                <li><a href="/#" className="dropdown-subsubmenu">3rd level</a></li>
                                            </ul>
                                        </li>
                                        <li class="dropdown-submenu  ">
                                            <a href="/#" className="dropdown-item">Even More5
                                                <i className="fal fa-angle-right pull-right"></i>
                                            </a>
                                            <ul class="dropdown-menu">
                                                <li><a href="/#" className="dropdown-subsubmenu">3rd level</a></li>
                                                <li><a href="/#" className="dropdown-subsubmenu">3rd level</a></li>
                                            </ul>
                                        </li>

                                    </div>
                                </li> <li className="nav-item dropdown">
                                    <a href="/#" className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Essentials<i className=" fal fa-angle-down "></i>
                                    </a>
                                    <div className="dropdown-menu menu1" aria-labelledby="navbarDropdownMenuLink">

                                        <li class="dropdown-submenu  " >
                                            <a href="/#" className="dropdown-item">Even More1
                                                <i className="fal fa-angle-right pull-right"></i>
                                            </a>
                                            <ul class="dropdown-menu">
                                                <li><a href="/#" className="dropdown-subsubmenu">3rd level</a></li>
                                                <li><a href="/#" className="dropdown-subsubmenu">3rd level</a></li>
                                            </ul>
                                        </li>
                                        <li class="dropdown-submenu  " >
                                            <a href="/#" className="dropdown-item">Even More2
                                                <i className="fal fa-angle-right pull-right"></i>
                                            </a>
                                            <ul class="dropdown-menu">
                                                <li><a href="/#" className="dropdown-subsubmenu">3rd level</a></li>
                                                <li><a href="/#" className="dropdown-subsubmenu">3rd level</a></li>
                                            </ul>
                                        </li>
                                        <li class="dropdown-submenu  ">
                                            <a href="/#" className="dropdown-item">Even More3
                                                <i className="fal fa-angle-right pull-right"></i>
                                            </a>
                                            <ul class="dropdown-menu">
                                                <li><a href="/#" className="dropdown-subsubmenu">3rd level</a></li>
                                                <li><a href="/#" className="dropdown-subsubmenu">3rd level</a></li>
                                            </ul>
                                        </li>
                                        <li class="dropdown-submenu  ">
                                            <a href="/#" className="dropdown-item">Even More4
                                                <i className="fal fa-angle-right pull-right"></i>
                                            </a>
                                            <ul class="dropdown-menu">
                                                <li><a href="/#" className="dropdown-subsubmenu">3rd level</a></li>
                                                <li><a href="/#" className="dropdown-subsubmenu">3rd level</a></li>
                                            </ul>
                                        </li>
                                        <li class="dropdown-submenu  ">
                                            <a href="/#" className="dropdown-item">Even More5
                                                <i className="fal fa-angle-right pull-right"></i>
                                            </a>
                                            <ul class="dropdown-menu">
                                                <li><a href="/#" className="dropdown-subsubmenu">3rd level</a></li>
                                                <li><a href="/#" className="dropdown-subsubmenu">3rd level</a></li>
                                            </ul>
                                        </li>
                                    </div>
                                </li>
                                <li>
                                    <span className="nav-link ">Contact Us</span>
                                </li>

                            </ul>
                        </div>
                    </div>
                </nav>
            </NavWrap>
        )
    }
}
const NavWrap = styled.div`
.float-right{
    margin-top: -13.2em;
}
.navbar {
    box-shadow: none !important;
}
.fal{
    margin-top: -10px !important;
}
.nav2{
    align: center;
    color: #000;
}
.nav2 {
    color: #000;
    text-align: center;
    padding: 0rem 1rem;
    border-top: 0px solid rgba(136,134,134,0.336);
    border-bottom: 0px solid rgba(136,134,134,0.336);
    background: #fcfcfc !important;
}
.dropdown-menu{
    z-index: 90;
}
.navbar2 {
    text-align: center;
}
.category {
    color: #E68C46;
}
.nav-link {
    font-size: 15px;
    font-weight: 600;
    padding: 12px 25px 12px 0.5rem !important;
    color: #333333 !important;
    text-transform: uppercase;
    letter-spacing: 0.3px;
}
.nav-link:first-child {
    padding-left: 0rem !important;
}
.nav-link:hover {
    color: #E68C45 !important;
}
.nav-link.dropdown-toggle:after {
    display: none;
}
.nav-link.dropdown-toggle svg {
    width: 20px;
    font-size: 14px;
    height: 16px;
    vertical-align: middle;
}

.nav-item:hover .menu1 {display: block;}
@media only screen and (min-width: 1000px) and (max-width: 1210px) {
    .nav-link {
        font-size: 1rem;
    }
}
@media only screen and (min-width: 750px) and (max-width: 880px) {
    .nav-link {    
        font-size: 0.8rem;
    }
}

.dropdown-submenu {
    position: relative;
}

.dropdown-submenu>.dropdown-menu {
    top: 0;
    left: 100%;
    margin-top: -6px;
    margin-left: 01px;
    -webkit-border-radius: 0 6px 6px 6px;
    -moz-border-radius: 0 6px 6px;
    border-radius: 0 6px 6px 6px;
    width: 90%;
}

.dropdown-submenu:hover>.dropdown-menu {
    display: block;
}

.dropdown-submenu:hover>a:after {
    border-left-color: #fff;
}

.dropdown-submenu.pull-left {
    float: none;
}

.dropdown-submenu.pull-left>.dropdown-menu {
    left: -100%;
    margin-left: 10px;
    -webkit-border-radius: 6px 0 6px 6px;
    -moz-border-radius: 6px 0 6px 6px;
    border-radius: 6px 0 6px 6px;
}

// .dropdown-menu {
//     padding: 12px 16px;
//     min-width: 220px;
//     max-width: 240px;
//     box-shadow: 0 4px 16px 0 rgba(0,0,0,0.2);
// }
// .navbar .dropdown-menu a {
//     font-size: 15px;
//     font-weight: 500;
// }
// .dropdown-submenu {
//     position: relative;
// }

// .dropdown-submenu>.dropdown-menu {
//     top: 0;
//     left: 100%;
//     margin-top: -13px;
//     margin-left: 18px;
//     -webkit-border-radius: 6px 6px 6px 6px;
//     -moz-border-radius: 6px 6px 6px;
//     border-radius: 6px 6px 6px 6px;
//     width: 90%;
// }

// .dropdown-submenu:hover>.dropdown-menu {
//     display: block;
// }

// .dropdown-submenu:hover>a:after {
//     border-left-color: #fff;
// }

// .dropdown-submenu.pull-left {
//     float: none;
// }

// .dropdown-submenu.pull-left>.dropdown-menu {
//     left: -100%;
//     margin-left: 10px;
//     -webkit-border-radius: 6px 6px 6px 6px;
//     -moz-border-radius: 6px 6px 6px 6px;
//     border-radius: 6px 6px 6px 6px;
// }
// .dropdown-submenu>.dropdown-menu li {
//     padding: 12px;
// }
// .dropdown-submenu>.dropdown-menu li a.dropdown-subsubmenu {
//     width: 100%;
//     clear: both;
//     font-weight: 400;
//     color: #000;
//     text-align: inherit;
//     white-space: nowrap;
//     background-color: transparent;
//     border: 0;
//     padding: 0px;
// }
// .dropdown-submenu>.dropdown-menu li a.dropdown-subsubmenu:hover {
//     color: #E68C45;
//     background-color: #f8f9fa;
//     border-radius: 4px;
// }
// .navbar .dropdown-menu a {
//     color: #000;
// }
// .navbar .dropdown-menu a svg {
//     color: #000;
//     height: 22px;
// }
// .navbar .dropdown-menu a.dropdown-item:hover {
//     color: #E68C45;
//     border-radius: 4px;
// }
// .navbar .dropdown-menu a.dropdown-item:hover svg {
//     color: #E68C45;
// }
`