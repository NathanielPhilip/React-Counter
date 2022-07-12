import {useState} from 'react';

const FuncCounter = () => {
const[count, setCount] = useState(0)

 const handleClick = () => {
    setCount(count + 1)
 } 

 const handleDecrement = () => {
    setCount(count - 1)
 } 

 return(
    <>
    <h1>Counter {count}</h1>
    <button onClick={handleClick}>IN</button>
    <button onClick={handleDecrement}>OUT</button>
    </>
 )
}


export default FuncCounter;