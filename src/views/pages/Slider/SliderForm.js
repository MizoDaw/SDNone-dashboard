import React from "react";
import { ValidatedField } from "components/input/ValidatedField";
import { useTranslation } from "utility/language";
import { useFormikContext } from "formik";
import ImagePreview from "components/ImagePreview";
import { Checkbox } from "@mui/material";

const SliderForm = ({
    editMode = false,
    img_preview,
    img_handleImageChange
}) => {
    const formik = useFormikContext();


    const handelCheck = (e)=>{
        formik.setFieldValue('is_ads' ,e?.target?.checked)
        
    }


    const t = useTranslation();

    return (
        <>


                   {/* <Checkbox
               
               defaultChecked={formik.getFieldProps('is_ads').value}
               onChange={(e)=>handelCheck(e)}
               inputProps={{ 'aria-label': 'controlled' }}
            /> */}
            {/* <p>{t('is_ads')}</p> */}
            <ValidatedField
                id="image"
                name="image"
                type="file"
                label={t("image")}
                placeholder={t("en_image")}
                accept="image/*"
                onChange={(e) => {
                    img_handleImageChange(e);
                    formik.setFieldValue(
                        "en_image",
                        e.target.files[0]
                    );
                }}
                required={editMode ? false : true}
            />

        
            <ImagePreview preview={img_preview} />
     
        </>
    );
};

export default SliderForm;
