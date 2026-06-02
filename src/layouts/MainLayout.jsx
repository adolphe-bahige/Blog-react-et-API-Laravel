import { Link, Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Title from "../components/Titles";
import Buttons from "../components/Button";
import { useEffect, useState } from "react";
import NotificationBar from "../components/NotificationBar";
import { ThemeProvider } from "../context/ThemeContext";

function MainLayout() {
  const [openNotif, setOpenNotif] = useState(false);
  const [openSideBar, setOpenSideBar] = useState(false);

  return (
    <ThemeProvider>
      <main className="w-full h-auto flex flex-col relative">
        <Navbar
          setOpenNotif={setOpenNotif}
          openSideBar={openSideBar}
          setOpenSideBar={setOpenSideBar}
        />

        <section className="w-full h-auto flex relative dark:bg-slate-700">
          <Sidebar openSideBar={openSideBar} setOpenSideBar={setOpenSideBar} />

          <div className="w-full ml-auto p-2 bg-slate-50 dark:bg-transparent md:w-[80%]">
            <section className="w-full min-h-[85vh] flex flex-col gap-2 ">
              <Outlet />
            </section>
          </div>
        </section>

        <NotificationBar openNotif={openNotif} setOpenNotif={setOpenNotif} />
      </main>
    </ThemeProvider>
  );
}

export default MainLayout;
