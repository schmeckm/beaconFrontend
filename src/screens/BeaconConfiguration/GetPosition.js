import { url } from '../../helpers/helpers';
import React from 'react'
import Select from 'react-select'

export default function GetPosition() {
    const [beacons, setBeacons] = React.useState([]);
    const [currentBeacon, setCurrentBeacon] = React.useState("");
    const [start, setStart] = React.useState("");
    const [end, setEnd] = React.useState("");
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
    }, [])

    function submit(e) {
        e.preventDefault();

        if (currentBeacon) {
            async function send() {
                const response = await fetch(url + 'beacon/getPosition', {
                    method : 'POST',
                    body: JSON.stringify({
                        "beaconMac": currentBeacon.value,
                        "startTime": new Date(start).toISOString(),
                        "endTime": new Date(end).toISOString()
                    })
                });

                if (response.ok == true){
                    const data = await response.json();
                    if (data.success == true){
                        
                    }
                }else{
                    alert("Oops something went wrong!");
                }
            };
            send()
        } else {
            alert("Please select beacon");
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
                            <label>Start Time</label>
                            <input type="datetime-local" className='form-control' value={start} onChange={e => setStart(e.target.value)} required />
                        </div>
                        <div className='col-md-4 form-group'>
                            <label>End Time</label>
                            <input type="datetime-local" className='form-control' value={end} onChange={e => setEnd(e.target.value)} required />
                        </div>
                    </div>
                    <div class="d-flex justify-content-center create-catagory-btns">
                        <button onClick={() => window.history.back()} type="button" class="font-weight-bold m-3 py-2 px-4 btn btn-danger">Cancel<i
                            class="px-2 fa fa-times" aria-hidden="true"></i></button>
                        <button type="submit" class="font-weight-bold m-3 py-2 px-4 btn btn-success">Execute<i
                            class="px-2 fa fa-floppy-o" aria-hidden="true"></i></button>
                    </div>
                </form>
            </div>
        </div>
    )
}
