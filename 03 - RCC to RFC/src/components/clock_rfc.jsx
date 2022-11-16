import React, {useState, useEffect} from 'react';

const ClockRfc = () => {
    
    const initialState = {
        date: new Date(),
        age: 0,
        name: 'Martín',
        surname: 'San José'
    }

    const [age, setAge] = useState(initialState.age);
    const [date, setDate] = useState(initialState.date);
    const [name, setName] = useState(initialState.name);
    const [surname, setSurname] = useState(initialState.surname);
    
    useEffect(() => {
        const interval = setInterval(() => {
            tick()
        }, 1000);
        return () => {
            clearInterval(interval);
        };
    }, [date]);

    function tick(){
        setDate(new Date())
        setAge(age+1)
    }

    return (
        <div>
            <h2>
                Hora Actual:
                {date.toLocaleTimeString()}
            </h2>
            <h3>{name} {surname}</h3>
            <h1>Edad: {age}</h1>
        </div>
    );
}

export default ClockRfc;
