
export default function EventLayout({
  children, 
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      {/* <header>Event Header</header> */}
      <main>{children}</main>
      {/* <footer>Event Footer</footer> */}
    </div>
  );
}
