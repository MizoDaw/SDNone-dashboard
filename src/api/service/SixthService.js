import {
    useGetQuery,
    useAddMutation,
    useUpdateMutation
  } from "../helpers";
  
  const API = {
    GETAll: `/api/admin/service/all?_start=14&_end=15`,
    UPDATE: `/api/admin/service/update`,
  
  };
  
  const KEY = "SIXTH_SERVICES";


    
  export const useGetSixthService = (params) => useGetQuery(KEY , API.GETAll , params)
  export const useUpdateSixthService = () => useAddMutation(KEY, API.UPDATE);


  const API2 = {
    GET: `/api/admin/service/all`,
    ADD: `/api/admin/service/add-image`,
    UPDATE: `/api/admin/service/update-image`,
    DELETE: `/api/admin/service/delete-image`,
  };
  
  export const useGetSixthServiceImage = (params) => useGetQuery(KEY, API2.GET, params);
  export const useAddSixthServiceImage = () => useAddMutation(KEY, API2.ADD);
  export const useUpdateSixthServiceImage = () => useUpdateMutation(KEY, API2.UPDATE);
  export const useDeleteSixthServiceImage = () =>
    useAddMutation(KEY, API2.DELETE);
