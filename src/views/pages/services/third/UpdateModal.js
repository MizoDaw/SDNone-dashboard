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
import { useGetThirdService, useUpdateThirdService } from "api/service/third_service";

const UpdateModel = ({ isOpen, setIsOpen, objectToEdit, setObjectToEdit }) => {
  const t = useTranslation();
  const { mutate, isLoading, isSuccess } = useUpdateThirdService();

 
  const category_image = objectToEdit?.category_image;
  const { preview, handleImageChange, setPreview } =
    useImagePreview(category_image);

  const handleSubmit = (values) => {

    mutate({
      ar_title:values?.translated_fields[2].title,
      ar_description:values?.translated_fields[2].description,
      en_title:values?.translated_fields[1].title,
      en_description:values?.translated_fields[1].description,
      service_id:objectToEdit?.id
    })
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
                <FormModal
                  editMode={true}
                  preview={preview}
                  handleImageChange={handleImageChange}
                />
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

export default UpdateModel;
