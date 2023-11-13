export type Car = {
  brand: string
  model: string
  engineCapacity: number
  color?: string
  configuration?: string
  manufacturingDate: Date
  manufacturerWebsite?: URL
}

export interface CarState {
  carEntries: Car[]
}
