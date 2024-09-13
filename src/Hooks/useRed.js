import React, { useReducer } from "react";

export default function useRed() {

    const intialValue = {
        count1: 0,
        count2: 0
    }


    const reducer = (state, action) => {

        switch (action.type) {
            case 'count1':
                console.log("page1 is rendered")
                return { ...state, count1: state.count1 + 1 }
            case 'count2':
                console.log("page2 is rendered")
                return { ...state, count2: state.count2 + 1 }

            default:
                return state
        }

    }

    const [state, dispatch] = useReducer(reducer, intialValue);

    return (

        <>

            <h1>This is an Example of useReducer Function</h1>

            <h4>count 1 : {state.count1}</h4>
            <h4>count 2 : {state.count2} </h4>
            <button onClick={() => { dispatch({ type: 'count1' }) }}>increment the count 1</button>
            <br />
            <button onClick={() => { dispatch({ type: 'count2' }) }}>increment the count 2</button>



        </>
    )
}
