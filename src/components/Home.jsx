import {useState} from 'react'
import Products from './Products'
import Categories from './Categories'

const Home = () => {
    const [products,setProducts] = useState([])
    const [category,setCategory] = useState('all')
    const [categories,setCategories] = useState([])
    const [loading,setLoading] = useState(false)
  return (
    <div>
       <Categories categories={categories} setCategories={setCategories} setCategory={setCategory} setLoading={setLoading} loading={loading}/>
       <Products products={products} setProducts={setProducts} category={category} loading={loading} setLoading={setLoading}/>
    </div>
  )
}

export default Home
