import {
    useGetQuery,
    useAddMutation,
    useUpdateMutation,
    useDeleteMutation,
    useToggleStatus,
  } from "../helpers";
  
  const API = {
    GETAll: `/api/admin/service/all?_start=7&_end=9`,
    UPDATE: `/api/admin/service/update`,
  };
  
  const KEY = "ForthService";
 
  export const useGetFourthService = (params) => useGetQuery(KEY , API.GETAll , params)
  export const useUpdateFourthService = () => useAddMutation(KEY, API.UPDATE);


  const API2 = {
    GET: `/api/admin/service/all`,
    ADD: `/api/admin/service/add-image`,
    UPDATE: `/api/admin/service/update-image`,
    DELETE: `/api/admin/service/delete-image`,
  };
  
  export const useGetFourthServiceImage = (params) => useGetQuery(KEY, API2.GET, params);
  export const useAddFourthServiceImage = () => useAddMutation(KEY, API2.ADD);
  export const useUpdateFourthServiceImage = () => useUpdateMutation(KEY, API2.UPDATE);
  export const useDeleteFourthServiceImage = () =>
    useAddMutation(KEY, API2.DELETE);
