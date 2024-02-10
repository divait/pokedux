import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
  pokemons: []
}

export const fetchPokeWithDetails = createAsyncThunk('data/fetchPokeWithDetails', async (_, thunkAPI) => {

})

export const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setPokemons: (state, action) => {
      state.pokemons = action.payload
    },
    setFavorite: (state, action) => {
      const iPokemon = state.pokemons.findIndex((p) => p.name === action.payload)
      if (iPokemon >= 0) {
        state.pokemons[iPokemon].fav = !state.pokemons[iPokemon].fav
      }
    }
  }
})

export const { setPokemons, setFavorite } = dataSlice.actions
export default dataSlice.reducer
