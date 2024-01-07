import { useAddMutation, useGetQuery } from "./helpers";
const API=`/api/admin/home`



const API2={
    GET:`/api/admin/static-information/all`,
    UPDATE:`/api/admin/static-information/update`,
    DELETE:`/api/admin/static-information/delete`
}

export const useGetStatistics=(params)=>useGetQuery("STATISTICS",API, params);


export const useGetWebSiteStatistics=(params)=>useGetQuery("WEBSITE",API2.GET, params);
export const useUpdateWebSiteStatics=(params)=>useAddMutation("WEBSITE",API2.UPDATE, params);
export const useDeleteWebSiteStatics=(params)=>useAddMutation("WEBSITE",API2.DELETE, params);



export const useGetContactUs = ()=>useGetQuery("CONTACTUS",`/api/admin/message/all`) ;