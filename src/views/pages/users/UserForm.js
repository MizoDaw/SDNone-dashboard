import React from "react";
import { ValidatedField } from "components/input/ValidatedField";
import { useTranslation } from "utility/language";
import { useFormikContext } from "formik";


const UserForm = ({ editMode = false }) => {
  const t = useTranslation();
  const formik = useFormikContext();

  return (
    <>
      <ValidatedField
        name="full_name"
        label={t("full_name")}
        placeholder={t("full_name")}
        required
      />
      <ValidatedField
        name="phone"
        label={t("phone")}
        placeholder={t("phone")}
        required
      />
    </>
  );
};

export default UserForm;
