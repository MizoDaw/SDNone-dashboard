import React from "react";
import { Card, CardHeader, CardTitle, CardBody, Button } from "reactstrap";
import { useTranslation } from "utility/language";
import { Formik, Form } from "formik";
import Tabs from "components/Tabs";
import {  getInitialValues, getValidationSchema } from "./form/formUtils";
import { buildFormData } from "api/helpers";
import { LoadingButton } from "components/input/LoadingButton";
import { history } from "../../../history";
import ProgressBar from "components/ProgressBar";
import AuthComponent from "components/AuthComponent";
import useFormTabs from "./useFormTabs";
import {  useUpdateSingleDriver } from "api/driver";
import { useParams } from "react-router-dom";
import SpinnerComponent from "components/@vuexy/spinner/Fallback-spinner";
import { useGetSingleProduct, useUpdateProduct } from "api/owner_products";


const UpdateProductPage = (props) => {

  const t = useTranslation();
  const {id} = useParams()
  const {data, isLoading} = useGetSingleProduct({ product_id: id })

  const {isLoading:Loading,isError,isSuccess,percentCompleted ,mutate} = useUpdateProduct()

  const tabs = useFormTabs(data?.images);

  const handelsubmit = (values)=>{
    
   let data = {
    ...values
   }
    data['is_highlight'] = data['is_highlight'] == false || data['is_highlight'] =='false'?0:1
  

 
    data['product_id'] = id

    if(typeof data['product_main_image'] =='string'){
      delete data['product_main_image']
    }
    console.log(data);
    let data2  = {
      ar_product_name : data['translated_fields']['2']['product_name'],
      en_product_name : data['translated_fields']['1']['product_name'],
      en_product_description : data['translated_fields']['1']['product_description'],
      ar_product_description : data['translated_fields']['2']['product_description'],
      en_quick_overview:data['translated_fields']['1']['product_quick_overview'],
      ar_quick_overview:data['translated_fields']['2']['product_quick_overview'],

      ...data
    }
   
    console.log(data2);
   const formData = new FormData();
      buildFormData(formData, data2);
      mutate(formData)
  }
  
if(isLoading){
  return <SpinnerComponent />
}
  return (
    <Card>
      <CardHeader>
        <CardTitle style={{display:"flex"  , flexDirection:"column" , justifyContent:"center"}}>
          {t("product_information")}
        </CardTitle>
       
        <Button
          color="primary"
          onClick={() => history.push('/products')}
        >
          {t("back")}
        </Button>
      </CardHeader>
      <CardBody>
    {data && (
  <Formik
  onSubmit={handelsubmit}
  initialValues={getInitialValues(data)}
  validationSchema={getValidationSchema()}
>
  {(formik) => (
    <Form>
      <Tabs tabs={tabs} />
      <AuthComponent>
        <ProgressBar
          value={percentCompleted}
          isLoading={Loading}
          isError={isError}
          isSuccess={isSuccess}
        />
        <div className="d-flex justify-content-center align-items-center">
          <LoadingButton
            type="submit"
            color="primary"
            isLoading={Loading}
          >
            {t("save")}
          </LoadingButton>
        </div>
      </AuthComponent>
    </Form>
  )}
</Formik>
    )}
         

       
      </CardBody>
    </Card>
  );
};


export default UpdateProductPage;
