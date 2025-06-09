import { ReactNode } from "react";

const AuthLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="flex flex-1 flex-col bg-back mx-auto">{children}</main>
  );
};

export default AuthLayout;
