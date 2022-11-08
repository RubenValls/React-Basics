import React, {useState, useContext} from 'react';

const myContext = React.createContext(null);

const Component1 = () => {

    const state = useContext(myContext);

    return (
        <div>
            <h1>
                The token is: {state.token}
            </h1>
            <Component2></Component2>
        </div>
    );
}

const Component2 = () => {
    
    const state = useContext(myContext);

    return (
        <div>
            <h2>
                ID Session is: {state.session}
            </h2>
        </div>
    );
}

export default function MyComponentWithContext() {

    const initialState = {
        token: '122344',
        session: 1
    }

    const [sessionData, setSessionData] = useState(initialState);

    function updateSession(){
        setSessionData(
            {
                token: 'JSDHJSDHSJ',
                session: sessionData.session +1
            }
        )
    }

    return (
        <myContext.Provider value={sessionData}>
            <h1>Component with useContext</h1>
            <Component1></Component1>
            <button onClick={updateSession}>Update Session</button>
        </myContext.Provider>
    )
}



