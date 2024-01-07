import React, { useMemo } from "react";
import { useTranslation } from "utility/language";
import { useDeleteUser } from "api/users";
import Actions from "components/table/TableActions";
import { RiLockPasswordFill } from "react-icons/ri";
import { GoVerified } from "react-icons/go";

const useTableColumns = ({
  setEditModal,
  setObjectToEdit,
  setEditPasswordModal,
}) => {
  const t = useTranslation();
  const deleteMutation = useDeleteUser();

  return useMemo(
    () => [
      {
        name: t("name"),
        selector: "full_name",
        sortable: true,
        center: true,
        cell: (row) => <>{row?.full_name}</>,
      },
    
      {
        name: t("phone"),
        selector: "phone",
        sortable: true,
        center: true,
        cell: (row) => <div dir="ltr">{row.phone}</div>,
      },
      {
        name: "#",
        sortable: false,
        center: true,
        cell: (row) => (
          <Actions
            onEdit={() => {
              setEditModal(true);
              setObjectToEdit(row);
            }}
            onDelete={() => deleteMutation.mutate({ id: row.id })}
          >
          </Actions>
        ),
      },
    ],
    [t, deleteMutation, setEditModal, setObjectToEdit]
  );
};

export default useTableColumns;
