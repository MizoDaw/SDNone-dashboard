import { useGetQuery } from 'api/helpers'
import React from 'react'
import TableLayout from 'test_layout/TableLayout'

function Page({header_text , url}) {
    const {data ,isLoading} = useGetQuery(url  , url)
    
  return (

    <>
        <h1>{header_text}</h1>
        <TableLayout
            data={data}
            isLoading={isLoading}
        />
    </>
  )
}

export default Page