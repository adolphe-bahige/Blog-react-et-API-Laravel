import Title from "../components/Titles";
import Buttons from "../components/Button";
import { Link } from "react-router-dom";
import avatarUser from "../assets/users/user profil.jpg";

function Users() {
  return (
    <>
      <Title className="flex justify-between ">
        <h1 className="text-lg font-medium">All Users</h1>
      </Title>

      {/* tables */}
      <div className="w-full min-h-[74vh] p-2 flex flex-col gap-2 rounded-md dark:bg-slate-800 transition-colors">
        {/* Header */}
        <div className="grid grid-cols-[15%_65%_20%] bg-slate-300 p-1 text-sm font-semibold border border-[#00000026] rounded-sm dark:bg-slate-600 dark:text-white dark:border-slate-500 transition-colors md:grid-cols-[10%_25%_25%_15%_15%_10%]">
          <div>Id</div>
          <div className="hidden md:flex">Nom</div>
          <div>Email</div>
          <div className="hidden md:flex">Profil</div>
          <div className="hidden md:flex">Role</div>
          <div className="text-center">Actions</div>
        </div>

        {/* Rows */}
        <div className="flex flex-col gap-1">
          {/* 1 */}
          <div className="grid grid-cols-[15%_65%_20%] p-1 text-sm hover:bg-slate-100 border border-[#00000026] rounded-sm dark:border-slate-500 dark:hover:bg-slate-800 transition-colors dark:text-white md:grid-cols-[10%_25%_25%_15%_15%_10%]">
            <div>1</div>
            <div className="hidden md:flex">Blind Spinoza</div>
            <div>blindspinoza@gmai.com </div>
            <div className="hidden md:flex">
              <div className="w-8 h-8 border rounded-full overflow-hidden">
                <img
                  src={avatarUser}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="hidden md:flex">Super admin </div>
            <div className="flex justify-center px-1 text-sm font-medium">
              <Link onClick={() => alert("deleted")} className="text-rose-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.2rem"
                  height="1.2rem"
                  viewBox="0 0 24 24"
                >
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path
                    fill="currentColor"
                    d="M19 4h-3.5l-1-1h-5l-1 1H5v2h14M6 19a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7H6z"
                  />
                </svg>
              </Link>
            </div>
          </div>

          {/* 2 */}
          <div className="grid grid-cols-[15%_65%_20%] p-1 text-sm hover:bg-slate-100 border border-[#00000026] rounded-sm dark:border-slate-500 dark:hover:bg-slate-800 transition-colors dark:text-white md:grid-cols-[10%_25%_25%_15%_15%_10%]">
            <div>1</div>
            <div className="hidden md:flex">John Jotta Kone</div>
            <div>johnkottakone@gmai.com </div>
            <div className="hidden md:flex">
              <div className="w-8 h-8 border rounded-full overflow-hidden">
                <img
                  src={avatarUser}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="hidden md:flex">User </div>
            <div className="flex justify-around px-1 text-sm font-medium">
              <Link onClick={() => alert("deleted")} className="text-rose-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.2rem"
                  height="1.2rem"
                  viewBox="0 0 24 24"
                >
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path
                    fill="currentColor"
                    d="M19 4h-3.5l-1-1h-5l-1 1H5v2h14M6 19a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7H6z"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Users;
