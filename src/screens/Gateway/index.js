import React from 'react';
import { Link } from 'react-router-dom';
import { url } from '../../helpers/helpers';

export default function Index() {
  const [gatewayList, setGatewayList] = React.useState([]);
  const [id, setId] = React.useState(null);

  React.useEffect(() => {

    async function fetchData() {
      const response = await fetch(url + 'gateway/getAllGateways', {
        method: 'GET',
      })

      if (response.ok === true) {
        const data = await response.json();
        setGatewayList(data.data)
      }
    }
    fetchData();
  }, [])

  const deleteEntry = (id) => {
    async function deleteData() {
      const response = await fetch(url + 'gateway/deleteGateway/' + id, {
        method: 'DELETE',
      })

      const data = await response.json();
      if (data.success == true) {
        async function fetchData() {
          const response = await fetch(url + 'gateway/getAllGateways', {
            method: 'GET',
          })

          if (response.ok === true) {
            const data = await response.json();
            setGatewayList(data.data)
          }
        }
        fetchData();
      }

    }

    let res = window.confirm("Are you sure you want to delete the gateway!");

    if (res == true) {
      deleteData()
    }
  }
  return (
    <div>
      <h1>List Of Gateways</h1>
      <Link to='/create/gateway'>Create Gateway</Link>
      <table className='table'>
        <tr>
          <th>GatewayMac</th>
          <th>GatewayFree</th>
          <th>GatewayLoad</th>
          <th>GatewayX</th>
          <th>GatewayY</th>
          <th>Actions</th>
        </tr>
        {gatewayList.map((item) => {
          return (
            <tr>
              <td>{item.gatewayMac}</td>
              <td>{item.gatewayFree}</td>
              <td>{item.gatewayLoad}</td>
              <td>{item.gatewayX}</td>
              <td>{item.gatewayY}</td>
              <td>
                <Link to={`/edit/gateway/${item._id}`}><i class="fa fa-pencil" aria-hidden="true"></i></Link>
                <i style={{ cursor: "pointer" }} onClick={() => deleteEntry(item._id)} class="fa fa-trash" aria-hidden="true"></i>
              </td>
            </tr>
          )
        })}
      </table>
    </div>
  )
}