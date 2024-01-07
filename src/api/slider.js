import { useAddMutation, useDeleteMutation, useUpdateMutation, useToggleStatus, useGetQuery } from "./helpers";

const API = {
    ADD: `/api/admin/slider/create`,
    GET_ALL: `/api/admin/slider/all`,
    UPDATE_STATUS: `/api/admin/slider/change_status`,
    UPDATE_DETAILS: `/api/admin/slider/update`,
    DELETE: `/api/admin/slider/delete`,
}
const KEY = 'SLIDER'
export const useAddSlider  = () => useAddMutation(KEY, API.ADD);
export const useGetSlider  = () => useGetQuery(KEY, API.GET_ALL);
export const useUpdateSlider  = () => useUpdateMutation(KEY, API.UPDATE_DETAILS);
export const useUpdateSliderStatus = () => useToggleStatus(KEY, API.UPDATE_STATUS, 'slider_id');
export const useDeleteSlider  = () => useDeleteMutation(KEY, API.DELETE, 'slider_id', 'slider');