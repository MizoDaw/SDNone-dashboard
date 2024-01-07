import { useGetContactUs } from 'api/statistics'
import React from 'react'
import { useTranslation } from 'utility/language'
import useTableColumns from './useTableColumns'
import EditCatModal from './EditModel'
import TableLayout from 'test_layout/TableLayout'

function Website() {
    // translate hooks
    const t = useTranslation()
    // get data from api 
    const {data , isLoading} = useGetContactUs()
    const columns = useTableColumns()
  return (
    <>
    <h1>{t('contact_us')}</h1>
        <TableLayout
            columns={columns}
            data={data}
            progressPending={isLoading}
        />
      <EditCatModal/>
    </>
  )
}

export default Website