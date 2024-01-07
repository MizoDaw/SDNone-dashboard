import React from 'react'
import useFormTabs from '../useFormTabs'
import Tabs from "components/Tabs";

function AddPage() {
    const tabs = useFormTabs()
  return (
    <>
    
    <Tabs tabs={tabs} />
    </>
  )
}

export default AddPage