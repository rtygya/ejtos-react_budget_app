import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { expenses, currency, budget } = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total = total + item.cost);
    }, 0);
    const [newBudget, setNewBudget] = useState(budget);
    
    const handleBudgetChange = (event) => {
        //Function to set upper limit to 20000
        if(event.target.value > 20000) {
            alert("The value cannot exceed £20,000");
            setNewBudget(20000);
            return;
        }
        
        //Budget must be higher than amount spent
        if (totalExpenses > newBudget) {
            alert('You cannot reduce the budget value lower than the spending');
            setNewBudget(totalExpenses);
            return;
        }
        setNewBudget(event.target.value);
    }
    
    return (
<div className='alert alert-secondary'>
<span>Budget: {currency}</span>
<input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
</div>
    );
};
export default Budget;
