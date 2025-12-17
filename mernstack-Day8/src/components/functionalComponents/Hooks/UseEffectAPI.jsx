import axios from "axios"
import {useState, useEffect} from "react";
const UseEffectAPI=()=>{
    const[postsParameter,setPostsParameter]=useState([]);
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/posts").then(res=>{
            setPostsParameter(res.data);
            console.log(res.data);
        })
        .catch(()=>{
            console.log("cant fetch from the API")
        });
    },[postsParameter]);

    return(
        <div>
            <h2>UseEffectAPI Component</h2>
            <p>It is going to fetch the data from  JSON Typicode Placeholder API</p>
            <ol>
                <p>The API values which fetchd was</p>
                {postsParameter.map((post)=>(
                <li key={post.id}>{post.title}</li>
                ))}
            </ol>
        </div>
    );
    
};
export default UseEffectAPI;