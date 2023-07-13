import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';

const ExpenseItem = (props) => {
    const { dispatch, currency } = useContext(AppContext);
    
    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10
        };
        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });
    }

    const decreaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10
        }
        dispatch({
            type: 'RED_EXPENSE',
            payload: expense
        })
    }

    return (
        <tr>
        <td>{props.name}</td>
        <td>{currency}{props.cost}</td>
        <td><button onClick={event=> increaseAllocation(props.name)} style={{backgroundColor: 'rgb(0, 200, 0)', color: 'white', border: 'none', borderRadius: '50%', width: '2rem', height: '2rem', padding: '0', margin: '0', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: 30, fontWeight: 'bold', textAlign: 'center'}}>+</button></td>
        <td><button onClick={event=> decreaseAllocation(props.name)} style={{backgroundColor: 'rgb(200, 0, 0)', color: 'white', border: 'none', borderRadius: '50%', width: '2rem', height: '2rem', padding: '0', margin: '0', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: 30, fontWeight: 'bold', textAlign: 'center'}}>-</button></td>
        <td><TiDelete size='1.5em' onClick={handleDeleteExpense}></TiDelete></td>
        </tr>
    );
};

export default ExpenseItem;
