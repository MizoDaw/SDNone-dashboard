import React, { useMemo } from "react";

import { useBackendLanguageCode, useTranslation } from "utility/language";
import Actions from "components/table/TableActions";
import { history } from "../../../history";

import { baseURL } from "api/config";
import { GrView } from "react-icons/gr";
import HovarableImage from "components/HovarableImage";
import { mapTranslatedProperties } from "helpers/language";
import { ToggleStatus } from "components/ToggleStatus";
import { useDeleteProduct, useUpdateProductStatus } from "api/owner_products";
import {AiFillStar} from 'react-icons/ai'
import { BsFileEarmarkImage } from "react-icons/bs";
const useTableColumns = (setEditModal, setObjectToEdit , setEditModalImage) => {
  const t = useTranslation();
  const deleteMutation = useDeleteProduct();
  const toggleMutation = useUpdateProductStatus();
  const languageCode = useBackendLanguageCode();
 
  return useMemo(
    () => [
      {
        name: t("is_highlight"),
        selector: "is_highlight",
        sortable: false,
        center: true,
        width: '6%',
        maxWidth: 'auto',
        cell: (row) => (
          <>
            {row?.is_highlight ? (
              <AiFillStar style={{ color: "#FFC085" }} size={18} />
            ) : null}
          </>
        ),
       
      },
      {
        name: t("image"),
        sortable: false,
        center: true,
        cell: (row) => (
          <HovarableImage
            id={`driver_image_${row?.id}`}
            src={`${baseURL}${row?.product_main_image}`}
            width="35"
          />
        ),
      },
      {
        name: `${t("name")} (${t("en")})`,
        sortable: false,
        center: true,
        cell: (row) =>
          mapTranslatedProperties(row.translations, "name", 'en'),
      },
      {
        name: `${t("name")} (${t("ar")})`,
        sortable: false,
        center: true,
        cell: (row) =>
          mapTranslatedProperties(row.translations, "name", 'ar'),
      },
      {
        name: t("price"),
        sortable: false,
        center: true,
        cell: (row) => (
          row?.product_price
        ),
      },
    
      {
        name: t("status"),
        sortable: false,
        center: true,
        cell: (row) => (
          <ToggleStatus object={row} toggleMutation={toggleMutation} />
        ),
      },

      {
        name: "#",
        sortable: false,
        center: true,
        cell: (row) =>{ 
         
          return (
         <span style={{display:"flex" , alignItems:"center" , justifyContent:"space-around" , width:"100px" }}>
           <GrView
            onClick={()=>history.push(`/products/${row?.id}`)}
            size={22}
            style={{ cursor: "pointer" }}
          />
          <BsFileEarmarkImage
          size={20}
          style={{cursor:"pointer"}}
            onClick={()=>{
              setObjectToEdit(row)
              setEditModalImage(true)
            }}
          />
          <Actions
          showEdit={false}
          showDelete
          onDelete={() => deleteMutation.mutate({ id: row.id })}
          />
         </span>
        )},
      },
    ],
    [
      deleteMutation,
      t,
      toggleMutation,
      setEditModal, 
      setObjectToEdit,
    ]
  );
};

export default useTableColumns;
