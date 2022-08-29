import React, { useEffect, useState } from 'react'
import Select from 'react-select'

import { apiService } from 'src/services/apiService'
import { socketService } from 'src/services/socketService'

export default function StartStopFingerprinting() {
  const [environments, setEnvironments] = useState([])
  const [currentEnvironment, setCurrentEnvironment] = useState('')

  const [beacons, setBeacons] = useState([])
  const [currentBeacon, setCurrentBeacon] = useState('')

  const [zones, setZones] = useState([])
  const [currentZone, setCurrentZone] = useState()

  const [loading, setLoading] = useState('')

  const fetchData = async () => {
    try {
      const response = await apiService.fetchData()
      response && setBeacons(response)
    } catch (error) {
      console.log(error)
    }
  }

  const fetchEnvironment = async () => {
    try {
      const response = await apiService.fetchEnvironment()
      response && setEnvironments(response)
    } catch (error) {
      console.log(error)
    }
  }

  const fetchZone = async () => {
    try {
      const response = await apiService.fetchZones()
      response && setZones(response)
    } catch (error) {
      console.log(error)
    }
  }

  const startPrinting = async (zone) => {
    const { value } = currentEnvironment
    const { label } = currentBeacon

    try {
      setLoading('startPrinting')
      const response = await apiService.startPrinting({ zone, label, value })
      if (response) {
        // alert(`TEST :for zoneID ${zone}`)
        setCurrentZone(zone)
      }

      setLoading('')
    } catch (error) {
      setLoading('')
      console.log(error)
    }
  }

  useEffect(() => {
    fetchEnvironment()
    fetchData()
    fetchZone()
  }, [])

  useEffect(() => {
    socketService.socketOn('numberOfRssiFiles', (rssi) => {
      console.log(rssi)
    })

    return () => {
      return socketService.socketOff('numberOfRssiFiles', () =>
        console.log('exit')
      )
    }
  }, [])

  return (
    <div className="container create-page-main-section">
      <div className="p-sm-5 create-form-field">
        <div className="row">
          <div className="col-md-4 form-group">
            <label>Environment</label>
            <Select
              options={environments}
              value={currentEnvironment}
              onChange={(value) => setCurrentEnvironment(value)}
            />
          </div>
          <div className="col-md-4 form-group">
            <label>Beacon</label>
            <Select
              options={beacons}
              value={currentBeacon}
              onChange={(value) => setCurrentBeacon(value)}
            />
          </div>
        </div>
      </div>

      {/* box grid */}
      {Boolean(currentEnvironment) && zones.length > 0 && (
        <>
          <h3 className="text-center my-3">Select Zone</h3>
          <div
            id="grid-table"
            className="row"
            style={{ opacity: loading === 'startPrinting' ? 0.7 : 1 }}
          >
            {zones.map((item, index) => {
              const color = !(currentZone && currentZone.id === item.id)
                ? 'green'
                : 'red'

              return (
                <div
                  style={{ backgroundColor: color }}
                  className="col-md-4"
                  onClick={() => startPrinting(item)}
                  key={index}
                >
                  {item.zoneId}
                </div>
              )
            })}
          </div>
        </>
      )}
    </div>
  )
}
