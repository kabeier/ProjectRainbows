import { NavLink, Outlet } from "react-router-dom";

const linkStyle = ({ isActive }: { isActive: boolean }) => ({
  marginRight: 12,
  textDecoration: "none",
  fontWeight: isActive ? 700 : 400,
});

export default function Layout() {
  return (
    <div style={{ padding: 24, fontFamily: "system-ui, sans-serif" }}>
      <header style={{ marginBottom: 16 }}>
        <nav>
          <NavLink to="/" end style={linkStyle}>
            Home
          </NavLink>
          <NavLink to="/projects" style={linkStyle}>
            Projects
          </NavLink>
          <NavLink to="/about" style={linkStyle}>
            About
          </NavLink>
        </nav>
        <hr style={{ marginTop: 12 }} />
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  );
}
