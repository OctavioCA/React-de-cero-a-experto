import React, { useState } from 'react';
import PropTypes from 'prop-types'

const CounterApp = ( { value = 0 } ) => {

    const [ counter, setCounter ] = useState( value ); // [Retoorna un arreglo con dos valores]

    // handleAdd
    const handleAdd = () => {
        setCounter( counter + 1 );
        // setCounter( (c) => c + 1 )
    }

    // handleReset
    const handleReset = () => setCounter( value );

    // handleSubstract, incluso tiene el control de que si es = a 0 no puede seguir restando
    const handleSubstract = () => {
        if (counter === 0){
            setCounter( counter ); 
        } else{
            setCounter( counter - 1 );
        }
    }

    return (
        <>
            <h1> CounterApp </h1>
            <p> { counter } </p>

            <button onClick = { handleAdd }>+1</button>
            <button onClick = { handleReset }>Reset</button>
            <button onClick = { handleSubstract }>-1</button>
        </>
    );

}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired
}

export default CounterApp;