import React from 'react';
import { url } from '../../helpers/helpers';

export default function Create() {
    
    const [beaconMac, setBeaconMac] = React.useState('');
    const [description, setDescription] = React.useState('');
     
    const handleSubmit = e => {
        e.preventDefault();

        async function submitData() {
            let data = {
                "beaconMac":beaconMac,
                "description":description
            }
            const response = await fetch(url + 'dbBeacon/addBeacon', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })

            if (response.ok === true) {
                const data = await response.json();
                if (data.success == true) {
                    setBeaconMac('');
                    setDescription('');
                    alert("Beacon created successfully!")
                } else {
                    alert("Oops something went wrong!")
                }
            }
        }
        submitData();
    }

    return (
        <div className="container create-page-main-section">
            <form onSubmit={e => handleSubmit(e)}>
                <div className='p-sm-5 create-form-field'>
                    <div class="form-group row">
                        <label for="inputPassword" class="col-sm-2 col-form-label">BeaconMac:<span className='required-label'>*</span></label>
                        <div class="d-flex align-items-sm-center col-sm-10">
                            <input required value={beaconMac} onChange={e => setBeaconMac(e.target.value)} type="text" class="form-control" id="inputPassword" />
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="inputPassword" class="col-sm-2 col-form-label">Description:<span className='required-label'>*</span></label>
                        <div class="d-flex align-items-sm-center col-sm-10">
                            <input required value={description} onChange={e => setDescription(e.target.value)} type="text" class="form-control" id="inputPassword" />
                        </div>
                    </div>
                </div>
                <div class="d-flex justify-content-center create-catagory-btns">
                    <button onClick={() => window.history.back()} type="button" class="font-weight-bold m-3 py-2 px-4 btn btn-danger">Cancel<i
                        class="px-2 fa fa-times" aria-hidden="true"></i></button>
                    <button type="submit" class="font-weight-bold m-3 py-2 px-4 btn btn-success">Save<i
                        class="px-2 fa fa-floppy-o" aria-hidden="true"></i></button>
                </div>
            </form>
        </div>
    )
}