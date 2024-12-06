import React from 'react'

const App = () => { 
    const name='john';
    const x=10, y=20;
    const names= ['Brad', 'Mary', 'Sara', 'Lily'];
    
    const loggedIn = true;

    const styles ={
        color: 'red',
        fontSize: '55px'
    }
// Conditional
    // if(loggedIn){
    //     return <h1>Hello Member</h1> //Code below will not be implemented
    // }

    return (
        <>
            <div className='text-5xl'>App</div>
            {/* <p style={{color:'red', fontSize:'24px'}}>Hello {name}</p> */}
            <p style={styles}>Hello {name}</p>
            <p>The sum of {x} and {y} is {x+y}</p>
            <ul>
                {names.map((name, index) => 
                <li key={index}>{name}</li>
                )}
            </ul>

            {/* Ternary Operation */}
            {loggedIn ? <h1>Hello Member</h1> : <h1>Hello Guest</h1>}
            
        </>
    )
}

export default App