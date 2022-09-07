import React from 'react'
import { url } from '../../helpers/helpers';
import { useParams } from 'react-router-dom';

export default function Edit() {
    const { id } = useParams();
    const [beaconMac, setBeaconMac] = React.useState('');
    const [description, setDescription] = React.useState('');

    const handleSubmit = e => {
        e.preventDefault();

        async function submitData() {
            
            let data = {
                "description":description,
            }

            const response = await fetch(url + 'dbBeacon/updateBeacon/' + id, {
                method: 'PUT',
                headers : {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })

            if (response.ok === true) {
                const data = await response.json();
                if (data.success == true) {
                    return window.location = window.location.origin + '/#/beaconList'
                } else {
                    alert("Internal Server Error!");
                }
            }
        }
        submitData();
    }

    React.useEffect(() => {
        async function fetchData() {
            const response = await fetch(url + 'dbBeacon/getSingleBeacon/' + id, {
                method: 'GET',
            })

            if (response.ok === true) {
                const data = await response.json();
                if (data.success == true) {
                    const beacon_detail = data.data;
                    setBeaconMac(beacon_detail.beaconMac);
                    setDescription(beacon_detail.description);
                }else{
                    alert("Oops something went wrong!")
                }

            }
            else alert('Response not fetched properly');
        }
        fetchData();
    }, [id])

    return (
        <div className="container create-page-main-section">
            <form onSubmit={e => handleSubmit(e)}>
                <div className='p-sm-5 create-form-field'>
                    <div className="form-group row">
                        <label for="inputPassword" className="col-sm-2 col-form-label">BeaconMac:</label>
                        <div className="d-flex align-items-sm-center col-sm-10">
                            <input readOnly value={beaconMac} type="text" className="form-control" id="inputPassword" />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label for="inputPassword" className="col-sm-2 col-form-label">Description:<span className='required-label'>*</span></label>
                        <div className="d-flex align-items-sm-center col-sm-10">
                            <input value={description} onChange={e => setDescription(e.target.value)} type="text" className="form-control" id="inputPassword" />
                        </div>
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
    )
}