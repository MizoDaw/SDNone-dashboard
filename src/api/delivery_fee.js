import {
    useGetQuery,
    useUpdateMutation,

  } from "./helpers";
  
  const API = {
    GET: `/api/admin/delivery_fee/all`,
    UPDATE: `/api/admin/delivery_fee/update`,
  
  };
  
  const KEY = "DELIVERY";
  export const useGetDeliveryFee = () => useGetQuery(KEY, API.GET);
  export const useUpdateDeliveryFee = () => useUpdateMutation(KEY, API.UPDATE);

  