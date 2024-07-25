// app/auth/layout.tsx
import Header from "@/components/layout/Header";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Auth - Devlinks",
  description: "Login or Register for Devlinks",
};

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="w-full max-w-md flex flex-col p-8 gap-16 flex-[1 0 0] sm:m-auto sm:justify-center">
        <Header />
        {children}
      </div>
    </>
  );
}
