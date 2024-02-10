import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import './App.css'
import { Col, Spin, ConfigProvider, theme } from 'antd'

import SearchBar from './components/SearchBar'
import PokemonList from './components/PokemonList'
import logo from './assets/logo-pokedux.svg'
import { setPokemons as setPokemonsAction } from './redux/slices/dataSlice'
import { getPokemons } from './api'

function App() {
  const dispacth = useDispatch()
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    fetchPokemons()
  }, [])

  const fetchPokemons = async () => {
    const pokes = await getPokemons()

    dispacth(setPokemonsAction(pokes))
    setLoading(false)
  }

  return (
    <ConfigProvider
      theme={{
        // 1. Use dark algorithm
        algorithm: theme.darkAlgorithm

        // 2. Combine dark algorithm and compact algorithm
        // algorithm: [theme.darkAlgorithm, theme.compactAlgorithm],
      }}
    >
      <Col style={{ margin: '3rem' }}>
        {/* <h2 style={{ margin: '2rem' }}>Pokedux</h2> */}
        <img width="280px" src={logo} alt="Pokedux" />
      </Col>
      <Col style={{ marginBottom: '1rem' }} span={16} offset={4}>
        <SearchBar />
      </Col>
      <Spin spinning={loading} size='large' />
      {!loading && <PokemonList />}
    </ConfigProvider>
  )
}

export default App
