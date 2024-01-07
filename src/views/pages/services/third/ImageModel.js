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
  
} from "./formUtils";
import FormModal from "./Form";
import { useUpdateFirstService } from "api/service/first_service";
import DynmicImageThirdService from "./DynmicImageThirdService";
import { useGetThirdService } from "api/service/third_service";
import SpinnerComponent from "components/@vuexy/spinner/Fallback-spinner";

const ImageModal = ({ isOpen, setIsOpen, objectToEdit, setObjectToEdit }) => {
  const t = useTranslation();
  const { mutate: updateCategory, isLoading, isSuccess } = useUpdateFirstService();

  const {isFetching , data , isLoading:Loading } = useGetThirdService()
  const images  = data?.find(d => d.id == objectToEdit?.id)?.images || []
  const category_image = objectToEdit?.category_image;
  const { preview, handleImageChange, setPreview } =
    useImagePreview(category_image);

  const handleSubmit = (values) => {

    console.log(values)
  };

  React.useEffect(() => {
    if (isSuccess) {
      setIsOpen(false);
    }
  }, [isSuccess, setIsOpen]);
  React.useEffect(() => {
    if (isOpen) {
      setPreview(`${baseURL}${category_image}`);
    }
  }, [isOpen, setPreview, category_image]);


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
                {isFetching || Loading ?  <SpinnerComponent /> :   <DynmicImageThirdService images={images} object_Id={objectToEdit?.id}/>}
              
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
