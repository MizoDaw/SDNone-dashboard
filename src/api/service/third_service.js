import {
    useGetQuery,
    useAddMutation,
    useUpdateMutation
  } from "../helpers";
  
  const API = {
    GETAll: `/api/admin/service/all?_start=5&_end=6`,
    UPDATE: `/api/admin/service/update`,
  
  };
  
  const KEY = "THIRD_SERVICES";


    
  export const useGetThirdService = (params) => useGetQuery(KEY , API.GETAll , params)
  export const useUpdateThirdService = () => useAddMutation(KEY, API.UPDATE);


  const API2 = {
    GET: `/api/admin/service/all`,
    ADD: `/api/admin/service/add-image`,
    UPDATE: `/api/admin/service/update-image`,
    DELETE: `/api/admin/service/delete-image`,
  };
  
  export const useGetThirdServiceImage = (params) => useGetQuery(KEY, API2.GET, params);
  export const useAddThirdServiceImage = () => useAddMutation(KEY, API2.ADD);
  export const useUpdateThirdServiceImage = () => useUpdateMutation(KEY, API2.UPDATE);
  export const useDeleteThirdServiceImage = () =>useAddMutation(KEY, API2.DELETE);
