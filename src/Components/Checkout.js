import React, { Component } from 'react'
import styled from 'styled-components';
import Footer2 from './Common/Footer2';
import NavBar from './Common/NavBar';
import TopBar from './Common/TopBar';

export default class Checkout extends Component {
    componentWillMount() {
        window.scrollTo(0, 0)
    }
    constructor(props) {
        super(props);
        this.state = { isToggleBilling: false };
        this.handleClickBilling = this.handleClickBilling.bind(this);
        this.state = { isToggleShipping: false };
        this.handleClickShipping = this.handleClickShipping.bind(this);
    }

    handleClickBilling(e) {
        this.setState({ isToggleBilling: !this.state.isToggleBilling });
    }

    handleClickShipping(e) {
        this.setState({ isToggleShipping: !this.state.isToggleShipping });
    }
    render() {
        return (
            <React.Fragment>
                <TopBar />
                <NavBar />
                <CheckoutWrap>
                    <div className="container-fluid">
                        <form className="checkout woocommerce-checkout">
                            <div className="row">
                                <div className="col-md-7 col-xs-12">
                                    <div className="details-check edit-mode">
                                        <div className="details-check-header">
                                            <h3 className="details-check-title">
                                                {/* <span className="countBlock">1</span> */}
                                                Delivery Address
                                                {/* <i className="fas fa-check-circle ml-2"></i> */}
                                                <img className="hide" src="/Assets/images/approved-signal.svg"></img>
                                            </h3>
                                            <div className="details-check-toolbar hide">
                                                <button type="button" className="btn btn-light-primary btn-smm">
                                                    Change
                                                </button>
                                            </div>
                                        </div>
                                        <div className="details-check-body">
                                            {/* <div className="selectedOptions">
                                                <span>
                                                    #40, rajaram mohan Roy road, opp. Kanteerava stadium, Bangalore, Karnataka, India, mishra peda, Bangalore, Karnataka -
                                                    <span class="_3n0HwW">560027</span>
                                                </span>
                                            </div> */}
                                            <div className="col2-set customer_details">
                                                <div className="woocommerce-billing-fields">
                                                    {/* <h3>Delivery Address (For Billing)</h3> */}

                                                    <div className="checkout_twostyle__ButtonGroup">
                                                        <div className="radio_group__RadioGroupWrapper radioGroup ">
                                                            <label for="address-12312" className="radio_card__CardWrapper label item-has-title active">
                                                                <input type="radio" id="address-12312" name="address" value="27 Street, 2569 Heritage Road Visalia, CA 93291" checked="" />
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
                                                            <label for="address-23423" className="radio_card__CardWrapper label item-has-title not_active">
                                                                <input type="radio" id="address-23423" name="address" value="33 Baker Street, Crescent Road, CA 65746" />
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
                                                            <label for="billing_first_name" className="">
                                                                First name&nbsp;<abbr className="required" title="required">*</abbr>
                                                            </label>
                                                            <span className="woocommerce-input-wrapper">
                                                                <input type="text" className="input-text " name="billing_first_name" id="billing_first_name" placeholder="" autocomplete="given-name" />
                                                            </span>
                                                        </p>
                                                        <p className="row-form form-row-last validate-required" id="billing_last_name_field" data-priority="20">
                                                            <label for="billing_last_name" className="">
                                                                Last name&nbsp;<abbr className="required" title="required">*</abbr>
                                                            </label>
                                                            <span className="woocommerce-input-wrapper">
                                                                <input type="text" className="input-text " name="billing_last_name" id="billing_last_name" placeholder="" autocomplete="family-name" />
                                                            </span>
                                                        </p>

                                                        <p className="row-form form-row-wide validate-phone" id="billing_phone_field" data-priority="100">
                                                            <label for="billing_phone" className="">
                                                                Phone&nbsp;<abbr className="required" title="required">*</abbr>
                                                            </label>
                                                            <span className="woocommerce-input-wrapper">
                                                                <input type="tel" className="input-text " name="billing_phone" id="billing_phone" placeholder="" autocomplete="tel" />
                                                            </span>
                                                        </p>
                                                        <p className="row-form form-row-wide validate-required validate-email" id="billing_email_field" data-priority="110">
                                                            <label for="billing_email" className="">
                                                                Email address&nbsp;<abbr className="required" title="required">*</abbr>
                                                            </label>
                                                            <span className="woocommerce-input-wrapper">
                                                                <input type="email" className="input-text " name="billing_email" id="billing_email" placeholder="" autocomplete="email username" />
                                                            </span>
                                                        </p>
                                                        <p className="row-form form-row-wide" id="billing_company_field" data-priority="30">
                                                            <label for="billing_company" className="">
                                                                Company name&nbsp;<span className="optional">(optional)</span>
                                                            </label>
                                                            <span className="woocommerce-input-wrapper">
                                                                <input type="text" className="input-text " name="billing_company" id="billing_company" placeholder="" autocomplete="organization" />
                                                            </span>
                                                        </p>
                                                        <p className="row-form form-row-wide address-field update_totals_on_change validate-required" id="billing_country_field" data-priority="40">
                                                            <label for="billing_country" className="">
                                                                Country&nbsp;<abbr className="required" title="required">*</abbr>
                                                            </label>
                                                            <span className="woocommerce-input-wrapper">
                                                                <select name="billing_country" id="billing_country" className="country_to_state country_select " autocomplete="country">
                                                                    <option>Select a country&hellip;</option>
                                                                    <option value="AX">&#197;land Islands</option>
                                                                    <option value="ZW">Zimbabwe</option>
                                                                </select>
                                                            </span>
                                                        </p>
                                                        <p className="row-form form-row-wide address-field validate-required" id="billing_address_1_field" data-priority="50">
                                                            <label for="billing_address_1" className="">
                                                                Street address&nbsp;<abbr className="required" title="required">*</abbr>
                                                            </label>
                                                            <span className="woocommerce-input-wrapper">
                                                                <input type="text" className="input-text " name="billing_address_1" id="billing_address_1" placeholder="House number and street name" autocomplete="address-line1" data-placeholder="House number and street name" />
                                                            </span>
                                                        </p>
                                                        <p className="row-form form-row-wide address-field" id="billing_address_2_field" data-priority="60">
                                                            <label for="billing_address_2" className="screen-reader-text">
                                                                Apartment, suite, unit etc. (optional)&nbsp;<span className="optional">(optional)</span>
                                                            </label>
                                                            <span className="woocommerce-input-wrapper">
                                                                <input type="text" className="input-text " name="billing_address_2" id="billing_address_2" placeholder="Apartment, suite, unit etc. (optional)" autocomplete="address-line2" data-placeholder="Apartment, suite, unit etc. (optional)" />
                                                            </span>
                                                        </p>
                                                        <p className="row-form form-row-wide address-field validate-required" id="billing_city_field" data-priority="70" data-o_className="row-form form-row-wide address-field validate-required">
                                                            <label for="billing_city" className="">
                                                                Town / City&nbsp;<abbr className="required" title="required">*</abbr>
                                                            </label>
                                                            <span className="woocommerce-input-wrapper">
                                                                <input type="text" className="input-text " name="billing_city" id="billing_city" placeholder="" autocomplete="address-level2" />
                                                            </span>
                                                        </p>
                                                        <p className="row-form form-row-wide address-field validate-required validate-state" id="billing_state_field" data-priority="80" data-o_className="row-form form-row-wide address-field validate-required validate-state">
                                                            <label for="billing_state" className="">
                                                                State / County&nbsp;<abbr className="required" title="required">*</abbr>
                                                            </label>
                                                            <span className="woocommerce-input-wrapper">
                                                                <input type="text" className="input-text " name="billing_state" id="billing_state" placeholder="" autocomplete="state" />
                                                            </span>
                                                        </p>
                                                        <p className="row-form form-row-wide address-field validate-required validate-postcode" id="billing_postcode_field" data-priority="90" data-o_className="row-form form-row-wide address-field validate-required validate-postcode">
                                                            <label for="billing_postcode" className="">
                                                                Postcode / ZIP&nbsp;<abbr className="required" title="required">*</abbr>
                                                            </label>
                                                            <span className="woocommerce-input-wrapper">
                                                                <input type="text" className="input-text " name="billing_postcode" id="billing_postcode" placeholder="" autocomplete="postal-code" />
                                                            </span>
                                                        </p>
                                                        <p className="row-form form-row-wide validate-phone" id="billing_phone_field" data-priority="100">
                                                            <label for="billing_phone" className="">
                                                                Landmark&nbsp;<span className="optional">(optional)</span>
                                                            </label>
                                                            <span className="woocommerce-input-wrapper">
                                                                <input type="text" className="input-text" name="billing_landmark" id="billing_landmark" placeholder="" autocomplete="landmark" />
                                                            </span>
                                                        </p>
                                                        <p className="row-form form-row-wide">
                                                            <div className="custom-control custom-radio custom-control-inline">
                                                                <input type="radio" className="custom-control-input" id="defaultBillingHome" name="radioBilling" />
                                                                <label className="custom-control-label" for="defaultBillingHome">Home (All day delivery)</label>
                                                            </div>
                                                            <div className="custom-control custom-radio custom-control-inline">
                                                                <input type="radio" className="custom-control-input" id="defaultBillingWork" name="radioBilling" />
                                                                <label className="custom-control-label" for="defaultBillingWork">Work (Delivery between 10 AM - 5 PM)</label>
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
                                                            <input id="ship-to-different-address-checkbox" className="input-checkbox" type="checkbox" name="ship_to_different_address" value="1" onClick={this.handleClickShipping} />
                                                            <label for="ship-to-different-address-checkbox" className="checkbox">Ship to a different address?</label>
                                                        </p>
                                                        <div className="shipping_address" style={{ display: this.state.isToggleShipping ? 'block' : 'none' }}>
                                                            <p className="row-form form-row-first validate-required" id="shipping_first_name_field" data-priority="10">
                                                                <label for="shipping_first_name" className="">
                                                                    First name&nbsp;<abbr className="required" title="required">*</abbr>
                                                                </label>
                                                                <span className="woocommerce-input-wrapper">
                                                                    <input type="text" className="input-text " name="shipping_first_name" id="shipping_first_name" placeholder="" autocomplete="given-name" />
                                                                </span>
                                                            </p>
                                                            <p className="row-form form-row-last validate-required" id="shipping_last_name_field" data-priority="20">
                                                                <label for="shipping_last_name" className="">
                                                                    Last name&nbsp;<abbr className="required" title="required">*</abbr>
                                                                </label>
                                                                <span className="woocommerce-input-wrapper">
                                                                    <input type="text" className="input-text " name="shipping_last_name" id="shipping_last_name" placeholder="" autocomplete="family-name" />
                                                                </span>
                                                            </p>
                                                            <p className="row-form form-row-wide validate-phone" id="shipping_phone_field" data-priority="100">
                                                                <label for="shipping_phone" className="">
                                                                    Phone&nbsp;<abbr className="required" title="required">*</abbr>
                                                                </label>
                                                                <span className="woocommerce-input-wrapper">
                                                                    <input type="tel" className="input-text " name="shipping_phone" id="shipping_phone" placeholder="" autocomplete="tel" />
                                                                </span>
                                                            </p>
                                                            <p className="row-form form-row-wide validate-required validate-email" id="shipping_email_field" data-priority="110">
                                                                <label for="shipping_email" className="">
                                                                    Email address&nbsp;<abbr className="required" title="required">*</abbr>
                                                                </label>
                                                                <span className="woocommerce-input-wrapper">
                                                                    <input type="email" className="input-text " name="shipping_email" id="shipping_email" placeholder="" autocomplete="email username" />
                                                                </span>
                                                            </p>
                                                            <p className="row-form form-row-wide" id="shipping_company_field" data-priority="30">
                                                                <label for="shipping_company" className="">
                                                                    Company name&nbsp;<span className="optional">(optional)</span>
                                                                </label>
                                                                <span className="woocommerce-input-wrapper">
                                                                    <input type="text" className="input-text " name="shipping_company" id="shipping_company" placeholder="" autocomplete="organization" />
                                                                </span>
                                                            </p>
                                                            <p className="row-form form-row-wide address-field update_totals_on_change validate-required" id="shipping_country_field" data-priority="40">
                                                                <label for="shipping_country" className="">
                                                                    Country&nbsp;<abbr className="required" title="required">*</abbr>
                                                                </label>
                                                                <span className="woocommerce-input-wrapper">
                                                                    <select name="shipping_country" id="shipping_country" className="country_to_state country_select " autocomplete="country">
                                                                        <option>Select a country&hellip;</option>
                                                                        <option value="AX">&#197;land Islands</option>
                                                                        <option value="YE">Yemen</option>
                                                                        <option value="ZM">Zambia</option>
                                                                        <option value="ZW">Zimbabwe</option>
                                                                    </select>
                                                                </span>
                                                            </p>
                                                            <p className="row-form form-row-wide address-field validate-required" id="shipping_address_1_field" data-priority="50">
                                                                <label for="shipping_address_1" className="">
                                                                    Street address&nbsp;<abbr className="required" title="required">*</abbr>
                                                                </label>
                                                                <span className="woocommerce-input-wrapper">
                                                                    <input type="text" className="input-text " name="shipping_address_1" id="shipping_address_1" placeholder="House number and street name" autocomplete="address-line1" data-placeholder="House number and street name" />
                                                                </span>
                                                            </p>
                                                            <p className="row-form form-row-wide address-field" id="shipping_address_2_field" data-priority="60">
                                                                <label for="shipping_address_2" className="screen-reader-text">
                                                                    Apartment, suite, unit etc. (optional)&nbsp;<span className="optional">(optional)</span>
                                                                </label>
                                                                <span className="woocommerce-input-wrapper">
                                                                    <input type="text" className="input-text " name="shipping_address_2" id="shipping_address_2" placeholder="Apartment, suite, unit etc. (optional)" autocomplete="address-line2" data-placeholder="Apartment, suite, unit etc. (optional)" />
                                                                </span>
                                                            </p>
                                                            <p className="row-form form-row-wide address-field validate-required" id="shipping_city_field" data-priority="70" data-o_className="row-form form-row-wide address-field validate-required">
                                                                <label for="shipping_city" className="">
                                                                    Town / City&nbsp;<abbr className="required" title="required">*</abbr>
                                                                </label>
                                                                <span className="woocommerce-input-wrapper">
                                                                    <input type="text" className="input-text " name="shipping_city" id="shipping_city" placeholder="" autocomplete="address-level2" />
                                                                </span>
                                                            </p>
                                                            <p className="row-form form-row-wide address-field validate-required validate-state" id="shipping_state_field" data-priority="80" data-o_className="row-form form-row-wide address-field validate-required validate-state">
                                                                <label for="shipping_state" className="">State / County&nbsp;<abbr className="required" title="required">*</abbr>
                                                                </label>
                                                                <span className="woocommerce-input-wrapper">
                                                                    <input type="text" className="input-text " name="shiiping_state" id="shipping_state" placeholder="" autocomplete="state" />
                                                                </span>
                                                            </p>
                                                            <p className="row-form form-row-wide address-field validate-required validate-postcode" id="shipping_postcode_field" data-priority="90" data-o_className="row-form form-row-wide address-field validate-required validate-postcode">
                                                                <label for="shipping_postcode" className="">
                                                                    Postcode / ZIP&nbsp;<abbr className="required" title="required">*</abbr>
                                                                </label>
                                                                <span className="woocommerce-input-wrapper">
                                                                    <input type="text" className="input-text " name="shipping_postcode" id="shipping_postcode" placeholder="" autocomplete="postal-code" />
                                                                </span>
                                                            </p>
                                                            <p className="row-form form-row-wide validate-phone" id="billing_phone_field" data-priority="100">
                                                                <label for="billing_phone" className="">
                                                                    Landmark&nbsp;<span className="optional">(optional)</span>
                                                                </label>
                                                                <span className="woocommerce-input-wrapper">
                                                                    <input type="text" className="input-text" name="billing_landmark" id="billing_landmark" placeholder="" autocomplete="landmark" />
                                                                </span>
                                                            </p>
                                                            <p className="row-form form-row-wide">
                                                                <div className="custom-control custom-radio custom-control-inline">
                                                                    <input type="radio" className="custom-control-input" id="defaultShippingHome" name="radioShipping" />
                                                                    <label className="custom-control-label" for="defaultShippingHome">Home (All day delivery)</label>
                                                                </div>
                                                                <div className="custom-control custom-radio custom-control-inline">
                                                                    <input type="radio" className="custom-control-input" id="defaultShippingWork" name="radioShipping" />
                                                                    <label className="custom-control-label" for="defaultShippingWork">Work (Delivery between 10 AM - 5 PM)</label>
                                                                </div>
                                                            </p>
                                                            <p className="row-form form-row-wide">
                                                                <button className="btn btn-theme-orange">SAVE AND DELIVERY HERE</button>
                                                                <button type="button" className="btn btn-link" onClick={this.handleClickShipping} style={{ display: this.state.isToggleShipping ? 'inline-block' : 'none' }}>CANCEL</button>
                                                            </p>
                                                        </div>

                                                        <p className="row-form notes" id="order_comments_field" data-priority="">
                                                            <label for="order_comments" className="">
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

                                    <div className="details-check">
                                        <div className="details-check-header">
                                            <h3 className="details-check-title">
                                                {/* <span className="countBlock">2</span> */}
                                                Delivery Schedule
                                                {/* <i className="fas fa-check-circle ml-2"></i> */}
                                                <img src="/Assets/images/approved-signal.svg"></img>
                                            </h3>
                                            <div className="details-check-toolbar">
                                                <button type="button" className="btn btn-light-primary btn-smm">
                                                    Change
                                                </button>
                                            </div>
                                        </div>
                                        <div className="details-check-body">
                                            <div className="col2-set customer_details">
                                                <div className="">
                                                    <div className="selectedOptions">
                                                        Express Delivery - 90 min express delivery
                                                    </div>
                                                    <div className="checkout_twostyle__ButtonGroup hide">
                                                        <div className="radio_group__RadioGroupWrapper radioGroup ">
                                                            <label for="schedule-1" className="radio_card__CardWrapper scheduleWrapper label item-has-title active">
                                                                <input type="radio" id="schedule-1" name="timings" checked="" />
                                                                <span className="radio_card__CardTitle">
                                                                    Express Delivery
                                                                </span>
                                                                <span className="radio_card__CardContent">
                                                                    90 min express delivery
                                                                </span>
                                                            </label>
                                                            <label for="schedule-2" className="radio_card__CardWrapper scheduleWrapper label item-has-title">
                                                                <input type="radio" id="schedule-2" name="timings" />
                                                                <span className="radio_card__CardTitle">
                                                                    8am-11am
                                                                </span>
                                                                <span className="radio_card__CardContent">
                                                                    8.00 AM - 11.00 AM
                                                                </span>
                                                            </label>
                                                            <label for="schedule-3" className="radio_card__CardWrapper scheduleWrapper label item-has-title">
                                                                <input type="radio" id="schedule-3" name="timings" />
                                                                <span className="radio_card__CardTitle">
                                                                    11am-2pm
                                                                </span>
                                                                <span className="radio_card__CardContent">
                                                                    11.00 AM - 2.00 PM
                                                                </span>
                                                            </label>
                                                            <label for="schedule-3" className="radio_card__CardWrapper scheduleWrapper label item-has-title">
                                                                <input type="radio" id="schedule-3" name="timings" />
                                                                <span className="radio_card__CardTitle">
                                                                    2pm-5pm
                                                                </span>
                                                                <span className="radio_card__CardContent">
                                                                    2.00 PM - 5.00 PM
                                                                </span>
                                                            </label>
                                                            <label for="schedule-4" className="radio_card__CardWrapper scheduleWrapper label item-has-title">
                                                                <input type="radio" id="schedule-4" name="timings" />
                                                                <span className="radio_card__CardTitle">
                                                                    5pm-8pm
                                                                </span>
                                                                <span className="radio_card__CardContent">
                                                                    5.00 PM - 8.00 PM
                                                                </span>
                                                            </label>
                                                            <label for="schedule-5" className="radio_card__CardWrapper scheduleWrapper label item-has-title">
                                                                <input type="radio" id="schedule-5" name="timings" />
                                                                <span className="radio_card__CardTitle">
                                                                    Next Day
                                                                </span>
                                                                <span className="radio_card__CardContent">
                                                                    Next Day
                                                                </span>
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="details-check">
                                        <div className="details-check-header">
                                            <h3 className="details-check-title">
                                                {/* <span className="countBlock">2</span> */}
                                                Payment Options
                                                {/* <i className="fas fa-check-circle ml-2"></i> */}
                                                <img src="/Assets/images/approved-signal.svg"></img>
                                            </h3>
                                            <div className="details-check-toolbar">
                                                <button type="button" className="btn btn-light-primary btn-smm">
                                                    Change
                                                </button>
                                            </div>
                                        </div>
                                        <div className="details-check-body">
                                            <div className="selectedOptions">
                                                Cash on delivery
                                            </div>
                                            <div className="paymentBox hide">
                                                {/* <h3 className="row-form">Payment Options</h3> */}
                                                <div class="paymentOptionBlock">
                                                    <div className="paymentOnCash">
                                                        <div class="custom-control custom-radio">
                                                            <input type="radio" class="custom-control-input" id="cashOnDelivery" name="paymentOption" />
                                                            <label class="custom-control-label" for="paymentOption">Cash on delivery</label>
                                                        </div>
                                                        <div class="payment_box payment_method_cod">
                                                            <p>Pay with cash upon delivery.</p>
                                                        </div>
                                                    </div>
                                                    <div className="paymentOnCard">
                                                        <div class="custom-control custom-radio">
                                                            <input type="radio" class="custom-control-input" id="cardTransaction" name="paymentOption" />
                                                            <label class="custom-control-label" for="cardTransaction">Credit/Debit Card</label>
                                                        </div>
                                                        <header class="payment_groupstyle__Header mt-2">
                                                            <span class="payment_groupstyle__SavedCard">Saved Cards</span>
                                                            <button type="button" class="button__StyledButton addCard">
                                                                <span class="payment_groupstyle__IconWrapper">
                                                                    <i className="fal fa-plus"></i>
                                                                </span>
                                                                Add Card
                                                            </button>
                                                        </header>

                                                        <div className="payment_groupstyle__PaymentCardList">
                                                            <div className="ltr">
                                                                <label for="payment-card-179012" class="payment_cardstyle__Wrapper payment-card-radio ">
                                                                    <input type="radio" id="payment-card-179012" name="Jhon Doe Smith" value="payment-card-179012" checked="" />
                                                                    <span class="payment_cardstyle__PaymentCardWrapper payment-card">
                                                                        <span class="payment_cardstyle__CardLogo">
                                                                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAAOCAYAAAB+UA+TAAAEhklEQVRIidWVXWxUVRSFv3XntkBpYUZqKQ0tqVgpPyp/wohEkBBMNKJGQ3wwhF8fTIQHxCCUONopiJEYNTFRQw3+oOIT6pORiDxACzEoodCIRmyLEIl2qKPT6cy924e5tLRTEI01cSf35uass9de69xz9hHAiLmx8cMU+kbSdQwIg04ZL3Y21W0biP2fwgEowJk/mEkAQQTREI42rPhvpf274eRezuS/nCn/riFXM4ThAsih16jTk8LJ9uRNzIwpvZmYOcTkD0YUjtbvk7S0/6h91tnl3UdLLJ/wWuPt8yPJZM4hSi7jbUF6h5WVO66a23huCmRfwzjiBIlTLmFOJo3jZfKedE3NDKra41filFgEYNhRsJZgdElklPvYPzYJkMneEphMAV8Cp0FTMZ5nd8dNV0/OzgQWICt2YG/IUG2vYN/Lm+6HXFIzbgVTdDC6klmxUlAxQKLLW9R5eOs0M44DmFlOzKxY0eg58dksjLl/y6j8nDbjKKsqF+LTpyHjlwPw1s/lNP40k71W2D/ZAl9qdUvmfDdREMqNG8L6m5RD4p57obAQ4JfBtLiuG4ix87TEktyxo0R+TxiETK2RufHHTfaSRGG42z1DNP65xBrM6nxU5IjNZrySaKpbDxCJ1r+BtNawlxMondNKKwAhm4opVzhUcpxdbfuwdO7I/NZ+isb2TmAePjUYtQgwa3VD8vsakZc1b0SRAMwJkQ1H6Fq8GBsTCRaIg4MZ9aVaBwNRHI7WH8DLjEOqwkiRzX5KofsjpgzGCxKVwBoAHzttpjbEZsFDwPrwvPidGGsx2hN/DN+C2R4kMO6msf0AxrSg7CEs+TTSUrAzmHaDlgDzABg1vo1key0ICtxWV/Q1ouyY0ubOZQ8Muj3Bvsfx3hwMERZwqFhigUHa4KD59qwKQg0CTPZE4vDW1wHC0fhEiTmeEzqZPLTlRCQab0dUhm9rmI5vuw3zfdMyjm/8HT0yOSgyAZiA8SvifTw9RchvwUjjFNzFqnFnaDy7C/w2zH4APIwbwdIsr2hzzbHJIrcVsmPLUvn+7BzSftzCDSwv776C0VoQ5vNcornumcux8O3xnQCGjgGMnr89QtabYOAlD9WcCgjeAzbJ9feBqnzTtq7muib2Wohkxw0AOKHZrKj4qpe48WwlaBTiAiPL23Na/WkIkE7R1VGNo2EYxyB3vfT+Ua+8rOgyg0+yumrnYMby1kKqFeBLTfkgXyOmO9iecLT+XTzvfomxZnwLyzwA8/wPFHI2gaqAExeHZ3OLlTw/CQhhlu5nEkA9FzA3BVxPsuMjGjtaMFsfoCdxVEvuOLUCODImXcrNlpWW9RG5X1yLycBMNUbK8zLHBkK+shswPpSpAvEoPh8HUEtfurrMzAfrzmbsYQ7EsrlkrzoQ05xXc2V1N2YbAQ94ELNZiE9yhGrB/ODqsZMAikTrtxgUmOOkLq5e3oCCDpwcP5x1QccbylgYc8Pp0BGhGWa2LtG09dWhKKPer11tFUgdgDA6WF1ZORQFB0ZkbnwTDtsN9icO1y0eqjp/Anh31Sy27YKTAAAAAElFTkSuQmCC" alt="card-card-179012" />
                                                                        </span>
                                                                        <span class="payment_cardstyle__CardNumTitle">
                                                                            Card Number
                                                                        </span>
                                                                        <span class="payment_cardstyle__CardNumber">
                                                                            <span>****</span><span>****</span><span>****</span><span class="card-number">2349</span>
                                                                        </span>
                                                                        <span class="payment_cardstyle__Name">
                                                                            Jhon Doe Smith
                                                                        </span>
                                                                    </span>
                                                                    <span class="payment_cardstyle__DeleteButton card-remove-btn">
                                                                        <i className="fa fa-times"></i>
                                                                    </span>
                                                                </label>
                                                                <label for="payment-card-179012" class="payment_cardstyle__Wrapper payment-card-radio ">
                                                                    <input type="radio" id="payment-card-179012" name="Jhon Doe Smith" value="payment-card-179012" checked="" />
                                                                    <span class="payment_cardstyle__PaymentCardWrapper payment-card">
                                                                        <span class="payment_cardstyle__CardLogo">
                                                                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAOCAYAAAA1+Nx+AAAC2ElEQVQ4jYWUX2jbVRTHP+f+fvn9mqxJk9WmjemaNmQtKzrZmCDIVBjbQHBsCrKHUhUfHGPDwUBBQX0Yw4FPwqz4MvBhMnwQKfggE/tQ2Biyzf2nm2lX2y7d1ibt0qVNfr8cH3SlapMeuA/33u/3w7n3nnuEFXEH4jjmqIpsQ3ULIjHQnConQ+XqQDvM6E+4lZmmt8C8L9CL8hj4XYTLljAgffmrK5myDHfYq5hTiERZJVS1GN4mh5sPhD8Vkc7VNKA+6AnbnftE3sQHMAAjAesdFeuHWnAAEWk0MXtg8ZpXAw4gFpiPKouxb5dXstDqO2YMkYbaRmjuc7OBNpOWoOCm7HrSv8HKHrs/P2j7jjmyFhxLZxcueOkn08jOKqEtTl2LwgfAoAFem/nmex7t3gc/n8Pu7vmXcK57M+x4xW/osXgyvHnlUuwE954/C+s6/ge/vvQS91v6X9RT0ag9bkV6Nu18malIE5HuDOe37sb9+Eu8mzdo2/4Ckxevo+lky1JHO+JVeDgyykQJepqauPXd29zoeIPGrh04xavEkr3M+zHWhSNURr4QHDrN/fRmP/fHBNFUkumxKTa+/iqJriSlwjwbMu2EkglyQ8M81RKFcpnGjRlmhn5lffU2zyTm6HhuF60bUpSCvfx24Qpu4Ryjd7LEqxfBk6qdezqzIINnXd/zWZ9JEd+U4eF0ActxGf7lEq56OKUi5cUlHgwNs5BIkRkZxE4dZfRBkeaGKLnJHLOzBdzpH5nsOkY4YhGYzilB7sptx3yOyId1K8LW8dYjoeXLtqKGQJtV95FRhgP9+e0yBomKY7JrVZIV5XEgboUwEH8viAmbunyRyn67r3jGdMI9Rd6tnw54Bf3TTZtH8YOhNeGqnLb7imfgn5/cXfZPi/r7UM3XdtFeznqfSZDROmgfqscDDfn+5ZOs3F6t2Sk6hfJ1qFz96j/N7pDAs0AJ5XKtZvcX+dwJtfbM5ZQAAAAASUVORK5CYII=" alt="card-card-179012" />
                                                                        </span>
                                                                        <span class="payment_cardstyle__CardNumTitle">
                                                                            Card Number
                                                                        </span>
                                                                        <span class="payment_cardstyle__CardNumber">
                                                                            <span>****</span><span>****</span><span>****</span><span class="card-number">8724</span>
                                                                        </span>
                                                                        <span class="payment_cardstyle__Name">
                                                                            Jhon Doe Smith
                                                                        </span>
                                                                    </span>
                                                                    <span class="payment_cardstyle__DeleteButton card-remove-btn">
                                                                        <i className="fa fa-times"></i>
                                                                    </span>
                                                                </label>
                                                                <label for="payment-card-179012" class="payment_cardstyle__Wrapper payment-card-radio ">
                                                                    <input type="radio" id="payment-card-179012" name="Jhon Doe Smith" value="payment-card-179012" checked="" />
                                                                    <span class="payment_cardstyle__PaymentCardWrapper payment-card">
                                                                        <span class="payment_cardstyle__CardLogo">
                                                                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAMCAYAAAAOCs/+AAADWklEQVQ4jXWUb2iVdRTHP+e5d14ns0V0zdHS+6cXNfpDtC6LCiIkQwxK0DLYeC7UC0NIYq0XvVkSIVr2orBC825IEHdkUSBrU1SoILFiyC5i995tTJxzgWW7G07vc3rx/J7n97jN8+r8+53v95zf+f1EB9gFbEaJY6VMhh3Szo3Qk+7rxtHNAHgygOq3xPgGAJUpqu52AFqLjayo5RHpRDUN0oRwHjhFxe22ECpk+/eBthvHGSr5niAqAHqUNdTZgfIeQoOJbZStDPlqMUa2NgWSNKceos69OPzkYzBE1d3I/ccSeFd+RgjAIqK/Usk/FZqZwmuIfB2Jz1DJrwksB0C2cEW28v6GQ+8MXp1bddnEHrdF5l4ISan+RtkdRbQtglryY9M9lpReAj4A/RTlLMq5W4nKW4vsJNnD9wVW9Po4UW47tm7P/hcvdL/7V8vqfy0xocvqzufGZ4mplkzwOevjY6rufpaT9f2PIZozeeMIKV93csAkmImFckOGZxdWkt27NzU9e0czAMliE+jLJuMakgz2yhJzpBSC2GY+JFPYRWuxcQmxmL5t86Q3EsmFJW85MOlWQCfnbyYa3IE3MlqkmabadpBg7w5S3nTdAD8anru2agSAurMb9D+DmEDkE1bMlUgfsbmth+5CeNVvREe43lgEbpqaTyxPzJdBgMELD2ce/GhPByJdZhoKsS8AWH+kBWgy/ilmts0CMNE1hhd/Bhi1EyGF1E+RKqwFIBF/k3CFnAIXt82j+qep1XF7Yh7DgXr+77UvITztW3qcSmcZgFh96eIHMtY5QmX8EdAelHlD7k4c5xU4GUd1pyXtTZAqPAty1eQ1su5w2/LElGF/OoDweqTzA1aPvEgxi3/3V6ttkV6PSn4fcMLW9eZIT2xB5B6bJ98Rk5MIz4euBsnBolcJwHj+HzJ9vwPtYVy5THXiBwsibf4PCKiZWLPzI819CdBzKJdAsqCbCBLr+gtx+XIJ3mJRyQF9S4n5nRyP/MggegB6vUhC5KuQUsSXBOkISQeKstuY/lqoTlN1W0D8m6HXIZOqIaxEuM3EADz5npj3ZGjXObgoYwb0NAALzigUY1D7A2UDQgxYAL2IMorKZ4y5Q6T7d4LnnxE5akmB33ShH3gAZQHgf/VSJw5mgGMuAAAAAElFTkSuQmCC" alt="card-card-179012" />
                                                                        </span>
                                                                        <span class="payment_cardstyle__CardNumTitle">
                                                                            Card Number
                                                                        </span>
                                                                        <span class="payment_cardstyle__CardNumber">
                                                                            <span>****</span><span>****</span><span>****</span><span class="card-number">8724</span>
                                                                        </span>
                                                                        <span class="payment_cardstyle__Name">
                                                                            Jhon Doe Smith
                                                                        </span>
                                                                    </span>
                                                                    <span class="payment_cardstyle__DeleteButton card-remove-btn">
                                                                        <i className="fa fa-times"></i>
                                                                    </span>
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="paymentViaBank">
                                                        <div class="custom-control custom-radio">
                                                            <input type="radio" class="custom-control-input" id="bankTransaction" name="paymentOption" />
                                                            <label class="custom-control-label" for="bankTransaction"> Direct Bank Transfer</label>
                                                        </div>
                                                        <div class="payment_box payment_method_cod">
                                                            <p>
                                                                Make your payment directly into our bank account.
                                                                Please use your Order ID as the payment reference.
                                                                Your order will not be shipped until the funds have cleared in our account.
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="paymentViaCheque">
                                                        <div class="custom-control custom-radio">
                                                            <input type="radio" class="custom-control-input" id="chequeTransaction" name="paymentOption" />
                                                            <label class="custom-control-label" for="chequeTransaction"> Cheque Payments</label>
                                                        </div>
                                                        <div class="payment_box payment_method_cod">
                                                            <p>
                                                                Please send a check to Store Name, Store Street, Store Town, Store State / County, Store Postcode.
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="paymentViaCheque">
                                                        <div class="custom-control custom-radio">
                                                            <input type="radio" class="custom-control-input" id="paypalTransaction" name="paymentOption" />
                                                            <label class="custom-control-label" for="paypalTransaction"> Paypal</label>
                                                        </div>
                                                        <div class="payment_box payment_method_cod">
                                                            <p>
                                                                Pay via PayPal; you can pay with your credit card if you don’t have a PayPal account
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="checkout_twostyle__ButtonGroup hide">
                                                <span className="checkout_twostyle__TermConditionText">
                                                    By making this purchase you agree to our
                                                    <span className="checkout_twostyle__TermConditionLink">
                                                        terms and conditions.
                                                    </span>
                                                </span>
                                                <div className="row">
                                                    <div className="col-md-12">
                                                        <div className="checkout_twostyle__CheckoutSubmit">
                                                            <button type="button" className="button__StyledButtonCheckout">Proceed to Checkout</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-5 col-xs-12">
                                    <div className="details-review">
                                        {/* <h3 id="order_review_heading">Your order</h3> */}
                                        <div id="order_review" className="woocommerce-checkout-review-order">
                                            <div className="order-review">
                                                <h5>Order Review</h5>
                                                <div className="review-box">
                                                    <ul className="list-unstyled">
                                                        <li>Product <span>Total</span></li>
                                                        <li className="d-flex prods justify-content-between">
                                                            <div className="pro">
                                                                <img src="http://hn.arrowpress.net/efarm/wp-content/uploads/2017/07/9-300x300.jpg" alt="" />
                                                                <p>Product name here</p>
                                                                <span>1 X ₹490.00</span>
                                                            </div>
                                                            <div className="prc">
                                                                <p>₹490.00</p>
                                                            </div>
                                                        </li>
                                                        <li className="d-flex justify-content-between prods">
                                                            <div className="pro">
                                                                <img src="https://klbtheme.com/qualis/wp-content/uploads/2018/12/p12.jpg" alt="" />
                                                                <p>Product name here</p>
                                                                <span>1 X ₹890.00</span>
                                                            </div>
                                                            <div className="prc">
                                                                <p>₹890.00</p>
                                                            </div>
                                                        </li>
                                                        <li className="d-flex justify-content-between prods">
                                                            <div className="pro">
                                                                <img src="https://klbtheme.com/qualis/wp-content/uploads/2018/12/p11.jpg" alt="" />
                                                                <p>Product name here</p>
                                                                <span>1 X ₹290.00</span>
                                                            </div>
                                                            <div className="prc">
                                                                <p>₹290.00</p>
                                                            </div>
                                                        </li>
                                                        <li className="totalsdivider firstli">Sub Total <span>₹1670.00</span></li>
                                                        <li className="totalsdivider">Delivery Charges<span>₹0.00(Free)</span></li>
                                                        <li className="totalsdivider">Discount <span>₹00.00</span></li>
                                                        <li className="totalsdivider">Total Payable<small className="ml-1">(Incl. VAT)</small> <span>₹1670.00</span></li>

                                                        <li className="totalsdivider lastgrand savings">
                                                            Your Total Savings on this order ₹125.00
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </CheckoutWrap>
                <Footer2 />
            </React.Fragment>
        )
    }
}

