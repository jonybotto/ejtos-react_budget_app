import React, { useContext } from 'react'
import {AppContext} from '../context/AppContext'

const Currency = () => {
    const {dispatch} = useContext(AppContext)

    return (
        <div className='badge-success'>
            <span>Currency:
                <select id='currency' onChange={(event) => {dispatch({type: 'CHG_CURRENCY', payload: event.target.value})}}>
                    <option value='€' name='€ Euro'>€ Euro</option>
                    <option value='$' name='$ Dollar'>$ Dollar</option>
                    <option value='£' name='£ Pound'>£ Pound</option>
                    <option value='₹' name='₹ Rupee'>₹ Rupee</option>
                </select>
            </span>
        </div>
    )
}

export default Currency
