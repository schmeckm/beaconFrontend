import React, { useEffect, useState } from "react";
import Select from "react-select";
import { url } from "src/helpers/helpers";

export default function StartStopFingerprinting() {
  const [environments, setEnvironments] = React.useState([]);
  const [currentEnvironment, setCurrentEnvironment] = React.useState("");
  const [beacons, setBeacons] = React.useState([]);
  const [currentBeacon, setCurrentBeacon] = React.useState("");
  const [zones, setZones] = React.useState([]);
  const [table, setTable] = React.useState([]);
  const [currentZone, setCurrentZone] = React.useState("");
  const [currentactive, setCurrentActive] = React.useState("");
  const [counter, setCounter] = useState(0);

  React.useEffect(() => {
    async function fetchData() {
      const response = await fetch(url + "dbBeacon/getAllBeacons", {
        method: "GET",
      });

      if (response.ok === true) {
        const data = await response.json();
        setBeacons(
          data.data.map((item, index) => {
            return {
              value: item._id,
              label: item.beaconMac,
            };
          })
        );
      }
    }
    fetchData();

    async function fetchEnvironment() {
      const response = await fetch(url + "environment/getAllEnvironments", {
        method: "GET",
      });

      if (response.ok === true) {
        const data = await response.json();
        setEnvironments(
          data.data.map((item, index) => {
            return {
              value: item._id,
              label: item.name,
            };
          })
        );
      }
    }
    fetchEnvironment();

    async function fetchZone() {
      const response = await fetch(url + "zone/getAllZones", {
        method: "GET",
      });

      if (response.ok === true) {
        const data = await response.json();
        setZones(
          data.data.map((item, index) => {
            return {
              "#": index + 1,
              id: item._id,
              zoneId: item.zoneId,
              description: item.description,
              environment: item.environment,
            };
          })
        );
      }
    }
    fetchZone();
  }, []);

  function changeEnvironment(value) {
    setCurrentEnvironment(value);
    let updated_arr = [];
    zones.map((item) => {
      if (item.environment == value.value) {
        updated_arr.push(item);
      }
    });

    setTable(updated_arr);
  }
  const runTime = (myTime) => {
    const interval = setInterval(() => {
      setCounter((counter) => (counter < 30 ? counter + 1 : counter));
    }, myTime);
    return () => {
      clearInterval(interval);
    };
  };
  function start(item, id) {
    if (currentZone) {
      document.getElementById(currentactive).style.background = "green";
      document.getElementById(id).style.background = "red";
      setCurrentActive(id);
      startPrinting(item.zoneId);
      setCounter(0);
      runTime(500);
    } else {
      document.getElementById(id).style.background = "red";
      setCurrentActive(id);
      startPrinting(item.zoneId);
      setCounter(0);
      runTime(500);
    }
  }

  async function startPrinting(zone) {
    const response = await fetch(url + "fingerprint/startFingerPrinting", {
      method: "POST",
      body: JSON.stringify({
        environment: currentEnvironment.value,
        beaconId: currentBeacon.label,
        zoneId: zone,
      }),
    });

    if (response.ok == true) {
      const data = await response.json();
      if (data.success == true) {
        alert(data.msg + ` for zoneID ${zone}`);
        setCurrentZone(zone);
      }
    }
  }
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
          <div className="col-md-4 form-group">
            <label className="mx-auto">RSSI</label>
            <p>{counter}</p>
          </div>
        </div>
      </div>

      {/* box grid */}
      {table.length > 0 && (
        <>
          <h3 className="text-center my-3">Select Zone</h3>
          <div id="grid-table" className="row">
            {table.map((item, index) => (
              <button
                className="col-md-4"
                id={`${index}`}
                onClick={() => start(item, index)}
                key={index}
                disabled={counter === 0 || counter === 30 ? false : true}
              >
                {item.zoneId}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
