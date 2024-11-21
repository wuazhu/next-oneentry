

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="homepage">
        <header className="header bg-slate-500">header</header>
        <main className="main">{children}</main>
        <footer className="footer bg-slate-500">footer</footer>
    </div>
  );
}
