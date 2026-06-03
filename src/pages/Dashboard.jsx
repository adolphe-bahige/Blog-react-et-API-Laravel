import { Link } from "react-router-dom";
import Buttons from "../components/Button";
import Title from "../components/Titles";

function Dashbord() {
  return (
    <>
      <Title className="flex justify-between ">
        <h1 className="text-lg font-medium">Dashboard</h1>
      </Title>

      {/* content */}
      <div className="w-full min-h-[74vh] flex flex-col gap-4 ">
        {/* all counts */}
        <section className="w-full py-2 flex flex-wrap items-center gap-2 md:flex-row md:justify-between">
          <div className="bg-indigo-900 shadow-lg w-[48%] p-4 flex justify-between items-center text-white rounded-md transition-all hover:bg-yellow-500 hover:text-white dark:bg-slate-800 dark:hover:text-slate-800 md:w-[24%]">
            <div className="flex flex-col gap-1 text-sm">
              <h1 className="text-sm font-semibold">40 K</h1>
              <p className="text-xs font-medium ">Utilisateurs</p>
            </div>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="2.5rem"
              height="2.5rem"
              viewBox="0 0 24 24"
            >
              <path d="M0 0h24v24H0z" fill="none" />
              <circle cx="12" cy="6" r="4" fill="currentColor" />
              <path
                fill="currentColor"
                d="M20 17.5c0 2.485 0 4.5-8 4.5s-8-2.015-8-4.5S7.582 13 12 13s8 2.015 8 4.5"
              />
            </svg>
          </div>

          <div className="bg-indigo-900 shadow-lg w-[48%] p-4 flex justify-between items-center text-white rounded-md transition-all hover:bg-yellow-500 hover:text-white dark:bg-slate-800 dark:hover:text-slate-800 md:w-[24%]">
            <div className="flex flex-col gap-1 text-sm">
              <h1 className="text-sm font-semibold">40 K</h1>
              <p className="text-xs font-medium">Catégories</p>
            </div>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="2.5rem"
              height="2.5rem"
              viewBox="0 0 24 24"
            >
              <path d="M0 0h24v24H0z" fill="none" />
              <path
                fill="currentColor"
                d="M10 3H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1m10 10h-6a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1M17 3c-2.206 0-4 1.794-4 4s1.794 4 4 4s4-1.794 4-4s-1.794-4-4-4M7 13c-2.206 0-4 1.794-4 4s1.794 4 4 4s4-1.794 4-4s-1.794-4-4-4"
              />
            </svg>
          </div>

          <div className="bg-indigo-900 shadow-lg w-[48%] p-4 flex justify-between items-center text-white rounded-md transition-all hover:bg-yellow-500 hover:text-white dark:bg-slate-800 dark:hover:text-slate-800 md:w-[24%]">
            <div className="flex flex-col gap-1 text-sm">
              <h1 className="text-sm font-semibold">1 K</h1>
              <p className="text-xs font-medium">Articles</p>
            </div>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="2.5rem"
              height="2.5rem"
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
          </div>

          <div className="bg-indigo-900 shadow-lg w-[48%] p-4 flex justify-between items-center text-white rounded-md transition-all hover:bg-yellow-500 hover:text-white dark:bg-slate-800 dark:hover:text-slate-800 md:w-[24%]">
            <div className="flex flex-col gap-1 text-sm">
              <h1 className="text-sm font-semibold">400 K</h1>
              <p className="text-xs font-medium">Commentaires</p>
            </div>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="2.5rem"
              height="2.5rem"
              viewBox="0 0 20 20"
            >
              <path d="M0 0h20v20H0z" fill="none" />
              <path
                fill="currentColor"
                d="M17 7.5A3.5 3.5 0 0 0 13.5 4h-9c.456-.607 1.182-1 2-1h7A4.5 4.5 0 0 1 18 7.5v4c0 .818-.393 1.544-1 2zm-15 0A2.5 2.5 0 0 1 4.5 5h9A2.5 2.5 0 0 1 16 7.5v6a2.5 2.5 0 0 1-2.5 2.5H9.057L6.59 17.803A1 1 0 0 1 5 16.995V16h-.5A2.5 2.5 0 0 1 2 13.5z"
              />
            </svg>
          </div>
        </section>

        {/* recents adds */}
        <section className="w-full flex flex-col gap-6 md:flex-row md:justify-between md:gap-2">
          <div className="w-full bg-slate-200 rounded-md dark:bg-slate-800 dark:text-white dark:p-2 transition-colors md:w-[55%]">
            <div className="w-full flex justify-between items-center border-b border-[#4c008246] p-2">
              <h1 className="text-sm font-medium">Recent posts</h1>

              <Buttons
                to="/posts"
                className="bg-indigo-900 text-white text-xs font-medium flex justify-center items-center transition-colors hover:bg-indigo-800 dark:bg-slate-600 dark:hover:bg-slate-300 dark:hover:text-slate-800 "
              >
                See all
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="2rem"
                  height="2rem"
                  viewBox="0 0 30 30"
                  className="pt-1"
                >
                  <path d="M0 0h30v30H0z" fill="none" />
                  <path
                    fill="currentColor"
                    d="M9.94 14.36c0 .22.08.42.23.57s.34.22.56.2h6.58l-1.03 1.08c-.16.16-.24.35-.24.55c0 .22.08.42.24.57c.16.16.35.23.58.23c.21-.01.39-.1.53-.27l2.45-2.41c.16-.16.23-.35.23-.58a.83.83 0 0 0-.24-.58l-2.47-2.39a.67.67 0 0 0-.54-.23c-.23 0-.42.07-.57.22c-.16.15-.23.34-.23.56c0 .23.08.42.23.57l1.06 1.08h-6.59a.77.77 0 0 0-.56.25c-.15.17-.22.36-.22.58"
                  />
                </svg>
              </Buttons>
            </div>

            {/* tables */}
            <div className="w-full flex flex-col gap-1">
              {/* Header */}
              <div className="grid grid-cols-[40%_35%_25%] text-sm font-semibold border-b border-[#4c008246] p-2 dark:bg-slate-600 dark:rounded-md">
                <div>Titre</div>
                <div>Slug</div>
                <div>Auteur</div>
              </div>

              {/* Rows */}
              <div>
                <div className="grid grid-cols-[40%_35%_25%] p-2 text-sm hover:bg-[white] dark:hover:bg-slate-800">
                  <div>Post title </div>
                  <div>Slug</div>
                  <div>Auteur</div>
                </div>

                <div className="grid grid-cols-[40%_35%_25%] p-2 text-sm hover:bg-[white] dark:hover:bg-slate-800">
                  <div>Post title </div>
                  <div>Slug</div>
                  <div>Auteur</div>
                </div>

                <div className="grid grid-cols-[40%_35%_25%] p-2 text-sm hover:bg-[white] dark:hover:bg-slate-800">
                  <div>Post title </div>
                  <div>Slug</div>
                  <div>Auteur</div>
                </div>

                <div className="grid grid-cols-[40%_35%_25%] p-2 text-sm hover:bg-[white] dark:hover:bg-slate-800">
                  <div>Post title </div>
                  <div>Slug</div>
                  <div>Auteur</div>
                </div>

                <div className="grid grid-cols-[40%_35%_25%] p-2 text-sm hover:bg-[white] dark:hover:bg-slate-800">
                  <div>Post title </div>
                  <div>Slug</div>
                  <div>Auteur</div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full bg-slate-200 rounded-md dark:bg-slate-800 dark:text-white dark:p-2 transition-colors md:w-[42%]">
            <div className="w-full flex justify-between items-center border-b border-[#4c008246] p-2">
              <h1 className="text-sm font-medium">Recent categories</h1>

              <Buttons
                to="/categories"
                className="bg-indigo-900 text-white text-xs font-medium flex justify-center items-center transition-all hover:bg-indigo-800 dark:bg-slate-600 dark:hover:bg-slate-300 dark:hover:text-slate-800"
              >
                See all
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="2rem"
                  height="2rem"
                  viewBox="0 0 30 30"
                  className="pt-1"
                >
                  <path d="M0 0h30v30H0z" fill="none" />
                  <path
                    fill="currentColor"
                    d="M9.94 14.36c0 .22.08.42.23.57s.34.22.56.2h6.58l-1.03 1.08c-.16.16-.24.35-.24.55c0 .22.08.42.24.57c.16.16.35.23.58.23c.21-.01.39-.1.53-.27l2.45-2.41c.16-.16.23-.35.23-.58a.83.83 0 0 0-.24-.58l-2.47-2.39a.67.67 0 0 0-.54-.23c-.23 0-.42.07-.57.22c-.16.15-.23.34-.23.56c0 .23.08.42.23.57l1.06 1.08h-6.59a.77.77 0 0 0-.56.25c-.15.17-.22.36-.22.58"
                  />
                </svg>
              </Buttons>
            </div>

            {/* tables */}
            <div className="w-full flex flex-col gap-1">
              {/* Header */}
              <div className="grid grid-cols-[45%_30%_25%] text-sm font-semibold border-b border-[#4c008246] p-2 dark:bg-slate-600 dark:rounded-md">
                <div>Nom</div>
                <div>Slug</div>
                <div>Date</div>
              </div>

              {/* Rows */}
              <div>
                <div className="grid grid-cols-[45%_30%_25%] p-2 text-sm hover:bg-[white] dark:hover:bg-slate-800">
                  <div>Category name</div>
                  <div>slug</div>
                  <div>14/05/2026</div>
                </div>

                <div className="grid grid-cols-[45%_30%_25%] p-2 text-sm hover:bg-[white] dark:hover:bg-slate-800">
                  <div>Category name</div>
                  <div>slug</div>
                  <div>14/05/2026</div>
                </div>

                <div className="grid grid-cols-[45%_30%_25%] p-2 text-sm hover:bg-[white] dark:hover:bg-slate-800">
                  <div>Category name</div>
                  <div>slug</div>
                  <div>14/05/2026</div>
                </div>

                <div className="grid grid-cols-[45%_30%_25%] p-2 text-sm hover:bg-[white] dark:hover:bg-slate-800">
                  <div>Category name</div>
                  <div>slug</div>
                  <div>14/05/2026</div>
                </div>

                <div className="grid grid-cols-[45%_30%_25%] p-2 text-sm hover:bg-[white] dark:hover:bg-slate-800">
                  <div>Category name</div>
                  <div>slug</div>
                  <div>14/05/2026</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Dashbord;
