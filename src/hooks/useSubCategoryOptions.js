import React from "react";
import { useBackendLanguageCode, useLanguageCode } from "utility/language/useLanguageCode";
import { mapTranslatedProperties } from "helpers/language";
import { useGetSubCategories } from "api/subcategories";
import { useTranslation } from "utility/language";
import { useGetCategories } from "api/categories";

const useSubCategoryOptions = ({ withAllOption = false } = {}) => {
  const languageCode = useLanguageCode();
  const { data } = useGetCategories({level:2});
   
  const t = useTranslation();

  return React.useMemo(() => {
    let options = [];
    if (data && data.category && Array.isArray(data.category)) {
      options = data?.category.map((subcategory) => ({
        value: subcategory.id,
        label: mapTranslatedProperties(
          subcategory.category_translations,
          "name",
          languageCode
        ),
        category_id: subcategory.parent_id,
      }));
    }
    if (withAllOption) {
      return [{ label: t("all"), value: null }, ...options];
    }
   return options
  }, [data, languageCode, withAllOption, t]);
};

export default useSubCategoryOptions;
