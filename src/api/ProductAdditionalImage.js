import {
    useGetQuery,
    useAddMutation,
    useUpdateMutation,
    useDeleteMutation,
    useToggleStatus,
  } from "./helpers";
  
  const API = {
    GET: `/api/admin/product/details`,
    ADD: `/api/admin/product/add-image`,
    UPDATE: `/api/admin/product/update-image`,
    DELETE: `/api/admin/product/delete-image`,
  };
  
  const KEY = "SINGLE_OWNER_PRODUCT";
  export const useGetAdditionalImage = (params) => useGetQuery(KEY, API.GET, params);
  export const useAddAdditionalImage = () => useAddMutation(KEY, API.ADD);
  export const useUpdateAdditionalImage = () => useUpdateMutation(KEY, API.UPDATE);
  export const useDeleteAdditionalImage = () =>
    useAddMutation(KEY, API.DELETE);