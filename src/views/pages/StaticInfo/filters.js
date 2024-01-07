export const filterBasedOnSearch = (arrayToSearch, searchText ) =>
  arrayToSearch.some(({ code }) =>
    code.toLowerCase().includes(searchText.toLowerCase())
    
  );
