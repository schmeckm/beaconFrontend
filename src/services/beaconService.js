import { MAIN_URL, URL } from '../config/index'

export const beaconService = {
  fetchData: async () => {
    const response = await fetch(`${MAIN_URL}dbBeacon/getAllBeacons`, {
      method: 'GET'
    })
    return response.json()
  }
}
