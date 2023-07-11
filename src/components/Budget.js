import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext'

const Budget = () => {
    const {budget, expenses, dispatch} = useContext(AppContext)

    const maxBudget = 20000

    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);

    const handleBudgetChange = (event) => {
        if (event.target.value > maxBudget) {
            alert('You are not that rich, sorry! :(')
            dispatch({type: 'SET_BUDGET', payload: maxBudget})
        } else if (event.target.value < totalExpenses) {
            alert("C'mon, don't be THAT person!")
            dispatch({type: 'SET_BUDGET', payload: totalExpenses})
        } else {
            dispatch({type: 'SET_BUDGET', payload: event.target.value})
        }
    }

    return (
        <div className='alert alert-secondary'>
            <span>Budget: £
                <input
                    id='budget'
                    type='number'
                    required='required'
                    step='10'
                    max={maxBudget}
                    min={totalExpenses}
                    value={budget}
                    onChange={handleBudgetChange}>
                </input>
            </span>
        </div>
    );
};

export default Budget;
