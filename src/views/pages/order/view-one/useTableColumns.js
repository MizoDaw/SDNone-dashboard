import React from 'react'
import { useTranslation } from 'utility/language'
import { mapTranslatedProperties } from 'helpers/language';
import HovarableImage from 'components/HovarableImage';
import { baseURL } from 'api/config';
import { useBackendLanguageCode } from 'utility/language';
export default function useTableColumns() {
    const t = useTranslation();
    const langCode = useBackendLanguageCode();
    return React.useMemo(() => [
        {
            name: `${t('name')}`,
            sortable: true,
            center: true,
            cell: (row) => 
                langCode ===1 ? row?.en_name :row?.ar_name 
            
        },

        // {
        //     name: `${t("image")}`,
        //     sortable: false,
        //     center: true,
        //     cell: (row) => {
        //         const imgSource = row.product_main_image
        //         return (
        //             <HovarableImage
        //                 id={`custom_ad_image_en_${row.id}`}
        //                 src={`${baseURL}${imgSource}`}
        //                 width="35"
        //             />
        //         );
        //     },
        // },
      

        {
            name: t("product_quantity"),
            sortable: true,
            center: true,
            selector: "product_quantity"
        },
        {
            name: t("is_customized"),
            sortable: true,
            center: true,
            cell:(row)=> row?.customized_design ? "true"  : 'false' 
        },
        {
            name: t("price"),
            sortable: true,
            center: true,
            cell: (row) => <>

                {
                   
                         <p >{row.price }</p>
                }
            </>

        },


    ], [t, langCode])
}
