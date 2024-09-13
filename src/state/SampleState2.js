import React from "react";

class SampleState2 extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isVisibile: true
        };

    }



    toggleOn = () => {

        this.setState({ isVisibile: true })


    }

    toggleOff = () => {

        this.setState({ isVisibile: false })


    }


    render() {
        return (
            <div>
                {this.state.isVisibile && (
                    <p id="displayPara">Here is the Sample paragraph , it should toggle on and off based on the conditions</p>)}
                <button onClick={this.toggleOn}>on the para</button>
                <button onClick={this.toggleOff}>off the para</button>

            </div >

        )
    }




}

export default SampleState2;