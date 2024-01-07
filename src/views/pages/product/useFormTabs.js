import React from "react";
import { MdLanguage } from "react-icons/md";
import { useTranslation } from "utility/language";
import BasicInfo from "./product_tabs/BasicInfo";
import SecondInfo from "./product_tabs/SecondInfo";

const useFormTabs = () => {
  const t = useTranslation();
  return  [
    {
      title: (
        <>
          <MdLanguage size={20} /> {t("first_info")}
        </>
      ),
     content:<BasicInfo /> 
    },
    {
      title: (
        <>
          <MdLanguage size={20} /> {t("second_info")}
        </>
      ),
     content:<SecondInfo /> 
    },

  ]
   
   
  
  
};

export default useFormTabs;
