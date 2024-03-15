import React, { useContext,useState } from 'react'
import { createContext } from 'react'
const TodoContext = createContext()

export default function TodoProvider({children}) {
    const[lists, setList] = useState([])

  return (
    <>
<TodoContext.Provider value={{lists,setList}}>
    {children}
</TodoContext.Provider>
    </>
  )
}
export const useTodo = () => useContext(TodoContext)
