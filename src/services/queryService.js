import { URL, MAIN_URL } from '../config/index'

export const queryService = {
  getCollection: async () => {
    const response = await fetch(`${URL}getCollection`, {
      method: 'GET'
    })

    if (response.ok) {
      const data = await response.json()
      console.log(data)
    }
  },
  getQuery: async ({
    endPoint,
    mainUrl = MAIN_URL,
    method = 'GET',
    body = null
  }) => {
    const response = await fetch(`${mainUrl}${endPoint}`, { method, body })
    return response.json()
  }
}
