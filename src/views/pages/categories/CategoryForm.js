import React from "react";
import { ValidatedField } from "components/input/ValidatedField";
import { useTranslation } from "utility/language";
import { useFormikContext } from "formik";
import ImagePreview from "components/ImagePreview";
import { Row, Col } from "reactstrap";

const CategoryForm = ({ preview, handleImageChange, editMode = false }) => {
  const t = useTranslation();
  const formik = useFormikContext();

  return (
    <Row xs={1} sm={1} md={1} lg={2} xl={2}>
      <Col>
        <ValidatedField
          dir="ltr"
          name="translated_fields[1][category_name]"
          label={`${t("category_name")} (${t("en")})`}
          placeholder={`${t("category_name")} (${t("en")})`}
        />
        <ValidatedField
          dir="rtl"
          name="translated_fields[2][category_name]"
          label={`${t("category_name")} (${t("ar")})`}
          placeholder={`${t("category_name")} (${t("ar")})`}
        />

      <ValidatedField
          dir="ltr"
          name="translated_fields[1][category_description]"
          label={`${t("category_description")} (${t("en")})`}
          placeholder={`${t("category_description")} (${t("en")})`}
        />
        <ValidatedField
          dir="rtl"
          name="translated_fields[2][category_description]"
          label={`${t("category_description")} (${t("ar")})`}
          placeholder={`${t("category_description")} (${t("ar")})`}
        />
        <label style={{display:"block"}}>{t('category_background_color')}</label>
        <input type="color" name="category_color" style={{margin:"10px"}} value={formik.values.category_color} onChange={(e)=>{
          formik.setFieldValue("category_color" ,e.target.value )
        }} />

      </Col>
      <Col>
        <ValidatedField
          id="category_image"
          type="file"
          label={t("category_image")}
          name="category_image"
          accept="image/*"
          onChange={(e) => {
            handleImageChange(e);
            formik.setFieldValue("category_image", e.target.files[0]);
          }}
        />
        <ImagePreview preview={preview} />
      </Col>
    </Row>
  );
};

export default CategoryForm;
