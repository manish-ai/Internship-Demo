import React, { Component } from 'react'
import styled from 'styled-components';
import { MDBInput } from 'mdbreact';
import { Link } from 'react-router-dom';
import TopBar from '../Common/TopBar';
import NavLogin from './NavLogin';
import Footer2 from '../Common/Footer2';

export default class SignIn extends Component {

    componentWillMount() {
        window.scrollTo(0, 0)
    }

    constructor() {
        super();
        this.state = {
            input: {},
            errors: {},

        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleChange(event) {
        let input = this.state.input;
        input[event.target.name] = event.target.value;

        this.setState({
            input
        });
    }


    handleSubmit(event) {
        event.preventDefault();

        if (this.validate()) {
            console.log(this.state);

            let input = {};
            input["name"] = "";
            input["email"] = "";
            input["phone"] = "";
            input["pass"] = "";
            this.setState({ input });

            alert('Demo Form is submited');
        }
    }
    validate() {
        let input = this.state.input;
        let errors = {};
        let isValid = true;



        if (!input["email"]) {
            isValid = false;
            errors["email"] = "Please enter your email Address.";
        }

        if (typeof input["email"] !== "undefined") {

            var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
            if (!pattern.test(input["email"])) {
                isValid = false;
                errors["email"] = "Please enter valid email address.";
            }
        }

        if (!input["phone"]) {
            isValid = false;
            errors["phone"] = "Please enter valid phone number.";
        }

        if (typeof input["phone"] !== "undefined") {

            var pattern1 = new RegExp(/^[0-9\b]+$/);
            if (!pattern1.test(input["phone"])) {
                isValid = false;
                errors["phone"] = "Please enter only number.";
            } else if (input["phone"].length !== 10) {
                isValid = false;
                errors["phone"] = "Please enter valid phone number.";
            }
        }

        if (!input["pass"]) {
            isValid = false;
            errors["pass"] = "Please enter valid password";
        }

        if (typeof input["pass"] !== "undefined") {
            if (input["pass"].length <= 8) {
                isValid = false;
                errors["pass"] = "Password needs atleast 8 characters.";
            }
        }

        this.setState({
            errors: errors
        });

        return isValid;
    }

    render() {

        return (
            <><TopBar />
                <NavLogin />
                <SignWraper>

                    <div className="login-modal d-block container  ml-5">
                        <div className="row  ml-5">
                            <div className="col-lg-6 pad-right-0 login-modal-display ">
                                <div className="login-modal-left">
                                    <img src="Assets/images/landing/login2.jpg" alt="$" className="img-fluid" />
                                </div>
                            </div>
                            <div className="col-lg-6 pad-left-0 sm-padding-20px-t sm-padding-20px-lr">

                                <div className="login-content flex-row-fluid d-flex flex-column position-relative overflow-hidden p-7 mx-auto">
                                    <div className="d-flex flex-column-fluid pt-lg-2">
                                        <div className="login-form login-signin w-100 pr-3">

                                            <div className="existing-user-login">
                                                <form className="form" onSubmit={this.handleSubmit}>
                                                    <div className="pt-lg-0">
                                                        <h5 className="heading-design-h5">
                                                            LOGIN TO YOUR ACCOUNT
                                                </h5>

                                                    </div>
                                                    <MDBInput label={this.state.errors.phone ? this.state.errors.phone : "Enter Mobile number"} type="phone-number"
                                                        name="phone" value={this.state.input.phone} className={this.state.errors.phone ? "border border-danger" : null}
                                                        onChange={this.handleChange} outline required />


                                                    <MDBInput label={this.state.errors.pass ? this.state.errors.pass : "Enter Your Password"} type="password" value={this.state.input.pass} name="pass"
                                                        className={this.state.errors.pass ? "border border-danger" : null}
                                                        onChange={this.handleChange} outline required />

                                                    <div className="custom-control custom-checkbox ml-1">
                                                        <input type="checkbox" className="custom-control-input" id="customControlValidation1" />
                                                        <label className="custom-control-label" for="customControlValidation1">Remember me</label>
                                                    </div>
                                                    <p className="font-small text-primary float-right forgot ">
                                                        Forgot
                                            <a href="#!" className="text-primary ml-1">
                                                            Password?
                                            </a>
                                                    </p>
                                                    <fieldset class="form-group mt-4">
                                                        <button type="submit" value="Submit" class="btn btn-primarynew btn-theme-round font-weight-bold btn-block btn-md">Login</button>
                                                    </fieldset>
                                                </form>
                                                <Link to="/signup" ><button className="btn blue1 justify-content-center btn-block btn-md switch-button">New User Login</button></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </SignWraper><Footer2 /></>
        )
    }
}

const SignWraper = styled.div`
display: inline-block;
 horizontal-align: middle;
 width:70%;
margin-left: 6vw;

.switch-button{

    margin-top: -1.3em;
    
    margin-bottom: 1em;
}
.forgot{
    margin-top: -1.5em;
}
.blue1{
          background: #4d8aff !important;
        color: #fff;
}
    .btn-primarynew {
        background: #E68C45;
        color: #fff;
    }
    .btn.btn-md {
        padding: .7rem 1.6rem;
        font-size: 14px;
    }
    .flex-root {
        -webkit-box-flex: 1;
        flex: 1;
        -ms-flex: 1 0 0px;
    }
    @media (min-width: 992px){
        .flex-lg-row {
            -webkit-box-orient: horizontal !important;
            -webkit-box-direction: normal !important;
            -ms-flex-direction: row !important;
            flex-direction: row !important;
        }
    }
    .bgi-position-x-center {
        background-position-x: center;
    }
    .bgi-position-y-bottom {
        background-position-y: bottom;
    }

    .bgi-no-repeat {
        background-repeat: no-repeat;
    }
    .flex-row-fluid {
        -webkit-box-flex: 1;
        flex: 1 auto;
        -ms-flex: 1 0 0px;
        min-width: 0;
    }
    .font-size-h4 {
        font-size: 1.35rem !important;
    }
    .font-weight-bolder {
        font-weight: 600 !important;
    }
    .pt-15, .py-15 {
        padding-top: 3.75rem !important;
    }
    .flex-column-auto {
        -webkit-box-flex: 0;
        -ms-flex: none;
        flex: none;
    }
    .mb-10, .my-10 {
        margin-bottom: 2.5rem !important;
    }
    .mb-8, .my-8 {
        margin-bottom: 1.5rem !important;
    }
    .pt-5, .py-5 {
        padding-top: 1.25rem !important;
    }
    .pb-13, .py-13 {
        padding-bottom: 2.25rem !important;
    }
    @media (min-width: 992px) {
        .font-size-h1-lg {
            font-size: 2rem !important;
        }
        .font-size-h1-24 {
            font-size: 16px !important;
        }
        .pt-lg-40, .py-lg-40 {
            padding-top: 10rem !important;
        }
        .pt-lg-6, .py-lg-6 {
            padding-top: 6rem !important;
        }
        .pt-lg-2, .py-lg-2 {
            padding-top: 2rem !important;
        }
        .pt-lg-10, .py-lg-10 {
            padding-top: 4rem !important;
        }
        .pt-lg-0, .py-lg-0 {
            padding-top: 0 !important;
        }
    }
    .max-h-70px {
        max-height: 70px !important;
    }
    .font-size-h4 {
        color: #986923;
    }
    .form-control.form-control-login {
        border-radius: 3px;
        font-size: 13px;
        font-weight: 600;
        line-height: normal;
        display: block;
        width: 100%;
        padding: .5rem .75rem;
        color: #495057;
        background-color: #fff;
        background-image: none;
        background-clip: padding-box;
        border: 1px solid rgba(0,0,0,.15);
        transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;
    }
    .btn-peach-gradient {
        background: linear-gradient(40deg,#ffd86f,#fc6262) !important;
        color: #fff;
        -webkit-transition: .5s ease;
        transition: .5s ease;
        font-weight: 600;
        font-size: 14px;
    }
    .btn-theme-round {
        border-radius: 0.2em;
    }
    .custom-control-label {
        padding-top: 1px;
    }
    .pad-right-0 {
        padding-right: 0;
    }
    .pad-left-0 {
        padding-left: 0;
    }
    // .login-modal-left {
    //     background-image: url(Assets/images/landing/login2.jpg);
    //     background-position: center bottom;
    //     background-repeat: no-repeat;
    //     background-size: auto auto;
    //     color: #ffffff;
    //     height: 100%;
    //     position: relative;
    // }
    .login-modal-main .modal-content, .login-modal-left {
        min-height: 400px;
    }
    button.close {
        padding: 0;
        background: 0 0;
        border: 0;
        -webkit-appearance: none;
    }
    .close-top-right {
        background: #E68C45 !important;
        border-radius: 0 15px 15px 0;
        color: #fff!important;
        height: 30px;
        line-height: 10px;
        opacity: unset;
        position: absolute;
        right: -31px;
        text-shadow: none!important;
        top: -15px;
        width: 30px;
    }
    .login-modal-main.modal-dialog .modal-content {
        border-radius: .3rem !important;
    }
    .heading-design-h5 {
        font-size: 16px;
        font-weight: 600;
        margin: 0 0 45px;
        position: relative;
        text-transform: uppercase;
        line-height: 20px;
        color: #343a40;
    }
    .heading-design-h5::after {
        background: #E68C45 repeat scroll 0 0;
        border-radius: 12px;
        content: "";
        height: 3px;
        left: 0;
        position: absolute;
        bottom: -13px;
        width: 46px;
    }
    @media screen and (max-width: 991px) {
        .sm-padding-20px-t {
            padding-top: 20px !important;
        }
        .sm-padding-20px-b {
            padding-bottom: 20px !important;
        }
        .sm-padding-20px-lr {
            padding-left: 20px !important;
            padding-right: 20px !important;
        }import NavBar from './NavBar';
import TopBar from './TopBar';
// import footer from './../Footer';
import Footer2 from './../Footer2';

        .login-modal-display {
            display: none;
        }
    }
`