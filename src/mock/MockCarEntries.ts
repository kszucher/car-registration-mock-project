import {Car} from "../state/CarStateTypes.ts"

export const mockCarEntries = [
  {
    brand: 'Mazda',
    model: 'Mazda3',
    engineCapacity: 4000,
    color: 'Gray',
    configuration: 'Sedan',
    manufacturerWebsite: new URL('mazda.com'),
    manufacturingDate: new Date('2015.01.01')
  },
  {
    brand: 'Ford',
    model: 'Mustang',
    engineCapacity: 4000,
    color: 'Red',
    manufacturingDate: new Date('2017.01.01')
  },
  {
    brand: 'Audi',
    model: 'A4',
    engineCapacity: 4000,
    manufacturingDate: new Date('2019.01.01')
  },
] as Car[]
