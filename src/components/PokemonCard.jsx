import { useEffect, useState } from 'react'
import { Card, Button } from 'antd'
import { useDispatch } from 'react-redux'
import { StarOutlined, StarFilled } from '@ant-design/icons'
import { getPokemon } from '../api'
import { setFavorite } from '../redux/slices/dataSlice'

const PokemonCard = ({ title, url, fav }) => {
  const dispatch = useDispatch()
  const [types, setTypes] = useState([])
  const [img, setImg] = useState('')

  useEffect(() => {
    console.log('URL', url)
    fetchPokemons()
  }, [])

  const fetchPokemons = async () => {
    const poke = await getPokemon(url)
    setImg(poke.img)
    setTypes(poke.types)
  }

  const handleOnFavorite = () => {
    dispatch(setFavorite(title))
  }

  return (
    <Card
      title={title}
      cover={
        <img
          src={img} //"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
          alt={title}
        />
      }
      extra={<Button type="default" onClick={handleOnFavorite} icon={fav ? <StarFilled /> : <StarOutlined />}></Button>}
    >
      <Card.Meta description={types.toString()} />
    </Card>
  )
}

export default PokemonCard
