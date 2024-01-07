import * as Yup from "yup";
import { mapTranslatedProperties } from "helpers/language";
import { buildFormData } from "api/helpers";

export const getInitialValues = (objectToEdit = null) => {


  return {
   
    translated_fields: {
      1: {
        key:objectToEdit?.key,
          value:
          mapTranslatedProperties(
            objectToEdit?.translations,
            "value",
            'en'
          ) || "",
      },
      2: {
          value:
          mapTranslatedProperties(
            objectToEdit?.translations,
            "value",
            'ar'
          ) || "",
      },
     
    },
  };
};

export const getValidationSchema = (editMode = false) => {
  return Yup.object().shape({
    translated_fields: Yup.object({
      1: Yup.object({
        value: Yup.string().required("required"),

      }),
      2: Yup.object({
        value: Yup.string().required("required"),

      }),
    
    }),

   
  });
};

export const getDataToSend = (values) => {
  const data = { ...values };
  if (values.image === "") {
    delete data["category_image"];
  }
  const formData = new FormData();
  buildFormData(formData, data);
  return formData;
};
