import { NavLink } from "react-router-dom";

function Navbar() {
  const navItems = [
    { name: "Projects", path: "/projects" },
    { name: "About", path: "/about" },
    { name: "Skills", path: "/skills" },
    { name: "Experience", path: "/experience" },
  ];

  return (
    <div className="flex items-center justify-center gap-2 bg-white dark:bg-[#0A0A0A] px-4 py-2  shadow-inner border border-gray-200 dark:border-[#262626]">
      {navItems.map((item) => (
        <NavLink
          key={item.name}
          to={item.path}
          className={({ isActive }) =>
            `relative px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
              isActive
                ? "text-black dark:text-white bg-black/5 dark:bg-white/10 shadow-lg -translate-y-0.5"
                : "text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/10 shadow-inner"
            }`
          }
        >
          {item.name}
        </NavLink>
      ))}
    </div>
  );
}

export default Navbar;
