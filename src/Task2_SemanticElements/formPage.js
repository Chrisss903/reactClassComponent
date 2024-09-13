import React from "react";
import "./SematicElements.css";
import DisplayFullName from "./displayFullName";

export default class FormPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fullName: "",
            firstNameValue: "",
            middleNameValue: "",
            lastNameValue: "",
            fullNameArr: [],
            add: false,
            userId: ""
        };
    }

    componentWillMount() {
        this.setState({ userId: " SS00803 " })
    }

    componentWillUnmount() {
        alert("Component is going to Unmount")
    }


    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    componentDidUpdate(prevProps, prevState) {
        if (prevState.add !== this.state.add) {
            const { firstNameValue, middleNameValue, lastNameValue } = this.state;
            const newFullName = `${firstNameValue} ${middleNameValue} ${lastNameValue}`;
            this.setState(prevState => ({
                fullNameArr: [...prevState.fullNameArr, newFullName],
                firstNameValue: "",
                middleNameValue: "",
                lastNameValue: ""
            }));
        }
    }

    render() {
        return (
            <div className="outerForm">
                <div>
                    <DisplayFullName fullName={this.state.fullNameArr} KeyId={this.state.userId} />

                </div>

                <div className="formStyle">
                    <label htmlFor="firstName">First Name:</label>
                    <input
                        type="text"
                        id="firstName"
                        name="firstNameValue"
                        value={this.state.firstNameValue}
                        onChange={this.handleChange}
                    />
                    <label htmlFor="middleName">Middle Name:</label>
                    <input
                        type="text"
                        id="middleName"
                        name="middleNameValue"
                        value={this.state.middleNameValue}
                        onChange={this.handleChange}
                    />
                    <label htmlFor="lastName">Last Name:</label>
                    <input
                        type="text"
                        id="lastName"
                        name="lastNameValue"
                        value={this.state.lastNameValue}
                        onChange={this.handleChange}
                    />
                    <button onClick={() => this.setState(({ add }) => ({ add: !add }))}>
                        Add
                    </button>
                </div>
            </div>
        );
    }
}
