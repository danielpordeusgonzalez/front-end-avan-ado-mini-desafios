import BotaoAlerta from "./components/BotaoAlerta"
import Filme from "./components/Filme"
import LogoUniesp from "./components/LogoUniesp"
import MeuPerfil from "./components/MeuPerfil"
import TrocaTexto from "./components/TrocaTexto"

const App = () => {
  const filmes = [
    { id: 1, titulo: "Titanic", ano: 1997 },
    { id: 2, titulo: "O senhor dos Anéis", ano: 2001 },
    { id: 3, titulo: "Vingadores", ano: 2012 }
 ]

  return (
  <div>
    <MeuPerfil />
    <BotaoAlerta />
    <TrocaTexto/>
    <LogoUniesp/>
    <h1>Meus filmes favoritos</h1>
    <ul>
      {filmes.map((filme) => (
      <Filme key={filme.id} titulo={filme.titulo} ano={filme.ano}
      />))}
    </ul>
  </div>
    
  )
}

export default App