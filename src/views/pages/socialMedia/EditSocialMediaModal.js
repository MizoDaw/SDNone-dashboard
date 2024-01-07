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
import SocialMediaForm from "./SocialMediaForm";
import * as Yup from "yup";
import { linkValidation } from "helpers/valdation/link";
import ModelLayout from "test_layout/ModelLayout";
import useCloseModal from "test_layout/useCloseModal";
import { useModal } from "test_layout/zustand";

const getInitialValues = (objectToEdit) => 
{
  return ({
  link: objectToEdit?.link || "",
})};

const validationSchema =()=> Yup.object().shape({
  link: linkValidation,
});

const EditSocialMediaModal = () => {

  const updateMutation = useUpdateSocialMedia();
  const {objectToEdit} = useModal()


  const image = objectToEdit?.social_media_image;

  const {
    preview: img_preview,
    handleImageChange: img_handleImageChange,
    setPreview: img_set_preview,
  } = useImagePreview(image);



  const handleSubmit = (values) => {
    const data = { ...values, social_media_id: objectToEdit.id };
    const image = data.social_media_image === "";
    if (image) delete data["social_media_image"];
    const formData = new FormData();
    buildFormData(formData, data);
    updateMutation.mutate(formData);
  };
  
   useCloseModal(updateMutation.isSuccess)

   return (
    <ModelLayout
    headerText={"edit_social_media"}
    isAddModal={false}
    getInitialValues={getInitialValues(objectToEdit)}
    getValidationSchema={validationSchema()}
    handleSubmit={handleSubmit}
    isLoading={updateMutation.isLoading}
    > 
       <SocialMediaForm
              img_preview={img_preview}
              img_handleImageChange={img_handleImageChange}
              editMode={true}
            />
    </ModelLayout>
  );
};

export default EditSocialMediaModal;
