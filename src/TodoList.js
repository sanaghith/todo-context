import React, { useContext } from 'react'
import { TodoContext } from './todoContext'

const TodoList = () => {


    const {todos , deleteTodo} = useContext(TodoContext)

    

  return (
    <div>
        {
            todos.map((el,i)=> (
                <div key={i}>
                    <hr/>
                    <h1> {el.description} </h1>
                    <button onClick={()=>deleteTodo(el.id)}> delete </button>
                    <hr/>
                </div>
            ))
        }
    </div>
  )
}

export default TodoList