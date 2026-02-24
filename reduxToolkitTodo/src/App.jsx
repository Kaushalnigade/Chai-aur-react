import { useState } from 'react'
import './App.css'

import AddTodo from './components/AddTodos'
import Todos from './components/Todos'   // ✅ You forgot this

function App() {
  return (
    <>
      <AddTodo />
      <Todos />
    </>
  )
}

export default App