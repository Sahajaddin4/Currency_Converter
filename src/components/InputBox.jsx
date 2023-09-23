import React from 'react'

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOption=[],
  selectedCurrency="usd",

}) {
  
  return (
    <div className='flex flex-col w-full rounded-lg bg-white'>
        <div className="flex flex-row  ">
            <label className='ms-3 ps-1 text-black/40 mt-2 '>{label}</label>
            <label className='ms-auto text-black/40 me-3 mt-2 '>Currency Type</label>
        </div>
        <div className="flex flex-row p-3">
        <input
        className=' rounded'
         type="number"
         name="" 
         id=""
         placeholder=' Amount'
         value={amount}
         onChange={(e)=> onAmountChange && onAmountChange(Number(e.target.value))}
         />
        <select className='ms-auto me-3 p-2 rounded-xl
         bg-slate-200'
          name="" id=""
          value={selectedCurrency}
          onChange={(e)=>onCurrencyChange && onCurrencyChange(e.target.value)}
          >
              {currencyOption.map((value,index)=>{
                return (
                  <option key={index} value={value}>{value}</option>
                )
              })}
        </select>
        </div>
        
    </div>
  )
}

export default InputBox;