import React, { useEffect, useState } from "react";
import Select from "react-select";
import { url } from "src/helpers/helpers";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import { CCard, CCardBody, CCol, CDataTable } from "@coreui/react";
export default function StartStopFingerprinting() {
  const fieldsZones = ['id','startTime', 'endTime'];
  const [environments, setEnvironments] = React.useState([]);
  const [currentEnvironment, setCurrentEnvironment] = React.useState("");
  const [beacons, setBeacons] = React.useState([]);
  const [currentBeacon, setCurrentBeacon] = React.useState("");
  const [zones, setZones] = React.useState([]);
  const [table, setTable] = React.useState([]);
  const [currentZone, setCurrentZone] = React.useState("");
  const [currentactive, setCurrentActive] = React.useState("");
  const [counter, setCounter] = useState(31);
  const [gatewayInterval, setGatewayInterval] = React.useState('0');
  const [allFingerPrintings, setAllFingerPrintings] = useState([]);
  const [zoneDetails, setZoneDetails] = useState([]);
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
        console.log(data);
        setZones(
          data.data.map((item, index) => {
            return {
              "#": index + 1,
              id: item._id,
              zoneId: item.zone_ids.zoneId,
              description: item.zone_ids.description,
              environment: item.environments.description,
            };
          })
        );
      }
    }
    fetchZone();

  }, []);

  function changeEnvironment(value) {
    setCurrentEnvironment(value);
    console.log(zones[0].environment);
    console.log(value.label);
    let updated_arr = [];
    zones.map((item) => {
      if (item.environment == value.label) {
        updated_arr.push(item);
      }
    });

    setTable(updated_arr);
    const getAllFingerprints = async (currentEnvironmentValue) =>{
      const response = await axios.get(url+`fingerprint/getAllFingerPrinting/${currentEnvironmentValue.value}`);
      setAllFingerPrintings(response?.data?.data);
      setZoneDetails(response.data.data[0].zone_id);
    }
    if(value){
      getAllFingerprints(value);
    }
  }

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(url + 'systemSettings/getSystemSettings/', {
          method: 'GET',
      })
      if (response.ok === true){
          const data = await response.json();
          if(data.success == true){
              const settings_detail = data.data;
              setGatewayInterval(settings_detail[0].gatewayInterval);
          }else{
              toast.error("Oops something went wrong!")
          }
      }
      else toast.error('Response not fetched properly');
  }
  fetchData();
  const intervalTime = gatewayInterval * 1000;
    var interval = setInterval(() => {
      if (counter < 31) {
        console.log(counter);
        if (counter === 30) {
          if (currentZone) {
            stopPrinting(currentZone);
            console.log(currentZone);
            console.log("30 reached");
          }
        }
        return setCounter(counter + 1);
      } else {
        return counter;
      }
    }, intervalTime);
    return () => clearInterval(interval);
  });
  function start(item, id) {
    setCurrentZone(item.zoneId);
    if (currentZone) {
      document.getElementById(currentactive).style.background = "#05cdfa";
      document.getElementById(id).style.background = "#f2321d";
      document.getElementById(id).disabled = true;
      setCurrentActive(id);
      startPrinting(item.zoneId);
      setCounter(0);
    } else {
      document.getElementById(id).style.background = "#f2321d";
      document.getElementById(id).disabled = true;
      setCurrentActive(id);
      startPrinting(item.zoneId);
      setCounter(0);
    }
  }

  const startPrinting = async (zone) => {
    console.log(currentEnvironment.value);
    console.log(currentBeacon.label);
    console.log(zone);
    axios
      .post(url + "fingerprint/startFingerPrinting", {
        environment: currentEnvironment?.value,
        beaconId: currentBeacon.label,
        zoneId: zone,
      })
      .then(function (response) {
        console.log(response);
        toast.info("Rssi value counting started for zone " + zone);
      })
      .catch(function (error) {
        toast.error(error);
      });
  };
  const resetZones = () => {
    if (table.length > 0) {
      for (let id = 0; id < table.length; id++) {
        document.getElementById(id).style.background = "#1cf71c";
        setCounter(31);
        document.getElementById(id).disabled = false;
      }
      toast.info("Zones reseted successfully!");
    } else {
      toast.error("Zones reset failed!");
    }
  };
  const stopPrinting = async (zone) => {
    axios
      .post(url + "fingerprint/stopFingerPrinting", {
        environment: currentEnvironment?.value,
        beaconId: currentBeacon.label,
        zoneId: zone,
      })
      .then(function (response) {
        console.log(response);
          document.getElementById(currentZone-1).style.background = "#05cdfa";
        toast.info("Rssi value counting finished for zone "+zone);
      })
      .catch(function (error) {
        toast.error(error);
      });
  };
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
            <p>{counter !== 31 ? counter : "RSSI not started yet"}</p>
          </div>
        </div>
        <ToastContainer />
      </div>

      {/* box grid */}
      {table.length > 0 && (
        <>
          <h3 className="text-center my-3">Select Zone</h3>
          <div id="grid-table" className="row">
            {table.map((item, index) => (
              <button
                className="col-md-4 btn-grid"
                id={`${index}`}
                onClick={() => start(item, index)}
                key={index}
                disabled={counter !== 31 ? true : false}
              >
                {item.zoneId}
              </button>
            ))}
          </div>
          <div className="mx-auto mt-3 button-position">
              <button onClick={resetZones} className="reset-btn">
                Reset
              </button>
            </div>

            <CCol xs="12" lg="12">
                <CCard>
                <h3 className="text-center mt-2">Zone Details of Current Environment</h3>
                    <CCardBody>
                        <CDataTable
                            items={zoneDetails}
                            fields={fieldsZones}
                            columnFilter
                            tableFilter
                            itemsPerPageSelect
                            itemsPerPage={5}
                            hover
                            sorter
                            pagination
                        />
                    </CCardBody>
                </CCard>
            </CCol>
        </>
      )}


    </div>
  );
}
