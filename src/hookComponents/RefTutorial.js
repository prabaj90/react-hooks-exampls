import React, {useState, useRef} from 'react'

export default function RefTutorial() {
    const [name, setName] = useState("");
    const inputRef = useRef(null);
     const changeName=()=>{
         console.log(inputRef.current.value);
         setName(inputRef.current.value);
         inputRef.current.value="";
         inputRef.current.focus();
     }
    return (
        <div>
            <h1>{name}</h1>
        <input type="text" placeholder="Ex..."  ref={inputRef}/>
      <button onClick={changeName}>Change Name</button>
        </div>
    )
}
