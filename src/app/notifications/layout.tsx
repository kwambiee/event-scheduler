export default function NotificationsLayout({
  children, 
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      {/* <header>Notifications Header</header> */}
      <main>{children}</main>
      {/* <footer>Notifications Footer</footer> */}
    </div>
  );
}