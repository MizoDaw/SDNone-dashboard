import React from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { Button } from "reactstrap";
import { useTranslation } from "utility/language";
import { LoadingButton } from "components/input/LoadingButton";
import { Formik, Form } from "formik";
import { useImagePreview } from "hooks";
import { baseURL } from "api/config";
import { buildFormData } from "api/helpers";
import { useUpdateSocialMedia } from "api/socialMedia";
import * as Yup from "yup";
import { linkValidation } from "helpers/valdation/link";
import SliderForm from "./SliderForm";
import { useUpdateSlider } from "api/slider";

const getInitialValues = (objectToEdit) => ({
  en_image: objectToEdit[0]?.en_image || "",

});

const validationSchema = (editMode)=>Yup.object().shape({
  ...(!editMode && {
    en_image: Yup.mixed().required("required"),
  }),
});

const EditSliderModel = ({
  isOpen,
  setIsOpen,
  objectToEdit,
  setObjectToEdit,
}) => {
  const t = useTranslation();

  const updateMutation = useUpdateSlider();
  const image =objectToEdit?.image;
  const {
    preview: img_preview,
    handleImageChange: img_handleImageChange,
    setPreview: img_set_preview,
  } = useImagePreview(image);



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
    const data = { ...SliderToBack, slider_id: objectToEdit.id };
    const image =typeof data.en_image == "string";
    if (image) delete data["en_image"];
    const formData = new FormData();
    buildFormData(formData, data);
    updateMutation.mutate(formData);
  };

  React.useEffect(() => {
    if (updateMutation.isSuccess) {
      setIsOpen(false);
    }
  }, [updateMutation.isSuccess, setIsOpen]);
  React.useEffect(() => {
    if (isOpen) {
      img_set_preview(`${baseURL}${image}`);
    }
  }, [isOpen, image, img_set_preview]);

  return (
    <Modal centered isOpen={isOpen} size="lg">
      <ModalHeader toggle={() => setIsOpen((v) => !v)}>
        {t("edit_slider")}
      </ModalHeader>
      {objectToEdit && (
        <Formik
          onSubmit={handleSubmit}
          initialValues={getInitialValues(objectToEdit)}
          validationSchema={validationSchema(objectToEdit)}
        >
          {(formik) => (
            <Form>
              <ModalBody>
                <SliderForm
                  img_preview={img_preview}
                  img_handleImageChange={img_handleImageChange}
                  editMode={true}
                />
              </ModalBody>
              <ModalFooter>
                <Button
                  disabled={updateMutation.isLoading}
                  onClick={() => setIsOpen(false)}
                  color="danger"
                >
                  {t("cancel")}
                </Button>
                <LoadingButton
                  type="submit"
                  color="primary"
                  isLoading={updateMutation.isLoading}
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

export default EditSliderModel;
