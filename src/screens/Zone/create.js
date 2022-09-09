import React from 'react';
import { url } from '../../helpers/helpers';
import Select from 'react-select';
import { toast, ToastContainer } from 'react-toastify';

export default function Create() {

    const [zoneId, setZoneId] = React.useState('');
    const [currentEnvironment, setCurrentEnvironment] = React.useState('');
    const [allEnvironments, setAllEnvironments] = React.useState([]);
    const [description, setDescription] = React.useState('');
    const [text1, setText1] = React.useState('');
    const [text2, setText2] = React.useState('');
    
    React.useEffect(()=>{
        async function fetchEnvironment() {
            const response = await fetch(url + 'environment/getAllEnvironments', {
                method: 'GET',
            })
            if (response.ok === true) {
                const data = await response.json();
                    setAllEnvironments(data?.data.map(item => {
                        return {
                            value: item._id,
                            label: item.name,
                        }
                    }))
                }else {
                    toast.error('Oops something went wrong');
                }
        }
        fetchEnvironment();
    }, [])
    
    const handleSubmit = e => {
        e.preventDefault();

        async function submitData() {
            let data = {
                "zoneId": zoneId,
                "environment": currentEnvironment.value,
                "description": description,
                "text1": text1,
                "text2": text2,
            }
            const response = await fetch(url + 'zone/addZone', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            console.log(response); 
            if (response.ok === true) {
                const data = await response.json();
                if (data.success == true) {
                    setZoneId('');
                    setDescription('');
                    setText1('');
                    setText2('');
                    setCurrentEnvironment('');
                    toast.info("Zone created successfully!")
                } else {
                    toast.error("Oops something went wrong!")
                }
            }
        }
        submitData();
    }
    return (
        <div className="container create-page-main-section">
            <form onSubmit={e => handleSubmit(e)}>
                <div className='p-sm-5 create-form-field'>
                    <div className="form-group row">
                        <label htmlFor="inputPassword" className="col-sm-2 col-form-label">ZoneId:<span className='required-label'>*</span></label>
                        <div className="d-flex align-items-sm-center col-sm-10">
                            <input required value={zoneId} onChange={e => setZoneId(e.target.value)} type="text" className="form-control" id="inputPassword" />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Environment:<span className='required-label'>*</span></label>
                        <div className="col-sm-10">
                        <Select options={allEnvironments} value={currentEnvironment} onChange={setCurrentEnvironment} />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Description:<span className='required-label'>*</span></label>
                        <div className="d-flex align-items-sm-center col-sm-10">
                            <input required value={description} onChange={e => setDescription(e.target.value)} type="text" className="form-control" id="inputPassword" />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Text1:<span className='required-label'>*</span></label>
                        <div className="d-flex align-items-sm-center col-sm-10">
                            <input required value={text1} onChange={e => setText1(e.target.value)} type="text" className="form-control" id="inputPassword" />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Text2:<span className='required-label'>*</span></label>
                        <div className="d-flex align-items-sm-center col-sm-10">
                            <input required value={text2} onChange={e => setText2(e.target.value)} type="text" className="form-control" id="inputPassword" />
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
            <ToastContainer />
        </div>
    )
}