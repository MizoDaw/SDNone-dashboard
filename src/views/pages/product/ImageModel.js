import React from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { Button } from "reactstrap";
import { useTranslation } from "utility/language";
import { LoadingButton } from "components/input/LoadingButton";
    import { Formik, Form } from "formik";
import { useImagePreview } from "hooks";
import { baseURL } from "api/config";
import {
  getInitialValues,
  getValidationSchema,
  
} from "./form/formUtils";
// import FormModal from "./Form";
import DynmicImageThirdService from "./ProductDynmicImage";
import SpinnerComponent from "components/@vuexy/spinner/Fallback-spinner";
import { useGetAdditionalImage, useUpdateAdditionalImage } from "api/ProductAdditionalImage";
import { useGetSingleProduct } from "api/owner_products";
import DynmicImageProduct from "./ProductDynmicImage";

const ImageModal = ({ isOpen, setIsOpen, objectToEdit, setObjectToEdit }) => {
  const t = useTranslation();
  const { mutate: updateCategory, isLoading, isSuccess } = useUpdateAdditionalImage();

  const {isFetching , data , isLoading:Loading } = useGetSingleProduct({product_id:objectToEdit.id}, objectToEdit)
  
  const images  =data?.images || []
  

  const handleSubmit = (values) => {

    console.log(values)
  };
  

   


  return (
    <Modal centered isOpen={isOpen} size="lg">
      <ModalHeader toggle={() => setIsOpen((v) => !v)}>
        {t("edit")}
      </ModalHeader>
      {objectToEdit && (
        <Formik
          onSubmit={handleSubmit}
          initialValues={getInitialValues(objectToEdit)}
          validationSchema={getValidationSchema(true)}
        >
          {(formik) => (
            <Form>
              <ModalBody>
                {isFetching || Loading ?  <SpinnerComponent /> :   <DynmicImageProduct images={images} object_Id={objectToEdit?.id}/>}
              
              </ModalBody>
              <ModalFooter>
                <Button
                  disabled={isLoading}
                  onClick={() => setIsOpen(false)}
                  color="danger"
                >
                  {t("cancel")}
                </Button>
                <LoadingButton
                  type="submit"
                  color="primary"
                  isLoading={isLoading}
                >
                  {t("save")}
                </LoadingButton>
              </ModalFooter>
            </Form>
          )}
        </Formik>
      )}
    </Modal>
  );
};

export default ImageModal;
