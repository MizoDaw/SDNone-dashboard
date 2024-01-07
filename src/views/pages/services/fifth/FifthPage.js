import React from 'react'
import { CardBody,Card ,  } from 'reactstrap'
import { useTranslation } from 'utility/language'
import DataTable from 'react-data-table-component'
import { TableSpinner } from 'components/table/TableSpinner'
import { useGetFifthService } from 'api/service/FifthService'
import useTableColumn from './useTableColumn'
import UpdateModel from './UpdateModal'

const FifthPage = () => {
    const t = useTranslation()
    
    const [editModal, setEditModal] = React.useState(false);
    const [objectToEdit, setObjectToEdit] = React.useState(null);

    const {data , isLoading} = useGetFifthService()
    const columns = useTableColumn(setObjectToEdit , setEditModal);

    // console.log(data);
  return (
    <>
    <h1>{t("Fifth_Service")}</h1>
    <div className="d-flex align-items-center mb-1 justify-content-between">
     
    </div>
    <Card>
      <CardBody className="p-1">
        <DataTable
          columns={columns}
          data={data}
          progressPending={isLoading}
          progressComponent={<TableSpinner />}
          noDataComponent={<h6 className="my-4">{t("no_records")}</h6>}
          noHeader
          pagination
        />
      </CardBody>
    </Card>
    <UpdateModel 
      isOpen={editModal}
      setIsOpen={setEditModal}
      objectToEdit={objectToEdit}
      setObjectToEdit={setObjectToEdit}
    />  
  </>
    )
}

export default FifthPage