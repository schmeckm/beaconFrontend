import { MAIN_URL, URL } from '../config/index'

export const beaconService = {
  fetchData: async () => {
    const response = await fetch(`${MAIN_URL}dbBeacon/getAllBeacons`, {
      method: 'GET'
    })

    const responseData = await response.json()
    if (responseData.success) {
      return responseData.data.map((el) => ({
        value: el._id,
        label: el.beaconMac
      }))
    }
  },
  fetchEnvironment: async () => {
    const response = await fetch(`${MAIN_URL}environment/getAllEnvironments`, {
      method: 'GET'
    })
    const responseData = await response.json()
    if (responseData.success) {
      return responseData.data.map((el) => ({
        value: el._id,
        label: el.name
      }))
    }
  },
  fetchZone: async () => {
    const response = await fetch(`${MAIN_URL}zone/getAllZones`, {
      method: 'GET'
    })

    const responseData = await response.json()
    if (responseData.success) {
      return responseData.data.map((el, index) => ({
        '#': index + 1,
        id: el._id,
        zoneId: el.zoneId,
        description: el.description,
        environment: el.environment
      }))
    }
  },
  startPrinting: async (zone, { label, value }) => {
    const response = await fetch(`${MAIN_URL}fingerprint/startFingerPrinting`, {
      method: 'POST',
      body: JSON.stringify({
        environment: value,
        beaconId: label,
        zoneId: zone
      })
    })
    const responseData = await response.json()
    return responseData.success
  }
}
