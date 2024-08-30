import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home'
import CreateCarros from './CriarMatricula'
import ReadCarros from './ListarMatricula'
import UpdateCarros from './AlterarMatricula'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <BrowserRouter>
            <Routes>
                  <Route path="/" element={ <Home/> }/>
                  <Route path="/carros/cadastrar" element={ <CreateCarros/> }/>
                  <Route path="/carros" element={ <ReadCarros/> }/>
                  <Route path="/carros/alterar" element={ <UpdateCarros/>}/>
            </Routes> 
      </BrowserRouter>
  </React.StrictMode>,
)



