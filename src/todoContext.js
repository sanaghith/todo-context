import {createContext , useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

const TodoContext = createContext();
const TodoProvider = ({children}) => {

    const [todos , setTodos] = useState([
        { id: 1, description: "Update project proposal for client review." , isCompleted : true },
        { id: 2, description: "Fix bug in user authentication module." , isCompleted : false },
        { id: 3, description: "Conduct research for upcoming presentation." , isCompleted : false  },
        { id: 4, description: "Prepare agenda for team meeting next week." , isCompleted : true  },
        { id: 5, description: "Review and approve budget for Q3." , isCompleted : true  },
        { id: 6, description: "Schedule interviews for new software engineer position." , isCompleted : false  },
        { id: 7, description: "Coordinate with marketing team on new product launch campaign." , isCompleted : false  }
    ])

    const deleteTodo = (id) => {
        setTodos(todos.filter((el)=> el.id !== id))
    }
     
    const addNewTodo = (todo) => {
        setTodos([...todos,{...todo , id:uuidv4()}])
    }

    const toggleTask = (id) => {
        const toggleTodos = todos.map((el,i)=> el.id == id ? {...el , isCompleted : !el.isCompleted }: el )
        setTodos(toggleTodos)
    }

    return (
        <TodoContext.Provider value={{todos , deleteTodo , addNewTodo , toggleTask}}>
            {children}
        </TodoContext.Provider>
    );



}


export {TodoProvider,TodoContext}