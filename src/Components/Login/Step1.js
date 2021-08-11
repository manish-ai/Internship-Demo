import React, { Component } from 'react'

import { MDBInput } from 'mdbreact';
export default class Step1 extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
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
        const { handleChange } = this.props;

        return (
            <div>

                <form className="form" >
                    <div className="pt-lg-0">
                        <h5 className="heading-design-h5 ">
                            NEW USER LOGIN
                                    </h5>

                    </div>
                    <MDBInput label={this.state.errors.phone ? this.state.errors.phone : "Enter Mobile number"} type="phone-number"
                        name="phone" value={this.state.input.phone} className={this.state.errors.phone ? "border border-danger" : null}
                        onChange={handleChange} outline required />



                </form>

                <button type="submit" value="Submit" onClick={this.continue} className=" btn btn-primarynew btn-theme-round mt-2 font-weight-bold btn-block btn-md">Send OTP </button >
            </div>

        )
    }
}

