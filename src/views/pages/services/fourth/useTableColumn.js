import React, {useMemo}  from 'react'
import { useTranslation } from 'utility/language'
import Actions from 'components/table/TableActions'
import { mapTranslatedProperties } from 'helpers/language'
import { BsFileEarmarkImage } from 'react-icons/bs';

const useTableColumn = (setObjectToEdit, setEditModal, setEditModalImage, setObjectToEditImage) => {
    const t = useTranslation();

  return useMemo(
    () => [
        {
            name: `${t("Gender")} (${t("en")})`,
            sortable: false,
            center: true,
            cell: (row) =>{
            
            return  convertidTOModelNameEn(row?.id)
            }
          },
          {
            name: `${t("Gender")} (${t("ar")})`,
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
              {/* <Actions
              showDelete={false}
                onEdit={() => {
                  setEditModal(true);
                  setObjectToEdit(row);
                }}
                onDelete={() =>{}}
              /> */}
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
       [t, setEditModal, setObjectToEdit, setEditModalImage, setObjectToEditImage]
    );
};

export default useTableColumn



function  convertidTOModelNameEn(id){


  return id ==7 ? 'Female' : id ==8 ?'Male' :'Kids' 
}

function  convertidTOModelNameAr(id){


  return id ==7 ? 'اناث' : id ==8 ?'ذكور' :'اولاد' 
}