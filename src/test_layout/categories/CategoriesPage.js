import React from "react";
import useTableColumns from "./useTableColumns";
import { useTranslation } from "utility/language";
import "assets/scss/plugins/extensions/react-paginate.scss";
import { SearchInput } from "components/input/SearchInput";
import { filterCategoriesBasedOnSearch } from "./filters";
import AddCatModal from "./AddCatModal";
import EditCatModal from "./EditCatModal";
import useSearch from "../useSearch";
import TableLayout from "../TableLayout";
import { AddButtonModal } from "components/AddButtonModal";

const TestLayOut = () => {
  const t = useTranslation();
  const isLoading = false 
  const data = {category:[{id:1,name:"ibrajim"}]}
  const categories = data?.category || [];
  const columns = useTableColumns();
  const {filteredData , setSearchText} = useSearch(filterCategoriesBasedOnSearch , categories)

  return (
<>
      <h1>{t("categories")}</h1>
      <div className="d-flex align-items-center mb-1 justify-content-between">
        <div className="d-flex">
           <AddButtonModal  />
        </div>
        <SearchInput
          onChange={setSearchText}
          placeholder={t("_search.category")}
        />
      </div>
      <TableLayout
        data={filteredData}
        isLoading={isLoading}
        columns={columns}
    />
      <AddCatModal/>
      <EditCatModal/>
    </>
  
  );
};

export default TestLayOut;
