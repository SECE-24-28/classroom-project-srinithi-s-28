import Props from "./Props";
import State from "./State";

const Learning=()=>{
    return(
        <div>
            <h1>Learning React</h1>
            <p>This is a React page</p>
            <Props hi="Welcome to Props" grade="12" age="17" img="/vite.svg"/>
            <State />
        </div>
    )
}
export default Learning;