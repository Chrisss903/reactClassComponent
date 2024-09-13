import React from "react";
import "./InputField.css"
class SubmitButton extends React.Component {


    render() {

        return (
            <div className="Submit_btn">
                <button className="btn" onClick={this.props.btn_func}>Add</button>
            </div>
        )
    }

}

export default SubmitButton;