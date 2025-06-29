import { Route, Routes } from "react-router-dom"
import TodoList from "./pages/TodoList/TodoList"
import Login from "./pages/Login/Login"
import Register from "./pages/Register/Register"
import NotFound from "./pages/NotFound/NotFound"
import Layout from "./components/Layout/Layout"


function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<TodoList/>} />
        </Route>
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='*' element={<NotFound/>} />
      </Routes>
    </>
  )
}

export default App
