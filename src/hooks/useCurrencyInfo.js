import {useState, useEffect} from 'react';


const useCurrencyInfo=(currency)=>{
    const api_Url=`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`;
    const [data,setData]=useState({});
    useEffect(()=>{
        fetch(api_Url).then(res=>res.json()).then(res=>setData(res[currency]))
    },[currency]);
    return data;
}

export default useCurrencyInfo;