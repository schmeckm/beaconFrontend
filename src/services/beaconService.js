import { URL } from '../config/index'

export const beaconService = {
  fetchData: async () => {
    const response = await fetch(`${URL}dbBeacon/getAllBeacons`, {
      method: 'GET'
    })

    if (response.ok === true) {
      const data = await response.json()
      return data

      // setBeacons(
      //   data.data.map((item, index) => {
      //     return {
      //       value: item._id,
      //       label: item.beaconMac
      //     }
      //   })
      // )
    }
  }
}
