import {useState} from 'react'
import Products from './Products'
import Categories from './Categories'

const Home = () => {
    const [products,setProducts] = useState([])
    const [category,setCategory] = useState('all')
    const [categories,setCategories] = useState([])
  return (
    <div>
       <Categories categories={categories} setCategories={setCategories} setCategory={setCategory}/>
       <Products products={products} setProducts={setProducts} category={category}/>
    </div>
  )
}

export default Home
