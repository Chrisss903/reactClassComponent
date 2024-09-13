import React from "react";
class SampleState extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "Sachin",
            runs: 304
        }


    }

    incrementRuns = () => {
        this.setState((prevState) => ({
            runs: prevState.runs + 1
        }));
    }



    render() {
        return (
            <div>
                <h1>{this.state.name} is the Greatest Player</h1>
                <h3>He Scored {this.state.runs}</h3>
                <button onClick={this.incrementRuns}>Increment Runs</button>
            </div>
        );
    };

}


export default SampleState;