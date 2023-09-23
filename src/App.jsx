import { useState } from "react";
import {InputBox,useCurrencyInfo} from "./components/exportComponents";
function App() {
   
  const [amount,setAmount]=useState(1);
  const [from,setFrom]=useState("usd");
  const [to,setTo]=useState("inr");
  const [convertedAmount,setConvertedAmount]=useState(0);

  //Get all currency list:
  const currencyInfo=useCurrencyInfo(from);
  
  let currencyOption=Object.keys(currencyInfo);
  
  const onAmountChange=(amount_value)=>
  {
    setAmount(amount_value);
  }
  const convertCurrency=()=>
  {
    
    setConvertedAmount(amount*currencyInfo[to])
   
  }
  return (
    <>
    <h1 className="text-center py-2 m-4 font-bold text-3xl text-white ">Currency converter</h1>
      <div className="flex flex-col shadow-lg  border rounded-sm bg-transparent max-w-md p-4 mx-auto">
           <InputBox label="From" currencyOption={currencyOption} onAmountChange={onAmountChange} amount={amount} selectedCurrency={from} onCurrencyChange={(currency)=>setFrom(currency)}  />
            <div className="flex justify-center">
            <button onClick={()=>{
              setFrom(to);
              setTo(from);
              setConvertedAmount(0);
            }} className="bg-blue-500 text-white rounded-lg p-2">Swap</button>
            </div>
            <InputBox label="To" currencyOption={currencyOption} amount={convertedAmount} onAmountChange={onAmountChange} selectedCurrency={to} onCurrencyChange={(currency)=>setTo(currency)} />
            <button onClick={convertCurrency} className="p-2 my-1 rounded-lg w-full bg-blue-600 text-white">Convert {from.toUpperCase()} to {to.toUpperCase()}</button>
      </div>
     </>
  )
}

export default App
