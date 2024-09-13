import React from "react";
import "./InputField.css";

class DeleteButton extends React.Component {
    render() {
        return (
            <div >
                <button id="Submit" onClick={() => this.props.Del_fun(this.props.KeyIndex)}>X</button>
            </div>
        );
    }
}

export default DeleteButton;
