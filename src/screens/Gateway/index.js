import React from 'react';
import { Link } from 'react-router-dom';
import { url } from '../../helpers/helpers';

export default function Index() {    
    const [gatewayList,setGatewayList] = React.useState([]);
    const [id, setId] = React.useState(null);

    React.useEffect(() => {
    
      async function fetchData() {
        const response = await fetch(url + 'gatewaylist', {
          method: 'GET',
        })
  
        if (response.ok === true) {
          const data = await response.json();
  
          if (data.status === 200) {
            setGatewayList(data.gateway_list.map((item, index) => {
              return {
                '#': index + 1,
                'id': item.id,
                'gatewayMac': item.gatewayMac,
                'gatewayFree': item.gatewayFree,
                'gatewayLoad': item.gatewayLoad,
                'gatewayX': item.gatewayX,
                'gatewayY': item.gatewayY,  
              }
            }))
          }
           else alert(data.message);
        }
      }
      fetchData();
    }, [])
  
    const deleteEntry = () => {
        async function deleteData() {
          const response = await fetch(url + 'deletegateway/' + id, {
            method: 'GET',
          })
    
          const data = await response.json();
    
          if (data.status === 200) {
            setId('');
            async function fetchData() {
              const response = await fetch(url + 'gatewaylist', {
                method: 'GET',
              })
        
              if (response.ok === true) {
                const data = await response.json();
        
                if (data.status === 200) {
                  setGatewayList(data.gateway_list.map((item, index) => {
                    return {
                      '#': index + 1,
                      'id': item.id,
                      'gatewayMac': item.gatewayMac,
                      'gatewayFree': item.gatewayFree,
                      'gatewayLoad': item.gatewayLoad,
                      'gatewayX': item.gatewayX,
                      'gatewayY': item.gatewayY,  
                    }
                  }))
                }
              }
            }
            fetchData();
    
          } else {
            alert(data.message)
          }
        }
        deleteData();
      }
      return (
        <div>
          <h1>List Of Gateways</h1>  
          <Link to='/create/gateway'>Create Gateway</Link>
          <table>
              <tr>
                  <th>GatewayMac</th>
                  <th>GatewayFree</th>
                  <th>GatewayLoad</th>
                  <th>GatewayX</th>
                  <th>GatewayY</th>
                  <th>Actions</th>
              </tr>
              {gatewayList.map((item)=>{
                  return(
                      <tr>
                          <td>{item.gatewayMac}</td>
                          <td>{item.gatewayFree}</td>
                          <td>{item.gatewayLoad}</td>
                          <td>{item.gatewayX}</td>
                          <td>{item.gatewayY}</td>
                          <td>
                            <Link to={`/edit/gateway/${item._id}`}><i class="fa fa-pencil" aria-hidden="true"></i></Link>
                            <i style={{ cursor: "pointer" }} onClick={() => deleteEntry(item.id)} class="fa fa-trash" aria-hidden="true"></i>
                          </td>
                      </tr>
                  )
              })}
          </table>
        </div>
      )
    }