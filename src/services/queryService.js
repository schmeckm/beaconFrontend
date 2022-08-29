import { BASE_URL } from '../config/index'

export const queryService = {
  getCollection: async () => {
    // const response = await queryService.getQuery({
    //   baseUrl: `${BASE_URL_LOCAL}/api/collection`,
    //   endPoint: 'getCollection'
    // })
    // if (response.ok) {
    //   const data = await response.json()
    //   console.log(data)
    // }
  },
  getQuery: async ({
    endPoint,
    baseUrl = `${BASE_URL}/api/`,
    method = 'GET',
    body = null
  }) => {
    const url = `${baseUrl}${endPoint}`
    const response = await fetch(url, { method, body })
    return response.json()
  }
}
