import Title from "../components/Titles";
import ProfilUser from "../assets/users/user profil.jpg";
import { useState } from "react";
import { Link } from "react-router-dom";

function Comments() {
  const [activeId, setActiveId] = useState(null);
  return (
    <>
      <Title className="flex justify-between ">
        <h1 className="text-lg font-medium">All Commentaires</h1>
      </Title>

      <section
        onClick={(e) => {
          setActiveId(null);
        }}
        className="w-full h-auto flex flex-wrap gap-4"
      >
        <article
          key={1}
          onClick={(e) => {
            e.stopPropagation();
            setActiveId(1);
          }}
          className={`w-[32%] h-auto p-3 bg-slate-100 text-[#000000d2] flex flex-col gap-4 rounded-md border border-indigo-900 transition-[1s] hover:bg-slate-200 ${activeId === 1 ? "border-2 bg-slate-200" : "border"}`}
        >
          {/* profil user and responses */}
          <div className="w-full h-10 flex justify-between items-center">
            {/* profil */}
            <div className="h-10 flex justify-between items-center gap-2">
              <div className="w-10 h-10 rounded-full overflow-hidden flex justify-center items-center border border-indigo-300">
                <img src={ProfilUser} alt="profil" className="object-cover " />
              </div>
              <div className="flex flex-col gap-1">
                <h1 className="text-sm font-medium">Blind Spinoza</h1>
                <p className="text-xs">12 May 2026</p>
              </div>
            </div>

            {/* response icone and count */}
            <div className="h-full flex justify-center items-center gap-4">
              {/* remove */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  if (activeId !== 1) return;
                  alert("supprimer " + 1);
                  return setActiveId();
                }}
                className={`${activeId == 1 ? "text-rose-500 cursor-pointer" : "text-rose-300 cursor-not-allowed"}`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.4rem"
                  height="1.4rem"
                  viewBox="0 0 24 24"
                >
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path
                    fill="currentColor"
                    d="M19 4h-3.5l-1-1h-5l-1 1H5v2h14M6 19a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7H6z"
                  />
                </svg>
              </button>

              <button className="flex justify-center items-center gap-1 cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.5rem"
                  height="1.5rem"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M12 3C6.49 3 2 6.59 2 11s4.3 7.85 9.66 8l3.74 2.8c.18.13.39.2.6.2c.15 0 .31-.04.45-.11A1 1 0 0 0 17 21v-3.07c3.1-1.42 5-4.03 5-6.93c0-4.41-4.49-8-10-8m3.64 13.34c-.39.15-.64.52-.64.93V19l-2.4-1.8a1 1 0 0 0-.6-.2c-4.41 0-8-2.69-8-6s3.59-6 8-6s8 2.69 8 6c0 2.26-1.67 4.3-4.36 5.34"
                  />
                </svg>
                <p className="text-base font-medium">6</p>
              </button>
            </div>
          </div>

          {/* comment */}
          <div className="text-xs">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe ab
            magnam neque velit atque sapiente provident. Perspiciatis, tempora
            pariatur! Suscipit, quisquam aliquam? Illo nobis dignissimos at
            porro iure id sit!
          </div>
        </article>

        <article
          key={2}
          onClick={(e) => {
            e.stopPropagation();
            setActiveId(2);
          }}
          className={`w-[32%] h-auto p-3 bg-slate-100 text-[#000000d2] flex flex-col gap-4 rounded-md border border-indigo-900 transition-[1s] hover:bg-slate-200 ${activeId === 2 ? "border-2 bg-slate-200" : "border"}`}
        >
          {/* profil user and responses */}
          <div className="w-full h-10 flex justify-between items-center">
            {/* profil */}
            <div className="h-10 flex justify-between items-center gap-2">
              <div className="w-10 h-10 rounded-full overflow-hidden flex justify-center items-center border border-indigo-300">
                <img src={ProfilUser} alt="profil" className="object-cover " />
              </div>
              <div className="flex flex-col gap-1">
                <h1 className="text-sm font-medium">Blind Spinoza</h1>
                <p className="text-xs">12 May 2026</p>
              </div>
            </div>

            {/* response icone and count */}
            <div className="h-full flex justify-center items-center gap-4">
              {/* remove */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  if (activeId !== 2) return;
                  alert("supprimer " + 2);
                  return setActiveId();
                }}
                className={`${activeId == 2 ? "text-rose-500 cursor-pointer" : "text-rose-300 cursor-not-allowed"}`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.5rem"
                  height="1.5rem"
                  viewBox="0 0 24 24"
                >
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path
                    fill="currentColor"
                    d="M19 4h-3.5l-1-1h-5l-1 1H5v2h14M6 19a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7H6z"
                  />
                </svg>
              </button>

              <button className="flex justify-center items-center gap-1 cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.5rem"
                  height="1.5rem"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M12 3C6.49 3 2 6.59 2 11s4.3 7.85 9.66 8l3.74 2.8c.18.13.39.2.6.2c.15 0 .31-.04.45-.11A1 1 0 0 0 17 21v-3.07c3.1-1.42 5-4.03 5-6.93c0-4.41-4.49-8-10-8m3.64 13.34c-.39.15-.64.52-.64.93V19l-2.4-1.8a1 1 0 0 0-.6-.2c-4.41 0-8-2.69-8-6s3.59-6 8-6s8 2.69 8 6c0 2.26-1.67 4.3-4.36 5.34"
                  />
                </svg>
                <p className="text-base font-medium">6</p>
              </button>
            </div>
          </div>

          {/* comment */}
          <div className="text-xs">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe ab
            magnam neque velit atque sapiente provident. Perspiciatis, tempora
            pariatur! Suscipit, quisquam aliquam? Illo nobis dignissimos at
            porro iure id sit!
          </div>
        </article>

        <article
          key={3}
          onClick={(e) => {
            e.stopPropagation();
            setActiveId(3);
          }}
          className={`w-[32%] h-auto p-3 bg-slate-100 text-[#000000d2] flex flex-col gap-4 rounded-md border border-indigo-900 transition-[1s] hover:bg-slate-200 ${activeId === 3 ? "border-2 bg-slate-200" : "border"}`}
        >
          {/* profil user and responses */}
          <div className="w-full h-10 flex justify-between items-center">
            {/* profil */}
            <div className="h-10 flex justify-between items-center gap-2">
              <div className="w-10 h-10 rounded-full overflow-hidden flex justify-center items-center border border-indigo-300">
                <img src={ProfilUser} alt="profil" className="object-cover " />
              </div>
              <div className="flex flex-col gap-1">
                <h1 className="text-sm font-medium">Blind Spinoza</h1>
                <p className="text-xs">12 May 2026</p>
              </div>
            </div>

            {/* response icone and count */}
            <div className="h-full flex justify-center items-center gap-4">
              {/* remove */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  if (activeId !== 3) return;
                  alert("supprimer " + 3);
                  return setActiveId();
                }}
                className={`${activeId == 3 ? "text-rose-500 cursor-pointer" : "text-rose-300 cursor-not-allowed"}`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.5rem"
                  height="1.5rem"
                  viewBox="0 0 24 24"
                >
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path
                    fill="currentColor"
                    d="M19 4h-3.5l-1-1h-5l-1 1H5v2h14M6 19a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7H6z"
                  />
                </svg>
              </button>

              <button className="flex justify-center items-center gap-1 cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.5rem"
                  height="1.5rem"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M12 3C6.49 3 2 6.59 2 11s4.3 7.85 9.66 8l3.74 2.8c.18.13.39.2.6.2c.15 0 .31-.04.45-.11A1 1 0 0 0 17 21v-3.07c3.1-1.42 5-4.03 5-6.93c0-4.41-4.49-8-10-8m3.64 13.34c-.39.15-.64.52-.64.93V19l-2.4-1.8a1 1 0 0 0-.6-.2c-4.41 0-8-2.69-8-6s3.59-6 8-6s8 2.69 8 6c0 2.26-1.67 4.3-4.36 5.34"
                  />
                </svg>
                <p className="text-base font-medium">6</p>
              </button>
            </div>
          </div>

          {/* comment */}
          <div className="text-xs">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe ab
            magnam neque velit atque sapiente provident. Perspiciatis, tempora
            pariatur! Suscipit, quisquam aliquam? Illo nobis dignissimos at
            porro iure id sit!
          </div>
        </article>
      </section>
    </>
  );
}

export default Comments;
