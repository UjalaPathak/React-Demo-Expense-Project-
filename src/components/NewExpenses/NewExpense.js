import React ,{useState} from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense =  (props) => {
  const [isEditing,setEditing]= useState(false);

  const SaveExpenseDataHandler = (enteredExpenseData)=>{

    const expenseData ={
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    props.onAddExpense(expenseData); 
    setEditing(false);    
  }

  const StartEditingHandling =()=>  {
    setEditing(true);
  }
  const StopEditingHandling =()=>  {
    setEditing(false);
  }

  return (
    <div className='new-expense'>
    {!isEditing && (<button onClick={StartEditingHandling}>Add New Expense</button>
    )}

    {isEditing && (  <ExpenseForm  onSaveExpenseData = {SaveExpenseDataHandler} onCancel={StopEditingHandling}/>
    )}
    </div>

  );
};

export default NewExpense;