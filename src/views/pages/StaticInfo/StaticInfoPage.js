import React from "react";
import useTableColumns from "./useTableColumns";
import { useTranslation } from "utility/language";
import DataTable from "react-data-table-component";
import "assets/scss/plugins/extensions/react-paginate.scss";
import { Card, CardBody } from "reactstrap";
import { SearchInput } from "components/input/SearchInput";
import { useGetCategories } from "api/categories";
import { filterBasedOnSearch } from "./filters";
import { AddButton } from "components/AddButton";
import { TableSpinner } from "views/components/TableSpinner";
import { useIsAuthorized } from "redux/hooks/auth";
import EditModal from "./EditModal";
import { useGetWebSiteStatistics } from "api/statistics";

const StaticInfoPage = () => {
  const t = useTranslation();
  const isAuthorized = useIsAuthorized();

  //Data Manipulation -- Add + Edit
  const [addModal, setAddModal] = React.useState(false);
  const [editModal, setEditModal] = React.useState(false);
  const [objectToEdit, setObjectToEdit] = React.useState(null);

  //Table Content -- Data + Columns
  const { data, isLoading } = useGetWebSiteStatistics();

  const columns = useTableColumns(setEditModal, setObjectToEdit);
  //Data Filters
  const [searchText, setSearchText] = React.useState("");
  const [filteredData, setFilteredData] = React.useState([]);

  React.useEffect(() => {
    if (Array.isArray(data)) {
      if (searchText) {
        setFilteredData(
          filterBasedOnSearch(data, searchText)
        );
      } else {
        setFilteredData(data);
      }
    }
  }, [searchText, data]);

  return (
    <>
      <h1>{t("static_info")}</h1>
      <div className="d-flex align-items-center mb-1 justify-content-between">
        {/* <div className="d-flex">
          {isAuthorized && <AddButton onClick={() => setAddModal(true)} />}
        </div>
        <SearchInput
          onChange={setSearchText}
          placeholder={t("search")}
        /> */}
      </div>
      <Card>
        <CardBody className="p-1">
          <DataTable
            columns={columns}
            data={searchText ? filteredData : data}
            progressPending={isLoading}
            progressComponent={<TableSpinner />}
            noDataComponent={<h6 className="my-4">{t("no_records")}</h6>}
            noHeader
            pagination
          />
        </CardBody>
      </Card>
      <EditModal 
        isOpen={editModal}
        setIsOpen={setEditModal}
        objectToEdit={objectToEdit}
        setObjectToEdit={setObjectToEdit}
      />
    </>
  );
};

export default StaticInfoPage;
