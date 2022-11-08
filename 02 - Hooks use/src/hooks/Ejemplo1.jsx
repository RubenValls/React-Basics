/**
 * Ejemplo de uso del Hook useState
 */

import React, { useState } from 'react';

const Ejemplo1 = () => {
    
    const initialValue = 0;
    const initialPerson = {
        name : 'Rubén',
        email : 'r.vallsaparici@gmail.com'
    }

    const [count, setCount] = useState(initialValue);
    const [person, setPerson] = useState(initialPerson);

    function incrementCount(){
        setCount(count + 1);
    }

    function changePerson(){
        if(person.name === 'Rubén'){
            setPerson(
                {
                    name : 'Mirella',
                    email : 'mirella.sgan@gmail.com'
                }
            )
        }else{
            setPerson(
                {
                    name : 'Rubén',
                    email : 'r.vallsaparici@gmail.com'
                }
            )
        }
    }

    return (
        <div>
            <h1>useState - Example</h1>
            <h2>Count: {count}</h2>
            <h2>Person:</h2>
            <h3>Name: {person.name}</h3>
            <h4>Email: {person.email}</h4>
            <div>
                <button onClick={incrementCount}>Rise the count</button>
                <button onClick={changePerson}>Change the person</button>
            </div>
        </div>
    );
}

export default Ejemplo1;
