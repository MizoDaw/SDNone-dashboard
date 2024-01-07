import React from "react";
import ContactLetter from "./Letter";
import ModelLayout from "test_layout/ModelLayout";
import { useModal } from "test_layout/zustand";

const EditCatModal = () => {
  const  {objectToEdit}  = useModal()
  return (
    <ModelLayout
    isAddModal={false}
    headerText={''}
    > 
       <ContactLetter  letter={objectToEdit}/>
    </ModelLayout>
  );
};

export default EditCatModal;
 