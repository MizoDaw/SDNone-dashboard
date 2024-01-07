import React from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { Button } from "reactstrap";
import { useTranslation } from "utility/language";
import { LoadingButton } from "components/input/LoadingButton";
import SocialMediaForm from "./SocialMediaForm";
import { Formik, Form } from "formik";
import { buildFormData } from "api/helpers";
import { useImagePreview } from "hooks";
import * as Yup from "yup";
import { useAddSocialMedia } from "api/socialMedia";
import { linkValidation } from "helpers/valdation/link";
import ModelLayout from "test_layout/ModelLayout";
import useCloseModal from "test_layout/useCloseModal";

const initialValues = {
  social_media_link: "",
  social_media_image: "",
};

const validationSchema = Yup.object().shape({
  social_media_link: linkValidation,
  social_media_image: Yup.mixed().required("please_fill_out_this_feild"),
});



const AddSocialMediaModal = () => {
  const addMutation = useAddSocialMedia();
  const { preview: img_preview,handleImageChange: img_handleImageChange} = useImagePreview(null);

  const handleSubmit = (values) => {
    const formData = new FormData();
    buildFormData(formData, values);
    addMutation.mutate(formData);
  };

  useCloseModal(addMutation.isSuccess)

  return (
    <ModelLayout
    isAddModal={true}
    getInitialValues={initialValues}
    getValidationSchema={validationSchema}
    isLoading={addMutation.isLoading}
    headerText={"add"}
    handleSubmit={handleSubmit}
    
    >
         <SocialMediaForm
                img_preview={img_preview}
                img_handleImageChange={img_handleImageChange}
              />
    </ModelLayout>
  );
};

export default AddSocialMediaModal;
