import BotaoAlerta from "./components/BotaoAlerta"
import CartaoDestaque from "./components/CartaoDestaque"
import EcoTexto from "./components/EcoTexto"
import Filme from "./components/Filme"
import LogoUniesp from "./components/LogoUniesp"
import MaiorDeIdade from "./components/MaiorDeIdade"
import MeuPerfil from "./components/MeuPerfil"
import TrocaTexto from "./components/TrocaTexto"
import DataDeAgora from "./components/DataDeAgora"

import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Home from "./pages/Home"
import Sobre from "./pages/Sobre"
import ListeDeFilmes from "./components/ListeDeFilmes"


const App = () => {
//   const filmes = [
//     { id: 1, titulo: "Titanic", ano: 1997 },
//     { id: 2, titulo: "O senhor dos Anéis", ano: 2001 },
//     { id: 3, titulo: "Vingadores", ano: 2012 }
//  ]

  return (
  <div>
    {/* <MeuPerfil />
    <BotaoAlerta />
    <TrocaTexto/>
    <LogoUniesp/>
    <h1>Meus filmes favoritos</h1>
    <ul>
      {filmes.map((filme) => (
      <Filme key={filme.id} titulo={filme.titulo} ano={filme.ano}
      />))}
    </ul>
    <MaiorDeIdade idade={18}/>
    <MaiorDeIdade idade={21}/>
    <MaiorDeIdade idade={16}/>
    <CartaoDestaque />
    <EcoTexto />
    <BrowserRouter>
      <nav>
         <Link to="/">Home</Link>
        {' | '}
        <Link to="/sobre">Sobre</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/sobre"  element={<Sobre />}/>
      </Routes>
    </BrowserRouter> */}
    <DataDeAgora/>
    <ListeDeFilmes/>
  </div>
    
  )
}

export default App