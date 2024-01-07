import {
    useGetQuery,
    useAddMutation,
    useUpdateMutation,
  } from "./helpers";
  
  const API = {
    GET: `/api/admin/project/all`,
    ADD: `/api/admin/project/add-image`,
    UPDATE: `/api/admin/project/update-image`,
    DELETE: `/api/admin/project/delete-image`,
  };
  
  const KEY = "OURWORK";
  export const useGetOurWork = (params) => useGetQuery(KEY, API.GET, params);
  export const useAddOurWork = () => useAddMutation(KEY, API.ADD);
  export const useUpdateOurWork = () => useUpdateMutation(KEY, API.UPDATE);
  export const useDeleteOurWork = () =>
    useAddMutation(KEY, API.DELETE);
