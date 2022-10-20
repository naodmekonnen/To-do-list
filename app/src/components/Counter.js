import {React, useState} from "react";

const Counter = ({count, setCount}) => {

const handleIncrement = () => {
    setCount(num => num + 1)
}

const handleDecrement = () => {
    setCount(num => num - 1)
}

}

export default Counter;