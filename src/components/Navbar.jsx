import avatar from "../assets/users/profil user.jpg";
import avatarUser from "../assets/users/user profil.jpg";
import { useTheme } from "../context/ThemeContext";

function SunIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1.8rem"
      height="1.8rem"
      viewBox="0 0 24 24"
    >
      <path d="M0 0h24v24H0z" fill="none" />
      <g fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="4" strokeLinejoin="round" />
        <path
          strokeLinecap="round"
          d="M20 12h1M3 12h1m8 8v1m0-18v1m5.657 13.657l.707.707M5.636 5.636l.707.707m0 11.314l-.707.707M18.364 5.636l-.707.707"
        />
      </g>
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1.8rem"
      height="1.8rem"
      viewBox="0 0 24 24"
    >
      <path d="M0 0h24v24H0z" fill="none" />
      <path
        fill="currentColor"
        d="M12.058 20q-3.334 0-5.667-2.333T4.058 12q0-3.039 1.98-5.27t4.904-2.634q.081 0 .159.006t.153.017q-.506.706-.801 1.57T10.158 7.5q0 2.667 1.866 4.533t4.534 1.867q.951 0 1.813-.295t1.548-.801q.012.075.017.153t.006.159q-.384 2.923-2.615 4.903T12.057 20"
      />
    </svg>
  );
}

function MenuListIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1.8rem"
      height="1.8rem"
      viewBox="0 0 16 16"
      className=" md:hidden "
    >
      <path
        fill="currentColor"
        d="M2 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 0 1h-8a.5.5 0 0 1-.5-.5m0 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5M2.5 7a.5.5 0 0 0 0 1h11a.5.5 0 0 0 0-1z"
      />
    </svg>
  );
}

function RemoveMenuListIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1.8rem"
      height="1.8rem"
      viewBox="0 0 24 24"
    >
      <path d="M0 0h24v24H0z" fill="none" />
      <path
        fill="currentColor"
        d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12z"
      />
    </svg>
  );
}

function Navbar({ setOpenNotif, openSideBar, setOpenSideBar }) {
  const { darkMode, setDarkMode } = useTheme();
  return (
    <nav className="w-full h-[12vh] flex justify-between items-center px-6 bg-indigo-900 text-white sticky top-0 z-10 dark:bg-slate-800 transition-colors ">
      {/* logo */}
      <div className="w-25 h-20 flex justify-center items-center overflow-hidden md:w-22 md:h-16">
        <img
          src="/images/think dig.png"
          alt="Logo"
          className="w-full h-full object-cover rounded-md"
        />
      </div>

      {/* icone notification, profile, menu media, */}
      <div className="h-full flex justify-between items-center gap-3">
        {/* notification */}
        <button
          type="button"
          className="cursor-pointer"
          onClick={(e) => {
            e.stopPropagation();
            setOpenNotif((prev) => !prev);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="2rem"
            height="2rem"
            viewBox="0 0 512 512"
          >
            <path
              fill="currentColor"
              d="M440.08 341.31c-1.66-2-3.29-4-4.89-5.93c-22-26.61-35.31-42.67-35.31-118c0-39-9.33-71-27.72-95c-13.56-17.73-31.89-31.18-56.05-41.12a3 3 0 0 1-.82-.67C306.6 51.49 282.82 32 256 32s-50.59 19.49-59.28 48.56a3.1 3.1 0 0 1-.81.65c-56.38 23.21-83.78 67.74-83.78 136.14c0 75.36-13.29 91.42-35.31 118c-1.6 1.93-3.23 3.89-4.89 5.93a35.16 35.16 0 0 0-4.65 37.62c6.17 13 19.32 21.07 34.33 21.07H410.5c14.94 0 28-8.06 34.19-21a35.17 35.17 0 0 0-4.61-37.66M256 480a80.06 80.06 0 0 0 70.44-42.13a4 4 0 0 0-3.54-5.87H189.12a4 4 0 0 0-3.55 5.87A80.06 80.06 0 0 0 256 480"
            />
          </svg>
        </button>

        {/* mode light and dark */}
        <button
          type="button"
          onClick={() => setDarkMode(!darkMode)}
          className="cursor-pointer transition-[1s]"
        >
          {darkMode ? <SunIcon /> : <MoonIcon />}
        </button>

        {/* avatar */}
        <div className="w-12 h-12 rounded-full flex justify-center items-center overflow-hidden border border-blue-900">
          <img
            src={avatarUser}
            alt="Profil"
            className="w-full h-full object-cover rounded-md"
          />
        </div>

        {/* menu list */}
        <button
          type="button"
          className="cursor-pointer transition-all"
          onClick={() => {
            setOpenSideBar(!openSideBar);
          }}
        >
          {openSideBar ? <RemoveMenuListIcon /> : <MenuListIcon />}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
