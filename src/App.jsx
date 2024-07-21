import { useState } from 'react'
import './App.css'
import Product from './components/Product'
import Navbar from './components/Navbar'
import { Form, Route, Routes } from 'react-router-dom'
import GridCard from './components/GridCard'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/p' element={<Product/>}/>
        <Route path='/' element={<GridCard/>}/>
      </Routes>

    </>
  )
}

export default App
