

import React from 'react'

function useSearch(filterCategoriesBasedOnSearch  , data) {


    const [searchText, setSearchText] = React.useState("");
    const [filteredData, setFilteredData] = React.useState(data || []);



    React.useEffect(() => {
        if (Array.isArray(data?.categories)) {
          if (searchText) {
            setFilteredData(
              filterCategoriesBasedOnSearch(data.categories, searchText)
            );
          } else {
            setFilteredData(data.categories);
          }
        }
      }, [searchText, data]);

  return (
    {
        setSearchText , 
        filteredData
    }
  )
}

export default useSearch