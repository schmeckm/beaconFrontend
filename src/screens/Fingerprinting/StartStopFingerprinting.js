import React, { useEffect, useState } from 'react'
import Select from 'react-select'
import io from 'socket.io-client';
import { url } from 'src/helpers/helpers';

export default function StartStopFingerprinting() {

    const [socket] = useState(() => io(`http://localhost:4001`));
    const [rssi, setRssi] = useState(null);
    const [environments, setEnvironments] = useState([]);
    const [currentEnvironment, setCurrentEnvironment] = useState("");
    const [beacons, setBeacons] = useState([]);
    const [currentBeacon, setCurrentBeacon] = useState("");
    const [zones, setZones] = useState([]);
    const [table, setTable] = useState([]);
    const [currentZone, setCurrentZone] = useState("");
    const [currentactive, setCurrentActive] = useState("");

    useEffect(() => {
        async function fetchData() {
            const response = await fetch(url + 'dbBeacon/getAllBeacons', { method: 'GET' })

            if (response.ok === true) {
                const data = await response.json();
                setBeacons(data.data.map((item, index) => {
                    return {
                        'value': item._id,
                        'label': item.beaconMac,
                    }
                }))
            }
        }
        fetchData();

        async function fetchEnvironment() {
            const response = await fetch(url + 'environment/getAllEnvironments', { method: 'GET' })

            if (response.ok === true) {
                const data = await response.json();
                setEnvironments(data.data.map((item, index) => {
                    return {
                        'value': item._id,
                        'label': item.name,
                    }
                }))
            }
        }
        fetchEnvironment();

        async function fetchZone() {
            const response = await fetch(url + 'zone/getAllZones', { method: 'GET' })

            if (response.ok === true) {
                const data = await response.json();
                setZones(data.data.map((item, index) => {
                    return {
                        '#': index + 1,
                        'id': item._id,
                        'zoneId': item.zoneId,
                        'description': item.description,
                        'environment': item.environment
                    }
                }))
            }
        }
        fetchZone();
    }, [])

    useEffect(() => {
        socket.on("numberOfRssiFiles", (rssi) => {
            console.log("RSSI # : ", rssi)
            setRssi(rssi)
        })

        return () => socket.off('numberOfRssiFiles', () => setRssi(null));
    }, []);

    function changeEnvironment(value) {
        setCurrentEnvironment(value);
        let updated_arr = [];
        updated_arr = zones.filter((item) => item.environment === value.value);
        setTable(updated_arr)
    }

    function start(item, id) {
        if (currentZone) {
            document.getElementById(currentactive).style.background = "green";
            document.getElementById(id).style.background = "red";
            setCurrentActive(id)
            startPrinting(item.zoneId)
        } else {
            document.getElementById(id).style.background = "red";
            setCurrentActive(id);
            startPrinting(item.zoneId)
        }
    }

    const getRSSIfromSocket = () => {
        socket.emit("rssiFiles")
    }

    async function startPrinting(zone) {
        const response = await fetch(url + 'fingerprint/startFingerPrinting', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "environment": currentEnvironment.value,
                "beaconId": currentBeacon.label,
                "zoneId": zone
            })
        });

        if (response.ok === true) {
            const data = await response.json();
            if (data.success === true) {
                alert(data.msg + ` for zoneID ${zone}`);
                setCurrentZone(zone)
                getRSSIfromSocket()
            }
        }
    }

    return (
        <div className="container create-page-main-section">
            <div className='p-sm-5 create-form-field'>
                <div className='row'>
                    <div className='col-md-4 form-group'>
                        <label>Environment</label>
                        <Select options={environments} value={currentEnvironment} onChange={changeEnvironment} />
                    </div>
                    <div className='col-md-4 form-group'>
                        <label>Beacon</label>
                        <Select options={beacons} value={currentBeacon} onChange={setCurrentBeacon} />
                    </div>
                    <div className='col-md-4 form-group d-flex flex-column align-items-center justify-contents-center'>
                        <label>RSSI</label>
                        <p>{rssi ?? "Fingerprinting not started yet."}</p>
                    </div>
                </div>
            </div>

            {/* box grid */}
            {table.length > 0 && (
                <>
                    <h3 className='text-center my-3'>Select Zone</h3>
                    <div id='grid-table' className='row'>
                        {table.map((item, index) => <div className='col-md-4' id={`${index}`} onClick={() => start(item, index)} key={index}>{item.zoneId}</div>)}
                    </div>
                </>
            )}

        </div>
    )
}
