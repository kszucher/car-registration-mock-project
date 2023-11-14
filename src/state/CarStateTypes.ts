type Car = {
  brand: string
  model: string
  engineCapacity: number
  color?: string
  configuration?: string
  manufacturingDate: string
  manufacturerWebsite?: string
}

export type ValidatedCar = {
  brand: string
  model: string
  engineCapacity: number
  color?: string
  configuration?: string
  manufacturingDate: Date
  manufacturerWebsite?: URL | string
}

export interface CarState {
  carEntries: ValidatedCar[],
  newCar: Car
}
