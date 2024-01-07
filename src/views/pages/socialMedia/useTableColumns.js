import React, { useMemo } from "react";
import { useTranslation } from "utility/language";
import { baseURL } from "api/config";
import Actions from "components/table/TableActions";
import HovarableImage from "components/HovarableImage";
import { ToggleStatus } from "components/ToggleStatus";
import {
  useDeleteSocialMedia,
  useUpdateSocialMediaStatus,
} from "api/socialMedia";

const useTableColumns = () => {
  const t = useTranslation();
  const deleteMutation = useDeleteSocialMedia();
  const toggleMutation = useUpdateSocialMediaStatus();
  return useMemo(
    () => [
      {
        name: t("link"),
        selector: "link",
        sortable: false,
        center: true,
        cell: (row) => (
          <a
            href={row.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            {row.link}
          </a>
        ),
      },

      {
        name: t("type"),
        sortable: false,
        center: true,
        cell: (row) => (
          row?.icon
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
        cell: (row) => (
          <Actions
          showDelete={false}
            onEdit={() => row}
            onDelete={() => deleteMutation.mutate({ id: row.id })}
          />
        ),
      },
    ],
    [t, deleteMutation, toggleMutation]
  );
};

export default useTableColumns;
