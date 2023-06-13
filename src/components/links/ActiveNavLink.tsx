import { NavLink, useMatch } from 'react-router-dom';

interface CustomNavLinkProps {
  to: string;
  children: React.ReactNode;
}

export const ActiveNavLink = ({ to, children }: CustomNavLinkProps) => {
  const match = useMatch(to);

  return (
    <NavLink
      to={to}
      className={
        match
          ? 'text-white text-lg font-bold border-b-2 border-orange-500'
          : 'text-white text-lg font-bold'
      }
    >
      {children}
    </NavLink>
  );
};
