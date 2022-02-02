import React from 'react'
import { url } from '../../helpers/helpers';

export default function Edit() {
    const [plexValue, setPlexValue] = React.useState('');
    const [cronValue, setCronValue] = React.useState('');
    const [rssiDeleteTime, setRSSIDeleteTime] = React.useState('');
    const [fingerPrintDocuments, setFingerPrintDocuments] = React.useState('');
    const [median, setMedian] = React.useState('');
    
    React.useEffect(() => {
        async function fetchData() {
            const response = await fetch(url + 'systemSettings/getSystemSettings/', {
                method: 'GET',
            })
            if (response.ok === true){
                const data = await response.json();
                if(data.success == true){
                    const settings_detail = data.data;
                    setPlexValue(settings_detail[0].plexValue);
                    setCronValue(settings_detail[0].cronValue);
                    setRSSIDeleteTime(settings_detail[0].rssiDeleteTime);
                    setFingerPrintDocuments(settings_detail[0].fingerPrintDocuments);
                    setMedian(settings_detail[0].median);
                }else{
                    alert("Oops something went wrong!")
                }
            }
            else alert('Response not fetched properly');
        }
        fetchData();
    }, [])
     
    const handleSubmit = e => {
        e.preventDefault();
        async function submitData() {
            let plexvalue = {
                "plexValue": plexValue
            }
            let cronvalue = {
                "cronValue": cronValue
            }
            let rssideletetime = {
                "rssiDeleteTime": rssiDeleteTime
            }
            let fingerprintdocuments = {
                "fingerPrintDocuments": fingerPrintDocuments
            }
            let Median = {
                "median" : median
            }
            console.log(median);
            const response = await fetch(url + 'systemSettings/addPlexValue/', {
                method: 'POST',
                headers : {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(plexvalue)
            })
            if(response.ok === true){
                const data = await response.json();
                if(data.success == true){                    
                  console.log('Plex value successfully updated');
                }
                else alert('Internal Server Error');
            }
            
            const response1 = await fetch(url + 'systemSettings/addCronValue/', {
                method: 'POST',
                headers : {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(cronvalue)
            })
            if(response1.ok === true){
                const data = await response1.json();
                if(data.success == true){
                    console.log('Cron value successfully updated');                    
                }
                else alert('Internal Server Error');
            }

            const response2 = await fetch(url + 'systemSettings/rssiDeleteTime/', {
                method: 'POST',
                headers : {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(rssideletetime)
            })
            if(response2.ok === true){
                const data = await response2.json();
                if(data.success == true){
                    console.log('RSSI Delete Time successfully updated');                    
                }
                else alert('Internal Server Error');
            }

            const response3 = await fetch(url + 'systemSettings/addFingerPrintDocuments/', {
                method: 'POST',
                headers : {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(fingerprintdocuments)
            })

            if(response3.ok === true){
                const data = await response3.json();
                if(data.success == true){
                    console.log('Finger Print Documents successfully updated');                    
                }
                else alert('Internal Server Error');
            }
            
            const response4 = await fetch(url + 'systemSettings/addMedian/', {
                method: 'POST',
                headers : {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(Median)
            })

            if (response4.ok === true) {
                const data = await response4.json();
                if(data.success == true) {
                    console.log('Median Successfully updated');
                    alert("Values Updated Successfully");
                }else {
                    alert("Internal Server Error!");
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
                        <label for="inputPassword" class="col-sm-2 col-form-label">Plex Value:<span className='required-label'>*</span></label>
                        <div class="d-flex align-items-sm-center col-sm-10">
                            <input required value={plexValue} onChange={e => setPlexValue(e.target.value)} type="text" class="form-control" id="inputPassword" />
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="inputPassword" class="col-sm-2 col-form-label">Cron Value:<span className='required-label'>*</span></label>
                        <div class="d-flex align-items-sm-center col-sm-10">
                            <input required value={cronValue} onChange={e => setCronValue(e.target.value)} type="text" class="form-control" id="inputPassword" />
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="inputPassword" class="col-sm-2 col-form-label">RSSI Delete Time:<span className='required-label'>*</span></label>
                        <div class="d-flex align-items-sm-center col-sm-10">
                            <input required value={rssiDeleteTime} onChange={e => setRSSIDeleteTime(e.target.value)} type="text" class="form-control" id="inputPassword" />
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="inputPassword" class="col-sm-2 col-form-label">Finger Print Documents:<span className='required-label'>*</span></label>
                        <div class="d-flex align-items-sm-center col-sm-10">
                            <input required value={fingerPrintDocuments} onChange={e => setFingerPrintDocuments(e.target.value)} type="text" class="form-control" id="inputPassword" />
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="inputPassword" class="col-sm-2 col-form-label">Median:</label>
                        <div class="d-flex b-0 col-sm-1">
                        <input defaultChecked={median} type="checkbox" onChange={e => setMedian(e.nativeEvent.target.checked)} class="form-control" id="inputPassword" />
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