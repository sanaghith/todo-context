import React, { useContext } from 'react'
import { TodoContext } from './todoContext'

const TodoList = () => {


    const {todos , deleteTodo , toggleTask} = useContext(TodoContext)

  
    

  return (
    <div>
        {
            todos.map((el,i)=> (
                <div key={i}>
                    <hr/>
                    <input
                        type="checkbox"
                        checked={el.isCompleted}
                        onChange={()=>toggleTask(el.id)}
                    />
                    
                    <h1 style={{textDecoration : el.isCompleted ? 'line-through' : "none"}}> 
                        
                        {el.description} 
                    
                    </h1>
                   
                    <button onClick={()=>deleteTodo(el.id)}> delete </button>
                    <hr/>
                </div>
            ))
        }
    </div>
  )
}

export default TodoList