import React from 'react'
import { CCard, CCardBody, CCol, CDataTable } from '@coreui/react';
import { url } from '../../helpers/helpers';
import Select from 'react-select'
import { ExportCSV } from '../../components/ExportCSV';
import { ToastContainer, toast } from 'react-toastify';

export default function GetMLDataEnvironment() {

    const fields = ['Date', 'Time', 'environment', 'gateway1Mac', 'gateway1Rssi', 'gateway2Mac', 'gateway2Rssi', 'gateway3Mac','gateway3Rssi','beacon', 'zone_id'];
    const [environmentList, setEnvironmentList] = React.useState([]);
    const [environment,setEnvironment] = React.useState({});
    const [list,setList] = React.useState([]);

    React.useEffect(() => {

        async function fetchData() {
            const response = await fetch(url + '/environment/getAllEnvironments', {
                method: 'GET',
            })

            if (response.ok === true) {
                const data = await response.json();
                console.log(data);
                setEnvironmentList(data.data.map((item, index) => {
                    return {
                        'value': item._id,
                        'label': item.name,
                    }
                }))
            }
        }
        fetchData();
    }, [])

    function onFilter(){
        if (environment){
            async function send(){
                toast.info(`Showing result for Environment ${environment.value}`);
                const response = await fetch(url +`/fingerprint/getMLDataByEnvironment/${environment.value}`);
                const data = await response.json();
                console.log(data)
                if (data.success == true){
                    let list_data = data.data;
                    const modified_data = [];
                    for(const item of list_data){
                        const time = item.timestamp.split('T');
                        const Date = time[0];
                        const Time = time[1].slice(0,-1).split('.')[0];
                        modified_data.push({...item, Date, Time});
                    }
                    setList(modified_data);
                }
            };

            send();
        }else{
            toast.error("Please select environment")
        }
    }

    return (
        <section>
            <div className='d-flex justify-content-center align-items-center'>
                <div className='col-md-5 form-group'>
                    <label>Environment</label>
                    <Select options={environmentList} value={environment} onChange={setEnvironment} />
                </div>

                <button onClick={()=>onFilter()} className='btn btn-primary' style={{height : 'fit-content'}}>Filter</button>
                <button onClick={()=>{
                    document.getElementById("export-excel-button").click()
                }} className='ml-3 btn btn-success' style={{height : 'fit-content'}}>Export Excel</button>

                <ExportCSV csvData={list} />
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
            <ToastContainer />
        </section>
    )
}
