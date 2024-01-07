import React, { useState } from 'react'
import { CardBody,Card ,  } from 'reactstrap'
import { useTranslation } from 'utility/language'
import DataTable from 'react-data-table-component'
import { TableSpinner } from 'components/table/TableSpinner'
import { useGetFirstAndSecondService } from 'api/service'
import useTableColumns from './useTableColumn'
import UpdateModel from './UpdateModal'
import { useGetThirdService } from 'api/service/third_service'
import ImageModal from './ImageModel'


const ThirdPage = () => {
  const t = useTranslation()
// Edit  Modal Data and open && close
  const [editModal , setEditModal] = useState(false)
  const [objectToEdit , setObjectToEdit] = useState(false)
  
  // IMage Modal Data and open && close 
  const [editModalIMage , setEditModalImage] = useState(false)

  const {data , isLoading } = useGetThirdService()
  const columns = useTableColumns(setEditModal , setObjectToEdit , setEditModalImage)

  return (
    <>
    <h1>{t("Third_Service")}</h1>
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
     <ImageModal 
      
      isOpen={editModalIMage}
      setIsOpen={setEditModalImage}
      objectToEdit={objectToEdit}
      setObjectToEdit={setObjectToEdit}
    />
  </>
  )
}

export default ThirdPage



