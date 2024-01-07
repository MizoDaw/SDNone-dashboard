import React from "react";
import { useUpdateCategory } from "api/categories";
import CategoryForm from "./CategoryForm";
import { useImagePreview } from "hooks";

import {
  getInitialValues,
  getValidationSchema,
  getDataToSend,
} from "./formUtils";
import useCloseModal from "../useCloseModal";
import ModelLayout from "../ModelLayout";
import { useModal } from "test_layout/zustand";

const EditCatModal = () => {

  const {objectToEdit} = useModal(state => state)


  const { mutate: updateCategory, isLoading, isSuccess } = useUpdateCategory();

  const { preview, handleImageChange } =useImagePreview();

  const handleSubmit = (values) => {
    updateCategory(getDataToSend({ ...values, category_id: objectToEdit.id }));
  };


  console.log(objectToEdit)

  useCloseModal(isSuccess)


  return (
    <ModelLayout
      getInitialValues={getInitialValues(objectToEdit)}
      getValidationSchema={getValidationSchema(true)}
      headerText={'edit_category'}
      isAddModal={false}
      isLoading={isLoading}
      handleSubmit={handleSubmit}
    >
      
            <CategoryForm
                  editMode={true}
                  preview={preview}
                  handleImageChange={handleImageChange}
                />
    </ModelLayout>
   
  );
};

export default EditCatModal;
