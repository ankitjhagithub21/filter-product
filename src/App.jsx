import React,{useState} from 'react'
import "./App.css"
import Products from './components/Products'
import Categories from './components/Categories'
const App = () => {
  const [categories,setCategories] = useState([])
  const [products,setProducts] = useState([])
  const [category,setCategory] = useState('all')
  return (
    
    <div>
      <Categories categories={categories} setCategories={setCategories} setCategory={setCategory}/>
      <Products products={products} setProducts={setProducts} category={category}/>
    </div>
  )
}

export default App
