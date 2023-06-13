import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { BlogPost, ApiResponse } from '../types/DataGeneric';

const usePosts = (currentPage: number) => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [totalItemsCount, setTotalItemsCount] = useState<number>(0);

  useEffect(() => {
    fetch(
      `${
        import.meta.env.VITE_BASE_URL_API
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
      })
      .catch((err) => {
        toast.error('Oops! Something went wrong.. we are working on it :)', {
          position: 'top-center',
        });
        throw new Error(`HTTP error! status: ${err}`);
      });
  }, [currentPage]);

  return { posts, totalItemsCount };
};

export default usePosts;
