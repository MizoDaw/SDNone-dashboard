import React, {useState} from "react";
import DataTable from "react-data-table-component";
import ReactPaginate from "react-paginate";
import { ChevronLeft, ChevronRight } from "react-feather";
import "assets/scss/plugins/extensions/react-paginate.scss";
import {  Card, CardBody } from "reactstrap";
import PerPageDropdown from "components/PerPageDropdown";
import { useTranslation } from "utility/language";
import { SearchInput } from "components/input/SearchInput";
import useTableColumns from "./useTableColumns";
import { usePagination } from "hooks/dataTable/usePagination";
import { usePaginationWithURL } from "hooks/usePaginationWithURL";
import { TableSpinner } from "views/components/TableSpinner";

import { useGetProducts } from "api/owner_products";
import { AddButton } from "components/AddButton";

import { history } from  "../../../history";
import ImageModal from './ImageModel'

const ProductPage = (props) => {
  
  const t = useTranslation();

  const { page, per_page, handlePageChange, handlePerPageChange } =
    usePaginationWithURL(props.location);
  const filterPagination = usePagination();

  const [search, setSearchText] = React.useState("");


  // Edit  Modal Data and open && close
  const [editModal , setEditModal] = useState(false)
  const [objectToEdit , setObjectToEdit] = useState(false)

  // IMage Modal Data and open && close 
  const [editModalIMage , setEditModalImage] = useState(false)
  
  const filterIsApplied = search !== "";
  React.useEffect(() => {
    if (filterIsApplied) {
      filterPagination.handlePageChange(0);
    }
    //eslint-disable-next-line
  }, [search, filterIsApplied ]);

  //data
  const { data, isLoading } = useGetProducts({
    page: filterIsApplied ? filterPagination.page : page,
    per_page,
    search,
  
  });
  const products = data?.data || [];
  const totalRows = data?.pagination?.total || 0;
  const columns = useTableColumns(setEditModal , setObjectToEdit , setEditModalImage)


  
  
  return (
    <>
      <div className="d-flex align-items-center mb-1 justify-content-between flex-wrap" style={{width:'100%'}}>
        
      <div className="d-flex align-items-center"><h4 className="">{t("products")}</h4></div>
      
        <div className="d-flex align-items-end flex-column">
          
        <div className="d-flex ">
        <PerPageDropdown
            className="custom-dropdown mr-1"
            per_page={per_page}
            handlePerPage={(v) => {
              filterPagination.handlePageChange(0)
              handlePerPageChange(v);
              filterPagination.handlePerPageChange(v);
             
            }}
          />
          
          <SearchInput onChange={setSearchText}  placeholder={t("_search.product")}/>
          
        </div>
        </div>
        
      </div>
      <AddButton style={{marginBottom:'10px'}} onClick={()=>history.push('/products/add')}>
            {t('add')}
          </AddButton>
      <Card>
        
        <CardBody className="">
          <DataTable
            columns={columns}
            data={products}
            progressPending={isLoading}
            progressComponent={<TableSpinner />}
            noDataComponent={<h6 className="my-4">{t("no_records")}</h6>}
            noHeader
            pagination            
            paginationServer
            paginationComponent={() => (
              <ReactPaginate
                previousLabel={<ChevronLeft size={15} />}
                nextLabel={<ChevronRight size={15} />}
                breakLabel="..."
                breakClassName="break-me"
                pageCount={totalRows / per_page}
                containerClassName="vx-pagination separated-pagination pagination-center pagination-sm mb-0 mt-2"
                activeClassName="active"
                forcePage={
                  filterIsApplied ? filterPagination.page - 1 : page - 1
                }
                onPageChange={(v) => {
                  if (filterIsApplied) {
                    filterPagination.handlePageChange(v);
                  } else {
                    handlePageChange(v);
                  }
                }}
              />
            )}
            
            sortServer
          />
        </CardBody>
      </Card>
      <ImageModal 
      isOpen={editModalIMage}
      setIsOpen={setEditModalImage}
      objectToEdit={objectToEdit}
      setObjectToEdit={setObjectToEdit}
      />
    </>
  );
};

export default ProductPage;
