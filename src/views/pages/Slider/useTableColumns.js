import React, { useMemo } from "react";
import { useTranslation } from "utility/language";
import { baseURL } from "api/config";
import Actions from "components/table/TableActions";
import HovarableImage from "components/HovarableImage";
import { ToggleStatus } from "components/ToggleStatus";
import {
  useDeleteSocialMedia,
  
} from "api/socialMedia";
import { useDeleteSlider, useUpdateSliderStatus } from "api/slider";

const useTableColumns = ({ setEditModal, setObjectToEdit }) => {
  const t = useTranslation();
  const deleteMutation = useDeleteSlider();
  const toggleMutation = useUpdateSliderStatus();
  return useMemo(
    () => [

      {
        name: t("image"),
        sortable: false,
        center: true,
        selector: "social_media_image",
        
        cell: (row) => {
          console.log(row);
          return(
            <HovarableImage
            id={`social_media_image_${row.id}`}
            src={`${baseURL}${row?.image}`}
            width="35"
          />
          )
        }
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
          />
        ),
      },
    ],
    [t, deleteMutation, setEditModal, setObjectToEdit, toggleMutation]
  );
};

export default useTableColumns;
