export const fetchCategories = async () => {
  const response = await fetch(`${import.meta.env.VITE_BASE_URL}/categories`, {
    method: 'GET',
    headers: {
      token: import.meta.env.VITE_APP_API_KEY,
    },
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const data = await response.json();
  return data;
};
