import React, { useState } from "react";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import './Expense.css';
import ExpensesList from "./ExpensesList";
import ExpensesFilter from "./ExpenseFiltre";
import ExpenseChart from "./ExpenseChart";


const Expenses= (props)=>{

    const [filteredYear,setFilteredYear]  = useState('2020');

    const filterChangeHandler = selectedYear =>{
        setFilteredYear(selectedYear);
    };

    const filteredExpenses = props.items.filter(expenses =>{
      return expenses.date.getFullYear().toString() === filteredYear;
    });


 
    
    return(
        <div>

            <Card className="expenses">
            {/* Expenses->ExpensesFilter */}
                <ExpensesFilter
                 selected={filteredYear} 
                 onChangeFilter={filterChangeHandler}

                />
                <ExpenseChart expenses={filteredExpenses}/>
                
                <ExpensesList items={filteredExpenses}/>
                 
                 
                 {/* using && opeartor in js means if the first condition is true then it automatically returns the 2nd stmt  */}

                {/* {filteredExpenses.length === 0 &&(<p>No Element found</p>)} */}
               
                {/*  staticway <ExpenseItem
                    title={props.items[0].title}
                    amount={props.items[0].amount}
                    date={props.items[0].date}
                    // title={expenses[0].title}
                    // amount={expenses[0].amount}
                    // date={expenses[0].date}
                /> */}
              
            </Card>
        </div>    
    );

};

export default Expenses;