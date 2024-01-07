import { Checkbox } from '@mui/material';
import { useGetAllCategories, useGetCategories } from 'api/categories';
import { baseURL } from 'api/config';
import ImagePreview from 'components/ImagePreview';
import { SelectField, ValidatedField } from 'components/input';
import { useFormikContext } from 'formik';
import { mapTranslatedProperties } from 'helpers/language';
import { useImagePreview } from 'hooks';
import useConvertDataToSelect from 'hooks/useConvertDataToSelect';
import useCategoryOptions from 'hooks/useGetCategoryOptions';
import React from 'react'
import { Col, Row } from 'reactstrap';
import { useLanguageCode, useTranslation } from 'utility/language';

function ProductSecondForm() {

    const languageCode = useLanguageCode();

    const t = useTranslation();
    const formik = useFormikContext();
    const {data , isLoading} = useGetCategories()
    const category= useConvertDataToSelect({
        data:data?.category
    })
   



    const image  =formik?.values?.product_main_image
    const {preview , handleImageChange}= useImagePreview(
     image ? baseURL + image : null )

     
     
    const handelCheck = (e)=>{
      formik.setFieldValue('is_highlight' ,e?.target?.checked)
      
  }


        if(isLoading){
            return "LOADING"
        }
        



  return (
    <Row xs={1} sm={1} md={1} lg={2} xl={2}>
    <Col>
   
        <SelectField
      label={t("category")}
      options={
        category
      }
      name="category_id"
      onChange={(opt) => {
        formik.setFieldValue("category_id", opt.value);
      }}
      isRequired
    />
    
    
    <ValidatedField
        name="low_price"
        label={t("low_price")}
        placeholder={t("low_price")}
        type="number"
        required
      />
      
      <ValidatedField
        name="high_price"
        label={t("high_price")}
        placeholder={t("high_price")}
        type="number"
        required
      />
        <ValidatedField
        name="product_price"
        label={t("product_price")}
        placeholder={t("product_price")}
        type="number"
        required
      />

        <Checkbox
               
               defaultChecked={formik.getFieldProps('is_highlight').value}
               onChange={(e)=>handelCheck(e)}
               inputProps={{ 'aria-label': 'controlled' }}
           />
               <p>{t('is_highlight')}</p>
  
    </Col>
    <Col>
      <ValidatedField
        id="product_image"
        type="file"
        label={t("image")}
        name="product_main_image"
        accept="image/*"
        onChange={(e) => {
          handleImageChange(e);
          formik.setFieldValue("product_main_image", e.target.files[0]);
        }}
      />
      <ImagePreview preview={preview} />
      <div  style={{marginTop:"8px" , color:"white"}}>.</div>
     
  
    </Col>
  </Row>
  )
}

export default ProductSecondForm


export const ChangeSelect = (data =[] ,languageCode)=>{

  
    
      let options = [];
      if (data  && Array.isArray(data)) {
        options = data.map((category) => ({
          value: category.id,
          label: mapTranslatedProperties(
            category?.category_translations,
            "name",
            languageCode
          ),
        }));
      }

      return options
}