import React from "react";
import { ValidatedField } from "components/input/ValidatedField";
import { useTranslation } from "utility/language";
import { useFormikContext } from "formik";
import Checkbox from "components/@vuexy/checkbox/CheckboxesVuexy";
import { Check } from "react-feather";
import ImagePreview from "components/ImagePreview";

const SocialMediaForm = ({
    editMode = false,
    img_preview,
    img_handleImageChange
}) => {
    const t = useTranslation();
    const formik = useFormikContext();

    return (
        <>
            <ValidatedField
                name="link"
                label={t("link")}
                placeholder={t("link")}
                required
            />
          
     
        </>
    );
};

export default SocialMediaForm;
