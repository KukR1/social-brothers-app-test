interface ImageUploadProps {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  imageName: string;
}

const ImageUpload = ({ onChange, imageName }: ImageUploadProps) => {
  return (
    <div className="relative flex gap-4 items-center bg-gray-100 py-2 px-3 w-[9rem] h-[2.5rem]">
      <label htmlFor="image-upload" className="cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="13"
          height="13"
          viewBox="0 0 23 23"
          fill="none"
          stroke="#888888"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-camera"
        >
          <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
          <circle cx="12" cy="13" r="3" />
        </svg>
      </label>
      <input
        id="image-upload"
        type="file"
        required
        accept="image/*"
        className="hidden"
        onChange={onChange}
      />
      <div className="bg-sb-gray-200 px-3 py-1 rounded-xl flex items-center">
        <span
          style={{
            display: '-webkit-box',
            WebkitBoxOrient: 'vertical',
            WebkitLineClamp: 1,
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          }}
          className="text-xs text-white"
        >
          {imageName}
        </span>
      </div>
    </div>
  );
};

export default ImageUpload;
