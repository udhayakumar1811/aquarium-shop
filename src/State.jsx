import { useState } from "react";




 
export  function State(){
    const [count , setCount]=useState(0)
    return (
        <div>
            <h1>Sub Count</h1>
            <button onClick={() => setCount((count)=>count+1)}>sub {count}</button>
        </div>
    )
}