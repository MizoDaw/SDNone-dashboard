import React from "react";
import { ValidatedField } from "components/input/ValidatedField";
import { useTranslation } from "utility/language";
import { Row, Col } from "reactstrap";
import { Checkbox } from "@mui/material";
import { useFormikContext } from "formik";


const ProductForm = ({editMode = false }) => {
const t = useTranslation()
const formik  = useFormikContext()

  return (
    <Row xs={1} sm={1} md={1} lg={2} xl={2}>
      <Col>
      <ValidatedField
          dir="ltr"
          name="translated_fields[1][product_name]"
          label={`${t("product_name")} (${t("en")})`}
          placeholder={`${t("product_name")} (${t("en")})`}
        />
 
          <ValidatedField
          dir="ltr"
          name="translated_fields[1][product_quick_overview]"
          label={`${t("product_quick_overview")} (${t("en")})`}
          placeholder={`${t("product_quick_overview")} (${t("en")})`}
        />
        <label>{`${t("product_description")} (${t("en")})`}</label>

          <textarea
          dir="ltr"
          name="translated_fields[1][product_description]"
          label={`${t("product_description")} (${t("en")})`}
          placeholder={`${t("product_description")} (${t("en")})`}
          style={{width:'100%'}}
          value={formik.values.translated_fields[1]["product_description"]}
          onChange={(e)=>{
              formik.setFieldValue(e.target.name , e.target.value)
          }}
        />
   
      </Col>
      <Col>
      <ValidatedField
          dir="rtl"
          name="translated_fields[2][product_name]"
          label={`${t("product_name")} (${t("ar")})`}
          placeholder={`${t("product_name")} (${t("ar")})`}
        />

      <ValidatedField
          dir="rtl"
          name="translated_fields[2][product_quick_overview]"
          label={`${t("product_quick_overview")} (${t("ar")})`}
          placeholder={`${t("product_quick_overview")} (${t("ar")})`}
        />
        <label>{`${t("product_description")} (${t("ar")})`}</label>
      <textarea
          style={{width:'100%'}}
          dir="rtl"
          name="translated_fields[2][product_description]"
          label={`${t("product_description")} (${t("ar")})`}
          placeholder={`${t("product_description")} (${t("ar")})`}
          value={formik.values.translated_fields[2]["product_description"]}

          onChange={(e)=>{
            formik.setFieldValue(e.target.name , e.target.value)
        }}
        />
        
       
      </Col>
    </Row>
  );
};

export default ProductForm;
