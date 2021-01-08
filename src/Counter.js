import React from "react";

const Counter = ({value,increase})=> {
    return (
        <div>
            <button onClick={increase}>increase</button> {value}
        </div>
    )
}
export default Counter;