import React from 'react'
import { url } from '../../helpers/helpers';
import { useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';

export default function Edit() {
    const { id } = useParams();
    const [name, setName] = React.useState('');
    const [description, setDescription] = React.useState('');
    const [text1, setText1] = React.useState('');
    const [text2, setText2] = React.useState('');
    const [width, setWidth] = React.useState('');
    const [height, setHeight] = React.useState('');
    const [distance_points, setDistancePoints] = React.useState(0);

    const handleSubmit = e => {
        e.preventDefault();

        async function submitData() {
            
            let data = {
                "text1": text1,
            }

            const response = await fetch(url + 'environment/updateEnvironment/' + id, {
                method: 'PUT',
                headers : {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })

            if (response.ok === true) {
                const data = await response.json();
                if (data.success == true) {
                    return window.location = window.location.origin + '/#/environmentList'
                } else {
                    toast.error("Internal Server Error!");
                }
            }
        }
        submitData();
    }

    React.useEffect(() => {
        async function fetchData() {
            const response = await fetch(url + 'environment/getSingleEnvironment/' + id, {
                method: 'GET',
            })

            if (response.ok === true) {
                const data = await response.json();
                if (data.success == true) {
                    const environment_detail = data.data;
                    setName(environment_detail.name);
                    setDescription(environment_detail.description);
                    setText1(environment_detail.text1);
                    setText2(environment_detail.text2);
                    setWidth(environment_detail.width);
                    setHeight(environment_detail.height);
                    setDistancePoints(environment_detail.distance_points);
                }else{
                    toast.error("Oops something went wrong!")
                }

            }
            else toast.error('Response not fetched properly');
        }
        fetchData();
    }, [id])

    return (
        <div className="container create-page-main-section">
            <form onSubmit={e => handleSubmit(e)}>
                <div className='p-sm-5 create-form-field'>
                    <div className="form-group row">
                        <label for="inputPassword" className="col-sm-2 col-form-label">Name:</label>
                        <div className="d-flex align-items-sm-center col-sm-10">
                            <input readOnly value={name} onChange={e => setName(e.target.value)} type="text" className="form-control" id="inputPassword" />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label for="inputPassword" className="col-sm-2 col-form-label">Description:</label>
                        <div className="d-flex align-items-sm-center col-sm-10">
                            <input readOnly value={description} onChange={e => setDescription(e.target.value)} type="text" className="form-control" id="inputPassword" />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label for="inputPassword" className="col-sm-2 col-form-label">Text1:<span className='required-label'>*</span></label>
                        <div className="d-flex align-items-sm-center col-sm-10">
                            <input required value={text1} onChange={e => setText1(e.target.value)} type="text" className="form-control" id="inputPassword" />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label for="inputPassword" className="col-sm-2 col-form-label">Text2:</label>
                        <div className="d-flex align-items-sm-center col-sm-10">
                            <input readOnly value={text2} onChange={e => setText2(e.target.value)} type="text" className="form-control" id="inputPassword" />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label for="inputPassword" className="col-sm-2 col-form-label">Width:</label>
                        <div className="d-flex align-items-sm-center col-sm-10">
                            <input readOnly value={width} onChange={e => setWidth(e.target.value)} type="text" className="form-control" id="inputPassword" />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label for="inputPassword" className="col-sm-2 col-form-label">Height:</label>
                        <div className="d-flex align-items-sm-center col-sm-10">
                            <input readOnly value={height} onChange={e => setHeight(e.target.value)} type="text" className="form-control" id="inputPassword" />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label for="inputPassword" className="col-sm-2 col-form-label">Distance Points:</label>
                        <div className="d-flex align-items-sm-center col-sm-10">
                            <input readOnly required value={distance_points} onChange={e => setDistancePoints(e.target.value)} type="text" className="form-control" id="inputPassword" />
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