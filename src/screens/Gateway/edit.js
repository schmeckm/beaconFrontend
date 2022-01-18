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
            const formData = new FormData();
            formData.append('description', description);
            formData.append('text1', text1);
            formData.append('text2', text2)

            const response = await fetch(url + 'updategateway/' + id, {
                method: 'POST',
                body: formData
            })

            if (response.ok === true) {
                const data = await response.json();
                if (data.status === 200) {
                    return window.location = window.location.origin + '/#/gatewayList';
                } else {
                    alert(data.message);
                }
            }
        }
        submitData();
    }

    React.useEffect(() => {
        async function fetchData() {
            const response = await fetch(url + 'gatewayById/' + id, {
                method: 'GET',
            })

            if (response.ok === true) {
                const data = await response.json();
                const gateway_detail = data.gateway_detail;
                setGatewayMac(gateway_detail.gatewayMac);
                setDescription(gateway_detail.description);
                setText1(gateway_detail.text1);
                setText2(gateway_detail.text2);
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
