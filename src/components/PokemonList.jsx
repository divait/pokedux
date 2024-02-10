import { useSelector } from 'react-redux'
import PokemonCard from './PokemonCard'


const PokemonList = () => {
const { pokemons } = useSelector((state) => {
  console.log("🚀 ~ const{pokemons}=useSelector ~ state:", state)
  return state.data
})

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '2rem',
      }}
    >
      {pokemons.map((pokemon) => {
        return (
          <PokemonCard
            key={pokemon.name}
            title={pokemon.name}
            url={pokemon.url}
            fav={!!pokemon.fav}
          />
        )
      })}
    </div>
  )
}

PokemonList.defaultProps = {
  pokemons: [
    {
      name: 'Ditto',
      types: ['magic', 'other'],
      url: ''
    },
    {
      name: 'Charmander',
      types: ['fire'],
      url: ''
    }
  ]
}

export default PokemonList
