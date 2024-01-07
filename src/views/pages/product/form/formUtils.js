import * as Yup from "yup";
import { buildFormData } from "api/helpers";
import { baseURL } from "api/config";
import { mapTranslatedProperties } from "helpers/language";

export const getInitialValues = (objectToEdit) => {
  return {
    product_price:objectToEdit?.product_price??0,
    // product_quantity:objectToEdit?.product_quantity??0,
    product_main_image:objectToEdit?.product_main_image??'',
    translated_fields: {
      1: {
        product_name: mapTranslatedProperties(objectToEdit?.translations ,'name', 'en') ??'',
        product_description: mapTranslatedProperties(objectToEdit?.translations ,'description', 'en') ?? '',
        product_quick_overview: mapTranslatedProperties(objectToEdit?.translations ,'quick_overview', 'en') ??''

      },
      2: {
        product_name: mapTranslatedProperties(objectToEdit?.translations ,'name', 'ar') ?? '',
        product_description: mapTranslatedProperties(objectToEdit?.translations ,'description', 'ar') ?? '',
        product_quick_overview: mapTranslatedProperties(objectToEdit?.translations ,'quick_overview', 'ar') ??''

      },
    },
    category_id:objectToEdit?.category_id,
    low_price:objectToEdit?.low_price,
    high_price:objectToEdit?.high_price,
    is_highlight:objectToEdit?.is_highlight??false,
  
  };
};

export const getValidationSchema = () => {
  return Yup.object().shape({
    translated_fields: Yup.object({
      1: Yup.object({
        product_name: Yup.string().required("required"),
        product_description: Yup.string().required("required"),
        product_quick_overview: Yup.string().required("required"),


      }),
      2: Yup.object({
        product_name: Yup.string().required("required"),
        product_description: Yup.string().required("required"),
        product_quick_overview: Yup.string().required("required"),


      }),
    }),
     category_id: Yup.mixed().required('required'),
     product_price: Yup.mixed().required('required'),
     low_price:Yup.mixed().required('required'),
     high_price:Yup.mixed().required('required'),
    //  product_quantity: Yup.mixed().required('required'),
  
  });
};

export const getDataToSend = (values) => {
  const data = { ...values };
  if (values.subcategory_image === "") {
    delete data["subcategory_image"];
  }
  const formData = new FormData();
  buildFormData(formData, data);
  return formData;
};
export const selectFailGender = [
  {value : "female" , label:"female"},
  {value:"male" , label:"male"}
] 


