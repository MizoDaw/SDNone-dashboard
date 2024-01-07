import React, { useState } from 'react'
import { CardBody,Card ,  } from 'reactstrap'
import { useTranslation } from 'utility/language'
import DataTable from 'react-data-table-component'
import { TableSpinner } from 'components/table/TableSpinner'
import useTableColumns from './useTableColumn'
import UpdateModel from './UpdateModal'
import { useGetFirstAndSecondService } from 'api/service/first_service'


const FirstAndSecondPage = () => {
  const t = useTranslation()

  const [editModal , setEditModal] = useState(false)
  const [objectToEdit , setObjectToEdit] = useState(false)


  const {data , isLoading } = useGetFirstAndSecondService()
  const columns = useTableColumns(setEditModal , setObjectToEdit)

  return (
    <>
    <h1>{t("First_And_Second_Service")}</h1>
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

export default FirstAndSecondPage



