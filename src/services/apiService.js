import { URL } from '../config/index'

export const beaconService = {
  getCollection: async () => {
    const response = await fetch(`${URL}getCollection`, {
      method: 'GET'
    })

    if (response.ok === true) {
      const data = await response.json()
      console.log(data)
    }
  }
}
