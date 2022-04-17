export const TodoItem=({todo,handleStatus})=>{

    return <div>
        {/* <div>id:{todo.id}</div> */}
        {todo.title}-{todo.status ? "done":"not done"}
        
        <button onClick={()=>{
            handleStatus(todo.id)
        }}>0</button>

        </div> ;
    
    
}