import React from "react";
import { useTranslation } from "utility/language";
import useTableColumns from "./useTableColumns";
import EditSocialMediaModal from "./EditSocialMediaModal";
import { useGetSocialMedia } from "api/socialMedia";
import TableLayout from "test_layout/TableLayout";

const SocialMediaPage = () => {
  const t = useTranslation();
  //data
  const { data, isLoading } = useGetSocialMedia();
  const social_media = data || [];
  const columns = useTableColumns();

  return (
    <>
    <h1 className="pt-2 mb-1">{t("social_media")}</h1>
    <TableLayout
       columns={columns}
       data={social_media}
       progressPending={isLoading}
    />
      <EditSocialMediaModal/>
    </>
  );
};

export default SocialMediaPage;
