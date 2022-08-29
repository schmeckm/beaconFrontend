import { BASE_URL_LOCAL } from 'src/config'
import { queryService } from './queryService'

export const apiService = {
  fetchData: async () => {
    const response = await queryService.getQuery({
      endPoint: 'dbBeacon/getAllBeacons'
    })

    if (response.success) {
      return response.data.map((el) => ({
        value: el._id,
        label: el.beaconMac
      }))
    }
  },
  fetchEnvironment: async () => {
    const response = await queryService.getQuery({
      endPoint: 'environment/getAllEnvironments'
    })

    if (response.success) {
      return response.data.map((el) => ({
        value: el._id,
        label: el.name
      }))
    }
  },
  fetchZones: async () => {
    const response = await queryService.getQuery({
      endPoint: 'zone/getAllZones'
    })

    if (response.success) {
      return response.data.map((el, index) => ({
        '#': index + 1,
        id: el._id,
        zoneId: el.zoneId,
        description: el.description,
        environment: el.environment
      }))
    }
  },
  startPrinting: async ({ zone, label, value }) => {
    const response = await queryService.getQuery({
      endPoint: 'startFingerPrinting',
      method: 'POST',
      baseUrl: BASE_URL_LOCAL,
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        environment: value,
        beaconId: label,
        zoneId: zone
      })
    })

    return response.success
  }
}
