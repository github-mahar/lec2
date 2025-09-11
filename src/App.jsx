import { useState } from 'react'
import './App.css'
import Profile from './components/profile.jsx'
import Navbar from './components/navbar.jsx'
import ImgContainer from './components/imgContainer.jsx'
import { BrowserRouter, Routes, Route, Link, data } from 'react-router-dom';
import Form from './components/Form.jsx';
import ProductCards from './components/productCards.jsx';
import ProductDetails from './components/productDetails.jsx';
import NotFound from './components/NotFound.jsx'
import AddToCart from './components/addToCart.jsx'
import { ThemeProvider } from './Context/ThemeToggler.jsx';


function App() {
  function Home() {
    const GetData = (data) => {
      console.log("Data from child:", data);
    };
    return (
      <>
      <Profile 
        name="Usama"
        class="BSCS"
        gender="Male"
      />
      <div className="img-container">
        <ImgContainer/>
      </div>
        <Form onSubmit={GetData} />

      </>
    )
  }
  function About() {
    return <h2>About</h2>;
  }
  function Contact() {
    return <h2>Contact</h2>;
  }
  function Products() {
    return <ProductCards />;
  }
  function Features() {
    return <h2>Features</h2>;
  }
  function Login() {
    return <h2>LogIn</h2>;
  }
  function Cart() {
    return <AddToCart/>;
  }
  let arr = [];
  
  // fetch("https://fakestoreapi.com/products")
  //   .then(response => response.json())
  //   .then(data => {
  //     arr = data;
  //     // console.log(arr);
  //     arr.map(product => {
  //       console.log(product.id);
  //     });
  //   })
  //   .catch(error => console.error('Error:', error));

  return (
    <ThemeProvider>
      <BrowserRouter>
        <div className=''>
        

          <Navbar
        
          logo="/store-logo.png"
          />
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/features" element={<Features />} />
            <Route path="/login" element={<Login />} />
            <Route path="/products" element={<Products />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<NotFound/>} />
            <Route path="/" element={<Home />} />
          </Routes>
      </div>

    </BrowserRouter>
  </ThemeProvider>
  )
}

export default App
