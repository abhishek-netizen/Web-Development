import React,{useState} from 'react';

function CounterHook() {
	//this line creaste a state variable called count.We also get a function called setCount.
	//to which we can pass the value that we cant to change.
	const [count,setCount] = useState(2);
	const [title,changeTitle] = useState("title of the head")
	//inner function increase
	function increase(){
		setCount(count+1);
	}
	// inner function decrease.
	function decrease(){
		setCount(count-1);
	}
	return (
		<div>
		<h2>{title}</h2>
		<input type = "text" value = {title} onChange = {(e)=>{changeTitle(e.target.value)}} />
		Counter:{count}
		<button onClick = {increase}>Increase </button>
		<button onClick = {decrease}>Decrease </button>
		</div>
		)
}
export default CounterHook;