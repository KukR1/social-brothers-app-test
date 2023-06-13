interface FooterProps {
  classNames: string;
}

export const Footer = ({ classNames }: FooterProps) => {
  return (
    <div
      className={`${classNames} bg-sb-gray w-full h-[2rem] flex justify-center items-center`}
    >
      <p className="text-white text-xs"> © Copyright Social Brothers - 2023</p>
    </div>
  );
};
