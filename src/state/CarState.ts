import {CarState} from "./CarStateTypes.ts"
import {mockCarDefinitions} from "../mock/MockCarDefinitions.ts"

export const carState: CarState = {
  carEntries: [],
  newCar: {
    brand: Object.keys(mockCarDefinitions.brands)[0],
    model: '',
    engineCapacity: 0,
    color: '',
    configuration: '',
    manufacturingDate: new Date(),
    manufacturerWebsite: new URL('https://www.cars.com/'),
  },
}
