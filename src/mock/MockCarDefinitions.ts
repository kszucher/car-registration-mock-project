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
          engineCapacities: [4000, 6000],
          configurations: ['Sedan', 'Hatchback']
        },
        ['Q7']: {
          colors: ['Zinc'],
          engineCapacities: [4000, 5000],
          configurations: ['SUV']
        },
        ['TT']: {
          colors: ['Brown', 'Purple'],
          engineCapacities: [4000, 6000, 8000],
          configurations: ['Coupe']
        }
      }
    },
    BMW: {
      models: {
        ['3 Series']: {
          colors: ['Silver', 'Gray'],
          engineCapacities: [2500, 3000],
          configurations: ['Sedan', 'Hatchback']
        },
        ['X5']: {
          colors: ['Silver', 'Gray'],
          engineCapacities: [4000, 6000],
          configurations: ['SUV']
        },
        ['M2']: {
          colors: ['Silver', 'Gray'],
          engineCapacities: [4000, 6000],
          configurations: ['Coupe']
        }
      }
    },
    Mazda: {
      models: {
        ['MX-5 Miata']: {
          colors: ['Black'],
          engineCapacities: [4000, 6000],
          configurations: ['Sedan', 'Hatchback']
        },
        ['Mazda3']: {
          colors: ['Green', 'Amber', 'Blue'],
          engineCapacities: [4000, 6000],
          configurations: ['SUV']
        },
        ['RX-8']: {
          colors: ['Silver', 'Red'],
          engineCapacities: [4000, 6000],
          configurations: ['Coupe'],
        }
      }
    }
  }
}
