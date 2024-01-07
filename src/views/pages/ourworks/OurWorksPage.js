import React from 'react'
import { CardBody,Card ,  } from 'reactstrap'
import { useTranslation } from 'utility/language'
import DataTable from 'react-data-table-component'
import { TableSpinner } from 'components/table/TableSpinner'
import AdditionalImagesForm from './DynmikImage'
import { Form, Formik } from 'formik'
import { useGetOurWork } from 'api/our_works'
import SpinnerComponent from 'components/@vuexy/spinner/Fallback-spinner'


const OurWorksPage = () => {
  const t = useTranslation()

  const {data  , isLoading , isFetching } = useGetOurWork()
  

  if(isLoading ||isFetching){
    return <SpinnerComponent />
  }
  return (
  <>
    <h1>{t("Our_Works")}</h1>
    <div className="d-flex align-items-center mb-1 justify-content-between">
     
    </div>
    <Card>
      <CardBody className="p-1">
        <Formik >
          <Form>

       <AdditionalImagesForm  images={data?.at(0)?.images} object_Id={1}/>
          </Form>
        </Formik>
      </CardBody>
    </Card>
    {/* <EditModal 
      isOpen={editModal}
      setIsOpen={setEditModal}
      objectToEdit={objectToEdit}
      setObjectToEdit={setObjectToEdit}
    /> */}
  </>  )
}

export default OurWorksPage