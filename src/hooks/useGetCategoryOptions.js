import React from "react";
import { useBackendLanguageCode, useLanguageCode } from "utility/language/useLanguageCode";
import { mapTranslatedProperties } from "helpers/language";
import { useGetCategories } from "api/categories";
import { useTranslation } from "utility/language";

const useCategoryOptions = ({ withAllOption = false } = {}) => {
  const languageCode = useLanguageCode();
  const { data } = useGetCategories();
  const t = useTranslation();

  return React.useMemo(() => {
    let options = [];
    if (data && data.category && Array.isArray(data.category)) {
      options = data.category.map((category) => ({
        value: category.id,
        label: mapTranslatedProperties(
          category?.category_translations,
          "name",
          languageCode
        ),
      }));
    }

    if (withAllOption) {
      return [{ label: t("all"), value: null }, ...options];
    }
    return options;
  }, [data, languageCode, withAllOption, t]);
};

export default useCategoryOptions;
