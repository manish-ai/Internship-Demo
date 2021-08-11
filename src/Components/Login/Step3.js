import React, { Component } from 'react'

import { MDBInput } from 'mdbreact';
export default class Step3 extends Component {

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
            input["pass1"] = "";
            this.setState({ input });

            alert('Demo Form is submited');
        }
    }
    validate() {
        let input = this.state.input;
        let errors = {};
        let isValid = true;


        if (!input["phone"]) {
            isValid = false;
            errors["phone"] = "Please enter valid phone number.";
        }

        if (typeof input["phone"] !== "undefined") {

            var pattern = new RegExp(/^[0-9\b]+$/);
            if (!pattern.test(input["phone"])) {
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


        if (!input["pass1"]) {
            isValid = false;
            errors["pass1"] = "Please enter valid password";
        }

        if (typeof input["pass1"] !== "undefined") {
            if (input["pass1"].length <= 8) {
                isValid = false;
                errors["pass1"] = "Password needs atleast 8 characters.";
            }
        }
        if (input["pass"] !== input["pass1"]) {
            isValid = false;
            errors["pass1"] = "Both passwords need to be same";

        }

        this.setState({
            errors: errors
        });

        return isValid;
    }
    render() {

        return (
            <div>

                <form className="form" onSubmit={this.handleSubmit}>
                    <div className="pt-lg-0">
                        <h5 className="heading-design-h5">
                            CREATE PASSWORD
                        </h5>

                    </div>

                    <MDBInput label={this.state.errors.pass ? this.state.errors.pass : "Enter Your Password"} type="password" value={this.state.input.pass} name="pass"
                        className={this.state.errors.pass ? "border border-danger" : null}
                        onChange={this.handleChange} outline required />

                    <MDBInput label={this.state.errors.pass1 ? this.state.errors.pass1 : "Enter Your Password Again"} type="password" value={this.state.input.pass1} name="pass1"
                        className={this.state.errors.pass1 ? "border border-danger" : null}
                        onChange={this.handleChange} outline required />


                    <fieldset class="form-group mt-4">
                        <button type="submit" value="Submit" class="btn btn-primarynew btn-theme-round mt-2 font-weight-bold btn-block btn-md">Submit</button>
                    </fieldset>
                </form>
            </div>


        )
    }
}
