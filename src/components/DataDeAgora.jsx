import React, {useState, useEffect} from 'react'

const DataDeAgora = () => {
    const [data, setData] = useState('')

    useEffect(() => {
        return setData(new Date().toLocaleString())
    }, [])

  return (
    <div>
      <p>Carregado em: {data}</p>
    </div>
  )
}

export default DataDeAgora
