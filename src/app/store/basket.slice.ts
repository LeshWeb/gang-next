import { createSlice, configureStore } from '@reduxjs/toolkit'

interface BasketState {
  minimum: number
  medium: number
  maxiumum: number
  length: number
}

export type BasketPayload = 'minimum' | 'medium' | 'maxiumum'

const basketSlice = createSlice({
  name: 'basket',
  initialState: {
    minimum: 0,
    medium: 0,
    maxiumum: 0,
    length: 0,
  },
  reducers: {
    incremented: (state: BasketState, actions) => {
      const type: BasketPayload = actions.payload
      state[type] += 1
      state.length += 1
    },
    decremented: (state: BasketState, actions) => {
      const type: BasketPayload = actions.payload
      if (state[type] === 0) return
      state[type] -= 1
      if (state.length === 0) return
      state.length -= 1
    },
  },
})

export const { incremented } = basketSlice.actions

export const store = configureStore({
  reducer: basketSlice.reducer,
  devTools: true,
})
