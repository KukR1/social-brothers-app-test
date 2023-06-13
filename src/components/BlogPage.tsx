import { useState } from 'react';
import Card from './card/Card';
import Pagination from 'rc-pagination';
import 'rc-pagination/assets/index.css';
import usePosts from '../helpers/usePosts';

const BlogPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { posts, totalItemsCount } = usePosts(currentPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="flex flex-col items-center gap-6">
      <div className="grid grid-cols-4 grid-rows-2 gap-6">
        {posts.map((post) => (
          <Card
            imageUrl={`https://i.ibb.co/FwWdXMn/Mask.png`}
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
    </div>
  );
};

export default BlogPage;
