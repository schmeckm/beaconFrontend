import { CBadge, CCard, CCardBody, CCol, CDataTable } from '@coreui/react';
import React from 'react';
import { Link } from 'react-router-dom';
import { url } from '../../helpers/helpers';
import CustomModal from '../../components/CustomModal';

export default function Index() {
  const fields = ['#', 'beaconMac','description', 'action'];
  const [beaconList, setBeaconList] = React.useState([]);
  const [id, setId] = React.useState(null);
  const [modal, setModal] = React.useState(false);

  React.useEffect(() => {

    async function fetchData() {
      const response = await fetch(url + 'dbBeacon/getAllBeacons', {
        method: 'GET',
      })

      if (response.ok === true) {
        const data = await response.json();
        setBeaconList(data.data.map((item, index) => {
          return {
            '#': index + 1,
            'id': item._id,
            'beaconMac': item.beaconMac,
            'description':item.description,
          }
        }))
      }
    }
    fetchData();
  }, [])

  const deleteEntry = () => {
    async function deleteData() {
      const response = await fetch(url + 'dbBeacon/deleteBeacon/' + id, {
        method: 'DELETE',
      })

      const data = await response.json();
      if (data.success == true) {
        setModal(false);
        setId('');
        async function fetchData() {
          const response = await fetch(url + 'dbBeacon/getAllBeacons', {
            method: 'GET',
          })

          if (response.ok === true) {
            const data = await response.json();
            setBeaconList(data.data.map((item, index) => {
                return {
                  '#': index + 1,
                  'id': item._id,
                  'beaconMac': item.beaconMac,
                  'description':item.description,
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
      <Link to='/create/beacon'>Create Beacon</Link>
      <CCol xs="12" lg="12">
        <CCard>
          <CCardBody>
            <CDataTable
              items={beaconList}
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
                    <Link to={`/edit/beacon/${item.id}`}><i class="fa fa-pencil" aria-hidden="true"></i></Link>
                    <i style={{ cursor: "pointer" }} onClick={() => showModal(item.id)} class="fa fa-trash" aria-hidden="true"></i>
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