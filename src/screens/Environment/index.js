import { CBadge, CCard, CCardBody, CCol, CDataTable } from '@coreui/react';
import React from 'react';
import { Link } from 'react-router-dom';
import { url } from '../../helpers/helpers';
import CustomModal from '../../components/CustomModal';

export default function Index() {
  const fields = ['#', 'name','description', 'text1','text2','width','height','distance_Points','action'];
  const [environmentList, setEnvironmentList] = React.useState([]);
  const [id, setId] = React.useState(null);
  const [modal, setModal] = React.useState(false);

  React.useEffect(() => {

    async function fetchData() {
      const response = await fetch(url + 'environment/getAllEnvironments', {
        method: 'GET',
      })

      if (response.ok === true) {
        const data = await response.json();
        setEnvironmentList(data.data.map((item, index) => {
          return {
            '#': index + 1,
            'id': item._id,
            'name': item.name,
            'description':item.description,
            'text1':item.text1,
            'text2':item.text2,
            'width' : item.width,
            'height' : item.height,
            'distance_Points' : item.distance_points
          }
        }))
      }
    }
    fetchData();
  }, [])

  const deleteEntry = () => {
    async function deleteData() {
      const response = await fetch(url + 'environment/deleteEnvironment/' + id, {
        method: 'DELETE',
      })

      const data = await response.json();
      if (data.success == true) {
        setModal(false);
        setId('');
        async function fetchData() {
          const response = await fetch(url + 'environment/getAllEnvironments', {
            method: 'GET',
          })

          if (response.ok === true) {
            const data = await response.json();
            setEnvironmentList(data.data.map((item, index) => {
                return {
                  '#': index + 1,
                  'id': item._id,
                  'name': item.name,
                  'description':item.description,
                  'text1':item.text1,
                  'text2':item.text2,
                  'width' : item.width,
                  'height' : item.height,
                  'distance_Points' : item.distance_points
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
      <Link className="btn btn-primary mb-3 ml-3" to='/create/environment'>Create Environment</Link>
      <CCol xs="12" lg="12">
        <CCard>
          <CCardBody>
            <CDataTable
              items={environmentList}
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
                    <Link className="mr-2" to={`/edit/environment/${item.id}`}><i class="fa fa-pencil" aria-hidden="true"></i></Link>
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