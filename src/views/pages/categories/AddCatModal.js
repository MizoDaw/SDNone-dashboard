import React from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { Button } from "reactstrap";
import { useTranslation } from "utility/language";
import { LoadingButton } from "components/input/LoadingButton";
import { useAddCategory } from "api/categories";
import CategoryForm from "./CategoryForm";
import { Formik, Form } from "formik";
import { useImagePreview } from "hooks";

import {
  getInitialValues,
  getValidationSchema,
  getDataToSend,
} from "./formUtils";

const AddCatModal = ({ isOpen, setIsOpen }) => {
  const t = useTranslation();
  const { mutate: addCategory, isSuccess, isLoading } = useAddCategory();
  const { preview, handleImageChange, setPreview } = useImagePreview(null);

  const handleSubmit = (values) => {
    console.log(values);
    // addCategory(getDataToSend(values));
    const dataToBackEnd = {
      category_image:values?.category_image,
      background_color:values?.category_color,
      ar_category_name:values?.translated_fields[2]?.category_name,
      en_category_name:values?.translated_fields[1]?.category_name,
      ar_category_description:values?.translated_fields[2]?.category_description,
      en_category_description:values?.translated_fields[1]?.category_description
    }

    addCategory(getDataToSend(dataToBackEnd));

  };

  React.useEffect(() => {
    if (isSuccess) {
      setIsOpen(false);
      setPreview(null);
    }
  }, [isSuccess, setPreview, setIsOpen]);

  return (
    <Modal centered isOpen={isOpen} size="lg">
      <ModalHeader toggle={() => setIsOpen((v) => !v)}>
        {t("add_category")}
      </ModalHeader>
      <Formik
        onSubmit={handleSubmit}
        initialValues={getInitialValues()}
        validationSchema={getValidationSchema()}
      >
        {(formik) => (
          <Form>
            <ModalBody>
              <CategoryForm
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
                {t("add")}
              </LoadingButton>
            </ModalFooter>
          </Form>
        )}
      </Formik>
    </Modal>
  );
};

export default AddCatModal;
