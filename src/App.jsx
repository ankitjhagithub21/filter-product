import React,{useState} from 'react'
import "./App.css"
import Products from './components/Products'
import Categories from './components/Categories'
const App = () => {
  const [categories,setCategories] = useState([])
  return (
    
    <div>
      <Categories/>
      <Products/>
    </div>
  )
}

export default App
