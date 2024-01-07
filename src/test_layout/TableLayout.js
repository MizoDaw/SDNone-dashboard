import React from 'react'
import DataTable from 'react-data-table-component'
import { Card, CardBody } from 'reactstrap'
import { TableSpinner } from "views/components/TableSpinner";
import { useTranslation } from "utility/language";


function TableLayout(props) {
    const t  = useTranslation()
    const  {data , isLoading ,columns  , ...resprpos } = props 
  return (
    <Card>
    <CardBody className="p-1">
      <DataTable
        columns={columns}
        data={data}
        progressPending={isLoading}
        progressComponent={<TableSpinner />}
        noDataComponent={<h6 className="my-4">{t("no_records")}</h6>}
        noHeader
       { ...resprpos}
      />
    </CardBody>
  </Card>
  )
}

export default TableLayout