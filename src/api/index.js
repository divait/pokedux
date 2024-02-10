import axios from 'axios'

export const getPokemons = () =>
  axios
    .get('https://pokeapi.co/api/v2/pokemon?limit=151&offset=0')
    .then((r) =>  r.data.results)
    .catch((error) => console.log(error))

export const getPokemon = (url) =>
  axios
    .get(url)
    .then((r) => {
      console.log(r.data)
      return{ 
        img: r.data.sprites.front_default,
        types: r.data.types.map(t => t.type.name)
      }
    })
    .catch((error) => console.log(error))