import "./App.css"
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from './components/Home'
import ProductDetails from './components/ProductDetails'
const App = () => {
 
 
  return (
    
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/products/:id' element={<ProductDetails/>}/>
    </Routes>
     
    </BrowserRouter>
  )
}

export default App
