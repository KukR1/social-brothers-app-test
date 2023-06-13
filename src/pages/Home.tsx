import { useState, useEffect } from 'react';
import MainButton from '../components/buttons/MainButton';
import Card from '../components/card/Card';
import { Form } from '../components/Form';
import { fetchCategories } from '../helpers/fetchCategories';
import { fetchPosts } from '../helpers/fetchPosts';
import { Category, Post } from '../types/DataGeneric';
import ClipLoader from 'react-spinners/ClipLoader';

const Home = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [displayCount, setDisplayCount] = useState(4);

  useEffect(() => {
    fetchCategories().then((data) => setCategories(data));
    fetchPosts().then((data) => setPosts(data));
  }, []);

  const loadMore = () => {
    setDisplayCount(displayCount + 4);
  };

  return (
    <>
      <div className="flex flex-row justify-center h-full gap-6">
        <div className="w-[30rem]">
          <Form categories={categories} />
        </div>
        <div className="bg-white w-[40rem] flex flex-col h-full gap-6 p-6 ">
          <div className="grid grid-cols-2 pb-1 pl-2 gap-6 scroll-container">
            {posts ? (
              posts
                .slice(0, displayCount)
                .map((post) => (
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
                ))
            ) : (
              <div className="col-span-2 mx-auto overflow-hidden flex flex-col gap-6">
                <div className="text-sb-gray">Something went wrong..</div>
                <ClipLoader color="orange" loading size={150} />
              </div>
            )}
          </div>
          <div className="mx-auto mt-auto">
            <MainButton text="Laad meer" onClick={loadMore} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
