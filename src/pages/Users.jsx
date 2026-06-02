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
      <div className="w-full min-h-[74vh] p-4 flex flex-col gap-1 rounded-md dark:bg-slate-500 transition-colors">
        {/* Header */}
        <div className="grid grid-cols-[10%_25%_25%_15%_15%_10%] bg-slate-300 p-1 text-sm font-semibold border border-[#00000026] rounded-sm dark:bg-slate-600 dark:text-white dark:border-slate-400 transition-colors">
          <div>Id</div>
          <div>Nom</div>
          <div>Email</div>
          <div>Profil</div>
          <div>Role</div>
          <div>Actions</div>
        </div>

        {/* Rows */}
        <div className="flex flex-col gap-1">
          {/* 1 */}
          <div className="grid grid-cols-[10%_25%_25%_15%_15%_10%] p-1 text-sm hover:bg-slate-100 rounded-sm items-center border border-[#00000026] dark:border-slate-400 dark:hover:bg-slate-400 transition-colors dark:text-slate-100">
            <div>1</div>
            <div>Blind Spinoza</div>
            <div>blindspinoza@gmai.com </div>
            <div>
              <div className="w-8 h-8 border rounded-full overflow-hidden">
                <img
                  src={avatarUser}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div>User </div>
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

          {/* 2 */}
          <div className="grid grid-cols-[10%_25%_25%_15%_15%_10%] p-1 text-sm border-t hover:bg-slate-100 rounded-sm items-center border border-[#00000026] dark:border-slate-400 dark:hover:bg-slate-400 transition-colors dark:text-slate-100">
            <div>1</div>
            <div>John Jotta Kone</div>
            <div>johnkottakone@gmai.com </div>
            <div>
              <div className="w-8 h-8 border rounded-full overflow-hidden">
                <img
                  src={avatarUser}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div>User </div>
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
