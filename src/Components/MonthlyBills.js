import React from 'react';
import { MdDelete } from "react-icons/md";

export default function MonthlyBills({id , name , date , amount , totalBills , setTotalBills}) {
  
  const handleDeleteBill = () => {
    const updatedBills = totalBills.filter((filteredBill) => {
      return filteredBill.id !== id;
    })
    setTotalBills(updatedBills)
  }
  return (
    <div className='bill'>
        <span>{name}</span>
        <span>{date}</span>
        <span>${amount}</span>
        <MdDelete className='deleteIcon' onClick={handleDeleteBill}/>
    </div>
  )
}
