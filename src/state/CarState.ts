import {CarState} from "./CarStateTypes.ts"
import {mockCarDefinitions} from "../mock/MockCarDefinitions.ts"

const defaultBrand = Object.keys(mockCarDefinitions.brands)[0]
const defaultModel = Object.keys(mockCarDefinitions.brands[Object.keys(mockCarDefinitions.brands)[0]].models)[0]
const defaultEngineCapacity = mockCarDefinitions.brands[defaultBrand].models[defaultModel].engineCapacities[0]
const defaultColor = mockCarDefinitions.brands[defaultBrand].models[defaultModel].colors[0]
const defaultConfiguration = mockCarDefinitions.brands[defaultBrand].models[defaultModel].configurations[0]

export const carState: CarState = {
  carEntries: [],
  newCar: {
    brand: defaultBrand,
    model: defaultModel,
    engineCapacity: defaultEngineCapacity,
    color: defaultColor,
    configuration: defaultConfiguration,
    manufacturingDate: '',
    manufacturerWebsite: '',
  },
}
