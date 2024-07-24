import Header from "@/components/layout/Header";
export default function AuthLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="auth-layout-container">
      <Header />
      {children}
    </div>
  );
}
