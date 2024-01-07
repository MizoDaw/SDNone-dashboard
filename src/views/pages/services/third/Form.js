import React from "react";
import { ValidatedField } from "components/input/ValidatedField";
import { useTranslation } from "utility/language";
import { useFormikContext } from "formik";
import ImagePreview from "components/ImagePreview";
import { Row, Col } from "reactstrap";

const FormModal = ({ preview, handleImageChange, editMode = false }) => {
  const t = useTranslation();
  const formik = useFormikContext();

  return (
    <Row xs={1} sm={1} md={1} lg={2} xl={2}>
      <Col>
        <ValidatedField
          dir="ltr"
          name="translated_fields[1][title]"
          label={`${t("title")} (${t("en")})`}
          placeholder={`${t("title")} (${t("en")})`}
        />
        <ValidatedField
          dir="rtl"
          name="translated_fields[2][title]"
          label={`${t("title")} (${t("ar")})`}
          placeholder={`${t("title")} (${t("ar")})`}
        />
      </Col>
      <Col style={{display:"flex" , flexDirection:"column" , justifyContent:"space-evenly"}} className="service-text-area">
      <label>{`${t("description")} (${t("en")})`}</label>
        <textarea
          name="translated_fields[1][description]"
          required="required"
          onChange={v => formik.setFieldValue('translated_fields[1][description]' , v.target.value)}
          defaultValue={formik.getFieldProps('translated_fields[1][description]').value}
          placeholder={`${t("description")} (${t("en")})`}
        />
        <label>{`${t("description")} (${t("ar")})`}</label>
        <textarea
          required="required"
          onChange={v => formik.setFieldValue('translated_fields[2][description]' , v.target.value)}
          defaultValue={formik.getFieldProps('translated_fields[2][description]').value}
          placeholder={`${t("description")} (${t("ar")})`}
        />
      </Col>
    </Row>
  );
};

export default FormModal;
