import React, { useCallback, useMemo, useState } from "react";

export default function useMem() {

    const [InputValue, setInputValue] = useState(0);
    const [calculateVal, setCalculateval] = useState(0);


    const Expensivefun = useCallback((InputVal) => {

        let result = 0;
        for (let i = 0; i < 1000; i++)
            result = 0;
        return Number(result) + Number(InputVal)
    }, [])
    const UseMemFun = useMemo(() => Expensivefun(InputValue), [InputValue, Expensivefun])

    return (
        <>
            <input type="text" onChange={(e) => setInputValue(e.target.value)} />
            <button onClick={() => { setCalculateval(UseMemFun) }}>calculate</button>
            <h4>calaculated Value:{calculateVal}</h4>
        </>
    )

}