const CheckoutWrap = styled.div`
margin-top:20px;


.details-check {
    padding: 0px;
    position: relative;
    margin-top: 0px;
    margin-bottom: 0px;
    background-color: rgb(255, 255, 255);
    position: relative;
    margin-bottom: 20px;
    box-shadow: rgba(0, 0, 0, 0.08) 0px 2px 16px 0px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: stretch !important;
    -ms-flex-align: stretch !important;
    align-items: stretch !important;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    height: auto;
    border-radius: 0.42rem;
}
.details-check > .details-check-header {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-box-align: stretch;
    -ms-flex-align: stretch;
    align-items: stretch;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    min-height: 55px;
    padding: 0rem 1.75rem;
    margin-bottom: 0;
    padding-top: 0;
    padding-bottom: 0;
    background-color: transparent;
    border-radius: calc(0.42rem - 1px) calc(0.42rem - 1px) 0 0;
}
.details-check.edit-mode > .details-check-header {
    border-bottom: 1px solid #f2f3f5;
}
.details-check > .details-check-header .details-check-title {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    margin: 0rem;
    margin-left: 0;
    font-size: 18px;
    color: #000;
    font-weight: 600;
    text-transform: uppercase;
}
.details-check.edit-mode > .details-check-header .details-check-title {
    color: #FFA800;
    font-weight: 600;
}
.selectedOptions {
    font-size: 16px;
    color: #878787;
    font-weight: 700;
    line-height: 1.5;
}
.details-check-header .details-check-title .countBlock {
    line-height: 0;
    font-size: 16px;
    font-weight: 600 !important;
    color: #FFA800;
    background-color: #FFF4DE;
    border-radius: 2px;
    padding: 13px 9px;
    vertical-align: baseline;
    margin-right: 12px;
}
.details-check-header .details-check-title .details-check-icon i {
    font-size: 1.25rem;
    color: #7E8299;
    line-height: 0;
}
.details-check-title svg {
    color: #E68C45;
}
.details-check-title img {
    width: 24px;
    margin-left: 5px;
}
.details-check > .details-check-header .details-check-toolbar {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    margin: 0rem 0;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
}
.details-check > .details-check-body {
    -webkit-box-flex: 1;
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
    min-height: 1px;
    padding: 1.2rem 1.75rem 2rem;
}
.woocommerce-checkout {
    margin-bottom: 50px;
}
.col2-set {
    width: 100%;
}
.col2-set:after, 
.col2-set:before {
    content: ' ';
    display: table;
}
media="only screen and (max-width: 768px)"
.woocommerce .col2-set .col-1, .woocommerce .col2-set .col-2, .woocommerce-page .col2-set .col-1, .woocommerce-page .col2-set .col-2 {
    float: none;
    width: 100%;
}
.col2-set .col-1 {
    float: left;
    width: 48%;
}
.col2-set .col-2, 
.col2-set .col-1 {
    width: 100%;
}
.woocommerce-billing-fields:after, 
.woocommerce-billing-fields:before, 
.woocommerce-shipping-fields:after, 
.woocommerce-shipping-fields:before {
    content: ' ';
    display: table;
}
form .woocommerce-billing-fields>h3 {
    font-size: 18px;
    font-weight: 600;
    text-transform: capitalize;
    margin: 0;
    padding: 20px 0;
    line-height: 1.3;
    color: #000;
}
form .row-form label {
    display: block;
    max-width: 100%;
    margin-bottom: 5px;
}
form .row-form label {
    line-height: 2;
}
form .woocommerce-billing-fields .woocommerce-billing-fields__field-wrapper>*>label {
    font-weight: 400;
}
abbr[title], abbr[data-original-title] {
    cursor: help;
    border-bottom: 1px dotted #777;
}
.row-form .required {
    color: #ff003a;
    font-weight: 400;
    border: 0;
}
form .row-form .required {
    color: red;
    font-weight: 700;
    border: 0!important;
    text-decoration: none;
}
form .row-form .required {
    visibility: visible;
}
.customer_details h3.row-form {
    font-size: 18px;
    font-weight: 600;
    text-transform: capitalize;
    margin: 0;
    padding: 20px 0;
    line-height: 1.3;
}
form .row-form .input-checkbox {
    display: inline;
    margin: -2px 8px 0 0;
    text-align: center;
    vertical-align: middle;
    line-height: normal;
    padding: 0;
}
form .row-form .input-checkbox {
    position: static;
    float: none;
    display: inline-block;
    margin: 0 5px 0 0;
    vertical-align: inherit;
}
.row-form .checkbox, .row-form .input-radio {
    margin-bottom: 0;
    margin-top: 0;
}
form .row-form .input-checkbox+label {
    display: inline-block;
    line-height: 2;
    font-weight: 500;
}

form .row-form select {
  cursor: pointer;
  margin: 0;
  height: 46px;
  line-height: 2em;
  outline: none !important;
  box-sizing: border-box;
  display: block;
  margin: 0;
  position: relative;
  border-radius: 4px;
  width: 100%;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  padding: 9px 10px;
  border: 1px solid #f2f3f5 !important;
  background: url(Assets/images/select.png) #f2f3f5 right 10px center no-repeat;
}
.checkout_twostyle__ButtonGroup {
    display: flex;
    flex-direction: column;
    margin: 0px;
}
.checkout_twostyle__ButtonGroup .radioGroup {
    display: flex;
    flex-wrap: wrap;
    -webkit-box-pack: start;
    justify-content: flex-start;
}
.checkout_twostyle__ButtonGroup .radioGroup label.radio_card__CardWrapper {
    display: inline-flex;
    -webkit-box-align: center;
    align-items: center;
    background-color: rgb(247, 247, 247);
    text-align: center;
    margin-bottom: 15px;
    margin-right: 25px;
    position: relative;
    font-size: 15px;
    font-weight: 400;
    color: rgb(13, 17, 54);
    line-height: 24px;
    max-width: 240px;
    cursor: pointer;
    width: 100%;
    border-radius: 6px;
    border-width: 1px;
    border-style: solid;
    border-color: rgb(247, 247, 247);
    border-image: initial;
    padding: 15px 20px;
    transition: all 0.25s ease 0s;
    height: auto !important;
    white-space: normal !important;
}
.checkout_twostyle__ButtonGroup .radioGroup label.radio_card__CardWrapper.active {
    background-color: rgb(255, 255, 255);
    border-width: 1px;
    border-style: solid;
    border-color: #E68C45;
    border-image: initial;
}
.checkout_twostyle__ButtonGroup .radioGroup label.radio_card__CardWrapper {
    margin-top: 0px;
    width: calc(43.3333% - 10px);
    max-width: calc(43.3333% - 10px);
    margin-bottom: 15px;
    flex-direction: column;
    text-align: left;
    align-items: flex-start;
    padding: 15px;
}
.checkout_twostyle__ButtonGroup .radioGroup > label.radio_card__CardWrapper.scheduleWrapper {
    max-width: calc(33.3333% - 10px);
    flex: 1 1 calc(33.3333% - 10px);
    flex-direction: column;
    text-align: left;
    align-items: flex-start;
    padding: 11px 12px;
    margin-right: 9px;
}
.radio_card__CardWrapper input[type="radio"] {
    opacity: 0;
    visibility: hidden;
    position: absolute;
    top: 0px;
    left: 0px;
    background-color: initial;
    cursor: default;
    appearance: radio;
    box-sizing: border-box;
    margin: 3px 3px 0px 5px;
    padding: initial;
    border: initial;
}
.radio_card__CardWrapper .radio_card__CardTitle {
    font-size: 14px;
    font-weight: 700;
    color: #000;
    line-height: 1.2;
    text-transform: capitalize;
    margin: 0px;
    margin-bottom: 5px;
}
.radio_card__CardWrapper .radio_card__CardContent {
    font-size: 15px;
    font-weight: 400;
    color: #000;
}
.radio_card__CardButtons {
    position: absolute;
    top: 10px;
    right: 10px;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    opacity: 0;
    visibility: hidden;
    transition: all 0.2s ease-in-out 0s;
}
.radio_card__CardWrapper:hover .radio_card__CardButtons.button-wrapper {
    opacity: 1;
    visibility: visible;
}
.radio_card__CardButtons .radio_card__ActionButton {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    width: 20px;
    height: 20px;
    margin-left: 5px;
    cursor: pointer;
    color: rgb(255, 255, 255);
    border-width: 0px;
    border-style: initial;
    border-color: initial;
    border-image: initial;
    border-radius: 50%;
    overflow: hidden;
    outline: 0px;
    padding: 0px;
}
.radio_card__CardButtons .radio_card__ActionButton.edit-btn {
    background-color: #FFA800;
}
.radio_card__CardButtons .radio_card__ActionButton.edit-btn svg {
    font-size: 10px;
}
.radio_card__CardButtons .radio_card__ActionButton.delete-btn {
    background-color: rgb(255, 91, 96);
}
.radio_card__CardButtons .radio_card__ActionButton.delete-btn svg {
    font-size: 10px;
}
.radio_card__CardButtons .radio_card__ActionButton.edit-btn svg,
.radio_card__CardButtons .radio_card__ActionButton.delete-btn svg {
    display: block;
    height: auto;
    width: 11px;
}
.button__StyledButton {
    padding-left: 15px;
    padding-right: 15px;
    padding-top: 0px;
    padding-bottom: 0px;
    font-size: 15px;
    font-weight: 700;
    cursor: pointer;
    appearance: none;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    flex-shrink: 0;
    text-align: center;
    height: 38px;
    font-family: inherit;
    color: #E68C45;
    background-color: transparent;
    transition: all 0.3s ease 0s;
    border-radius: 6px;
    text-decoration: none;
    border-width: 0px;
    border-style: initial;
    border-color: initial;
    border-image: initial;
}
.button__StyledButton.addButton {
    padding-left: 0px;
}
.radioGroup .button__StyledButton.addButton {
    width: auto;
    height: auto;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    background-color: transparent;
    font-size: 14px;
    font-weight: 700;
    color: #E68C45;
    border-width: 0px;
    border-style: initial;
    border-color: initial;
    border-image: initial;
    outline: 0px;
    border-radius: 0px;
    padding: 0px;
}
.checkout_twostyle__IconWrapper {
    margin-right: 6px;
}
.tags_address {
    text-transform: uppercase;
    font-size: 12px;
    color: #000;
    vertical-align: middle;
    padding: 4px 7px;
    border-radius: 4px;
    background-color: #f5faff;
    font-weight: 600;
    margin: 0 0 0 11px;
}
.phone_nos {
    margin: 0 0 0 11px;
    font-weight: 600;
    font-size: 13px;
    color: #000;
}
.custom-control.custom-radio.custom-control-inline .custom-control-label::before {
    top: 9px !important;
}
.custom-control.custom-radio .custom-control-label::before {
    top: 5px !important;
}
div.payment_box {
    position: relative;
    box-sizing: border-box;
    width: 80%;
    padding: 1em;
    margin: 12px 22px;
    font-size: 14px;
    border-radius: 6px;
    line-height: 1.5;
    background-color: #f2f2f2;
    color: #000;
}
div.payment_box::before {
    content: "";
    display: block;
    border: 1em solid #f2f2f2;
    border-right-color: transparent;
    border-left-color: transparent;
    border-top-color: transparent;
    position: absolute;
    top: -.75em;
    left: 0;
    margin: -1em 0 0 2em;
}
div.payment_box p:last-child {
    margin-bottom: 0;
}
.custom-control-label {
    position: relative;
    margin-bottom: 0;
    vertical-align: top;
    font-size: 16px;
    font-weight: 600;
    color: #777;
}
.payment_groupstyle__PaymentCardList {
    margin-top: 15px;
    margin-left: -10px;
    margin-right: -10px;
    position: relative;
}
.payment_cardstyle__Wrapper {
    cursor: pointer;
    position: relative;
    width: 100%;
    max-width: calc(33.3333% - 10px);
    flex: 1 1 calc(33.3333% - 10px);
    flex-direction: column;
    text-align: left;
    align-items: flex-start;
    padding: 11px 12px;
    margin-right: 9px;
}
.payment_cardstyle__Wrapper > input {
    position: absolute;
    top: 0px;
    left: 0px;
    opacity: 0;
    background-color: initial;
    cursor: default;
    appearance: radio;
    box-sizing: border-box;
    margin: 3px 3px 0px 5px;
    padding: initial;
    border: initial;
}
.payment_cardstyle__PaymentCardWrapper {
    display: flex;
    width: 100%;
    flex-direction: column;
    position: relative;
    background-color: rgb(228, 244, 252);
    padding: 15px 20px;
    border-radius: 6px;
    border-width: 1px;
    border-style: solid;
    border-color: rgb(228, 244, 252);
}
.payment_cardstyle__Wrapper > input:checked ~ .payment-card {
    border-color: rgb(0, 158, 127);
}
.payment_cardstyle__CardLogo {
    margin-bottom: 17px;
    display: block;
}
.payment_cardstyle__CardLogo img {
    max-width: 100%;
    height: 14px;
    display: block;
}
.payment_cardstyle__CardNumTitle {
    font-size: calc(10px);
    font-weight: 400;
    color: rgb(119, 121, 140);
    display: block;
    margin-bottom: 11px;
}
.payment_cardstyle__CardNumber {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    justify-content: space-between;
    margin-bottom: 9px;
}
.payment_cardstyle__CardNumber span {
    font-size: calc(14px);
    font-weight: 700;
    color: rgb(13, 17, 54);
    line-height: 1.25;
}
.payment_cardstyle__CardNumber span.card-number {
    font-size: 12px;
}
.payment_cardstyle__Name {
    font-size: 12px;
    font-weight: 700;
    color: rgb(13, 17, 54);
    display: block;
}
.payment_cardstyle__DeleteButton {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    width: 18px;
    height: 18px;
    cursor: pointer;
    color: rgb(255, 255, 255);
    background-color: rgb(255, 91, 96);
    position: absolute;
    top: 25px;
    right: 25px;
    z-index: 9;
    opacity: 0;
    border-width: 0px;
    border-style: initial;
    border-color: initial;
    border-image: initial;
    border-radius: 50%;
    overflow: hidden;
    outline: 0px;
    padding: 0px;
    transition: all 0.2s ease-in-out 0s;
}
.payment_cardstyle__DeleteButton svg {
    display: block;
    width: 8px;
    height: auto;
}
.payment_cardstyle__Wrapper:hover .card-remove-btn {
    opacity: 1;
}
    // border-width: 1px;
    // border-style: solid;
    // border-color: #eee #eee #d5d5d5 #eee;
    // box-shadow: 0 1px 3px -1px rgba(0,0,0,.4);
.details-review .order-review {
    margin-bottom: 35px;
    background-color: rgb(255, 255, 255);
    position: relative;
    margin-bottom: 20px;
    box-shadow: rgba(0, 0, 0, 0.08) 0px 2px 16px 0px;
    padding: 25px 30px 20px;
}
.details-review .order-review h5 {
    color: #000;
    font-weight: 600;
    margin-bottom: 30px;
    font-size: 18px;
}
.details-review .order-review .review-box .list-unstyled {
    list-style: none;
    padding: 0;
    margin: 0;
    padding-left: 0;
}
.details-review .order-review .review-box ul li {
    margin: 0;
    letter-spacing: 0.2px;
    margin-bottom: 15px;
    font-size: 14px;
}
.details-review .order-review .review-box ul li.prods {
    padding-bottom: 10px;
}
.details-review .order-review .review-box ul li:first-child {
    font-size: 18px;
    color: #000;
    font-weight: 600;
    margin-bottom: 22px;
}
.details-review .order-review .review-box ul li:first-child span {
    float: right;
}
.details-review .order-review .review-box ul li div.pro {
    width: 70%;
}
.details-review .order-review .review-box ul li div.pro img {
    max-width: 60px;
    float: left;
    margin-right: 10px;
    vertical-align: middle;
    border: 0;
}
.details-review .order-review .review-box ul li div.pro p {
    font-size: 15px;
    color: #000;
    font-weight: 600;
    margin: 0;
    letter-spacing: 0.2px;
}
.details-review .order-review .review-box ul li div.pro span {
    font-size: 13px;
    color: #808080;
    list-style: none;
}
.details-review .order-review .review-box ul li div.prc p {
    font-size: 16px;
    color: #000;
    font-weight: 600;
    padding-top: 18px;
}
.details-review .order-review .review-box ul li.totalsdivider.firstli {
    border-top: 1px solid #dddddd;
}
.details-review .order-review .review-box ul li.totalsdivider {
    font-size: 16px;
    color: #000;
    border-bottom: 1px solid #dddddd;
    padding: 12px 0;
    margin-bottom: 0;
    font-weight: 600;
}
.details-review .order-review .review-box ul li.totalsdivider.lastgrand {
    border-bottom: 1px solid transparent;
}
.details-review .order-review .review-box ul li.totalsdivider.lastgrand.savings {
    color: #388e3c;
}
.details-review .order-review .review-box ul li.totalsdivider span {
    float: right;
}
.payment_groupstyle__Header {
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    align-items: center;
    margin-top: -15px;
}
.payment_groupstyle__SavedCard {
    font-size: 14px;
    font-weight: 700;
    color: #E68C45;
    display: block;
}
.button__StyledButton.addCard {
    padding-left: 15px;
    padding-right: 15px;
    padding-top: 0px;
    padding-bottom: 0px;
    font-size: 15px;
    font-weight: 700;
    cursor: pointer;
    appearance: none;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    flex-shrink: 0;
    text-align: center;
    height: 38px;
    font-family: inherit;
    color: rgb(0, 158, 127);
    background-color: transparent;
    transition: all 0.3s ease 0s;
    border-radius: 6px;
    text-decoration: none;
    border-width: 0px;
    border-style: initial;
    border-color: initial;
    border-image: initial;
}
.button__StyledButton.addCard {
    font-size: 14px;
    font-weight: 700;
    color: #E68C45;
}
.payment_groupstyle__IconWrapper {
    margin-right: 6px;
}
.checkout_twostyle__TermConditionText {
    font-size: 13px;
    font-weight: 500;
    color: #000;
    line-height: 1.5;
    margin-top: 30px;
    display: block;
}
.checkout_twostyle__TermConditionText .checkout_twostyle__TermConditionLink {
    font-size: 13px;
    font-weight: 500;
    color: rgb(255, 91, 96);
    margin-left: 5px;
    cursor: pointer;
    line-height: 1.5;
}
.checkout_twostyle__CheckoutSubmit {
    margin-top: 25px;
}
.button__StyledButtonCheckout {
    width: 100%;
    padding-top: 0px;
    padding-bottom: 0px;
    font-size: 15px;
    font-weight: 700;
    cursor: pointer;
    color: rgb(255, 255, 255);
    background-color: #E68C45;
    appearance: none;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    flex-shrink: 0;
    text-align: center;
    font-family: inherit;
    height: 48px;
    padding-left: 30px;
    padding-right: 30px;
    transition: all 0.3s ease 0s;
    border-radius: 6px;
    text-decoration: none;
    border-width: 0px;
    border-style: initial;
    border-color: initial;
    border-image: initial;
}
`