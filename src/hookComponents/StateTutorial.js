import React, {useState} from 'react'

export default function StateTutorial() {
    const [counter,setCounter] = useState(0);
    return (
        <div>
            <h1>{counter}</h1>
            <button onClick={()=> setCounter(counter+1)}>Increment</button>
            <button disabled={!(counter>0)} onClick={()=> setCounter(counter>0?counter-1:0)}>Decrement</button>
        </div>
    )
}
