import { toast } from 'react-toastify';

export const fetchCategories = async () => {
  const response = await fetch(
    `${import.meta.env.VITE_BASE_URL_API}/categories`,
    {
      method: 'GET',
      headers: {
        token: import.meta.env.VITE_APP_API_KEY,
      },
    }
  );

  if (!response.ok) {
    toast.error('The requested resource was not found.', {
      position: 'top-center',
    });
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const data = await response.json();
  return data;
};
