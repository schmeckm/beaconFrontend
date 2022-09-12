import React from 'react'
import { url } from '../../helpers/helpers';
import { ToastContainer, toast } from 'react-toastify';
export default function Edit() {
    const [plexValue, setPlexValue] = React.useState('');
    const [cronValue, setCronValue] = React.useState('');
    const [gatewayInterval, setGatewayInterval] = React.useState('0');
    const [rssiDeleteTime, setRSSIDeleteTime] = React.useState('');
    const [fingerPrintDocuments, setFingerPrintDocuments] = React.useState('');
    const [median, setMedian] = React.useState(false);
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
                    setGatewayInterval(settings_detail[0].gatewayInterval);
                    console.log(settings_detail);
                }else{
                    toast.error("Oops something went wrong!")
                }
            }
            else toast.error('Response not fetched properly');
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

            let Interval = {
                "gatewayInterval" : gatewayInterval
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
                else toast.error('Internal Server Error');
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
                else toast.error('Internal Server Error');
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
                else toast.error('Internal Server Error');
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
                else toast.error('Internal Server Error');
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
                    toast.success("Values Updated Successfully");
                }else {
                    toast.error("Internal Server Error!");
                }
            }

            const response5 = await fetch(url + '/systemSettings/addGatewayInterval', {
                method: 'POST',
                headers : {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(Interval)
            })

            if (response5.ok === true) {
                const data = await response5.json();
                if(data.success == true) {
                    console.log('Inverval value Successfully updated');
                    
                }else {
                    toast.error("Internal Server Error!");
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
                        <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Plex Value:<span className='required-label'>*</span></label>
                        <div className="d-flex align-items-sm-center col-sm-10">
                            <input required value={plexValue} onChange={e => setPlexValue(e.target.value)} type="text" className="form-control" id="inputPassword" />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Cron Value:<span className='required-label'>*</span></label>
                        <div className="d-flex align-items-sm-center col-sm-10">
                            <input required value={cronValue} onChange={e => setCronValue(e.target.value)} type="text" className="form-control" id="inputPassword" />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="inputPassword" className="col-sm-2 col-form-label">RSSI Delete Time:<span className='required-label'>*</span></label>
                        <div className="d-flex align-items-sm-center col-sm-10">
                            <input required value={rssiDeleteTime} onChange={e => setRSSIDeleteTime(e.target.value)} type="text" className="form-control" id="inputPassword" />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Finger Print Documents:<span className='required-label'>*</span></label>
                        <div className="d-flex align-items-sm-center col-sm-10">
                            <input required value={fingerPrintDocuments} onChange={e => setFingerPrintDocuments(e.target.value)} type="text" className="form-control" id="inputPassword" />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Finger Print Interval:<span className='required-label'>*</span></label>
                        <div className="d-flex align-items-sm-center col-sm-10">
                            <input required value={gatewayInterval} onChange={e => setGatewayInterval(e.target.value)} type="text" className="form-control" id="inputPassword" />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Median:</label>
                        <div className="d-flex b-0 col-sm-1">
                        <input checked={median} type="checkbox" onChange={e => setMedian(!median)} id="inputPassword" />
                        </div>
                    </div>
                </div>
                <div className="d-flex justify-content-center create-catagory-btns">
                    <button onClick={() => window.location.reload()} type="button" className="font-weight-bold m-3 py-2 px-4 btn btn-danger">Cancel<i
                        className="px-2 fa fa-times" aria-hidden="true"></i></button>
                    <button type="submit" className="font-weight-bold m-3 py-2 px-4 btn btn-success">Save<i
                        className="px-2 fa fa-floppy-o" aria-hidden="true"></i></button>
                </div>
            </form>
            <ToastContainer />
        </div>
    )
}