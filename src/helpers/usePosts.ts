import { useState, useEffect } from 'react';
import { BlogPost, ApiResponse } from '../types/DataGeneric';

const usePosts = (currentPage: number) => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [totalItemsCount, setTotalItemsCount] = useState<number>(0);

  useEffect(() => {
    fetch(
      `${
        import.meta.env.VITE_BASE_URL
      }/posts?page=${currentPage}&perPage=8&sortBy=created_at&sortDirection=desc`,
      {
        method: 'GET',
        headers: {
          token: import.meta.env.VITE_APP_API_KEY,
        },
      }
    )
      .then((res) => res.json())
      .then((data: ApiResponse<BlogPost>) => {
        setPosts(data.data);
        setTotalItemsCount(data.total);
      });
  }, [currentPage]);

  return { posts, totalItemsCount };
};

export default usePosts;
