
import { useState } from 'react'
import '../App.css'
import 'react-loading-skeleton/dist/skeleton.css'
import { SkeletonTheme } from 'react-loading-skeleton';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Produtos from './Components/ProductsPage/ProductsPage';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Contato from './Components/Contato/Contato';
import ProductPage from './Components/ProductPage/ProductPage';
//import useLocalStorage from './useLocalStorage';
//import useFetch from './useFetch';


const App = () => {
  return (
    <div className='App'>
      <BrowserRouter>
        <Header/>
        <div className='content'>
          <SkeletonTheme baseColor="#F8F9FA" highlightColor="#E7E8EC">
            <Routes>
              <Route path='/' element={<Produtos/>}/>
              <Route path='contato' element={<Contato/>}/>
              <Route path='produto/:id' element={<ProductPage/>}/>
            </Routes>
          </SkeletonTheme>
        </div>
        <Footer/>
      </BrowserRouter>
    </div>

  );
};
export default App;
