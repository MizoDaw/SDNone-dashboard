import React, { useMemo } from "react";
import { useDeleteCategory, useUpdateCategoryStatus } from "api/categories";
import { useTranslation } from "utility/language";
import Actions from "components/table/TableActions";
// import { history } from "../../../history";
import { mapTranslatedProperties } from "helpers/language";
import { ToggleStatus } from "components/ToggleStatus";
import HovarableImage from "components/HovarableImage";
import { baseURL } from "api/config";

const useTableColumns = (setEditModal, setObjectToEdit) => {
  const t = useTranslation();
  const deleteMutation = useDeleteCategory();
  const toggleMutation = useUpdateCategoryStatus();

  return useMemo(
   
    () => [
    
   
      {
        name: `${t("key")}`,
        sortable: false,
        center: true,
        cell: (row) =>row?.key
      },
      {
        name: `${t("value")}`,
        sortable: false,
        center: true,
        cell: (row) =>row?.value.length >30 ? row?.value.substring(0,30) +"...." : row?.value
          
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
            onDelete={() => deleteMutation.mutate({ id: row.id })}
          />
        ),
      },
    ],
    [t, deleteMutation, toggleMutation, setEditModal, setObjectToEdit]
  );
};

export default useTableColumns;
