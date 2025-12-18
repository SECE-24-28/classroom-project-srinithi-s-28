import { useState } from 'react';
const UseState = () => {
    const [number, updateNumber] = useState(0);
    const [text,updateText]=useState('');
    const addTion = () => {
        updateNumber(number + 1);
    }
    const subTract = () => {
        updateNumber(number - 1);
    }
    const reset = () => {
        updateNumber(0);
    }
   return (
    <div>
        <h2>UseState Hook Example</h2>
        <button onClick={subTract}>-</button>
        <input type="number" value={number}/>
        
        <button onMouseEnter={addTion}>+</button>
        <button onDoubleClick={reset}>Reset</button>
        <br/>
        <h2>TextTyping</h2>
        <input type="text" value={text} onChange={(e)=>updateText(e.target.value)}/>
         <button onDoubleClick={reset}>Reset</button>
    </div>
   ) 
}
export default UseState;