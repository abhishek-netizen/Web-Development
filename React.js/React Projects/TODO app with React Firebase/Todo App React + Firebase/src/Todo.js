import React,{useState} from 'react'
import {List,ListItem,ListItemAvatar,ListItemText,Modal,Button} from '@material-ui/core'
import db from './firebase'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import {makeStyles} from '@material-ui/styles'

const useStyles = makeStyles((theme)=> ({
    position: 'absolute',
    width: 400,
   
    border: '2px solid #000'

}))





function Todo(props) {
    const classes = useStyles();
    const[open,setOpen] = useState(false)
    const[input,setInput] = useState('');

    const handleOpen = ()=> {
        setOpen(true);
    };
 
     const UpdateTodo = () => {
         db.collection('todos').doc(props.todo.id).set({
          todo:input
         },{merge:true})
         setOpen(false);  
     }

    return (
        <>
    <Modal
    open={open}
    onClose={e => setOpen(false)}
    >
    <div>
        <h1 className={classes.paper}>I am a modal</h1>
        <input placeholder = {props.todo.todo} value={input} onChange ={event => setInput(event.target.value)}/>
        <Button onClick={UpdateTodo}>Update bro</Button>
    </div>

    </Modal>
        <List className="todo_list">
        <ListItemAvatar>
        </ListItemAvatar>
        <ListItem>
        <ListItemText primary={props.todo.todo} secondary={props.name} />     
         {/* recieving the value of the Todo frm app.js as props and a value as text */}
        </ListItem>
        <button onClick={handleOpen}>edit</button>
        <DeleteForeverIcon onClick={event => db.collection('todos').doc(props.todo.id).delete()} />
        </List>
        </>
    )
}

export default Todo
