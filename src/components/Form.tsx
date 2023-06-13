import { useEffect, useState } from 'react';
import MainButton from './buttons/MainButton';
import { TextArea } from './input/TextArea';
import { Dropdown } from './input/Dropdown';
import { Input } from './input/Input';
import { Category } from '../types/DataGeneric';
import { postBlog } from '../helpers/postBlog';
import ImageUpload from './input/ImageUpload';

interface FormProps {
  categories: Category[];
}

export const Form: React.FC<FormProps> = ({ categories }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [categoryId, setCategoryId] = useState<number | null>(null);
  const [image, setImage] = useState<File | undefined>(undefined);
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    setDisabled(image === undefined);
  }, [image]);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files === null) {
      console.error('No files selected.');
      return;
    }
    setImage(event.target.files[0]);
  };

  const handleSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('title', title);
    formData.append('content', content);
    if (categoryId !== null) {
      formData.append('category_id', categoryId.toString());
    }

    if (image) {
      formData.append('image', image);
    }

    await postBlog(formData);

    setTitle('');
    setContent('');
    setCategoryId(0);
    setImage(undefined);
  };

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const handleContentChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setContent(event.target.value);
  };

  const handleCategoryChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setCategoryId(parseInt(event.target.value));
  };

  return (
    <div className="flex h-full justify-between gap-6 ">
      <form
        className="bg-white w-full px-6 py-6 flex flex-col gap-6 overflow-y-auto scroll-container"
        onSubmit={handleSubmit}
      >
        <div className="text-2xl font-bold text-sb-black-100">
          Plaats een blog bericht
        </div>
        <div>
          <div className="text-sb-gray-300">Berichtnaam</div>
          <Input
            placeholder="Geen titel"
            name="title"
            value={title}
            required
            onChange={handleTitleChange}
          />
        </div>
        <div>
          <div className="text-sb-gray-300">Categorie</div>
          <Dropdown
            placeholder="Geen categorie"
            required
            name="category_id"
            value={categoryId ? categoryId.toString() : ''}
            onChange={handleCategoryChange}
            options={categories.map((category) => ({
              label: category.name,
              value: category.id,
            }))}
          />
        </div>
        <div className="flex flex-col gap-2">
          <div className="text-sb-gray-300">Header afbeelding</div>
          <ImageUpload
            imageName={image ? image.name : 'Kies bestnad'}
            onChange={handleImageUpload}
          />
        </div>
        <div className="flex-1">
          <div className="text-sb-gray-300">Bericht</div>
          <TextArea
            required
            name="content"
            value={content}
            onChange={handleContentChange}
          />
        </div>
        <div className="pt-6 mx-auto ">
          <MainButton disabled={disabled} text="Bericht aanmaken" />
        </div>
      </form>
    </div>
  );
};
