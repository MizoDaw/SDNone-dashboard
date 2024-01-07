import * as Yup from "yup";
import { mapTranslatedProperties } from "helpers/language";
import { buildFormData } from "api/helpers";

export const getInitialValues = (objectToEdit = null) => {
  if (!objectToEdit) {
    return {
      translated_fields: {
        1: {
          category_name: "",

        },
        2: {
          category_name: "",
        },
      },
      category_image: "",
      category_sort: 1,
      category_color:"#155cae"
    };
  }

  return {
    translated_fields: {
      1: {
        category_name:
          mapTranslatedProperties(
            objectToEdit?.translations,
            "name",
            'en'
          ) || "",
          category_description:
          mapTranslatedProperties(
            objectToEdit?.translations,
            "description",
            'en'
          ) || "",
      },
      2: {
        category_name:
          mapTranslatedProperties(
            objectToEdit?.translations,
            "name",
            'ar'
          ) || "",
          category_description:
          mapTranslatedProperties(
            objectToEdit?.translations,
            "description",
            'ar'
          ) || "",
      },
    },
    category_image: "",
    category_color:objectToEdit?.background_color ??'#155cae',
    category_sort: objectToEdit.category_sort ?? 1,
  };
};

export const getValidationSchema = (editMode = false) => {
  return Yup.object().shape({
    translated_fields: Yup.object({
      1: Yup.object({
        category_name: Yup.string().required("required"),
        category_description: Yup.string().required("required"),

      }),
      2: Yup.object({
        category_name: Yup.string().required("required"),
        category_description: Yup.string().required("required"),

      }),
    }),

    ...(!editMode && {
      category_image: Yup.mixed().required("required"),
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
