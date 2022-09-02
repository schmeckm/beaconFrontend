import { url } from '../../helpers/helpers';
import React from 'react'
import Select from 'react-select'

export default function CalculatePower() {
    const [beacons, setBeacons] = React.useState([]);
    const [currentBeacon, setCurrentBeacon] = React.useState("");
    const [gateways, setGateways] = React.useState([]);
    const [currentGateway, setCurrentGateway] = React.useState("");
    const [observations,setObservations] = React.useState([]);
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
            async function send() {
                const response = await fetch(url + 'beacon/calculateTxPower', {
                    method: 'POST',
                    body: JSON.stringify({
                        beaconMac : currentBeacon,
                        gatewayMac : currentGateway
                    })
                });

                if (response.ok == true) {
                    const data = await response.json();
                    if(data.success == true){
                        alert("data fetch successfully!");
                        setObservations(data.data.observations)
                    }
                } else {
                    alert("Oops something went wrong!");
                }
            };
            send()
        } else {
            alert("Please select beacon & gateway");
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
                    </div>
                    <div className="d-flex justify-content-center create-catagory-btns">
                        <button onClick={() => window.history.back()} type="button" className="font-weight-bold m-3 py-2 px-4 btn btn-danger">Cancel<i
                            className="px-2 fa fa-times" aria-hidden="true"></i></button>
                        <button type="submit" className="font-weight-bold m-3 py-2 px-4 btn btn-success">Save<i
                            className="px-2 fa fa-floppy-o" aria-hidden="true"></i></button>
                    </div>
                </form>
            </div>

            {observations.length > 0 && <table>
                <thead>
                    <th>#</th>
                    <th>Observation</th>
                </thead>

                {observations.map((item,index) => <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{item}</td>
                </tr>)}
                </table>}
        </div>
    )
}
