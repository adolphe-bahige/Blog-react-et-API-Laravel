import Title from "../components/Titles";
import ProfilUser from "../assets/users/user profil.jpg";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getComments } from "../services/commentService";

function Comments() {
  const [activeId, setActiveId] = useState(null);
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      try {
        const data = await getComments();
        setComments(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    load();
  }, []);

  if (loading) return <p className="p-4 flex justify-center items-center dark:text-white">Chargement des commentaires...</p>;

  return (
    <div
      className="min-h-[85vh] flex flex-col gap-2"
      onClick={(e) => {
        setActiveId(null);
      }}
    >
      <Title className="flex justify-between ">
        <h1 className="text-lg font-medium">All Commentaires</h1>
      </Title>

      <section
        onClick={(e) => {
          setActiveId(null);
        }}
        className="w-full h-auto flex flex-wrap gap-4 dark:bg-slate-800 dark:p-2 rounded-md transition-all"
      >
        {comments.map((comment) => (
          <article
            key={comment.id}
            onClick={(e) => {
              e.stopPropagation();
              setActiveId(comment.id);
            }}
            className={`w-full h-auto p-3 bg-slate-100 text-[#000000d2] flex flex-col gap-4 rounded-md border border-indigo-900 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-800 dark:text-slate-200 dark:border-slate-500 transition-colors shrink-0 ${activeId === 1 ? "bg-slate-200 border-2" : "border"} md:w-[48%] lg:w-[32%]`}
          >
            {/* profil user and responses */}
            <div className="w-full h-10 flex justify-between items-center">
              {/* profil */}
              <div className="h-10 flex justify-between items-center gap-2">
                <div className="w-10 h-10 rounded-full overflow-hidden flex justify-center items-center border border-[#00000038]">
                  <img
                    src={ProfilUser}
                    alt="profil"
                    className="object-cover "
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <h1 className="text-sm font-medium">{comment.user?.name}</h1>
                  <p className="text-xs">{comment.created_at}</p>
                </div>
              </div>

              {/* response icone and count */}
              <div className="h-full flex justify-center items-center gap-4">
                {/* remove */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    if (activeId !== key) return;
                    alert("supprimer " + key);
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
            <div className="text-xs">{comment.contenu}</div>
          </article>
        ))}
      </section>
    </div>
  );
}

export default Comments;
