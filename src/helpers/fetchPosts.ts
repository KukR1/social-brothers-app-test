import { toast } from 'react-toastify';

export const fetchPosts = async () => {
  try {
    const response = await fetch(
      `${
        import.meta.env.VITE_BASE_URL_API
      }/posts?page=1&perPage=10&sortBy=created_at&sortDirection=desc`,
      {
        method: 'GET',
        headers: {
          token: import.meta.env.VITE_APP_API_KEY,
        },
      }
    );

    if (!response.ok) {
      toast.error('Oops! Something went wrong.. we are working on it :)', {
        position: 'top-center',
      });
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error('Fetching posts failed: ', error);
  }
};
