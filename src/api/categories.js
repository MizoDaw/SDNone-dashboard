import {
  useGetQuery,
  useAddMutation,
  useUpdateMutation,
  useDeleteMutation,
  useToggleStatus,
} from "./helpers";

const API = {
  GET: `/api/admin/category/all`,
  GETAll: `/api/admin/category`,

  ADD: `/api/admin/category/create`,
  UPDATE: `/api/admin/category/update`,
  DELETE: `/api/admin/category/delete`,
  UPDATE_STATUS: `/api/admin/category/change_status`,
};

const KEY = "CATEGORIES";
export const useGetCategories = (params) => useGetQuery(KEY, API.GET, params);
export const useAddCategory = () => useAddMutation(KEY, API.ADD);
export const useUpdateCategory = () => useUpdateMutation(KEY, API.UPDATE);
export const useDeleteCategory = () =>
  useDeleteMutation(KEY, API.DELETE, "category_id", "categories");
export const useUpdateCategoryStatus = () =>
  useToggleStatus(KEY, API.UPDATE_STATUS, "category_id", "categories");


export const useGetAllCategories = (params) => useGetQuery("GETALL" , API.GETAll , params)