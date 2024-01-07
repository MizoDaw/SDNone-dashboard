import React from "react";
import { ValidatedField } from "components/input/ValidatedField";
import { useTranslation } from "utility/language";
import { useFormikContext } from "formik";
import { Row, Col } from "reactstrap";
// import SingleLangEd/itor from "components/input/SingleLangEditor";

const FormModal = ({editMode = false ,objectToEdit }) => {
  const t = useTranslation();
  const formik = useFormikContext();


  return (  
    <Row xs={1} sm={1} md={1} lg={!objectToEdit?.key =='AboutUs' ? 2 :1} xl={!objectToEdit?.key =='AboutUs' ? 2 :1}>
      <Col>
      <ValidatedField
          dir="ltr"
          name="translated_fields[1][key]"
          label={`${t("key")} (${t("en")})`}
          placeholder={`${t("key")} (${t("en")})`}
          readOnly={true}
        />
        {
          !objectToEdit?.key =='AboutUs' &&(
            <>
             <ValidatedField
          dir="rtl"
           readOnly={true}
          name="translated_fields[2][key]"
          label={`${t("key")} (${t("ar")})`}
          placeholder={`${t("key")} (${t("ar")})`}
        />
        <ValidatedField
          dir="ltr"
          name="translated_fields[3][key]"
          label={`${t("key")} (${t("tl")})`}
          placeholder={`${t("key")} (${t("tl")})`}
          readOnly={true}
        />
        </>
          )
          


        }
        
       
      </Col>
      {
        !(objectToEdit?.key =='AboutUs') ?(
          <>
           <Col>
            
                
            <ValidatedField
                dir="ltr"
                name="translated_fields[1][value]"
                label={`${t("value")} (${t("en")})`}
                placeholder={`${t("value")} (${t("en")})`}
              />
              <ValidatedField
                dir="rtl"
                name="translated_fields[2][value]"
                label={`${t("value")} (${t("ar")})`}
                placeholder={`${t("value")} (${t("ar")})`}
              />
            </Col>
          </>
        ) 
        
        :
        <>
         {/* <Col>
        <SingleLangEditor langCode={1} property="value" />

      </Col>
      <Col>
        <SingleLangEditor langCode={2} property="value" />
        
      </Col>
      <Col>
        <SingleLangEditor langCode={3} property="value" />
        
      </Col> */}
      </>
      }
     
     
    </Row>
  );
};




export default FormModal