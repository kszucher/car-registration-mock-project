import {configureStore, createSlice, PayloadAction} from "@reduxjs/toolkit"
import {carState} from "../state/CarState.ts"
import {mockCarDefinitions} from "../mock/MockCarDefinitions.ts"
import {mockCarEntries} from "../mock/MockCarEntries.ts"

const carStateDefault = JSON.stringify(carState)

export const carSlice = createSlice({
  name: 'carSlice',
  initialState: carState,
  reducers: {
    resetData: () => JSON.parse(carStateDefault),
    loadSampleData(state){
      Object.assign(state.carEntries, mockCarEntries)
    },
    deleteData: (state) => {
      state.carEntries = []
    },
    setSelectedBrand(state, action: PayloadAction<string>){
      const brand = action.payload
      const model = Object.keys(mockCarDefinitions.brands[brand].models)[0]
      const engineCapacity = mockCarDefinitions.brands[brand].models[model].engineCapacities[0]
      const color = mockCarDefinitions.brands[brand].models[model].colors[0]
      const configuration = mockCarDefinitions.brands[brand].models[model].configurations[0]
      Object.assign(state.newCar, {brand, model, engineCapacity, color, configuration})
    },
    setSelectedModel(state, action: PayloadAction<string>) {
      const brand = state.newCar.brand
      const model = action.payload
      const engineCapacity = mockCarDefinitions.brands[brand].models[model].engineCapacities[0]
      const color = mockCarDefinitions.brands[brand].models[model].colors[0]
      const configuration = mockCarDefinitions.brands[brand].models[model].configurations[0]
      Object.assign(state.newCar, {model, engineCapacity, color, configuration})
    },
    setSelectedEngineCapacity(state, action: PayloadAction<number>) {
      state.newCar.engineCapacity = action.payload
    },
    setSelectedColor(state, action: PayloadAction<string>) {
      state.newCar.color = action.payload
    },
    setSelectedConfiguration(state, action: PayloadAction<string>) {
      state.newCar.configuration = action.payload
    },
    setSelectedManufacturingDate(state, action: PayloadAction<Date>) {
      state.newCar.manufacturingDate = action.payload
    },
    setSelectedManufacturerWebsite(state, action: PayloadAction<URL>) {
      Object.assign(state.newCar, {manufacturerWebsite: action.payload})
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
