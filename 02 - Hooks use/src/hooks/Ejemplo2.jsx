import React, {useState, useRef, useEffect} from 'react';

const Ejemplo2 = () => {

    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);

    const miRef = useRef();

    function increment1(){
        setCount1(count1 + 1);
    }

    function increment2(){
        setCount2(count2 + 1);
    }

    /* useEffect(() => {
        console.log('CHANGES AT COMPONENT STATE');
        console.log('Showing component reference: ');
        console.log(miRef);
    }); */

    /* useEffect(() => {
        console.log('CHANGES AT COUNT1 STATE');
        console.log('Showing component reference: ');
        console.log(miRef);
    }, [count1]); */

    useEffect(() => {
        console.log('CHANGES AT COUNT1 STATE');
        console.log('Showing component reference: ');
        console.log(miRef);
    }, [count1,count2]);

    return (
        <div>
            <h1>Using useState, useRef and useEffect</h1>
            <h2>Count 1: {count1}</h2>
            <h2>Count 2: {count2}</h2>
            <h4 ref={miRef}>
                Referenced element example
            </h4>
            <div>
                <button onClick={increment1}>Increment First</button>
                <button onClick={increment2}>Increment Second</button>
            </div>
        </div>
    );
}

export default Ejemplo2;
