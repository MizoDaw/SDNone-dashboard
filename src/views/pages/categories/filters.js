export const filterCategoriesBasedOnSearch = (categories, searchText) =>{

  return   categories.filter((category) =>
  category.translations.some(({ name }) =>
  name.toLowerCase().includes(searchText.toLowerCase())
  )
);
}

