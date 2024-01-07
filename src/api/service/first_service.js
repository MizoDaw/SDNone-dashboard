import {
    useGetQuery,
    useAddMutation,
    useUpdateMutation,
    useDeleteMutation,
    useToggleStatus,
  } from "../helpers";
  
  const API = {
    GETAll: `/api/admin/service/all?_start=0&_end=4`,
    UPDATE: `/api/admin/service/update`,
  
  };
  
  const KEY = "FIRST_SERVICES";


    
  export const useGetFirstAndSecondService = (params) => useGetQuery(KEY , API.GETAll , params)
  export const useUpdateFirstService = () => useAddMutation(KEY, API.UPDATE);
