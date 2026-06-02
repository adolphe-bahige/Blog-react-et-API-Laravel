export function NotificationBar({ openNotif, setOpenNotif }) {
  return (
    <section
      onClick={() => setOpenNotif(false)}
      className={`w-full h-screen fixed flex top-0 right-0 justify-end items-end z-30 transform transition-transform duration-300 ease-in-out ${openNotif ? "translate-x-0 backdrop-blur-[1.5px] bg-[#00000096]" : "translate-x-full pointer-events-none"}`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-[90%] h-screen bg-indigo-900 text-white p-2 dark:bg-slate-800 transition-colors translate-x-0 md:w-[40%] lg:w-[25%]"
      >
        <div className="w-full flex justify-between items-center border-b border-[#ffffff4a] p-2 ">
          <h1 className="text-base font-medium">Notifications</h1>

          <button
            onClick={(e) => setOpenNotif(null)}
            className="text-white flex justify-center items-center cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1.5rem"
              height="1.5rem"
              viewBox="0 0 640 640"
            >
              <path d="M0 0h640v640H0z" fill="none" />
              <path
                fill="currentColor"
                d="M183.1 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L275.2 320L137.9 457.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l137.3-137.4l137.4 137.3c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L365.8 320l137.3-137.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L320.5 274.7z"
              />
            </svg>
          </button>
        </div>

        <div className="flex flex-col gap-2 mt-4">
          {/* 01 */}
          <div className="w-full flex items-start gap-3 p-3 bg-white text-black rounded-md shadow-sm hover:bg-gray-100 transition">
            {/* avatar */}
            <div className="w-10 h-10 shrink-0 rounded-full bg-indigo-200 flex items-center justify-center text-indigo-900 font-bold">
              B
            </div>

            {/* contenu */}
            <div className="flex flex-col text-sm">
              <p>
                <span className="font-semibold">Blind Spinoza</span> a commenté
                ton post
              </p>
              <span className="text-xs text-gray-500">il y a 2 min</span>
            </div>

            {/* badge non lu */}
            <div className="ml-auto w-2 h-2 bg-blue-500 rounded-full mt-2 dark:bg-slate-800 transition-colors"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NotificationBar;
