import React, { useMemo } from "react";
import { useTranslation } from "utility/language";
import Actions from "components/table/TableActions";
import { mapTranslatedProperties } from "helpers/language";


const useTableColumns = (setEditModal, setObjectToEdit) => {
  const t = useTranslation();

  return useMemo(
   
    () => [
      {
        name: `${t("title")} (${t("en")})`,
        sortable: false,
        center: true,
        cell: (row) =>{
        
        return    mapTranslatedProperties(row.translations, "title", 'en')
        }
      },
      {
        name: `${t("title")} (${t("ar")})`,
        sortable: false,
        center: true,
        cell: (row) =>
          mapTranslatedProperties(row.translations, "title", 'ar'),
      },
      {
        name: "#",
        sortable: false,
        center: true,
        cell: (row) => (
          <Actions
          showDelete={false}
            onEdit={() => {
              setEditModal(true);
              setObjectToEdit(row);
            }}
            onDelete={() =>{}}
          />
        ),
      },
    ],
    [t, setEditModal, setObjectToEdit]
  );
};

export default useTableColumns;
