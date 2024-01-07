import {
    useGetQuery,
    useAddMutation,
    useUpdateMutation,
    useDeleteMutation,
    useToggleStatus,
  } from "../helpers";
  
  const API = {
    GETAll: `/api/admin/service/all?_start=10&_end=13`,
    UPDATE: `/api/admin/service/update`,
  };
  
  const KEY = "FifthService";

  export const useGetFifthService = (params) => useGetQuery(KEY , API.GETAll , params)
  export const useUpdateFifthService = () => useAddMutation(KEY, API.UPDATE);
