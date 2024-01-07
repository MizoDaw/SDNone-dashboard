import React, { useMemo } from "react";
import { useTranslation } from "utility/language";
import Actions from "components/table/TableActions";


const useTableColumns = () => {
  const t = useTranslation();

  return useMemo(
    () => [
      {
        name: t("name"),
        selector: "name",
        center: true,
      },
    
      {
        name: t("email"),
        selector: "email",
        center: true,
      },
      
      {
        name: t("phone"),
        selector: "phone",
        center: true,
      },
      
      {
        name: "#",
        sortable: false,
        center: true,
        cell: (row) => (
          <Actions
          showDelete={false}
            onEdit={() =>  row }
          >
          </Actions>
        ),
      },
    ],
    [t]
  );
};

export default useTableColumns;
