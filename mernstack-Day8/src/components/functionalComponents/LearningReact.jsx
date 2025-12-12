import { Link } from 'react-router-dom';
import State from './State.jsx';
import Props from './props.jsx';
import UseState from './Hooks/UseState.jsx';
import UseEffect from './Hooks/UseEffect.jsx';
import UseEffectAPI from './Hooks/UseEffectAPI.jsx';
import UseRef from './Hooks/UseRef.jsx';
import UseMemo from './Hooks/UseMemo.jsx';
import FakeImageAPI from './Hooks/FakeImageAPI.jsx';

const LearningReact = () => {
    return (
        <div>
         
            <h1>Learning React</h1>
            <p>This page is all about Learning React</p>
                 
            <hr />
            
            <h2>Props Example</h2>
            <Props hi="Hello SECE!!" grade="12th" age={18} img="\vite.svg" />
        

            <hr />
            <h2>State Management</h2>
            <State />
    
            <hr />
              <ol>
                <li>
                <h1>Hooks</h1>
                <ul>
                <UseState/><hr/>
                <UseEffect/><hr/>
                <UseEffectAPI/><hr/>
                <UseRef/><hr/>
                <UseMemo/><hr/>
                <FakeImageAPI/><hr/>
                </ul>
                </li>
            </ol>
            
        </div>
    )
}
export default LearningReact;