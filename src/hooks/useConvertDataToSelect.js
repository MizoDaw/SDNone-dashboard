import React from "react";
import { useLanguageCode } from "utility/language/useLanguageCode";
import { mapTranslatedProperties } from "helpers/language";
import { useTranslation } from "utility/language";

const useConvertDataToSelect = ({data ,  withAllOption = false } = {}) => {
  const languageCode = useLanguageCode();
  const t = useTranslation();

  return React.useMemo(() => {
    let options = [];
    if (data  && Array.isArray(data)) {
      options = data.map((category) => ({
        value: category.id,
        label: mapTranslatedProperties(
          category?.translations,
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

export default useConvertDataToSelect;
