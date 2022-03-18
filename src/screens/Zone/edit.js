import React from 'react'
import { url } from '../../helpers/helpers';
import { useParams } from 'react-router-dom';

export default function Edit() {
    const { id } = useParams();
    const [zoneId, setZoneId] = React.useState('');
    const [environment, setEnvironment] = React.useState('');
    const [description, setDescription] = React.useState('');
    const [text1, setText1] = React.useState('');
    const [text2, setText2] = React.useState('');

    const handleSubmit = e => {
        e.preventDefault();

        async function submitData() {
            
            let data = {
                "text1": text1,
            }

            const response = await fetch(url + 'zone/updateZone/' + id, {
                method: 'PUT',
                headers : {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })

            if (response.ok === true) {
                const data = await response.json();
                if (data.success == true) {
                    return window.location = window.location.origin + '/#/zoneList'
                } else {
                    alert("Internal Server Error!");
                }
            }
        }
        submitData();
    }

    React.useEffect(() => {
        async function fetchData() {
            const response = await fetch(url + 'zone/getSingleZone/' + id, {
                method: 'GET',
            })

            if (response.ok === true) {
                const data = await response.json();
                if (data.success == true) {
                    const zone_detail = data.data;
                    setZoneId(zone_detail.zoneId);
                    setDescription(zone_detail.description);
                    setText1(zone_detail.text1);
                    setText2(zone_detail.text2);
                    setEnvironment(zone_detail.environment);
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
                    <div class="form-group row">
                        <label for="inputPassword" class="col-sm-2 col-form-label">ZoneId:</label>
                        <div class="d-flex align-items-sm-center col-sm-10">
                            <input readOnly value={zoneId} onChange={e => setZoneId(e.target.value)} type="text" class="form-control" id="inputPassword" />
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="inputPassword" class="col-sm-2 col-form-label">Environment:</label>
                        <div class="d-flex align-items-sm-center col-sm-10">
                            <input readOnly value={environment} onChange={e => setEnvironment(e.target.value)} type="text" class="form-control" id="inputPassword" />
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="inputPassword" class="col-sm-2 col-form-label">Description:</label>
                        <div class="d-flex align-items-sm-center col-sm-10">
                            <input readOnly value={description} onChange={e => setDescription(e.target.value)} type="text" class="form-control" id="inputPassword" />
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="inputPassword" class="col-sm-2 col-form-label">Text1:<span className='required-label'>*</span></label>
                        <div class="d-flex align-items-sm-center col-sm-10">
                            <input required value={text1} onChange={e => setText1(e.target.value)} type="text" class="form-control" id="inputPassword" />
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="inputPassword" class="col-sm-2 col-form-label">Text2:</label>
                        <div class="d-flex align-items-sm-center col-sm-10">
                            <input readOnly value={text2} onChange={e => setText2(e.target.value)} type="text" class="form-control" id="inputPassword" />
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