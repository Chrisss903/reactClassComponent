import { useEffect, useState } from "react";

export default function useFetch(url) {
    const [data, setData] = useState(null);

    useEffect((
        () => {

            async function Apifetch() {
                const promise = await fetch(url);
                const data = await promise.json();
                setData(data);
            }
            Apifetch();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    ), [])

    return data;

}

