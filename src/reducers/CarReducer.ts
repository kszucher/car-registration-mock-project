import {configureStore, createSlice, PayloadAction} from "@reduxjs/toolkit"
import {carState} from "../state/CarState.ts"
import {Car} from "../state/CarStateTypes.ts"
import {mockCarDefinitions} from "../mock/MockCarDefinitions.ts"

const carStateDefault = JSON.stringify(carState)

export const carSlice = createSlice({
  name: 'carSlice',
  initialState: carState,
  reducers: {
    resetData: () => JSON.parse(carStateDefault),
    loadData: (state, action: PayloadAction<{carEntries: Car[]}>) => {
      Object.assign(state.carEntries, action.payload.carEntries)
    },
    setSelectedBrand(state, action: PayloadAction<string>){
      const brand = action.payload
      const model = Object.keys(mockCarDefinitions.brands[brand].models)[0]
      const engineCapacity = mockCarDefinitions.brands[brand].models[model].engineCapacities[0]
      const color = mockCarDefinitions.brands[brand].models[model].colors[0]
      const configuration = mockCarDefinitions.brands[brand].models[model].configurations[0]
      state.newCar.brand = brand
      state.newCar.model = model
      state.newCar.engineCapacity = engineCapacity
      state.newCar.color = color
      state.newCar.configuration = configuration
    },
    setSelectedModel(state, action: PayloadAction<string>) {
      const brand = state.newCar.brand
      const model = action.payload
      const engineCapacity = mockCarDefinitions.brands[brand].models[model].engineCapacities[0]
      const color = mockCarDefinitions.brands[brand].models[model].colors[0]
      const configuration = mockCarDefinitions.brands[brand].models[model].configurations[0]
      state.newCar.model = model
      state.newCar.engineCapacity = engineCapacity
      state.newCar.color = color
      state.newCar.configuration = configuration
    },
    setSelectedEngineCapacity(state, action: PayloadAction<number>) {
      state.newCar.engineCapacity = action.payload
    },
    setSelectedColor(state, action: PayloadAction<string>) {
      state.newCar.color = action.payload
    },
    setSelectedConfiguration(state, action: PayloadAction<string>) {
      state.newCar.configuration = action.payload
    }
  },
})

export const { actions } = carSlice

export const store = configureStore({
  reducer: carSlice.reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false })
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
