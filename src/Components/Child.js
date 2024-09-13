import React from "react";

class Child extends React.Component {

    render() {
        const { infoCar, brand } = this.props;
        console.log(infoCar);
        return (
            <div>
                <h1>Brand = {brand}</h1>
                {infoCar ? (
                    <h4>Model: {infoCar.model}</h4>) : (<h4>Model: Not Available</h4>)}
            </div>
        );
    }

}

export default Child;
