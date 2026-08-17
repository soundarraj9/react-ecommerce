import React, {createContext, useState, useEffect} from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Product from './Pages/Product'
import NavBar from './Components/NavBar'
import Notfound from './Components/Notfound'
import ProductDetails from './Pages/ProductDetails'
import Cart from './Pages/Cart'
import Login from './Pages/Login'
import "./App.css"
import "./responsive.css"




export const Details = createContext()

export default function App() {
    const [mobileArray, setMobileArray] = useState({})
    const [featureMobileArray, setFeatureMobileArray] = useState([])
    const [allMobileArray, setAllMobileArray] = useState([])
    const [displayArray, setDisplayArray] = useState(allMobileArray);
    const [cartArray, setCartArray] = useState([])
    const [loading, setLoading] = useState(true);
    const [isForm, setIsForm] = useState(true)
    const [isLogin, setIsLogin] = useState(false)

    const brandNameArray = ["apple", "samsung", "redmi", "oneplus", "realme", "vivo", "oppo", "motorola"]


    useEffect(() => {
      const fetchProducts = async () => {
        try {
          const response = await fetch("/products.json");

          if (!response.ok) {
            throw new Error("Failed to fetch products");
          }

          const data = await response.json();

          setMobileArray(data);
        } catch (error) {
          console.error("Error fetching products:", error);
        } finally {
          setLoading(false);
        }
      };

      fetchProducts();
    }, []);

    useEffect(() => {
      
      if (!mobileArray || Object.keys(mobileArray).length === 0) {
        return;
      }

      const filterMobile = brandNameArray
        .map((brand) => mobileArray[brand]?.[0])
      .filter(Boolean);

      const allMobile = brandNameArray.map(
        (brand) => mobileArray[brand] || []
      )

      setFeatureMobileArray(filterMobile);

      const flattenedMobile = allMobile.flat();

      setAllMobileArray(flattenedMobile)
      setDisplayArray(flattenedMobile)
    }, [mobileArray]);



  return (
    <Details.Provider value={{mobileArray,setMobileArray, brandNameArray, isForm, setIsForm, isLogin, setIsLogin, featureMobileArray, setFeatureMobileArray, loading, allMobileArray, setAllMobileArray, displayArray, setDisplayArray, cartArray, setCartArray}}> 
      <BrowserRouter>
      <NavBar />
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/product' element={<Product/>}/>
            <Route path='/product/:products' element={<Product/>}/>
            <Route path='/productdetail' element={<ProductDetails/>}/>
            <Route path='/productdetail/:productName' element={<ProductDetails/>}/>
            <Route path='/cart' element={<Cart />}/>
            {/* <Route path='/product/:product/:productName' element={<Product/>}/> */}
            <Route path='/login' element={<Login/>}/>
            <Route path='*' element={<Notfound/>}/>
        </Routes>
      </BrowserRouter>
    </Details.Provider>
  )
}
