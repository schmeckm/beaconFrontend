import React, { useEffect } from 'react'
import Select from 'react-select'

import { beaconService } from 'src/services/beaconService'

export default function StartStopFingerprinting() {
  const [environments, setEnvironments] = React.useState([])
  const [currentEnvironment, setCurrentEnvironment] = React.useState('')
  const [beacons, setBeacons] = React.useState([])
  const [currentBeacon, setCurrentBeacon] = React.useState('')
  const [zones, setZones] = React.useState([])
  const [table, setTable] = React.useState([])
  const [currentZone, setCurrentZone] = React.useState('')
  const [currentactive, setCurrentActive] = React.useState('')

  const fetchData = async () => {
    try {
      const response = await beaconService.fetchData()
      if (response) {
        setBeacons(response)
      }
    } catch (error) {
      console.log(error)
    }
  }

  const fetchEnvironment = async () => {
    try {
      const response = await beaconService.fetchEnvironment()
      if (response) {
        setEnvironments(response)
      }
    } catch (error) {
      console.log(error)
    }
  }

  const fetchZone = async () => {
    try {
      const response = await beaconService.fetchZone()
      if (response) {
        setZones(response)
      }
    } catch (error) {
      console.log(error)
    }
  }

  const startPrinting = async (zone) => {
    const { value } = currentEnvironment
    const { label } = currentBeacon

    try {
      const response = await beaconService.startPrinting(zone, { label, value })
      if (response) {
        alert(`${response.msg}: for zoneID ${zone}`)
        setCurrentZone(zone)
      }
    } catch (error) {
      console.log(error)
    }
  }

  function changeEnvironment(value) {
    setCurrentEnvironment(value)
    let updated_arr = []
    zones.map((item) => {
      if (item.environment == value.value) {
        updated_arr.push(item)
      }
    })

    setTable(updated_arr)
  }

  function start(item, id) {
    if (currentZone) {
      document.getElementById(currentactive).style.background = 'green'
      document.getElementById(id).style.background = 'red'
      setCurrentActive(id)
      startPrinting(item.zoneId)
    } else {
      document.getElementById(id).style.background = 'red'
      setCurrentActive(id)
      startPrinting(item.zoneId)
    }
  }

  useEffect(() => {
    fetchEnvironment()
    fetchData()
    fetchZone()
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
              onChange={changeEnvironment}
            />
          </div>
          <div className="col-md-4 form-group">
            <label>Beacon</label>
            <Select
              options={beacons}
              value={currentBeacon}
              onChange={setCurrentBeacon}
            />
          </div>
        </div>
      </div>

      {/* box grid */}
      {table.length > 0 && (
        <>
          <h3 className="text-center my-3">Select Zone</h3>
          <div id="grid-table" className="row">
            {table.map((item, index) => (
              <div
                className="col-md-4"
                id={`${index}`}
                onClick={() => start(item, index)}
                key={index}
              >
                {item.zoneId}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  )
}
