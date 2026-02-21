import { verifySession } from "@/lib/auth";
import { logoutAction } from "./actions";
import LoginForm from "./LoginForm";
import styles from "./admin.module.css";

const navItems = [
  { href: "/admin", label: "Dashboard" },
  { href: "/admin/analytics", label: "Analytics" },
  { href: "/admin/content", label: "Content" },
];

export default async function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const authenticated = await verifySession();

  if (!authenticated) {
    return <LoginForm />;
  }

  return (
    <div className={styles.adminShell}>
      <nav className={styles.sidebar}>
        <p className={styles.sidebarBrand}>Douro Admin</p>
        {navItems.map((item) => (
          <a key={item.href} href={item.href} className={styles.navLink}>
            {item.label}
          </a>
        ))}
        <div className={styles.sidebarSpacer} />
        <form action={logoutAction}>
          <button type="submit" className={styles.logoutButton}>
            Sign Out
          </button>
        </form>
      </nav>
      <main className={styles.content}>{children}</main>
    </div>
  );
}
