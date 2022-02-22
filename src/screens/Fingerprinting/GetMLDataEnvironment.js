import React from 'react'
import { CBadge, CCard, CCardBody, CCol, CDataTable } from '@coreui/react';
import { url } from '../../helpers/helpers';
import Select from 'react-select'

export default function GetMLDataEnvironment() {

    const fields = ['#', 'name', 'description', 'text1', 'text2', 'width', 'height', 'distance_Points', 'action'];
    const [environmentList, setEnvironmentList] = React.useState([]);
    const [environment,setEnvironment] = React.useState("");
    const [list,setList] = React.useState([]);

    React.useEffect(() => {

        async function fetchData() {
            const response = await fetch(url + 'dbBeacon/getAllBeacons', {
                method: 'GET',
            })

            if (response.ok === true) {
                const data = await response.json();
                setEnvironmentList(data.data.map((item, index) => {
                    return {
                        'value': item.beaconMac,
                        'label': item.beaconMac,
                    }
                }))
            }
        }
        fetchData();
    }, [])

    function onFilter(){
        if (environment){
            async function send(){
                alert(environment.value)
                const response = await fetch(`http://45.32.153.102:3000/fingerprint/getMLDataByBeacon/${environment.value}`);
                const data = await response.json();
                console.log(data);
            };

            send();
        }else{
            alert("Please select environment")
        }
    }

    return (
        <section>
            <div className='d-flex justify-content-center align-items-center'>
                <div className='col-md-5 form-group'>
                    <label>Beacon</label>
                    <Select options={environmentList} value={environment} onChange={setEnvironment} />
                </div>

                <button onClick={()=>onFilter()} className='btn btn-primary' style={{height : 'fit-content'}}>Filter</button>
            </div>
            <CCol xs="12" lg="12">
                <CCard>
                    <CCardBody>
                        <CDataTable
                            items={list}
                            fields={fields}
                            columnFilter
                            tableFilter
                            itemsPerPageSelect
                            itemsPerPage={5}
                            hover
                            sorter
                            pagination
                        />
                    </CCardBody>
                </CCard>
            </CCol>
        </section>
    )
}
