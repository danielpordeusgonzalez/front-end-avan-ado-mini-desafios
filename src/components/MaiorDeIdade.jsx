import React from 'react'

const MaiorDeIdade = ({idade}) => {
  return (
    <>
        <h2>Voce tem {idade} anos</h2>
        {idade >= 18 ? <p>✅ Pode dirigir!</p> : <p>❌ Não pode dirigir ainda. Faltam {18 - idade} anos</p>}
    </>
  )
}

export default MaiorDeIdade
