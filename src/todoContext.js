import {createContext , useState } from 'react'

const TodoContext = createContext();
const TodoProvider = ({children}) => {

    const [todos , setTodos] = useState([
        { id: 1, description: "Update project proposal for client review." },
        { id: 2, description: "Fix bug in user authentication module." },
        { id: 3, description: "Conduct research for upcoming presentation." },
        { id: 4, description: "Prepare agenda for team meeting next week." },
        { id: 5, description: "Review and approve budget for Q3." },
        { id: 6, description: "Schedule interviews for new software engineer position." },
        { id: 7, description: "Coordinate with marketing team on new product launch campaign." }
    ])

    const deleteTodo = (id) => {
        setTodos(todos.filter((el)=> el.id !== id))
    }


    return (
        <TodoContext.Provider value={{todos , deleteTodo}}>
            {children}
        </TodoContext.Provider>
    );



}


export {TodoProvider,TodoContext}