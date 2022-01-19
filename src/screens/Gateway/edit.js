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
                    return window.location = window.location.origin + '/gatewayList'
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
        <div className="container">
            <form onSubmit={e => handleSubmit(e)}>
                <div>
                    <div>
                        <label for="inputGatewayMac">GatewayMac:</label>
                        <input readOnly value={gatewayMac} type="text" id="inputGatewayMac" />
                    </div>
                    <div>
                        <label for="inputDescription">Description:</label>
                        <input value={description} onChange={e => setDescription(e.target.value)} type="text" id="inputDescription" />
                    </div>
                    <div>
                        <label for="inputText1">Text1:</label>
                        <input required value={text1} onChange={e => setText1(e.target.value)} type="text" id="inputText1" />
                    </div>
                    <div>
                        <label for="inputText2">Text2:</label>
                        <input required value={text2} onChange={e => setText2(e.target.value)} type="text" id="inputText2" />
                    </div>
                </div>
                <div>
                    <button onClick={() => window.location.reload()} type="button">Cancel</button>
                    <button type="submit">Save</button>
                </div>
            </form>
        </div>
    )
}
