import {useEffect,useState} from "react";
const UseEffect=()=>{
     const[text,updateText]=useState("Hello");
     const[number,updateNumber]=useState(0);
     useEffect(()=>{
        console.log(text);
     },[text]);
   return(
    <div>

    <h2>This is Use Effect Hook </h2>
    <input type="text" 
    value={text}
    onChange={(e)=>{
        updateText(e.target.value);
    }}
    />
    <p>Current text: {text}</p>

    <input type="number" 
    value={number}
    onChange={(e)=>{
        updateNumber(e.target.value);
    }}
    />
    <p>Current number: {number}</p>
    </div>
   )
}
export default UseEffect;