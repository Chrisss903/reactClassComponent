import React from "react";
import "./InputField.css";
import SubmitButton from "./SubmitButton";
import NameList from "./NameList";

class InputField extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            names: [],
            UserValue: "",
        };
    }

    Delete_name = (indexToDelete) => {
        this.setState((prevState) => ({
            names: prevState.names.filter((_, index) => index !== indexToDelete),
        }));
    };

    Name_Storage = (e) => {
        this.setState({ UserValue: e.target.value });
    };

    Add_name = () => {
        if (this.state.UserValue.trim() !== "") {
            this.setState(({ names, UserValue }) => {
                return {
                    names: [...names, UserValue],
                    UserValue: "",
                };
            });
        }
    };

    render() {
        return (
            <div>
                <div className="InputBox">
                    <input
                        type="text"
                        id="inputName"
                        value={this.state.UserValue}
                        onChange={this.Name_Storage}
                    />
                    <SubmitButton btn_func={this.Add_name} />
                </div>
                <div className="NameList">
                    <NameList namesList={this.state.names} Del_fun={this.Delete_name} />
                </div>
            </div>
        );
    }
}

export default InputField;
