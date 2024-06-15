import sanityClient from '@sanity/client'

export const client = sanityClient({
  projectId: 'jdkhouz0',
  dataset: 'production',
  apiVersion: '2021-03-25',
  token:
    'skVgx52OHoF31uSAgfA5Lp8CzCDeItpKfqqkhjPzO3TWZCJTw00PEMz3UYcdY5zJAj9gMH7keRXO0ZhXzO7ZKMRmb75wIvrYGiHwUTdZ7xCKp8RrtrCIcHRkwFzNmw8ie7WlOEJr1lJYrBuAQY3QlEBAMLjPJommB61ffXhEwW3TOD2ndA0m',
  useCdn: false,
})
