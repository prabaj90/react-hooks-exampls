import React, {useState, useReducer} from 'react'
const reducer = (state, action)=>{
    switch(action.type){
        case "INCREMENT":
           return {count:state.count+1, showText:!state.showText}
        default:
           return state;   
    }
}
export default function ReducerTutorial() {
    // const [count, setCount] = useState(0);
    // const [showText, setShowText] = useState(true);
    //useReducer will handle the state value for different purpose. 
    const [state, dispatch]=useReducer(reducer, {count:0, showText:true});
    return (
        <div>
            <h1>{state.count}</h1> 
            <button onClick={()=>{
                dispatch({type:"INCREMENT"})
            }}>Click Here</button>
            {state.showText && <p>This is a Even Number</p>}
        </div>
    )
}
 