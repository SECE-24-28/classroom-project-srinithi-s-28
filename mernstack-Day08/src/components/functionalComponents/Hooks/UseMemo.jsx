import {useState, useMemo} from "react";
const UseMemo = () => {
    const slowFunction=(num)=>{
        console.log("calling slow function")
        for(let i=0;i<=1000000000;i++){};
        return num*2;
    };
    const[number,setnumber]=useState(0);
    const[theme,setTheme]=useState(true);
    const styling={
        backgroundColor:theme?'black':'white',
        color:theme?'white':'black'
    };
    
    const doubleNumber = useMemo(()=>{
        return slowFunction(number);
    },[number]);
   
    return(
    <div style={styling}>
        <h2>UseMemo Example</h2>
        <input type="number" value={number} />
        <button onClick={()=>setnumber(number+1)}>+</button><br/>
        <h3>Number is {doubleNumber}</h3>
        <button onClick={()=>setTheme(!theme)}>Toggle Theme</button>
    </div>
    )
}
export default UseMemo;