import React from "react";
import { useAddCategory } from "api/categories";
import CategoryForm from "./CategoryForm";
import { useImagePreview } from "hooks";
import {
  getInitialValues,
  getValidationSchema,
  getDataToSend,
} from "./formUtils";
import ModelLayout from "../ModelLayout";
import useCloseModal from "../useCloseModal";

const AddCatModal = () => {
 
  const { mutate: addCategory, isSuccess, isLoading } = useAddCategory();
  const { preview, handleImageChange } = useImagePreview(null);

  useCloseModal(isSuccess)



  const handleSubmit = (values) => {
    addCategory(getDataToSend(values));
  };

  return (
    <ModelLayout
    
    getInitialValues={getInitialValues}
    getValidationSchema={getValidationSchema}
    handleSubmit={handleSubmit}
    isLoading={isLoading}
    isAddModal={true}
    headerText={"add_category"}    
    
    
    >

       <CategoryForm
            preview={preview}
             handleImageChange={handleImageChange}
        />
    </ModelLayout>
  );
};

export default AddCatModal;
