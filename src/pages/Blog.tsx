import { useState } from 'react';
import Pagination from 'rc-pagination';
import 'rc-pagination/assets/index.css';
import usePosts from '../hooks/usePosts';
import Card from '../components/card/Card';
import ClipLoader from 'react-spinners/ClipLoader';

const Blog = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { posts, totalItemsCount } = usePosts(currentPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="flex flex-col items-center h-full justify-center gap-6">
      {posts.length > 0 ? (
        <>
          <div className="grid grid-cols-4 grid-rows-2 gap-6 ">
            {posts.map((post) => (
              <Card
                imageUrl={`${import.meta.env.VITE_BASE_URL}/storage/${
                  post.img_url
                }`}
                key={post.id}
                date={new Date(post.created_at).toLocaleDateString()}
                category={post.category.name}
                heading={post.title}
                text={post.content}
              />
            ))}
          </div>
          <Pagination
            current={currentPage}
            total={totalItemsCount}
            pageSize={8}
            onChange={handlePageChange}
            showLessItems
          />
        </>
      ) : (
        <div className="col-span-2 mx-auto overflow-hidden flex flex-col gap-6">
          <div className="text-sb-gray">Something went wrong..</div>
          <ClipLoader color="orange" loading size={150} />
        </div>
      )}
    </div>
  );
};

export default Blog;
