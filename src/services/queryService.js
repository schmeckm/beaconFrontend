import { BASE_URL } from '../config/index'

export const queryService = {
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
