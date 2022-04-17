import { useState } from 'react';
import {TodoInput} from './TodoInput'
import { TodoItem } from './TodoItem';
import { nanoid } from 'nanoid';

function Todo(){
    
const [todolist,setTodolist]=useState([])
 
const getData=(todo)=>{
    // console.log("Recive",todo)
    const payload={
        title:todo,
        status:false,
        id:nanoid(4)

    }
    setTodolist([...todolist,payload])
};
    const handleStatus=(id)=>{
        console.log("id",id)
      //find this id from todoList
       
      //toggle its status
        //ger new array ,set it new again
        setTodolist( 
        todolist.map((e)=>(e.id===id ? {...e,status : !e.status}:e))
        )
    }



 
 return <div>
      {todolist.map((e)=>( 
        //    <TodoItem todo={e}></TodoItem>

        //for toggle
        <TodoItem handleStatus={handleStatus} todo={e} ></TodoItem>
        ))}
        <TodoInput getData={getData}/>
       
    </div>
}

export {Todo};