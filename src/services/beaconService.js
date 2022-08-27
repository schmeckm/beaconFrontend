import { URL } from '../config/index'

export const beaconService = {
  fetchData: async () => {
    const response = await fetch(`${URL}dbBeacon/getAllBeacons`, {
      method: 'GET'
    })
    return response.json()
  }
}
