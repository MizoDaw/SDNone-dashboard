import React from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { Button } from "reactstrap";
import { useTranslation } from "utility/language";
import { LoadingButton } from "components/input/LoadingButton";
import { Formik, Form } from "formik";
import { buildFormData } from "api/helpers";
import { useImagePreview } from "hooks";
import * as Yup from "yup";
import { useAddSocialMedia } from "api/socialMedia";
import { linkValidation } from "helpers/valdation/link";
import SliderForm from "./SliderForm";
import { useAddSlider } from "api/slider";

const initialValues = {
  en_image: "",
 
};

const validationSchema = Yup.object().shape({
  
  en_image: Yup.mixed().required("required"),
});

const AddSliderModel = ({ isOpen, setIsOpen }) => {
  const t = useTranslation();

  const addMutation = useAddSlider();
  const {
    preview: img_preview,
    handleImageChange: img_handleImageChange,
    setPreview: img_setPreview,
  } = useImagePreview(null);

  const handleSubmit = (values) => {
    const SliderToBack = {
      slider_type:"category",
      slider_sort:"",
      is_active:"",
      ar_image:values?.en_image,
      en_image:values?.en_image,
      en_title:" .... ",
      ar_title:" .... ",
      en_description:" .... ",
      ar_description:" .... ",
    }
    const formData = new FormData();
    buildFormData(formData, SliderToBack);
    addMutation.mutate(formData);

  };

  React.useEffect(() => {
    if (addMutation.isSuccess) {
      setIsOpen(false);
      img_setPreview(null);
    }
  }, [addMutation.isSuccess, setIsOpen, img_setPreview]);

  return (
    <Modal centered isOpen={isOpen} size="lg">
      <ModalHeader toggle={() => setIsOpen((v) => !v)}>
        {t("add_slider")}
      </ModalHeader>
      <Formik
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
        initialValues={initialValues}
      >
        {(formik) => (
          <Form>
            <ModalBody>
              <SliderForm
                img_preview={img_preview}
                img_handleImageChange={img_handleImageChange}
              />
            </ModalBody>
            <ModalFooter>
              <Button
                disabled={addMutation.isLoading}
                onClick={() => setIsOpen(false)}
                color="danger"
              >
                {t("cancel")}
              </Button>
              <LoadingButton
                type="submit"
                color="primary"
                isLoading={addMutation.isLoading}
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

export default AddSliderModel;
