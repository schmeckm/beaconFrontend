import React from 'react'
import { url } from '../../helpers/helpers';
import { useParams } from 'react-router-dom';

export default function Edit() {
    const { id } = useParams();
    const [gatewayMac, setGatewayMac] = React.useState('');
    const [description, setDescription] = React.useState('');
    const [text1, setText1] = React.useState('');
    const [text2, setText2] = React.useState('');

    const handleSubmit = e => {
        e.preventDefault();

        async function submitData() {
            
            let data = {
                "description":description,
                "text1":text1,
                "text2":text2
            }

            const response = await fetch(url + 'gateway/updateGateway/' + id, {
                method: 'PUT',
                headers : {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })

            if (response.ok === true) {
                const data = await response.json();
                if (data.success == true) {
                    return window.location = window.location.origin + '/#/gatewayList'
                } else {
                    alert("Internal Server Error!");
                }
            }
        }
        submitData();
    }

    React.useEffect(() => {
        async function fetchData() {
            const response = await fetch(url + 'gateway/getSingleGateway/' + id, {
                method: 'GET',
            })

            if (response.ok === true) {
                const data = await response.json();
                if (data.success == true) {
                    const gateway_detail = data.data;
                    setGatewayMac(gateway_detail.gatewayMac);
                    setDescription(gateway_detail.description);
                    setText1(gateway_detail.text1);
                    setText2(gateway_detail.text2);
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
                        <label for="inputPassword" class="col-sm-2 col-form-label">GatewayMac:</label>
                        <div class="d-flex align-items-sm-center col-sm-10">
                            <input readOnly value={gatewayMac} type="text" class="form-control" id="inputPassword" />
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="inputPassword" class="col-sm-2 col-form-label">Description:<span className='required-label'>*</span></label>
                        <div class="d-flex align-items-sm-center col-sm-10">
                            <input value={description} onChange={e => setDescription(e.target.value)} type="text" class="form-control" id="inputPassword" />
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="inputPassword" class="col-sm-2 col-form-label">Text1:<span className='required-label'>*</span></label>
                        <div class="d-flex align-items-sm-center col-sm-10">
                            <input required value={text1} onChange={e => setText1(e.target.value)} type="text" class="form-control" id="inputPassword" />
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="inputPassword" class="col-sm-2 col-form-label">Text2:<span className='required-label'>*</span></label>
                        <div class="d-flex align-items-sm-center col-sm-10">
                            <input required value={text2} onChange={e => setText2(e.target.value)} type="text" class="form-control" id="inputPassword" />
                        </div>
                    </div>
                </div>
                <div class="d-flex justify-content-center create-catagory-btns">
                    <button onClick={() => window.location.reload()} type="button" class="font-weight-bold m-3 py-2 px-4 btn btn-danger">Cancel<i
                        class="px-2 fa fa-times" aria-hidden="true"></i></button>
                    <button type="submit" class="font-weight-bold m-3 py-2 px-4 btn btn-success">Save<i
                        class="px-2 fa fa-floppy-o" aria-hidden="true"></i></button>
                </div>
            </form>
        </div>
    )
}