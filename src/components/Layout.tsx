import { ReactNode } from 'react';
import { Header } from './header/Header';
import { Footer } from './footer/Footer';
import { ToastContainer } from 'react-toastify';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => (
  <div className="flex flex-col min-h-screen bg-sb-white-100">
    <Header classNames="flex-shrink-0" />
    <main className="flex-grow h-0 px-[10rem] py-[4rem]">{children}</main>
    <ToastContainer />
    <Footer classNames="flex-shrink-0" />
  </div>
);

export default Layout;
