import React from 'react';
import { url } from '../../helpers/helpers';

export default function Create() {
    
    const [gatewayMac, setGatewayMac] = React.useState('');
    const [description, setDescription] = React.useState('');
    const [text1, setText1] = React.useState('');
    const [text2, setText2] = React.useState('');
     
    const handleSubmit = e => {
        e.preventDefault();

        async function submitData() {
            let data = {
                "gatewayMac":gatewayMac,
                "description":description,
                "text1":text1,
                "text2":text2
            }
            const response = await fetch(url + 'gateway/addGateway', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })

            if (response.ok === true) {
                const data = await response.json();
                if (data.success == true) {
                    setGatewayMac('');
                    setDescription('');
                    setText1('');
                    setText2('');
                    alert("Gateway created successfully!")
                } else {
                    alert("Oops something went wrong!")
                }
            }
        }
        submitData();
    }

    return (
        <div>
            <h1> Create Gateway</h1>
            <form onSubmit={e => handleSubmit(e)}>
                <div>
                    <div>
                        <label for="GatewayMac">GatewayMac:</label>
                        <input required value={gatewayMac} onChange={e => setGatewayMac(e.target.value)} type="text" id="inputGatewayMac" />
                    </div>
                    <div>
                        <label for="inputDescription">Description:</label>
                        <input required value={description} onChange={e => setDescription(e.target.value)} type="text" id="inputDescription" />
                    </div>
                    <div>
                        <label for="inputText1">Text1:</label>
                        <input required value={text1} onChange={e => setText1(e.target.value)} type="text" id="inputText1" />
                    </div>
                    <div>
                        <label for="inputText2">Text2:</label>
                        <input required value={text2} onChange={e => setText2(e.target.value)} type="text" id="inputText2"/>
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