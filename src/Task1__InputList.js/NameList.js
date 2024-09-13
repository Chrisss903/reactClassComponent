import React from "react";
import DeleteButton from "./DeleteButton"
import "./InputField.css"

class NameList extends React.Component {
    render() {
        return (
            <div className="OuterBox">
                {this.props.namesList.map((name, index) => (
                    <div className="CheckBox" key={index}>
                        <DeleteButton Del_fun={this.props.Del_fun} KeyIndex={index} />
                        <>{name}</>
                    </div>
                ))}
            </div>
        );
    }
}

export default NameList;
