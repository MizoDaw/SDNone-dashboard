import {
    useGetQuery,
    useAddMutation,
    useUpdateMutation,
    useDeleteMutation,
    useToggleStatus,
  } from "./helpers";
  
  const API = {
    GET: `/api/admin/category/all`,
    GETAll: `/api/admin/services?_start=0&_end=4`,
  
    ADD: `/api/admin/category/create`,
    UPDATE: `/api/admin/category/update`,
    DELETE: `/api/admin/category/delete`,
    UPDATE_STATUS: `/api/admin/category/change_status`,
  };
  
  const KEY = "SERVICES";
  export const useGetCategories = (params) => useGetQuery(KEY, API.GET, params);
  export const useAddserviceIMages = () => useAddMutation(KEY, API.ADD);
  export const useUpdateserviceIMages = () => useUpdateMutation(KEY, API.UPDATE);
  export const useDeleteserviceIMages = () =>
    useDeleteMutation(KEY, API.DELETE, "category_id", "categories");

  
  
