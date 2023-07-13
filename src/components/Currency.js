import React, { useContext } from 'react'
import {AppContext} from '../context/AppContext'

const Currency = () => {
    const {dispatch} = useContext(AppContext)

    return (
        <div className='currency' style={{backgroundColor: 'lightgreen', color: 'white', padding: '5px', borderRadius: '7px', display: 'flex', justifyContent: 'flex-end', marginLeft: '127px'}}>
            <span>{'Currency: '}
                <select id='currency' onChange={(event) => {dispatch({type: 'CHG_CURRENCY', payload: event.target.value})}} style={{backgroundColor: 'lightgreen', color: 'white', borderColor: 'lightgreen'}}>
                    <option value='£' name='£ Pound' style={{color: 'black'}}>£ Pound</option>
                    <option value='€' name='€ Euro' style={{color: 'black'}}>€ Euro</option>
                    <option value='$' name='$ Dollar' style={{color: 'black'}}>$ Dollar</option>
                    <option value='₹' name='₹ Rupee' style={{color: 'black'}}>₹ Rupee</option>
                </select>
            </span>
        </div>
    )
}

export default Currency
