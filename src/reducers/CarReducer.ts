import {configureStore, createSlice, PayloadAction} from "@reduxjs/toolkit"
import {carState} from "../state/CarState.ts"
import {Car} from "../state/CarStateTypes.ts"

const carStateDefault = JSON.stringify(carState)

export const carSlice = createSlice({
  name: 'carSlice',
  initialState: carState,
  reducers: {
    resetData: () => JSON.parse(carStateDefault),
    loadData: (state, action: PayloadAction<{carEntries: Car[]}>) => ({...state, carEntries: action.payload.carEntries})
  },
})

export const { actions } = carSlice

export const store = configureStore({
  reducer: carSlice.reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false })
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
