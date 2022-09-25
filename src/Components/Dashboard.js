import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import MonthlyBills from './MonthlyBills'
import { MdDelete } from "react-icons/md";

//TODO: Create Sum for monthly total, Change price to number only format
//TODO: Add routing, add first name
//TODO: LocalStorage

export default function Dashboard() {

  const [totalBills, setTotalBills] = useState([])
  const [name, setName] = useState('')
  const [date, setDate] = useState('')
  const [amount, setAmount] = useState('')

  const [showCreateButton, setShowCreateButton] = useState(false)

  const handleCreateBill = (e) => {
    e.preventDefault()

    const createBill = {
      id: uuidv4(),
      name: name,
      date: date,
      amount: amount
    }
    setTotalBills([...totalBills].concat(createBill))
    setName('')
    setDate('')
    setAmount('')
    setShowCreateButton(false)
  }

  return (
    <div className='dashboard'>
      <div className='controlBoard'>
        <h1 className='dashboardTitle'>Dylans <span className='dashboardTitleSpan'>Lifeboat</span></h1>
        <h2 className='monthlyBillsLabel'>Monthly Total</h2>
        <span className='monthlyBillsAmount'>$352.63</span>
        {!showCreateButton && <span className='addBill' onClick={() => setShowCreateButton(true)}>Add Bill</span>}
        {showCreateButton && <span className='addBill' onClick={() => setShowCreateButton(false)}>Cancel</span>}
      </div>
      <div className='contentContainer'>
        <h2 className='monthlyBillsTitle'>Monthly Bills</h2>
        {totalBills && totalBills.map(bill => <MonthlyBills key={bill.id} id={bill.id} name={bill.name} date={bill.date} amount={bill.amount} className='bill' totalBills={totalBills} setTotalBills={setTotalBills}/>)}
        {showCreateButton && <form className='createBill' onSubmit={handleCreateBill}>
          <input autoFocus required type='text' placeholder='Name' onChange={e => setName(e.target.value)} />
          <input required type='text' placeholder='Date' onChange={e => setDate(e.target.value)} />
          <input required type='text' placeholder='Price' onChange={e => setAmount(e.target.value)} />
          <button type='submit'>Add</button>
        </form>}
      </div>
    </div>
  )
}
