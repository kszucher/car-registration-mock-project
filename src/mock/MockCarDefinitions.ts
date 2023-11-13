type CarModel = {
  colors: string[]
  engineCapacities: number[]
  configurations: string[]
}

type CarBrandModels = {
  [model: string]: CarModel
}

type CarBrands = {
  [brand: string]: {
    models: CarBrandModels
  }
}

type CarDefinitions = {
  brands: CarBrands
}

export const mockCarDefinitions: CarDefinitions = {
  brands: {
    Audi: {
      models: {
        ['A4']: {
          colors: ['Silver', 'Slate'],
          engineCapacities: [2600, 2800],
          configurations: ['Sedan', 'Hatchback']
        },
        ['Q7']: {
          colors: ['Zinc'],
          engineCapacities: [2995],
          configurations: ['SUV']
        },
        ['TT']: {
          colors: ['Brown', 'Purple'],
          engineCapacities: [3300],
          configurations: ['Coupe']
        }
      }
    },
    BMW: {
      models: {
        ['3 Series']: {
          colors: ['Silver', 'Gray'],
          engineCapacities: [1796, 1998],
          configurations: ['Sedan', 'Hatchback']
        },
        ['X5']: {
          colors: ['Silver', 'Gray'],
          engineCapacities: [2979],
          configurations: ['SUV']
        },
        ['M2']: {
          colors: ['Silver', 'Gray'],
          engineCapacities: [2979, 2993],
          configurations: ['Coupe']
        }
      }
    },
    Mazda: {
      models: {
        ['MX-5 Miata']: {
          colors: ['Black'],
          engineCapacities: [1598, 1840],
          configurations: ['Sedan', 'Hatchback']
        },
        ['Mazda3']: {
          colors: ['Green', 'Amber', 'Blue'],
          engineCapacities: [1598, 1999],
          configurations: ['SUV']
        },
        ['RX-8']: {
          colors: ['Silver', 'Red'],
          engineCapacities: [1308],
          configurations: ['Coupe', 'Cabrio'],
        }
      }
    }
  }
}
