export const fetchData = async (
  search: string,
  skip: number,
  limit: number
) => {
  let url;
  if (search.length) {
    console.log('Hello');
    url = `https://dummyjson.com/products/search?q=&skip=${skip}&limit=${limit}`;
  } else {
    url = `https://dummyjson.com/products/search?q=${search}&skip=${skip}&limit=${limit}`;
  }
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }
  return await response.json();
};
