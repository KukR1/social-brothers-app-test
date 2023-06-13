import Logo from '../assets/Logo';
import bgImage from '../assets/header-photo.jpg';
import { ActiveNavLink } from '../links/ActiveNavLink';

interface HeaderProps {
  classNames: string;
}

/* Used an image from the web, as there was not your's in bitbucket */
const style = {
  backgroundImage: `url(${bgImage})`,
  backgroundSize: 'cover',
  backgroundPosition: 'bottom',
};

export const Header = ({ classNames }: HeaderProps) => {
  return (
    <div
      style={style}
      className={`${classNames} w-full h-[13rem] bg-slate-900`}
    >
      <div className="flex justify-between items-start px-[10rem] pt-[4rem]">
        <div>
          <Logo />
        </div>
        <div className="flex gap-8">
          <ActiveNavLink to="/">Home</ActiveNavLink>
          <ActiveNavLink to="/blog">Blog</ActiveNavLink>
        </div>
      </div>
    </div>
  );
};
