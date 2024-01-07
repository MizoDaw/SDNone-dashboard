import React from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { Button } from "reactstrap";
import { useTranslation } from "utility/language";
import { LoadingButton } from "components/input/LoadingButton";
import FormModal from "./FormModal";
import { Formik, Form } from "formik";
import { useImagePreview } from "hooks";
import { baseURL } from "api/config";
import {
  getInitialValues,
  getValidationSchema,
  getDataToSend,
} from "./formUtils";
import { useUpdateWebSiteStatics } from "api/statistics";

const EditModal = ({ isOpen, setIsOpen, objectToEdit, setObjectToEdit }) => {
  const t = useTranslation();
  const { mutate, isLoading, isSuccess } = useUpdateWebSiteStatics();

 

  const handleSubmit = (values) => {
    const DataToSend = {
      
      static_information_id:objectToEdit?.id,
      key:values?.translated_fields['1'].key,
      ar_value:values?.translated_fields['2'].value,
      en_value:values?.translated_fields['1'].value,


    };
    // update(getDataToSend({ ...values, category_id: objectToEdit.id }));
    mutate((DataToSend)); 
     console.log(values);
  };

  React.useEffect(() => {
    if (isSuccess) {
      setIsOpen(false);
    }
  }, [isSuccess, setIsOpen]);


  return (
    <Modal centered isOpen={isOpen} size="lg">
      <ModalHeader toggle={() => setIsOpen((v) => !v)}>
        {t("edit_category")}
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
                objectToEdit={objectToEdit}
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

export default EditModal;
