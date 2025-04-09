import { Suspense } from 'react'
import './App.css'
import Banner from './Components/Banner/Banner'
import Footer from './Components/Footer/Footer'
import Navbar from './Components/Navbar/Navbar'
import Products from './Components/Products/Products'

function App() {
  const prductPromise =fetch("items.json").then(res => res.json());

  return (
    <>
    <Navbar></Navbar>
    <Banner></Banner>
    <Suspense fallback={<h2>Loading...</h2>}>
      <Products prductPromise={prductPromise}></Products>
    </Suspense>
    <Footer></Footer>
    </>
  )
}

export default App
