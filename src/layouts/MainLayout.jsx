import { Link, Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Title from "../components/Titles";
import Buttons from "../components/Button";
import { useEffect, useState } from "react";
import NotificationBar from "../components/NotificationBar";

function MainLayout() {
  const [openNotif, setOpenNotif] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <main
      className={`w-full h-auto flex flex-col relative ${darkMode ? "dark" : ""}`}
    >
      <Navbar
        setOpenNotif={setOpenNotif}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      <section className="w-full h-auto flex relative ">
        <Sidebar />

        <div className="w-[80%] ml-auto p-2 bg-slate-50">
          <section className="w-full h-auto flex flex-col gap-2">
            <Outlet />
          </section>
        </div>
      </section>

      <NotificationBar openNotif={openNotif} setOpenNotif={setOpenNotif} />
    </main>
  );
}

export default MainLayout;
