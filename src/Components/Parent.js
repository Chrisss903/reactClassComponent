import React from "react";
import Child from "./Child";

class Parent extends React.Component {

    render() {
        const carInfo = { name: "Duster", model: 1989 };
        return (
            <div>
                <p>This is Parent Component</p>
                <Child brand="Ford" infoCar={carInfo} />
            </div>
        );

    }
}

export default Parent;
