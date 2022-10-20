import {React, useState} from "react";

const Counter = ({count, setCount}) => {

const handleIncrement = () => {
    setCount(num => num + 1)
}

const handleDecrement = () => {
    setCount(num => num - 1)
}

return(
    <div>
        <h3>the count is {count}</h3>
    </div>
)

}

export default Counter;