import { Link, NavLink } from "react-router-dom";
// import Buttons from "./Button";
import { handleLogout } from "../services/logout";

const linkClass = ({ isActive }) =>
  `w-full text-base font-medium p-2 rounded-sm transition-[1s] flex items-center gap-2 hover:bg-slate-200 hover:text-indigo-900 dark:hover:text-slate-800 ${isActive ? "bg-slate-200 text-indigo-900 dark:text-slate-800" : "text-white bg-none"}`;

function Sidebar({ openSideBar, setOpenSideBar }) {
  const closeSide = () => setOpenSideBar(false);
  return (
    <section
      onClick={() => setOpenSideBar(false)}
      className={`bg-indigo-900 w-full min-h-[88vh] overflow-y-auto text-white flex flex-col justify-between items-center pb-2 fixed top-[12vh] z-20 transform transition-transform dark:bg-slate-800 duration-300 pt-2 px-2 ${openSideBar ? "translate-x-0 " : "-translate-x-full "} md:w-[20%] md:flex md:translate-x-0`}
    >
      <nav className="w-full flex flex-col gap-1 ">
        <NavLink to="/dashboard" onClick={closeSide} className={linkClass}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.2rem"
            height="1.2rem"
            viewBox="0 0 24 24"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path
              fill="currentColor"
              d="M12 3a9 9 0 0 0-4.5 16.796l.865.5l-1.001 1.732l-.866-.5A11 11 0 0 1 1 12C1 5.925 5.925 1 12 1c1.203 0 2.362.193 3.448.552l.95.313l-.627 1.9l-.95-.314A9 9 0 0 0 12 3m8.981 1.414l-5.542 5.542a4 4 0 1 1-1.42-1.41L19.567 3zm1.154 3.188l.313.95C22.807 9.638 23 10.797 23 12c0 4.071-2.212 7.625-5.496 9.526l-.865.5l-1.002-1.73l.865-.501A9 9 0 0 0 21 12a9 9 0 0 0-.45-2.822l-.314-.95z"
            />
          </svg>
          Dashboard
        </NavLink>

        <NavLink to="/categories" onClick={closeSide} className={linkClass}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.2rem"
            height="1.2rem"
            viewBox="0 0 24 24"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path
              fill="currentColor"
              d="M10 3H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1m10 10h-6a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1M17 3c-2.206 0-4 1.794-4 4s1.794 4 4 4s4-1.794 4-4s-1.794-4-4-4M7 13c-2.206 0-4 1.794-4 4s1.794 4 4 4s4-1.794 4-4s-1.794-4-4-4"
            />
          </svg>
          Categories
        </NavLink>

        <NavLink to="/posts" onClick={closeSide} className={linkClass}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.2rem"
            height="1.2rem"
            viewBox="0 0 24 24"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path
              fill="currentColor"
              fillRule="evenodd"
              d="M7.784 1.356a2.75 2.75 0 0 0-3.186 2.231l-2.43 13.787a2.75 2.75 0 0 0 2.23 3.186l11.818 2.084a2.75 2.75 0 0 0 3.185-2.23l2.432-13.788a2.75 2.75 0 0 0-2.231-3.186zM9.06 5.643A.75.75 0 1 0 8.8 7.12l7.878 1.39a.75.75 0 0 0 .26-1.478zm-1.563 4.548a.75.75 0 0 1 .869-.608l7.878 1.389a.75.75 0 1 1-.26 1.477l-7.879-1.39a.75.75 0 0 1-.608-.868m.174 3.33a.75.75 0 1 0-.26 1.477l4.924.869a.75.75 0 1 0 .26-1.478z"
              clipRule="evenodd"
            />
          </svg>
          Posts
        </NavLink>

        <NavLink to="/comments" onClick={closeSide} className={linkClass}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.2rem"
            height="1.2rem"
            viewBox="0 0 20 20"
          >
            <path d="M0 0h20v20H0z" fill="none" />
            <path
              fill="currentColor"
              d="M17 7.5A3.5 3.5 0 0 0 13.5 4h-9c.456-.607 1.182-1 2-1h7A4.5 4.5 0 0 1 18 7.5v4c0 .818-.393 1.544-1 2zm-15 0A2.5 2.5 0 0 1 4.5 5h9A2.5 2.5 0 0 1 16 7.5v6a2.5 2.5 0 0 1-2.5 2.5H9.057L6.59 17.803A1 1 0 0 1 5 16.995V16h-.5A2.5 2.5 0 0 1 2 13.5z"
            />
          </svg>
          Comments
        </NavLink>

        <NavLink to="/users" onClick={closeSide} className={linkClass}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.2rem"
            height="1.2rem"
            viewBox="0 0 24 24"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <circle cx="12" cy="6" r="4" fill="currentColor" />
            <path
              fill="currentColor"
              d="M20 17.5c0 2.485 0 4.5-8 4.5s-8-2.015-8-4.5S7.582 13 12 13s8 2.015 8 4.5"
            />
          </svg>
          Users
        </NavLink>

        <NavLink to="/settings" onClick={closeSide} className={linkClass}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.2rem"
            height="1.2rem"
            viewBox="0 0 24 24"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path
              fill="currentColor"
              d="M14.82 1H9.18l-.647 3.237a8.5 8.5 0 0 0-1.52.88l-3.13-1.059l-2.819 4.884l2.481 2.18a8.6 8.6 0 0 0 0 1.756l-2.481 2.18l2.82 4.884l3.129-1.058c.472.342.98.638 1.52.879L9.18 23h5.64l.647-3.237a8.5 8.5 0 0 0 1.52-.88l3.13 1.059l2.82-4.884l-2.482-2.18a8.6 8.6 0 0 0 0-1.756l2.481-2.18l-2.82-4.884l-3.128 1.058a8.5 8.5 0 0 0-1.52-.879zM12 16a4 4 0 1 1 0-8a4 4 0 0 1 0 8"
            />
          </svg>
          Settings
        </NavLink>

      </nav>
        
      <button type="button" onClick={closeSide, handleLogout} className="w-full text-base font-medium p-2 rounded-sm transition-[1s] flex justify-center items-center gap-2 bg-slate-200 text-indigo-900 dark:bg-slate-700 dark:text-white cursor-pointer">
        Logout
      </button>
    </section>
  );
}

export default Sidebar;
