import React, { ReactNode } from "react";
import Header from "./Header";
import Navbar from "./Navbar";

const Layout: React.FC<{
  children: ReactNode;
  title: string;
  showFooter?: boolean;
  showBackButton?: boolean;
  backTo?: string;
}> = ({
  children,
  title,
  showFooter = true,
  showBackButton = false,
  backTo,
}) => {
  return (
    <div className="flex flex-col h-screen">
      <header>
        <Header title={title} showBackButton={showBackButton} backTo={backTo} />
      </header>
      <main className="flex-1 overflow-auto px-4 py-3">{children}</main>
      {showFooter && (
        <footer>
          <Navbar />
        </footer>
      )}
    </div>
  );
};

export default Layout;
