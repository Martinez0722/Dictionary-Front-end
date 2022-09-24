import { useState, useEffect } from "react";

const url =`http://localhost:3030/entries/en/`

export const useSearch = (url) =>{
    const [data, setData] = useState(null)

    useEffect(()=>{
        const fetchData = async () =>{
            const res = await fetch(url)

            const data = await res.json()

            setData(data)
        };

        fetchData()
    },[url]);

    console.log(data)

};