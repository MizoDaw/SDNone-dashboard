import { MdLanguage } from "react-icons/md";
import { useTranslation } from "utility/language";
import BasicInfo from "./common/BasicInfo";

const useFormTabs = () => {
  const t = useTranslation();
  return  [
    {
      title: (
        <>
          <MdLanguage size={20} /> {t("basic_info")}
        </>
      ),
     content:<BasicInfo /> 
    },
  

  ]
   
   
  
  
};

export default useFormTabs;
