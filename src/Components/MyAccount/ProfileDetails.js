
import React, { Component } from 'react'
import styled from 'styled-components';
import OrgChartComponent from "./OrgChart";
import * as d3 from "d3";

export default class ProfileDetails extends Component {
    constructor(props) {
        super(props);
        this.state = { isToggleBilling: false };
        this.handleClickBilling = this.handleClickBilling.bind(this);
        this.state = { isToggleShipping: false };
        this.handleClickShipping = this.handleClickShipping.bind(this);
        this.state = {
            data: null
        };
    }

    handleClickBilling(e) {
        this.setState({ isToggleBilling: !this.state.isToggleBilling });
    }

    handleClickShipping(e) {
        this.setState({ isToggleShipping: !this.state.isToggleShipping });
    }
    componentDidMount() {
        d3.json(
            "https://gist.githubusercontent.com/bumbeishvili/dc0d47bc95ef359fdc75b63cd65edaf2/raw/c33a3a1ef4ba927e3e92b81600c8c6ada345c64b/orgChart.json"
        ).then(data => {
            this.setState({ data: data });
        });
    }
    render() {
        return (
            <ProfileDetailsWrap>
                <div className="account-wrapper row">
                    <div className="wrapper-fillter col-12">
                        <div className="account-filter">
                            <h2 className="headers-text">Network Details</h2>
                            <OrgChartComponent data={this.state.data} />
                        </div>
                        <div className="dashboardBlock">
                            <div className="dashboard-wrapper">
                                <h2 className="headers-text">Dashboard Details</h2>
                                <div className="row">
                                    <div className="col-xl-4 grid-margin stretch-card">
                                        <div className="dashcard dashcard-statistics">
                                            <div className="dashcard-body">
                                                <div className="clearfix">
                                                    <div className="float-left">
                                                        <p className="dascardtitle mb-0 text-left">Joined Date</p>
                                                        <div className="fluid-container">
                                                            <h3 className="dascardvalue text-left mb-0">Dec 20, 2020</h3>
                                                        </div>
                                                    </div>
                                                    <div className="float-right mt-2">
                                                        <i className="fas fa-calendar-day text-danger-light icon-lg"></i>
                                                    </div>
                                                </div>
                                                <p className="text-muted mt-3 mb-0">
                                                    <i className="fas fa-user-clock mr-1" aria-hidden="true"></i> Some text </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 grid-margin stretch-card">
                                        <div className="dashcard dashcard-statistics">
                                            <div className="dashcard-body">
                                                <div className="clearfix">
                                                    <div className="float-left">
                                                        <p className="dascardtitle mb-0 text-left">Total Money</p>
                                                        <div className="fluid-container">
                                                            <h3 className="dascardvalue text-left mb-0">₹ 5,894.43</h3>
                                                        </div>
                                                    </div>
                                                    <div className="float-right mt-2">
                                                        <i className="fas fa-money-bill text-warning-light icon-lg"></i>
                                                    </div>
                                                </div>
                                                <p className="text-muted mt-3 mb-0">
                                                    <i className="fa fa-file-invoice-dollar mr-1" aria-hidden="true"></i> Money spent on items </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 grid-margin stretch-card">
                                        <div className="dashcard dashcard-statistics">
                                            <div className="dashcard-body">
                                                <div className="clearfix">
                                                    <div className="float-left">
                                                        <p className="dascardtitle mb-0 text-left">Reward Points</p>
                                                        <div className="fluid-container">
                                                            <h3 className="dascardvalue text-left mb-0">586</h3>
                                                        </div>
                                                    </div>
                                                    <div className="float-right mt-2">
                                                        <i className="fas fa-hand-holding-usd text-success-light icon-lg"></i>
                                                    </div>
                                                </div>
                                                <p className="text-muted mt-3 mb-0">
                                                    <i className="fas fa-coins mr-1" aria-hidden="true"></i> some text </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="my-account-content mb-50">
                            <h2 className="headers-text">Account Details</h2>
                            <form action="#" method="post">
                                <div className="row">
                                    <div className="col-12 col-lg-6">
                                        <div className="form-group">
                                            <label htmlFor="firstName">First Name *</label>
                                            <input type="text" className="form-control" id="firstName" placeholder="First Name" />
                                        </div>
                                    </div>
                                    <div className="col-12 col-lg-6">
                                        <div className="form-group">
                                            <label htmlFor="lastName">Last Name *</label>
                                            <input type="text" className="form-control" id="lastName" placeholder="Last Name" />
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-group">
                                            <label htmlFor="displayName">Display Name *</label>
                                            <input type="text" className="form-control" id="displayName" placeholder="Desinging World" />
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-group">
                                            <label htmlFor="emailAddress">Email Address *</label>
                                            <input type="email" className="form-control" id="emailAddress" placeholder="care.designingworld@gmail.com" />
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-group">
                                            <label htmlFor="currentPass">Current Password (Leave blank to leave unchanged)</label>
                                            <input type="password" className="form-control" id="currentPass" />
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-group">
                                            <label htmlFor="newPass">New Password (Leave blank to leave unchanged)</label>
                                            <input type="password" className="form-control" id="newPass" />
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-group">
                                            <label htmlFor="confirmPass">Confirm New Password</label>
                                            <input type="password" className="form-control" id="confirmPass" />
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <button type="submit" className="btn btn-theme-orange btn-sm">Save Changes</button>
                                    </div>
                                </div>
                            </form>
                        </div>

                        <form className="checkout woocommerce-checkout">
                            <div className="profile-check">
                                <h2 className="headers-text">Manage Addresses</h2>
                                <div className="profile-check-body">
                                    <div className="col2-set customer_details">
                                        <div className="woocommerce-billing-fields">
                                            <div className="checkout_twostyle__ButtonGroup">
                                                <div className="radio_group__RadioGroupWrapper radioGroup ">
                                                    <label htmlFor="address-12312" className="radio_card__CardWrapper label item-has-title active">
                                                        <input type="radio" id="address-12312" name="address" placeholder="27 Street, 2569 Heritage Road Visalia, CA 93291" checked />
                                                        <span className="radio_card__CardTitle">
                                                            John
                                                            <span className="tags_address">Home</span>
                                                            <span className="phone_nos">9916834798</span>
                                                        </span>
                                                        <span className="radio_card__CardContent">
                                                            27 Street, 2569 Heritage Road Visalia, CA 93291
                                                        </span>
                                                        <span className="radio_card__CardButtons button-wrapper">
                                                            <span className="radio_card__ActionButton edit-btn">
                                                                <i className="fal fa-pencil-alt"></i>
                                                            </span>
                                                            <span className="radio_card__ActionButton delete-btn">
                                                                <i className="fal fa-times"></i>
                                                            </span>
                                                        </span>
                                                    </label>
                                                    <label htmlFor="address-23423" className="radio_card__CardWrapper label item-has-title not_active">
                                                        <input type="radio" id="address-23423" name="address" placeholder="33 Baker Street, Crescent Road, CA 65746" />
                                                        <span className="radio_card__CardTitle">
                                                            Office
                                                            <span className="tags_address">Work</span>
                                                            <span className="phone_nos">9988099880</span>
                                                        </span>
                                                        <span className="radio_card__CardContent">
                                                            33 Baker Street, Crescent Road, CA 65746
                                                        </span>
                                                        <span className="radio_card__CardButtons button-wrapper">
                                                            <span className="radio_card__ActionButton edit-btn">
                                                                <i className="fal fa-pencil-alt"></i>
                                                            </span>
                                                            <span className="radio_card__ActionButton delete-btn">
                                                                <i className="fal fa-times"></i>
                                                            </span>
                                                        </span>
                                                    </label>
                                                </div>
                                            </div>

                                            <div className="woocommerce-billing-fields__field-wrapper" style={{ display: this.state.isToggleBilling ? 'block' : 'none' }}>
                                                <p className="row-form form-row-first validate-required" id="billing_first_name_field" data-priority="10">
                                                    <label htmlFor="billing_first_name" className="">
                                                        First name&nbsp;<abbr className="required" title="required">*</abbr>
                                                    </label>
                                                    <span className="woocommerce-input-wrapper">
                                                        <input type="text" className="input-text " name="billing_first_name" id="billing_first_name" placeholder="" autoComplete="given-name" />
                                                    </span>
                                                </p>
                                                <p className="row-form form-row-last validate-required" id="billing_last_name_field" data-priority="20">
                                                    <label htmlFor="billing_last_name" className="">
                                                        Last name&nbsp;<abbr className="required" title="required">*</abbr>
                                                    </label>
                                                    <span className="woocommerce-input-wrapper">
                                                        <input type="text" className="input-text " name="billing_last_name" id="billing_last_name" placeholder="" autoComplete="family-name" />
                                                    </span>
                                                </p>

                                                <p className="row-form form-row-wide validate-phone" id="billing_phone_field" data-priority="100">
                                                    <label htmlFor="billing_phone" className="d-inline-block">
                                                        Phone&nbsp;<abbr className="required" title="required">*</abbr>
                                                    </label>
                                                    <span className="woocommerce-input-wrapper">
                                                        <input type="tel" className="input-text " name="billing_phone" id="billing_phone" placeholder="" autoComplete="tel" />
                                                    </span>
                                                </p>
                                                <p className="row-form form-row-wide validate-required validate-email" id="billing_email_field" data-priority="110">
                                                    <label htmlFor="billing_email" className="">
                                                        Email address&nbsp;<abbr className="required" title="required">*</abbr>
                                                    </label>
                                                    <span className="woocommerce-input-wrapper">
                                                        <input type="email" className="input-text " name="billing_email" id="billing_email" placeholder="" autoComplete="email username" />
                                                    </span>
                                                </p>
                                                <p className="row-form form-row-wide" id="billing_company_field" data-priority="30">
                                                    <label htmlFor="billing_company" className="">
                                                        Company name&nbsp;<span className="optional">(optional)</span>
                                                    </label>
                                                    <span className="woocommerce-input-wrapper">
                                                        <input type="text" className="input-text " name="billing_company" id="billing_company" placeholder="" autoComplete="organization" />
                                                    </span>
                                                </p>
                                                <p className="row-form form-row-wide address-field update_totals_on_change validate-required" id="billing_country_field" data-priority="40">
                                                    <label htmlFor="billing_country" className="">
                                                        Country&nbsp;<abbr className="required" title="required">*</abbr>
                                                    </label>
                                                    <span className="woocommerce-input-wrapper">
                                                        <select name="billing_country" id="billing_country" className="country_to_state country_select " autoComplete="country">
                                                            <option>Select a country&hellip;</option>
                                                            <option value="AX">&#197;land Islands</option>
                                                            <option value="YE">Yemen</option>
                                                            <option value="ZM">Zambia</option>
                                                            <option value="ZW">Zimbabwe</option>
                                                        </select>
                                                    </span>
                                                </p>
                                                <p className="row-form form-row-wide address-field validate-required" id="billing_address_1_field" data-priority="50">
                                                    <label htmlFor="billing_address_1" className="">
                                                        Street address&nbsp;<abbr className="required" title="required">*</abbr>
                                                    </label>
                                                    <span className="woocommerce-input-wrapper">
                                                        <input type="text" className="input-text " name="billing_address_1" id="billing_address_1" placeholder="House number and street name" autoComplete="address-line1" data-placeholder="House number and street name" />
                                                    </span>
                                                </p>
                                                <p className="row-form form-row-wide address-field" id="billing_address_2_field" data-priority="60">
                                                    <label htmlFor="billing_address_2" className="screen-reader-text">
                                                        Apartment, suite, unit etc. (optional)&nbsp;<span className="optional">(optional)</span>
                                                    </label>
                                                    <span className="woocommerce-input-wrapper">
                                                        <input type="text" className="input-text " name="billing_address_2" id="billing_address_2" placeholder="Apartment, suite, unit etc. (optional)" autoComplete="address-line2" data-placeholder="Apartment, suite, unit etc. (optional)" />
                                                    </span>
                                                </p>
                                                <p className="row-form form-row-wide address-field validate-required" id="billing_city_field" data-priority="70">
                                                    <label htmlFor="billing_city" className="">
                                                        Town / City&nbsp;<abbr className="required" title="required">*</abbr>
                                                    </label>
                                                    <span className="woocommerce-input-wrapper">
                                                        <input type="text" className="input-text " name="billing_city" id="billing_city" placeholder="" autoComplete="address-level2" />
                                                    </span>
                                                </p>
                                                <p className="row-form form-row-wide address-field validate-required validate-state" id="billing_state_field" data-priority="80">
                                                    <label htmlFor="billing_state" className="">
                                                        State / County&nbsp;<abbr className="required" title="required">*</abbr>
                                                    </label>
                                                    <span className="woocommerce-input-wrapper">
                                                        <input type="text" className="input-text " name="billing_state" id="billing_state" placeholder="" autoComplete="state" />
                                                    </span>
                                                </p>
                                                <p className="row-form form-row-wide address-field validate-required validate-postcode" id="billing_postcode_field" data-priority="90">
                                                    <label htmlFor="billing_postcode" className="">
                                                        Postcode / ZIP&nbsp;<abbr className="required" title="required">*</abbr>
                                                    </label>
                                                    <span className="woocommerce-input-wrapper">
                                                        <input type="text" className="input-text " name="billing_postcode" id="billing_postcode" placeholder="" autoComplete="postal-code" />
                                                    </span>
                                                </p>
                                                <p className="row-form form-row-wide validate-phone" id="billing_phone_field" data-priority="100">
                                                    <label htmlFor="billing_phone" className="">
                                                        Landmark&nbsp;<span className="optional">(optional)</span>
                                                    </label>
                                                    <span className="woocommerce-input-wrapper">
                                                        <input type="text" className="input-text" name="billing_landmark" id="billing_landmark" placeholder="" autoComplete="landmark" />
                                                    </span>
                                                </p>
                                                <p className="row-form form-row-wide">
                                                    <div className="custom-control custom-radio custom-control-inline">
                                                        <input type="radio" className="custom-control-input" id="defaultBillingHome" name="radioBilling" />
                                                        <label className="custom-control-label" htmlFor="defaultBillingHome">Home (All day delivery)</label>
                                                    </div>
                                                    <div className="custom-control custom-radio custom-control-inline">
                                                        <input type="radio" className="custom-control-input" id="defaultBillingWork" name="radioBilling" />
                                                        <label className="custom-control-label" htmlFor="defaultBillingWork">Work (Delivery between 10 AM - 5 PM)</label>
                                                    </div>
                                                </p>
                                                <p className="row-form form-row-wide">
                                                    <button className="btn btn-theme-orange">SAVE AND DELIVERY HERE</button>
                                                    <button type="button" className="btn btn-link" onClick={this.handleClickBilling} style={{ display: this.state.isToggleBilling ? 'inline-block' : 'none' }}>CANCEL</button>
                                                </p>
                                            </div>
                                        </div>


                                        <button className="button__StyledButton addButton" type="button" onClick={this.handleClickBilling} style={{ display: this.state.isToggleBilling ? 'none' : 'block' }}>
                                            <span className="checkout_twostyle__IconWrapper">
                                                <i className="fal fa-plus"></i>
                                            </span>
                                            Add New
                                        </button>
                                        <div className="">
                                            <div className="woocommerce-shipping-fields">
                                                <h3 className="row-form"> Shipping Address</h3>
                                                <p id="ship-to-different-address" className="row-form woocommerce-validated">
                                                    <input id="ship-to-different-address-checkbox" className="input-checkbox" type="checkbox" name="ship_to_different_address" onClick={this.handleClickShipping} />
                                                    <label htmlFor="ship-to-different-address-checkbox" className="checkbox">Ship to a different address?</label>
                                                </p>
                                                <div className="shipping_address" style={{ display: this.state.isToggleShipping ? 'block' : 'none' }}>
                                                    <p className="row-form form-row-first validate-required" id="shipping_first_name_field" data-priority="10">
                                                        <label htmlFor="shipping_first_name" className="">
                                                            First name&nbsp;<abbr className="required" title="required">*</abbr>
                                                        </label>
                                                        <span className="woocommerce-input-wrapper">
                                                            <input type="text" className="input-text " name="shipping_first_name" id="shipping_first_name" placeholder="" autoComplete="given-name" />
                                                        </span>
                                                    </p>
                                                    <p className="row-form form-row-last validate-required" id="shipping_last_name_field" data-priority="20">
                                                        <label htmlFor="shipping_last_name" className="">
                                                            Last name&nbsp;<abbr className="required" title="required">*</abbr>
                                                        </label>
                                                        <span className="woocommerce-input-wrapper">
                                                            <input type="text" className="input-text " name="shipping_last_name" id="shipping_last_name" placeholder="" autoComplete="family-name" />
                                                        </span>
                                                    </p>
                                                    <p className="row-form form-row-wide validate-phone" id="shipping_phone_field" data-priority="100">
                                                        <label htmlFor="shipping_phone" className="">
                                                            Phone&nbsp;<abbr className="required" title="required">*</abbr>
                                                        </label>
                                                        <span className="woocommerce-input-wrapper">
                                                            <input type="tel" className="input-text " name="shipping_phone" id="shipping_phone" placeholder="" autoComplete="tel" />
                                                        </span>
                                                    </p>
                                                    <p className="row-form form-row-wide validate-required validate-email" id="shipping_email_field" data-priority="110">
                                                        <label htmlFor="shipping_email" className="">
                                                            Email address&nbsp;<abbr className="required" title="required">*</abbr>
                                                        </label>
                                                        <span className="woocommerce-input-wrapper">
                                                            <input type="email" className="input-text " name="shipping_email" id="shipping_email" placeholder="" autoComplete="email username" />
                                                        </span>
                                                    </p>
                                                    <p className="row-form form-row-wide" id="shipping_company_field" data-priority="30">
                                                        <label htmlFor="shipping_company" className="">
                                                            Company name&nbsp;<span className="optional">(optional)</span>
                                                        </label>
                                                        <span className="woocommerce-input-wrapper">
                                                            <input type="text" className="input-text " name="shipping_company" id="shipping_company" placeholder="" autoComplete="organization" />
                                                        </span>
                                                    </p>
                                                    <p className="row-form form-row-wide address-field update_totals_on_change validate-required" id="shipping_country_field" data-priority="40">
                                                        <label htmlFor="shipping_country" className="">
                                                            Country&nbsp;<abbr className="required" title="required">*</abbr>
                                                        </label>
                                                        <span className="woocommerce-input-wrapper">
                                                            <select name="shipping_country" id="shipping_country" className="country_to_state country_select " autoComplete="country">
                                                                <option>Select a country&hellip;</option>
                                                                <option value="AX">&#197;land Islands</option>
                                                                <option value="AF">Afghanistan</option>
                                                                <option value="ZM">Zambia</option>
                                                                <option value="ZW">Zimbabwe</option>
                                                            </select>
                                                        </span>
                                                    </p>
                                                    <p className="row-form form-row-wide address-field validate-required" id="shipping_address_1_field" data-priority="50">
                                                        <label htmlFor="shipping_address_1" className="">
                                                            Street address&nbsp;<abbr className="required" title="required">*</abbr>
                                                        </label>
                                                        <span className="woocommerce-input-wrapper">
                                                            <input type="text" className="input-text " name="shipping_address_1" id="shipping_address_1" placeholder="House number and street name" autoComplete="address-line1" data-placeholder="House number and street name" />
                                                        </span>
                                                    </p>
                                                    <p className="row-form form-row-wide address-field" id="shipping_address_2_field" data-priority="60">
                                                        <label htmlFor="shipping_address_2" className="screen-reader-text">
                                                            Apartment, suite, unit etc. (optional)&nbsp;<span className="optional">(optional)</span>
                                                        </label>
                                                        <span className="woocommerce-input-wrapper">
                                                            <input type="text" className="input-text " name="shipping_address_2" id="shipping_address_2" placeholder="Apartment, suite, unit etc. (optional)" autoComplete="address-line2" data-placeholder="Apartment, suite, unit etc. (optional)" />
                                                        </span>
                                                    </p>
                                                    <p className="row-form form-row-wide address-field validate-required" id="shipping_city_field" data-priority="70">
                                                        <label htmlFor="shipping_city" className="">
                                                            Town / City&nbsp;<abbr className="required" title="required">*</abbr>
                                                        </label>
                                                        <span className="woocommerce-input-wrapper">
                                                            <input type="text" className="input-text " name="shipping_city" id="shipping_city" placeholder="" autoComplete="address-level2" />
                                                        </span>
                                                    </p>
                                                    <p className="row-form form-row-wide address-field validate-required validate-state" id="shipping_state_field" data-priority="80">
                                                        <label htmlFor="shipping_state" className="">State / County&nbsp;<abbr className="required" title="required">*</abbr>
                                                        </label>
                                                        <span className="woocommerce-input-wrapper">
                                                            <input type="text" className="input-text " name="shiiping_state" id="shipping_state" placeholder="" autoComplete="state" />
                                                        </span>
                                                    </p>
                                                    <p className="row-form form-row-wide address-field validate-required validate-postcode" id="shipping_postcode_field" data-priority="90">
                                                        <label htmlFor="shipping_postcode" className="">
                                                            Postcode / ZIP&nbsp;<abbr className="required" title="required">*</abbr>
                                                        </label>
                                                        <span className="woocommerce-input-wrapper">
                                                            <input type="text" className="input-text " name="shipping_postcode" id="shipping_postcode" placeholder="" autoComplete="postal-code" />
                                                        </span>
                                                    </p>
                                                    <p className="row-form form-row-wide validate-phone" id="billing_phone_field" data-priority="100">
                                                        <label htmlFor="billing_phone" className="">
                                                            Landmark&nbsp;<span className="optional">(optional)</span>
                                                        </label>
                                                        <span className="woocommerce-input-wrapper">
                                                            <input type="text" className="input-text" name="shipping_landmark" id="shipping_landmark" placeholder="" autoComplete="landmark" />
                                                        </span>
                                                    </p>
                                                    <div className="row-form form-row-wide">
                                                        <div className="custom-control custom-radio custom-control-inline">
                                                            <input type="radio" className="custom-control-input" id="defaultShippingHome" name="radioShipping" />
                                                            <label className="custom-control-label" htmlFor="defaultShippingHome">Home (All day delivery)</label>
                                                        </div>
                                                        <div className="custom-control custom-radio custom-control-inline">
                                                            <input type="radio" className="custom-control-input" id="defaultShippingWork" name="radioShipping" />
                                                            <label className="custom-control-label" htmlFor="defaultShippingWork">Work (Delivery between 10 AM - 5 PM)</label>
                                                        </div>
                                                    </div>
                                                    <p className="row-form form-row-wide">
                                                        <button className="btn btn-theme-orange">SAVE AND DELIVERY HERE</button>
                                                        <button type="button" className="btn btn-link" onClick={this.handleClickShipping} style={{ display: this.state.isToggleShipping ? 'inline-block' : 'none' }}>CANCEL</button>
                                                    </p>
                                                </div>

                                                <p className="row-form notes" id="order_comments_field" data-priority="">
                                                    <label htmlFor="order_comments" className="">
                                                        Order notes&nbsp;<span className="optional">(optional)</span>
                                                    </label>
                                                    <span className="woocommerce-input-wrapper">
                                                        <textarea name="order_comments" className="input-text " id="order_comments" placeholder="Notes about your order, e.g. special notes for delivery." rows="2" cols="5"></textarea>
                                                    </span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>

                        <div className="manage-address-content mb-50">
                            <h2 className="headers-text">Manage Orders</h2>
                            <div className="address-block">
                                <div className="orderCard orderCard-body">
                                    <div className="col-12 product-default left-details product-list">
                                        <figure>
                                            <div className="product-flash-wrap">
                                                <span className="on-new product-flash">Order On The Way</span>
                                            </div>
                                            <a href="javascript:void(0);">
                                                <img src="http://demo.yolotheme.com/organisk/wp-content/uploads/2016/12/18.png" />
                                            </a>
                                        </figure>
                                        <div className="product-details">
                                            <div className="category-list">
                                                <a href="javascript:void(0);" className="product-category">
                                                    Order No:&nbsp; #2132
                                                </a>
                                            </div>
                                            <h3 className="product-title">
                                                <a href="javascript:void(0);">Apple – American</a>
                                            </h3>
                                            {/* <div className="ratings-container">
                                                <div className="product-ratings">
                                                    <span className="ratings"></span>
                                                    <span className="tooltiptext tooltip-top">5.00</span>
                                                </div>
                                            </div> */}
                                            <div className="listTags">
                                                <span className="fas fa-circle text-warning-light icon-md mr-2"></span> Expected Delivery Date:&nbsp;
                                                <span>7th April 2019 to 10th April 2019</span>
                                            </div>
                                            <p className="product-description">
                                                Organic means working with nature, not against it. It means higher levels of animal welfare, lower levels of pesticides, no manufactured herbicides or artificial fertilisers
                                            </p>
                                            <div className="price-box">
                                                <span className="product-price">₹ 150.00/Kg</span>
                                            </div>
                                            {/* <div className="product-action">
                                                <button className="btn-icon btn-add-cart" data-toggle="modal" data-target="#addCartModal"><i className="icon-shopping-cart"></i>ADD TO CART</button>
                                                <a href="javascript:void(0);" className="btn-icon-wish"><i className="icon-heart"></i></a>
                                                <a href="javascript:void(0);" className="btn-quickview" title="Quick View"><i className="fas fa-external-link-alt"></i></a>
                                            </div> */}
                                        </div>
                                    </div>
                                    <div className="col-12 product-default left-details product-list">
                                        <figure>
                                            <div className="product-flash-wrap">
                                                <span className="on-new product-flash">Order Recieved</span>
                                            </div>
                                            <a href="javascript:void(0);">
                                                <img src="http://demo.yolotheme.com/organisk/wp-content/uploads/2016/12/6.png" />
                                            </a>
                                        </figure>
                                        <div className="product-details">
                                            <div className="category-list">
                                                <a href="javascript:void(0);" className="product-category">
                                                    Order No:&nbsp; #3421
                                                </a>
                                            </div>
                                            <h3 className="product-title">
                                                <a href="javascript:void(0);">Purple Grapes</a>
                                            </h3>
                                            {/* <div className="ratings-container">
                                                <div className="product-ratings">
                                                    <span className="ratings"></span>
                                                    <span className="tooltiptext tooltip-top">5.00</span>
                                                </div>
                                            </div> */}
                                            <div className="listTags">
                                                <span className="fas fa-circle text-danger-light icon-md mr-2"></span> Order Cancelled:&nbsp;
                                                <span>7th April 2019</span>
                                            </div>
                                            <p className="product-description">
                                                Organic means working with nature, not against it. It means higher levels of animal welfare, lower levels of pesticides, no manufactured herbicides or artificial fertilisers
                                            </p>
                                            <div className="price-box">
                                                <span className="product-price">₹ 120.00/Kg</span>
                                            </div>
                                            {/* <div className="product-action">
                                                <button className="btn-icon btn-add-cart" data-toggle="modal" data-target="#addCartModal"><i className="icon-shopping-cart"></i>ADD TO CART</button>
                                                <a href="javascript:void(0);" className="btn-icon-wish"><i className="icon-heart"></i></a>
                                                <a href="javascript:void(0);" className="btn-quickview" title="Quick View"><i className="fas fa-external-link-alt"></i></a>
                                            </div> */}
                                        </div>
                                    </div>
                                    <div className="col-12 product-default left-details product-list">
                                        <figure>
                                            <div className="product-flash-wrap">
                                                <span className="on-new product-flash">Order Delivered</span>
                                            </div>
                                            <a href="javascript:void(0);">
                                                <img src="http://demo.yolotheme.com/organisk/wp-content/uploads/2016/12/7.png" />
                                            </a>
                                        </figure>
                                        <div className="product-details">
                                            {/* <div className="category-list">
                                                <a href="javascript:void(0);" className="product-category">
                                                    Order No:&nbsp; #7654
                                                </a>
                                            </div> */}
                                            <h3 className="product-title">
                                                <a href="javascript:void(0);">Order No:&nbsp; #7654</a>
                                            </h3>
                                            {/* <div className="ratings-container">
                                                <div className="product-ratings">
                                                    <span className="ratings"></span>
                                                    <span className="tooltiptext tooltip-top">5.00</span>
                                                </div>
                                            </div> */}
                                            <div className="listTags">
                                                <span className="fas fa-circle text-success-light icon-md mr-2"></span> Delivered Date:&nbsp;
                                                <span>25th March 2019</span>
                                            </div>
                                            <p className="product-description">
                                                Organic means working with nature, not against it. It means higher levels of animal welfare, lower levels of pesticides, no manufactured herbicides or artificial fertilisers
                                            </p>
                                            <div className="price-box">
                                                <span className="product-price">₹ 1250.23</span>
                                            </div>
                                            {/* <div className="product-action">
                                                <button className="btn-icon btn-add-cart" data-toggle="modal" data-target="#addCartModal"><i className="icon-shopping-cart"></i>ADD TO CART</button>
                                                <a href="javascript:void(0);" className="btn-icon-wish"><i className="icon-heart"></i></a>
                                                <a href=javascript:void(0);" className="btn-quickview" title="Quick View"><i className="fas fa-external-link-alt"></i></a>
                                            </div> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="manage-address-content mb-50">
                            <h2 className="headers-text">Orders Details</h2>
                            <div className="address-block">
                                <div className="OrderDetailsCard OrderDetailsCard-body">
                                    <div className="orderstyle__OrderDetailsWrapper">
                                        <h3 className="orderstyle__Title">Order No:&nbsp; 2314</h3>
                                        <div className="order_detailsstyle__DeliveryInfo">
                                            <div className="order_detailsstyle__DeliveryAddress">
                                                <h3>Delivery Address</h3>
                                                <span className="order_detailsstyle__Address">
                                                    1756  Roy Alley, GIRARDVILLE, Pennsylvania
                                                </span>
                                            </div>
                                            <div className="order_detailsstyle__CostCalculation">
                                                <div className="order_detailsstyle__PriceRow">Sub Total
                                                <div className="order_detailsstyle__Price">$200</div>
                                                </div>
                                                <div className="order_detailsstyle__PriceRow">Discount
                                                <div className="order_detailsstyle__Price">$0</div>
                                                </div>
                                                <div className="order_detailsstyle__PriceRow">Delivery Fee
                                                <div className="order_detailsstyle__Price">$49.7</div>
                                                </div>
                                                <div className="order_detailsstyle__PriceRow grandTotal">Total
                                                <div className="order_detailsstyle__Price">$249.7</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="order_detailsstyle__ProgressWrapper">
                                            <div className="progress-boxstyle__ProgressStep">
                                                <div className="progress-boxstyle__ProgressBarWrapper checked">
                                                    <div className="progress-boxstyle__StatusBox">
                                                        <span className="progress-boxstyle__CheckMarkWrapper">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="20.894" height="16" viewBox="0 0 20.894 16">
                                                                <path data-name="_ionicons_svg_ios-checkmark (3)" d="M169.184,175.473l-1.708-1.756a.367.367,0,0,0-.272-.116.352.352,0,0,0-.272.116l-11.837,11.925-4.308-4.308a.375.375,0,0,0-.543,0l-1.727,1.727a.387.387,0,0,0,0,.553l5.434,5.434a1.718,1.718,0,0,0,1.135.553,1.8,1.8,0,0,0,1.126-.534h.01l12.973-13.041A.415.415,0,0,0,169.184,175.473Z" transform="translate(-148.4 -173.6)" fill="currentColor">
                                                                </path>
                                                            </svg>
                                                        </span>
                                                    </div>
                                                    <div className="progress-boxstyle__ProgressBar"></div>
                                                </div>
                                                <div className="progress-boxstyle__StatusDetails">
                                                    <span className="progress-boxstyle__StatusTitle">Order Received</span>
                                                </div>
                                            </div>
                                            <div className="progress-boxstyle__ProgressStep">
                                                <div className="progress-boxstyle__ProgressBarWrapper checked">
                                                    <div className="progress-boxstyle__StatusBox">
                                                        <span className="progress-boxstyle__CheckMarkWrapper">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="20.894" height="16" viewBox="0 0 20.894 16">
                                                                <path data-name="_ionicons_svg_ios-checkmark (3)" d="M169.184,175.473l-1.708-1.756a.367.367,0,0,0-.272-.116.352.352,0,0,0-.272.116l-11.837,11.925-4.308-4.308a.375.375,0,0,0-.543,0l-1.727,1.727a.387.387,0,0,0,0,.553l5.434,5.434a1.718,1.718,0,0,0,1.135.553,1.8,1.8,0,0,0,1.126-.534h.01l12.973-13.041A.415.415,0,0,0,169.184,175.473Z" transform="translate(-148.4 -173.6)" fill="currentColor">
                                                                </path>
                                                            </svg>
                                                        </span>
                                                    </div>
                                                    <div className="progress-boxstyle__ProgressBar"></div>
                                                </div>
                                                <div className="progress-boxstyle__StatusDetails">
                                                    <span className="progress-boxstyle__StatusTitle">Order On The Way</span>
                                                </div>
                                            </div>
                                            <div className="progress-boxstyle__ProgressStep">
                                                <div className="progress-boxstyle__ProgressBarWrapper">
                                                    <div className="progress-boxstyle__StatusBox">3</div>
                                                    <div className="progress-boxstyle__ProgressBar"></div>
                                                </div>
                                                <div className="progress-boxstyle__StatusDetails">
                                                    <span className="progress-boxstyle__StatusTitle">Order Delivered</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="order_detailsstyle__OrderTableWrapper">
                                            <div className="rc-table orderDetailsTable">
                                                <div className="rc-table-container">
                                                    <div className="rc-table-content">
                                                        <table className="order_detailsstyle__OrderTable">

                                                            <thead className="rc-table-thead">
                                                                <tr>
                                                                    <th className="rc-table-cell rc-table-cell-ellipsis">Items</th>
                                                                    <th className="rc-table-cell" style={{ textAlign: 'center' }}>Quantity</th>
                                                                    <th className="rc-table-cell" style={{ textAlign: 'right' }}>Price</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody className="rc-table-tbody">
                                                                <tr data-row-key="1" className="rc-table-row rc-table-row-level-0">
                                                                    <td className="rc-table-cell rc-table-cell-ellipsis">
                                                                        <span className="orderstyle__ItemWrapper">
                                                                            <span className="orderstyle__ImageWrapper">
                                                                                <img src="http://s3.amazonaws.com/redqteam.com/headless-image/banana.jpg" alt="Banana" />
                                                                            </span>
                                                                            <span className="orderstyle__ItemDetails">
                                                                                <span className="orderstyle__ItemName">Banana</span>
                                                                                <span className="orderstyle__ItemSize">2lb</span>
                                                                                <span className="orderstyle__ItemPrice">₹ 50</span>
                                                                            </span>
                                                                        </span>
                                                                    </td>
                                                                    <td className="rc-table-cell" style={{ textAlign: 'center' }}>2</td>
                                                                    <td className="rc-table-cell" style={{ textAlign: 'right' }}>
                                                                        <p>₹ 100</p>
                                                                    </td>
                                                                </tr>
                                                                <tr data-row-key="2" className="rc-table-row rc-table-row-level-0">
                                                                    <td className="rc-table-cell rc-table-cell-ellipsis">
                                                                        <span className="orderstyle__ItemWrapper">
                                                                            <span className="orderstyle__ImageWrapper">
                                                                                <img src="http://s3.amazonaws.com/redqteam.com/headless-image/onions.jpg" alt="Onions" />
                                                                            </span>
                                                                            <span className="orderstyle__ItemDetails">
                                                                                <span className="orderstyle__ItemName">Onions</span>
                                                                                <span className="orderstyle__ItemSize">2lb</span>
                                                                                <span className="orderstyle__ItemPrice">₹ 100</span>
                                                                            </span>
                                                                        </span>
                                                                    </td>
                                                                    <td className="rc-table-cell" style={{ textAlign: 'center' }}>1</td>
                                                                    <td className="rc-table-cell" style={{ textAlign: 'right' }}>
                                                                        <p>₹ 100</p>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </ProfileDetailsWrap>
        )
    }
}
const ProfileDetailsWrap = styled.div`
.svg-chart-container {
    background-color: #fff !important;
    font-family: 'Source Sans Pro', sans-serif !important;
    height: 500px !important;
}
.node-rect {
    fill: #E68C45 !important;
    stroke: #E68C45 !important;
}
.node-button-circle, path.link {
    stroke: #E68C45 !important;
}
.node-image-rect {
    rx: 100 !important;
}
.orgchart-container {
    height: 400px !important;
    border: 0px dashed #aaa !important;
}
.orgchart {
    box-sizing: border-box;
    display: inline-block;
    background-image: none !important;
    background-size: 10px 10px;
    border: 0px dashed rgba(0,0,0,0);
    padding: 20px 20px 0 20px;
}
.orgchart ul li .oc-node .oc-heading {
    background-color: #E68C45 !important;
}
.oci {
  font-family: 'Source Sans Pro', sans-serif !important;
}
.orgchart ul li .oc-node .oc-content {
    border: 1px solid #E68C45 !important;
    color: #000;
    text-transform: capitalize;
}
.orgchart > ul > li > ul li::before {
    border-top: 2px solid #E68C45 !important;
}
.orgchart > ul > li > ul li > .oc-node::before {
    background-color: #E68C45 !important;
}
.orgchart ul li .oc-node:not(:only-child)::after {
    background-color: #E68C45 !important;
}
.orgchart .oc-node .oc-edge::before {
    border-color: #000 !important;
}
.orgchart ul li .oc-node:hover {
    background-color: #eee !important;
}
.orgchart .top-level .title {
  background-color: #006699;
}
.orgchart .top-level .content {
  border-color: #006699;
}
.orgchart .middle-level .title {
  background-color: #009933;
}
.orgchart .middle-level .content {
  border-color: #009933;
}
.orgchart .bottom-level .title {
  background-color: #993366;
}
.orgchart .bottom-level .content {
  border-color: #993366;
}
.account-wrapper h2.headers-text {
    font-size: 21px;
    margin-bottom: 0px;
    display: inline-block;
    padding-bottom: 15px;
    width: 100%;
    font-weight: 700;
    line-height: 1.5;
    letter-spacing: 0.5px;
}
.account-filter {
    margin-bottom: 30px;
    padding: 1.25rem 1.25rem;
    border-width: 1px;
    border-style: solid;
    border-color: #eee #eee #d5d5d5 #eee;
    box-shadow: 0 1px 3px -1px rgba(0,0,0,.4);
    -webkit-box-shadow: 0 1px 3px -1px rgba(0,0,0,.4);
    -moz-box-shadow: 0 1px 3px -1px rgba(0,0,0,.4);
    -o-box-shadow: 0 1px 3px -1px rgba(0,0,0,.4);
    -ms-box-shadow: 0 1px 3px -1px rgba(0,0,0,.4);
    border-radius: 6px;
    margin-top: 10px;
}
.treeview {
    position: relative !important;
    padding: 4px 0px 0px !important;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    vertical-align: middle;
    top: 10px !important;
    left: 25px !important;
    color: rgb(0, 0, 0);
    fill: rgb(0, 0, 0);
    width: 100%;
}
.account-filter > .treeview:first-child {
    padding-bottom: 15px !important;
}
.treeview > .toggle {
  pointer-events: all;
  cursor: pointer;
}
.treeview > .toggle:hover {
  color: #63b1de;
  fill: #63b1de;
}
.dashboardBlock {
    -webkit-transition: width 0.25s ease, margin 0.25s ease;
    transition: width 0.25s ease, margin 0.25s ease;
    width: 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    padding: 1.25rem 1.25rem;
    border-width: 1px;
    border-style: solid;
    border-color: #eee #eee #d5d5d5 #eee;
    box-shadow: 0 1px 3px -1px rgba(0,0,0,.4);
    -webkit-box-shadow: 0 1px 3px -1px rgba(0,0,0,.4);
    -moz-box-shadow: 0 1px 3px -1px rgba(0,0,0,.4);
    -o-box-shadow: 0 1px 3px -1px rgba(0,0,0,.4);
    -ms-box-shadow: 0 1px 3px -1px rgba(0,0,0,.4);
    margin-bottom: 30px;
    border-radius: 6px;
    margin-top: 10px;
}
.dashboard-wrapper {
    padding: 0px;
    width: 100%;
    -webkit-box-flex: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
}
.stretch-card {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: stretch;
    -ms-flex-align: stretch;
    align-items: stretch;
    -webkit-box-pack: stretch;
    -ms-flex-pack: stretch;
    justify-content: stretch;
    margin-bottom: 15px;
}
.stretch-card > .dashcard {
    position: relative;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    border-radius: 0.3125rem;
    width: 100%;
    min-width: 100%;
    border: 0;
    background: #fff;
    box-shadow: 0 1px 3px rgba(33,33,33,.2);
    -webkit-box-shadow: 0 1px 3px rgba(33,33,33,.2);
    -moz-box-shadow: 0 1px 3px rgba(33,33,33,.2);
    -o-box-shadow: 0 1px 3px rgba(33,33,33,.2);
    -ms-box-shadow: 0 1px 3px rgba(33,33,33,.2);
}
.dashcard .dashcard-body {
    -webkit-box-flex: 1;
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
    min-height: 1px;
    padding: 1.25rem 1.25rem;
}
.float-right {
    float: right !important;
}
.icon-lg {
    font-size: 2.5rem;
}
.text-danger-light {
    color: #fe7c96 !important;
}
.float-left {
    float: left !important;
}
.dascardtitle {
    font-weight: 500;
    font-size: 15px;
    color: #000;
    line-height: 1.7;
    letter-spacing: 0.2px;
    margin-bottom: 5px;
}
.dascardvalue {
    font-weight: 600;
    font-size: 20px;
    color: #000;
    line-height: 1.7;
    letter-spacing: 0.2px;
    margin-bottom: 5px;
}
.text-warning-light {
    color: #fed713 !important;
}
.text-success-light {
    color: #1bcfb4 !important;
}
.text-info-light {
    color: #198ae3 !important;
}
.my-account-content {
    position: relative;
    padding: 1.25rem 1.25rem;
    background: #fff;
    border-width: 1px;
    border-style: solid;
    border-color: #eee #eee #d5d5d5 #eee;
    box-shadow: 0 1px 3px -1px rgba(0,0,0,.4);
    -webkit-box-shadow: 0 1px 3px -1px rgba(0,0,0,.4);
    -moz-box-shadow: 0 1px 3px -1px rgba(0,0,0,.4);
    -o-box-shadow: 0 1px 3px -1px rgba(0,0,0,.4);
    -ms-box-shadow: 0 1px 3px -1px rgba(0,0,0,.4);
    border-radius: 6px;
    margin-top: 10px;
}
.mb-50 {
    margin-bottom: 50px;
}

.manage-address-content {
    margin-bottom: 30px;
    padding: 1.25rem 1.25rem;
    border-width: 1px;
    border-style: solid;
    border-color: #eee #eee #d5d5d5 #eee;
    box-shadow: 0 1px 3px -1px rgba(0,0,0,.4);
    -webkit-box-shadow: 0 1px 3px -1px rgba(0,0,0,.4);
    -moz-box-shadow: 0 1px 3px -1px rgba(0,0,0,.4);
    -o-box-shadow: 0 1px 3px -1px rgba(0,0,0,.4);
    -ms-box-shadow: 0 1px 3px -1px rgba(0,0,0,.4);
    border-radius: 6px;
    margin-top: 10px;
}
.addresscard-body {
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
    padding: 1.25rem;
}
.addresscard {
    margin-bottom: 1.25rem;
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
    border-radius: .1875rem;
    box-shadow: 0 1px 3px rgba(33,33,33,.2);
    -webkit-box-shadow: 0 1px 3px rgba(33,33,33,.2);
    -moz-box-shadow: 0 1px 3px rgba(33,33,33,.2);
    -o-box-shadow: 0 1px 3px rgba(33,33,33,.2);
    -ms-box-shadow: 0 1px 3px rgba(33,33,33,.2);
}

// Order-BLock
.orderCard {
    margin-bottom: 15px;
    position: relative;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-direction: column;
    flex-direction: column;
    min-width: 0;
    word-wrap: break-word;
    background-color: #fff;
    background-clip: border-box;
}
.product-default {
    color: #777;
    margin-bottom: 0rem;
}
.product-list {
    display: flex;
    display: -ms-flexbox;
    border: 1px solid rgba(0,0,0,.125);
    border-radius: 6px;
    box-shadow: 0 1px 3px rgba(33,33,33,.2);
    -webkit-box-shadow: 0 1px 3px rgba(33,33,33,.2);
    -moz-box-shadow: 0 1px 3px rgba(33,33,33,.2);
    -o-box-shadow: 0 1px 3px rgba(33,33,33,.2);
    -ms-box-shadow: 0 1px 3px rgba(33,33,33,.2);
    margin-bottom: 15px;
}
.col-12 {
    -ms-flex: 0 0 100%;
    flex: 0 0 100%;
    max-width: 100%;
    position: relative;
    width: 100%;
    min-height: 1px;
    padding-right: 10px;
    padding-left: 10px;
}
figure {
    margin: 0 0 1rem;
}
.product-default figure {
    margin-bottom: 10px;
    margin-top: 10px;
    position: relative;
}
.product-list figure {
    max-width: 200px;
    margin-right: 20px;
}
.product-default a {
    color: inherit;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    transition: all .3s;
    background-color: transparent;
    text-decoration: none;
}
.product-default figure img {
    transition: all .5s;
    height: auto;
    width: 100%;
    display: block;
    max-width: 100%;
    vertical-align: middle;
    border-style: none;
    border-radius: 6px;
}
.product-list figure img {
    object-fit: cover;
    height: 100%;
}
.product-default figure img:last-child {
    left: 0;
    right: 0;
    top: 0;
    left: 0;
}
.product-default figure img:first-child {
    opacity: 1;
    position: relative;
}
.product-default .product-details {
    display: flex;
    display: -ms-flexbox;
    flex-direction: column;
    -ms-flex-direction: column;
    align-items: center;
    -ms-flex-align: center;
    justify-content: center;
    -ms-flex-pack: center;
}
.left-details .product-details {
    -ms-flex-align: start;
    align-items: flex-start;
}
.product-list .product-details {
    max-width: calc(100% - 220px);
}
.product-default .category-list {
    font-weight: 600;
    font-size: 13px;
    line-height: 1.7;
    opacity: .8;
    color: #000;
}
.product-default .product-title {
    max-width: 100%;
    font-weight: 400;
    font-size: 1.5rem;
    line-height: 1.35;
    letter-spacing: .005em;
    margin-bottom: 10px;
    text-overflow: ellipsis;
    overflow: hidden;
}
.product-list .product-title {
    font-weight: 600;
    font-size: 16px;
    color: #000;
}
.product-list:hover .product-title {
    color: #E68C45;
}
@media (max-width: 575px){
    .product-list figure {
        max-width: none;
        margin-right: 0;
        margin-bottom: 2rem;
    }
}
.ratings-container {
    line-height: 1;
    margin: 0 0 10px 1px;
    cursor: pointer;
    position: relative;
    display: inline-block;
}
.ratings-container .product-ratings {
    height: 11px;
}
.ratings-container .product-ratings:before {
    content: "";
    color: rgba(0,0,0,0.16);
}
.ratings-container .ratings {
    position: absolute;
    top: 0;
    left: 0;
    white-space: nowrap;
    overflow: hidden;
}
.ratings-container .ratings:before {
    content: "";
    color: #6a6a6d;
}
.product-default .tooltiptext {
    visibility: hidden;
    position: absolute;
    background-color: #000;
    color: #fff;
    font-size: 13px;
    font-weight: 500;
    letter-spacing: .01em;
    text-align: center;
    padding: 8px 10px;
    z-index: 1;
    opacity: 0;
    transition: opacity .3s;
    bottom: 125%;
    left: 50%;
    transform: translateX(-50%);
}
.product-ratings:hover .tooltiptext {
    visibility: visible;
    opacity: 1;
}
.tooltip-top:after {
    position: absolute;
    top: 96%;
    left: 50%;
    margin-left: -6px;
    border-width: 6px;
    border-style: solid;
    border-color: #000 transparent transparent transparent;
    content: "";
}
.product-list .product-description {
    display: -webkit-box;
    max-width: 100%;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    margin-bottom: 1em;
    overflow: hidden;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
}
.price-box {
    margin-bottom: 0.5rem;
    font-weight: 600;
    line-height: 1;
}
.product-price {
    color: #000;
    font-size: 20px;
    line-height: .8;
}
.product-default .product-action {
    color: #333;
    text-align: center;
}
.left-details .btn-icon-wish, .left-details .btn-quickview, .left-details .btn-add-cart {
    background-color: #f4f4f4;
    border-color: #f4f4f4;
    color: black;
}
.left-details .btn-icon-wish, .left-details .btn-quickview, .left-details .btn-add-cart {
    background-color: #f4f4f4;
    border-color: #f4f4f4;
    color: black;
}
.left-details .btn-add-cart {
    margin-left: 0;
    padding: 0 1.5rem;
}
.product-list .btn-add-cart {
    margin: 0 3px 5px 0;
    padding: 0 1rem;
    background-color: #282d3b;
    border-color: #282d3b;
    color: #fff;
}
.product-default .btn-add-cart i {
    font-size: 1.5rem;
    margin-bottom: 2px;
    line-height: 0;
}
.product-default .btn-add-cart svg {
    font-size: 1.5rem;
    margin-bottom: 2px;
    line-height: 0;
}
.listTags {
    font-size: 14px;
    font-weight: 600;
    color: #000;
    display: flex;
    -webkit-box-pack: justify;
    justify-content: flex-start;
    -webkit-box-align: center;
    align-items: center;
    width: 100%;
    margin-bottom: 10px;
}
.product-flash-wrap span {
    height: 30px;
    position: absolute;
    text-align: center;
    text-transform: uppercase;
    width: auto;
    top: 0;
    left: 0;
    z-index: 3;
    font-size: 13px;
    font-weight: 600;
    color: rgb(46, 112, 250);
    line-height: 1;
    background-color: rgba(46, 112, 250, 0.1);
    padding: 10px;
    border-radius: 6px; 
}

// OrderDetails Card

.OrderDetailsCard {
    margin-bottom: 15px;
    position: relative;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-direction: column;
    flex-direction: column;
    min-width: 0;
    word-wrap: break-word;
    background-color: #fff;
    background-clip: border-box;
}
.orderstyle__OrderDetailsWrapper {
    width: 100%;
    min-height: calc(100vh - 190px);
    display: flex;
    flex-direction: column;
    border-width: 1px;
    border-style: solid;
    border-color: rgb(241, 241, 241);
    border-image: initial;
}
.orderstyle__Title {
    font-size: 16px;
    font-weight: 700;
    color: #000;
    margin: 15px 0px;
    padding: 0px 20px;
}
.order_detailsstyle__DeliveryInfo {
    width: 100%;
    display: flex;
    border-top: 1px solid rgb(241, 241, 241);
    border-bottom: 1px solid rgb(241, 241, 241);
}
.order_detailsstyle__DeliveryAddress {
    width: 100%;
    display: flex;
    flex-direction: column;
    border-right: 1px solid rgb(241, 241, 241);
    padding: 20px;
}
.order_detailsstyle__DeliveryAddress h3 {
    font-size: 15px;
    font-weight: 700;
    color: #000;
    margin-bottom: 10px;
}
.order_detailsstyle__Address {
    font-family: Lato, sans-serif;
    font-size: 15px;
    font-weight: 400;
    color: rgb(119, 121, 140);
    line-height: 1.5;
}
.order_detailsstyle__CostCalculation {
    width: 235px;
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
    padding: 20px;
}
.order_detailsstyle__PriceRow {
    font-size: 15px;
    font-weight: 400;
    color: #777;
    margin-bottom: 15px;
    width: 100%;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    justify-content: space-between;
}
.order_detailsstyle__Price {
    color: #000;
}
.order_detailsstyle__PriceRow:last-child {
    margin-bottom: 0px;
}
.order_detailsstyle__PriceRow.grandTotal {
    font-weight: 700;
    color: rgb(13, 17, 54);
}
.order_detailsstyle__ProgressWrapper {
    width: 100%;
    display: flex;
    padding: 30px 25px;
    border-bottom: 1px solid rgb(241, 241, 241);
}
.progress-boxstyle__ProgressStep {
    display: flex;
    flex-direction: column;
    -webkit-box-align: center;
    align-items: center;
    flex: 1 1 0%;
}
.progress-boxstyle__ProgressBarWrapper {
    position: relative;
    width: 100%;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    margin-bottom: 15px;
}
.progress-boxstyle__StatusBox {
    font-size: 13px;
    font-weight: 700;
    color: rgb(0, 158, 127);
    width: 36px;
    height: 36px;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    background-color: rgb(255, 255, 255);
    z-index: 1;
    border-radius: 50%;
    border-width: 1px;
    border-style: dashed;
    border-color: rgb(0, 158, 127);
    border-image: initial;
}
.progress-boxstyle__ProgressBarWrapper.checked .progress-boxstyle__StatusBox {
    background-color: rgb(0, 158, 127);
    color: rgb(255, 255, 255);
}
.progress-boxstyle__CheckMarkWrapper {
    width: 13px;
    height: 17px;
}
.progress-boxstyle__CheckMarkWrapper svg {
    width: 100%;
}
.progress-boxstyle__ProgressBar {
    width: 100%;
    height: 4px;
    background-color: rgb(230, 230, 230);
    position: absolute;
    top: 50%;
    left: 0px;
    margin-top: -2px;
}
.progress-boxstyle__ProgressBarWrapper.checked .progress-boxstyle__ProgressBar {
    background-color: rgb(0, 158, 127);
}
.progress-boxstyle__ProgressStep:first-child .progress-boxstyle__ProgressBar {
    width: 50%;
    left: 50%;
}
.progress-boxstyle__StatusDetails {
    display: flex;
    flex-direction: column;
    -webkit-box-align: center;
    align-items: center;
}
.progress-boxstyle__StatusTitle {
    font-family: Lato, sans-serif;
    font-size: 15px;
    font-weight: 700;
    color: rgb(13, 17, 54);
    text-align: center;
    padding: 0px 8px;
}
.rc-table {
	font-size: 12px;
	color: #666;
	line-height: 1.5;
	box-sizing: border-box;
	position: relative
}
.rc-table-rtl {
	direction: rtl
}
.rc-table table {
	border-spacing: 0;
	width: 100%
}
.rc-table td,
.rc-table th {
	position: relative;
	border: 1px solid red;
	border-top: 0;
	border-left: 0;
	transition: box-shadow .3s;
	padding: 16px 8px;
	box-sizing: border-box;
	white-space: normal;
	word-break: break-word
}
.rc-table-rtl.rc-table td,
.rc-table-rtl.rc-table th {
	border-left: 1px solid red;
	border-right: 0
}
.rc-table-cell-fix-left,
.rc-table-cell-fix-right {
	z-index: 1
}
.rc-table-cell-fix-right:last-child {
	border-right-color: transparent
}
.rc-table-rtl .rc-table-cell-fix-right:last-child {
	border-right-color: red
}
.rc-table-rtl .rc-table-cell-fix-left:last-child {
	border-left-color: transparent
}
.rc-table-rtl .rc-table-cell-fix-left-first {
	box-shadow: 1px 0 0 red
}
.rc-table-cell-fix-left-first:after,
.rc-table-cell-fix-left-last:after {
	pointer-events: none;
	content: "";
	transition: box-shadow .3s;
	position: absolute;
	top: 0;
	bottom: -1px;
	width: 20px;
	right: -1px;
	transform: translateX(100%)
}
.rc-table-cell-fix-right-first,
.rc-table-cell-fix-right-last {
	box-shadow: -1px 0 0 red
}
.rc-table-rtl .rc-table-cell-fix-right-first,
.rc-table-rtl .rc-table-cell-fix-right-last {
	box-shadow: none
}
.rc-table-cell-fix-right-first:after,
.rc-table-cell-fix-right-last:after {
	pointer-events: none;
	content: "";
	transition: box-shadow .3s;
	position: absolute;
	top: 0;
	bottom: -1px;
	width: 20px;
	left: -1px;
	transform: translateX(-100%)
}
.rc-table-cell.rc-table-cell-ellipsis {
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis
}
.rc-table-cell.rc-table-cell-ellipsis.rc-table-cell-fix-left-first,
.rc-table-cell.rc-table-cell-ellipsis.rc-table-cell-fix-left-last,
.rc-table-cell.rc-table-cell-ellipsis.rc-table-cell-fix-right-first .rc-table-cell.rc-table-cell-ellipsis.rc-table-cell-fix-right-last {
	overflow: visible
}
.rc-table-cell.rc-table-cell-ellipsis.rc-table-cell-fix-left-first .rc-table-cell-content,
.rc-table-cell.rc-table-cell-ellipsis.rc-table-cell-fix-left-last .rc-table-cell-content,
.rc-table-cell.rc-table-cell-ellipsis.rc-table-cell-fix-right-first .rc-table-cell.rc-table-cell-ellipsis.rc-table-cell-fix-right-last .rc-table-cell-content {
	overflow: hidden;
	text-overflow: ellipsis;
	display: block
}
.rc-table-ping-left .rc-table-cell-fix-left-first:after,
.rc-table-ping-left .rc-table-cell-fix-left-last:after {
	box-shadow: inset 10px 0 8px -8px green
}
.rc-table-ping-right .rc-table-cell-fix-right-first:after,
.rc-table-ping-right .rc-table-cell-fix-right-last:after {
	box-shadow: inset -10px 0 8px -8px green
}
.rc-table-expand-icon-col {
	width: 60px
}
.rc-table-row-expand-icon-cell {
	text-align: center
}
.rc-table thead td,
.rc-table thead th {
	background: #f7f7f7;
	text-align: center
}
.rc-table thead .rc-table-cell-scrollbar:after {
	position: absolute;
	content: "";
	top: 0;
	bottom: 0;
	left: -1px;
	width: 1px;
	background: #f7f7f7
}
.rc-table-rtl.rc-table thead .rc-table-cell-scrollbar:after {
	right: -1px;
	left: auto
}
.rc-table-header {
	border: 1px solid red;
	border-right: 0;
	border-bottom: 0
}
.rc-table-placeholder {
	text-align: center
}
.rc-table tbody tr td,
.rc-table tbody tr th {
	background: #fff
}
.order_detailsstyle__OrderTableWrapper .rc-table-content {
	border-width: 0px;
    border-style: initial;
    border-color: initial;
    border-image: initial;
	border-radius: 5px 0 0 0
}
.rc-table-body {
	border: 1px solid red;
	border-right: 0;
	border-bottom: 0;
	border-top: 0
}
.rc-table-fixed-column .rc-table-body:after {
	content: "";
	position: absolute;
	right: 0;
	top: 0;
	bottom: 0;
	border-right: 1px solid red;
	z-index: 1
}
.rc-table-expanded-row .rc-table-cell {
	box-shadow: inset 0 8px 8px -8px green
}
.rc-table-expanded-row-fixed {
	box-sizing: border-box;
	padding: 16px 8px;
	margin: -16px -10px -16px -8px
}
.rc-table-expanded-row-fixed:after {
	content: "";
	position: absolute;
	width: 0;
	top: 0;
	bottom: 0;
	right: 1px;
	border-right: 1px solid red
}
.rc-table-row-expand-icon {
	display: inline-block;
	width: 16px;
	height: 16px;
	border: 1px solid;
	color: #aaa;
	vertical-align: middle;
	text-align: center;
	cursor: pointer;
	line-height: 16px
}
.rc-table-row-expand-icon.rc-table-row-expanded:after {
	content: "-"
}
.rc-table-row-expand-icon.rc-table-row-collapsed:after {
	content: "+"
}
.rc-table-row-expand-icon.rc-table-row-spaced {
	visibility: hidden
}
.rc-table-title {
	border: 1px solid red;
	border-bottom: 0;
	padding: 16px 8px
}
.rc-table-footer {
	border: 1px solid red;
	border-top: 0;
	padding: 16px 8px
}
.rc-table tfoot td {
	background: #fff
}
.order_detailsstyle__OrderTable {
    border-spacing: 0;
    width: 100%;
    border-collapse: collapse;
    table-layout: fixed;
}
.order_detailsstyle__OrderTable thead th:first-child {
    text-align: left;
    color: #000;
    padding: 8px 20px;
    padding-left: 110px;
    border-width: initial;
    border-style: none;
    border-color: initial;
    border-image: initial;
}
.order_detailsstyle__OrderTable tr td,
.order_detailsstyle__OrderTable thead th {
    font-size: 15px;
    font-weight: 400;
    color: #000;
    padding: 20px;
    border-width: initial;
    border-style: none;
    border-color: initial;
    border-image: initial;
}
.orderstyle__ItemWrapper {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
}
.orderstyle__ImageWrapper {
    width: 75px;
    height: 75px;
    display: flex;
    flex-shrink: 0;
}
.orderstyle__ImageWrapper img {
    width: 100%;
    height: 100%;
    max-width: 100%;
    object-fit: cover;
}
.orderstyle__ItemDetails {
    display: flex;
    flex-direction: column;
    margin-left: 15px;
    overflow: hidden;
}
.orderstyle__ItemName {
    font-size: 15px;
    font-weight: 700;
    color: #000;
    margin-bottom: 0px;
    text-overflow: ellipsis;
    display: block;
    overflow: hidden;
}
.orderstyle__ItemSize {
    font-size: 13px;
    font-weight: 400;
    color: #000;
    display: block;
    margin-bottom: 0px;
}
.orderstyle__ItemPrice {
    font-size: 13px;
    font-weight: 400;
    color: #E68C45;
}
`