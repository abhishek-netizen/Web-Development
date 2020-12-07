import React from 'react';
import './index.css';
import axios from 'axios';
const URL = '/hobby';

class Todohobby extends React.Component{
constructor(){
super();
this.state = {

hobby:[],
indexToEdit:-1,
editMode:false
}

this.Addhobby = this.Addhobby.bind(this);
this.clearAll = this.clearAll.bind(this);
this.deletehobby = this.deletehobby.bind(this);
this.edithobby = this.edithobby.bind(this);
this.changeTodo = this.changeTodo.bind(this);
this.editSaveBackend = this.editSaveBackend.bind(this);
}

   componentDidMount(){
console.log('component is loaded');
axios.get(URL)
.then((res)=>{
console.log(res.data);
this.setState({hobby:res.data})
})
.catch((errorOb)=>{
console.log(errorOb);
})
}

Addhobby(e){
e.preventDefault();
let hobbyValue = e.target.hob.value;
// addind todod to the backend
axios.post(URL,{hobby:hobbyValue})
.then((res)=>{
console.log(res.data)
})
.catch((errorOb)=>{
console.log(errorOb);
})

axios.get(URL)
.then((res)=>{
console.log(res.data);
this.setState({hobby:res.data})
})

.catch((errorOb)=>{
console.log(errorOb);
})
}


clearAll(){
this.setState(function(){
return{
hobby:[]
}
})
}



deletehobby(indexToDelete){
//adding the index of array that we want to delete
let deleteURL = URL+'/'+indexToDelete;
axios.delete(deleteURL)
.then((res)=>{
console.log(res)
})

.catch((res)=>{
console.log(res);
})

//getting the todo from the backened and adding new todos returned from backened to the state
axios.get(URL)
.then((res)=>{
console.log(res.data);
//adding new todos return in sate
this.setState({hobby:res.data});

})
.catch((errorOb)=>{
console.log(errorOb)
})

}


edithobby(indexToEdit){
this.setState({editMode:true})
this.setState({indexToEdit:indexToEdit})

}
changeTodo(todoNewValue){
this.setState(function(preState){
let newTodos = [...preState.hobby]

newTodos[this.state.indexToEdit] = todoNewValue;
return{
hobby:newTodos
}
})
}



editSaveBackend(e){

let todoNewValue = e.target.value;
let inputDom = e.target;
if (e.key=="Enter"){
let ediUrl = URL+'/'+this.state.indexToEdit;
axios.put(ediUrl,{modifiedhobby:todoNewValue})
.then((res)=>{
console.log(res.data);
this.setState({editMode:false})
})
.catch((errorOb)=>{
console.log(errorOb)
})

axios.get(URL)
.then((res)=>{
console.log(res.data);
this.setState({hobby:res.data})
})

.catch((errorOb)=>{
console.log(errorOb)
})

}
}
render(){

  return(
<div id = "student">
<b/>HObbies to Display<br/>
{
this.state.editMode?<input type = "text" value = {this.state.hobby[this.state.indexToEdit]}
    onChange = {(e)=>{this.changeTodo(e.target.value)}} onKeyPress = {this.editSaveBackend}/>:""

}
<ul>

{this.state.hobby.map((val,index)=>{
console.log(this);
return <li>{val} <button onClick = {()=>{this.deletehobby(index)}}>Delete</button>
<button onClick = {()=>{this.edithobby(index)}}>Edit</button>
</li>
})
}

</ul>

<form onSubmit = {this.Addhobby}>

<input type = "text" name = "hob"/><br/>
<button>Add hobby</button><br/>





</form>
<button onClick = {this.clearAll}>Clear All</button>
 
 </div>


    )
}

}


export default Todohobby;