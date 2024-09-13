import React from 'react';

class Counter extends React.Component {
    constructor(props) {
        super(props);
        console.log('Constructor: Initializing state');
        this.state = {
            count: 0,
            data: null
        };
    }

    componentDidMount() {
        console.log('componentDidMount: Component has mounted');
        setTimeout(() => {
            this.setState({ data: 'Fetched Data' });
        }, 8000);
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('componentDidUpdate: Component has updated');
        console.log('Previous State:', prevState);
        console.log('Current State:', this.state);
    }

    componentWillUnmount() {
        console.log('componentWillUnmount: Component is about to unmount');

    }

    increment = () => {
        this.setState((prevState) => ({ count: prevState.count + 1 }));
    }

    decrement = () => {
        this.setState((prevState) => ({ count: prevState.count - 1 }));
    }

    render() {
        console.log('Render: Rendering the component');
        return (
            <div>
                <h1>Counter: {this.state.count}</h1>
                <button onClick={this.increment}>Increment</button>
                <button onClick={this.decrement}>Decrement</button>
                {this.state.data && <p>{this.state.data}</p>}
            </div>
        );
    }
}

export default Counter;
