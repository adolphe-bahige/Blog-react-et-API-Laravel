import { Link } from "react-router-dom";
import Buttons from "../../components/Button";
import Title from "../../components/Titles";
import { useState, useEffect } from "react";
import { getPosts } from "../../services/postService";

function Posts() {
  const [posts, setPosts] = useState([]);
  const [meta, setMeta] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      try {
        const { posts, meta } = await getPosts();
        setPosts(posts);
        setMeta(meta);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    load();
  }, []);

  if (loading) return <p className="p-4 flex justify-center items-center text-center dark:text-white">Chargement des articles...</p>;

  return (
    <>
      {/* <div className="w-full flex justify-between"> */}
      <Title className="flex justify-between ">
        <h1 className="text-lg font-medium">All Posts</h1>
        <Buttons
          to="create"
          className="bg-white text-blue-900 text-base font-medium cursor-pointer transition-all hover:bg-slate-200 dark:bg-slate-600 dark:text-white dark:hover:bg-slate-300 dark:hover:text-slate-800"
        >
          Create Post
        </Buttons>
      </Title>

      {/* tables */}
      <div className="w-full min-h-[74vh] p-2 flex flex-col gap-2 rounded-md dark:bg-slate-800 transition-colors">
        {/* Header */}
        <div className="grid grid-cols-[15%_40%_25%_20%] bg-slate-300 p-1 text-sm font-semibold border border-[#00000026] rounded-sm dark:bg-slate-600 dark:text-white dark:border-slate-500 transition-colors md:grid-cols-[5%_20%_20%_12%_12%_11%_10%_10%]">
          <div>Id</div>
          <div>Titre</div>
          <div className="hidden md:flex">Contenu</div>
          <div className="hidden md:flex">Slug</div>
          <div className="hidden md:flex">Categorie</div>
          <div className="hidden md:flex">Auteur</div>
          <div>Date</div>
          <div className="text-center">Actions</div>
        </div>

        {/* Rows */}
        <div className="flex flex-col gap-1">
          {/* if (!posts.length) return <p>Aucun article trouvé</p>; */}
          {posts.length == 0 ? (
            <p className="p-4 flex justify-center items-center dark:text-white">Aucun article trouvé</p>
          ) : (
            posts.map((post, index) => (
              <div
                key={post.id}
                className="grid grid-cols-[15%_40%_25%_20%] p-1 text-sm hover:bg-slate-100 border border-[#00000026] rounded-sm dark:border-slate-500 dark:hover:bg-slate-800 transition-colors dark:text-white md:grid-cols-[5%_20%_20%_12%_12%_11%_10%_10%]"
              >
                <div>{index + 1}</div>
                <div>{post.titre}</div>
                <div className="hidden md:flex">{post.contenu}</div>
                <div className="hidden md:flex">{post.slug}</div>
                <div className="hidden md:flex">
                  {post.categorie?.nom || post.categorie?.slug || "N/A"}
                </div>
                <div className="hidden md:flex">{post.user?.name || "N/A"}</div>
                <div>{post.date_creation}</div>
                <div className="flex justify-around px-1 text-sm font-medium">
                  <Link
                    to="edit"
                    className="text-blue-500 dark:text-slate-100 transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1.2rem"
                      height="1.2rem"
                      viewBox="0 0 24 24"
                    >
                      <path d="M0 0h24v24H0z" fill="none" />
                      <g fill="none">
                        <path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
                        <path
                          fill="currentColor"
                          d="M13 3a1 1 0 0 1 .117 1.993L13 5H5v14h14v-8a1 1 0 0 1 1.993-.117L21 11v8a2 2 0 0 1-1.85 1.995L19 21H5a2 2 0 0 1-1.995-1.85L3 19V5a2 2 0 0 1 1.85-1.995L5 3zm6.243.343a1 1 0 0 1 1.497 1.32l-.083.095l-9.9 9.899a1 1 0 0 1-1.497-1.32l.083-.094z"
                        />
                      </g>
                    </svg>
                  </Link>

                  <Link
                    onClick={() => alert("deleted")}
                    className="text-rose-500"
                  >
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
            ))
          )}
        </div>

        {/* <div>
          <button disabled={meta.page_actuelle == 1}>Précédent</button>
          <button disabled={meta.page_actuelle == meta.derniere_page}>
            Suivant
          </button>
        </div> */}
      </div>
    </>
  );
}

export default Posts;
