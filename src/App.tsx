// Utilize a API abaixo para puxar a lista de produto
// https://ranekapi.origamid.dev/json/api/produto
// Cada produto possui o id, o mesmo pode ser passado na api para retornar os dados desse produto específico

import { BrowserRouter, Routes, Route } from "react-router-dom"
import Products from "./Components/Products/Products"
import Header from "./Components/Header/Header"
import Footer from "./Components/Footer/Footer"
import './App.css'
import Contact from "./Components/Contact/Contact"

// https://ranekapi.origamid.dev/json/api/produto/notebook
function App(): JSX.Element {


  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <div className="content">
          <Routes>
            <Route path="/" element={<Products/>}/>
            <Route path="contato" element={<Contact/>}/>
          </Routes>
        </div>
        <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App
