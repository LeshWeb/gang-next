import { createSlice, configureStore } from '@reduxjs/toolkit'
import Cookies from 'js-cookie'

export interface BasketState {
  minimum: number
  medium: number
  maxiumum: number
  length: number
}

export type BasketPayload = 'minimum' | 'medium' | 'maxiumum'

const initialState: BasketState = {
  minimum: 0,
  medium: 0,
  maxiumum: 0,
  length: 0,
}

const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    incremented: (state: BasketState, actions) => {
      const type: BasketPayload = actions.payload
      state[type] += 1
      state.length += 1

      Cookies.set('basket', JSON.stringify(state), { expires: 7 })
    },
    decremented: (state: BasketState, actions) => {
      const type: BasketPayload = actions.payload
      if (state[type] === 0) return
      state[type] -= 1
      if (state.length === 0) return
      state.length -= 1

      Cookies.set('basket', JSON.stringify(state), { expires: 7 })
    },
    resetBasket: (state: BasketState) => {
      state.minimum = 0
      state.medium = 0
      state.maxiumum = 0
      state.length = 0

      Cookies.remove('basket')
    },
    setBasket: (state: BasketState, actions) => {
      const { minimum, medium, maxiumum, length } = actions.payload
      state.minimum = minimum
      state.medium = medium
      state.maxiumum = maxiumum
      state.length = length
    },
  },
})

export const { incremented, decremented, resetBasket, setBasket } =
  basketSlice.actions

export const store = configureStore({
  reducer: basketSlice.reducer,
  devTools: true,
})
