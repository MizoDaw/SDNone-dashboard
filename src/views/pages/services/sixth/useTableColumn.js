import React, { useMemo } from "react";
import { useTranslation } from "utility/language";
import Actions from "components/table/TableActions";
import { mapTranslatedProperties } from "helpers/language";
import { BsFileEarmarkImage } from "react-icons/bs";


const useTableColumns = (setEditModal, setObjectToEdit , setEditModalImage , setObjectToEditImage) => {
  const t = useTranslation();

  return useMemo(
   
    () => [
      {
        name: `${t("name")} (${t("en")})`,
        sortable: false,
        center: true,
        cell: (row) =>{
        
        return   convertidTOModelNameEn(row?.id)
        }
      },
      {
        name: `${t("name")} (${t("ar")})`,
        sortable: false,
        center: true,
        cell: (row) =>
        convertidTOModelNameAr(row?.id)
      },
      {
        name: "#",
        sortable: false,
        center: true,
        cell: (row) => (
          <>
          
          <Actions
          showDelete={false}
            onEdit={() => {
              setEditModal(true);
              setObjectToEdit(row);
            }}
            onDelete={() =>{}}
          />
          <BsFileEarmarkImage
          size={20}
          style={{cursor:"pointer"}}
            onClick={()=>{
              setObjectToEditImage(row)
              setEditModalImage(true)
            }}
          />
          </>
        ),
      },
    ],
    [t, setEditModal, setObjectToEdit]
  );
};

export default useTableColumns;



function  convertidTOModelNameEn(id){


  return id ==14 ? 'First Blogger  Group' : "Second Blogger Group";
}

function  convertidTOModelNameAr(id){


  return id ==14 ? 'مجموعة اولى من صانعي المتحوى' :'مجموعة الثانية من صانعي المحتوى'
}