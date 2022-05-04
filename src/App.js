import React, { useState } from 'react';

import Expenses from './components/Expense/Expenses';
import NewExpense from './components/NewExpenses/NewExpense';

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', 
    title: 'New TV', 
    amount: 799.49, 
    date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  
];

const  App= ()=>{

  
  const[expenses , setExpenses] = useState(DUMMY_EXPENSES) 
  const addExpenseHandler =  expense =>{
    setExpenses(prevExpenses => {
      return [...prevExpenses,expense]
    });
  };

  return (
    <div>
      <NewExpense  onAddExpense ={addExpenseHandler} />
      <Expenses items = {expenses}/>  
     
        
    </div>
  );

}

export default App;