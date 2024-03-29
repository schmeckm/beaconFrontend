import { url } from '../../helpers/helpers';
import React, { useState } from 'react'
import Select from 'react-select'
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
export default function CalculatePower() {
    const [beacons, setBeacons] = React.useState([]);
    const [currentBeacon, setCurrentBeacon] = React.useState("");
    const [gateways, setGateways] = React.useState([]);
    const [currentGateway, setCurrentGateway] = React.useState("");
    const [observations,setObservations] = React.useState([]);
    const [medianValue, setMedianValue] = useState("");
    React.useEffect(() => {
        async function fetchData() {
            const response = await fetch(url + 'dbBeacon/getAllBeacons', {
                method: 'GET',
            })

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

        console.log(observations);
        async function fetchDataGateway() {
            const response = await fetch(url + 'gateway/getAllGateways', {
                method: 'GET',
            })

            if (response.ok === true) {
                const data = await response.json();
                setGateways(data.data.map((item, index) => {
                    return {
                        'value': item._id,
                        'label': item.gatewayMac,
                    }
                }))
            }
        }
        fetchDataGateway();
    }, [])

    function submit(e) {
        e.preventDefault(); 
        if (currentBeacon && currentGateway) {
            const dataSend = {
                beaconMac : currentBeacon.label,
                gatewayMac : currentGateway.label,
            }
            async function send() {
                const response = await axios.post(url + 'beacon/calculateTxPower',dataSend);
                console.log("beacon: ",currentBeacon.label);
                console.log("gateway",currentGateway.label);
                console.log(response);
                if (response.status == 200) {
                    const data = await response.data;
                        toast.info(data.data.message);
                        console.log(data.data.observations);
                        setObservations(data.data.observations)
                        setMedianValue(data.data.value);
                } else {
                    toast.error(response.data.data.message);
                }
            };
            send()
        } else {
            toast.error("Please select beacon & gateway");
        }
    }

    return (
        <div className="container create-page-main-section">
            <div className='p-sm-5 create-form-field'>
                <form onSubmit={e => submit(e)}>
                    <div className='row'>
                        <div className='col-md-4 form-group'>
                            <label>Beacon</label>
                            <Select value={currentBeacon} onChange={setCurrentBeacon} options={beacons} />
                        </div>
                        <div className='col-md-4 form-group'>
                            <label>Gateway</label>
                            <Select value={currentGateway} onChange={setCurrentGateway} options={gateways} />
                        </div>
                        {
                            medianValue && 
                            <div className='col-md-4 form-group d-flex justify-content-center align-items-center'>
                            <p className='mb-0 mt-4 median-value'>Median value: {parseFloat(medianValue).toFixed(3)}</p>
                        </div>
                        }
                    </div>
                    <div className="d-flex justify-content-center create-catagory-btns">
                        <button onClick={() => window.history.back()} type="button" className="font-weight-bold m-3 py-2 px-4 btn btn-danger">Cancel<i
                            className="px-2 fa fa-times" aria-hidden="true"></i></button>
                        <button type="submit" className="font-weight-bold m-3 py-2 px-4 btn btn-success">Execute<i
                            className="px-2 fa fa-floppy-o" aria-hidden="true"></i></button>
                    </div>
                </form>
            </div>

            {observations.length > 0 && <table className='observation-table'>
                <thead>
                    <tr>
                    <th>#</th>
                    <th>Observations</th>
                    </tr>
                </thead>

                <tbody>
                {observations.map((item,index) => <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{item}</td>
                </tr>)}
                </tbody>
                </table>}
                <ToastContainer />
        </div>
    )
}
