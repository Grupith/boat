import React, { useEffect } from 'react';
import { MdDelete } from "react-icons/md";

export default function MonthlyBills({id , name , date , amount , totalBills , setTotalBills}) {
  
  const handleDeleteBill = () => {
    const updatedBills = totalBills.filter((filteredBill) => {
      return filteredBill.id !== id;
    })
    setTotalBills(updatedBills)
  }

  // Save to localStorage when bill is created
  useEffect(() => {
    localStorage.setItem('totalBills', JSON.stringify(totalBills))
  }, [totalBills])
  
  return (
    <div className='bill'>
        <span>{name}</span>
        <span>{date}</span>
        <span>${amount}</span>
        <MdDelete className='deleteIcon' onClick={handleDeleteBill}/>
    </div>
  )
}
