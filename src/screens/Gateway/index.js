import { CBadge, CCard, CCardBody, CCol, CDataTable } from '@coreui/react';
import React from 'react';
import { Link } from 'react-router-dom';
import { url } from '../../helpers/helpers';
import CustomModal from '../../components/CustomModal';

export default function Index() {
  const fields = ['#', 'description','gatewayMac', 'gatewayFree', 'gatewayLoad', 'gatewayX', 'gatewayY', 'action'];
  const [gatewayList, setGatewayList] = React.useState([]);
  const [id, setId] = React.useState(null);
  const [modal, setModal] = React.useState(false);

  React.useEffect(() => {

    async function fetchData() {
      const response = await fetch(url + 'gateway/getAllGateways', {
        method: 'GET',
      })

      if (response.ok === true) {
        const data = await response.json();
        setGatewayList(data.data.map((item, index) => {
          return {
            '#': index + 1,
            'id': item._id,
            'description': item.description,
            'gatewayMac': item.gatewayMac,
            'gatewayFree': item.gatewayFree,
            'gatewayLoad': item.gatewayLoad,
            'gatewayX': item.gatewayX,
            'gatewayY': item.gatewayY,
          }
        }))
      }
    }
    fetchData();
  }, [])

  const deleteEntry = () => {
    async function deleteData() {
      const response = await fetch(url + 'gateway/deleteGateway/' + id, {
        method: 'DELETE',
      })

      const data = await response.json();
      if (data.success == true) {
        setModal(false);
        setId('');
        async function fetchData() {
          const response = await fetch(url + 'gateway/getAllGateways', {
            method: 'GET',
          })

          if (response.ok === true) {
            const data = await response.json();
            setGatewayList(data.data.map((item, index) => {
              return {
                '#': index + 1,
                'id': item._id,
                'description': item.description,
                'gatewayMac': item.gatewayMac,
                'gatewayFree': item.gatewayFree,
                'gatewayLoad': item.gatewayLoad,
                'gatewayX': item.gatewayX,
                'gatewayY': item.gatewayY,
              }
            }))
          }
        }
        fetchData();
      }
    }
    deleteData();
  }
  const showModal = value => {
    setId(value);
    setModal(true)
  }
  return (
    <section>
      <CustomModal modal={modal} setModal={setModal} deleteEntry={deleteEntry} />
      <Link className="btn btn-primary mb-3 ml-3" to='/create/gateway'>Create Gateway</Link>
      <CCol xs="12" lg="12">
        <CCard>
          <CCardBody>
            <CDataTable
              items={gatewayList}
              fields={fields}
              columnFilter
              tableFilter
              itemsPerPageSelect
              itemsPerPage={5}
              hover
              sorter
              pagination
              scopedSlots={{
                'action': (item) => (
                  <td>
                    <Link className="mr-2" to={`/edit/gateway/${item.id}`}><i className="fa fa-pencil" aria-hidden="true"></i></Link>
                    <i style={{ cursor: "pointer" }} onClick={() => showModal(item.id)} className="fa fa-trash" aria-hidden="true"></i>
                  </td>
                )
              }
              }
            />
          </CCardBody>
        </CCard>
      </CCol>
    </section>
  )
}