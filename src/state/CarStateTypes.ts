import {carDefinitions} from "./Consts.ts"

type Car = {
  [Brand in keyof typeof carDefinitions]: {
    carBrand: Brand;
    carModel: typeof carDefinitions[Brand][number]
  }
}[keyof typeof carDefinitions]

export interface CarState {
  registeredCars: Car[]
}
