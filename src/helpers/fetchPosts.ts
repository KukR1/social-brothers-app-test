export const fetchPosts = async () => {
  try {
    const response = await fetch(
      `${
        import.meta.env.VITE_BASE_URL
      }/posts?page=1&perPage=10&sortBy=created_at&sortDirection=desc`,
      {
        method: 'GET',
        headers: {
          token: import.meta.env.VITE_APP_API_KEY,
        },
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error('Fetching posts failed: ', error);
  }
};
