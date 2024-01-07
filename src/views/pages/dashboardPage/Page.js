import { useGetSocialMedia } from 'api/socialMedia'
import React from 'react'
import TableLayout from 'test_layout/TableLayout'
import useTableColumns from './useTableColumns'
import { AddButton } from 'components/AddButton'
import {history} from '../../../history'
function Page() {
  const {data, isLoading} = useGetSocialMedia()
  const columns = useTableColumns()
  
  return (
    <>
      <div style={{display:"flex" , justifyContent:"space-between", marginBottom:"10px"}}>

      <h1>Pages</h1>
      <AddButton  onClick={()=>{history.push('/dashboard/add')}}/>
      </div>

      <TableLayout
      columns={columns}
      isLoading={isLoading}
      data={data}
    />
    </>
  )
}

export default Page