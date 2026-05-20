import { Link } from "react-router-dom";
import Buttons from "../../components/Button";
import Title from "../../components/Titles";

function Posts() {
  return (
    <>
      {/* <div className="w-full flex justify-between"> */}
      <Title className="flex justify-between ">
        <h1 className="text-lg font-medium">All Posts</h1>
        <Buttons
          to="create"
          className="bg-white text-blue-900 font-medium cursor-pointer"
        >
          Create Post
        </Buttons>
      </Title>

      {/* tables */}
      <div className="w-full min-h-[74vh] p-4 flex flex-col gap-1">
        {/* Header */}
        <div className="grid grid-cols-[5%_20%_20%_12%_12%_11%_10%_10%] bg-slate-300 p-1 text-sm font-semibold border rounded-sm">
          <div>Id</div>
          <div>Titre</div>
          <div>Contenu</div>
          <div>Slug</div>
          <div>Categorie</div>
          <div>Auteur</div>
          <div>Date</div>
          <div>Actions</div>
        </div>

        {/* Rows */}
        <div className="flex flex-col gap-1">
          <div className="grid grid-cols-[5%_20%_20%_12%_12%_11%_10%_10%] p-1 text-sm border-t hover:bg-slate-100 border rounded-sm">
            <div>1</div>
            <div>post title</div>
            <div>contenu</div>
            <div>slug</div>
            <div>categorie</div>
            <div>auteur</div>
            <div>created_at</div>
            <div className="flex justify-around px-1 text-sm font-medium">
              <Link to="edit" className="text-blue-500">
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

          <div className="grid grid-cols-[5%_20%_20%_12%_12%_11%_10%_10%] p-1 text-sm border-t hover:bg-slate-100 border rounded-sm">
            <div>1</div>
            <div>post title</div>
            <div>contenu</div>
            <div>slug</div>
            <div>categorie</div>
            <div>auteur</div>
            <div>created_at</div>
            <div className="flex justify-around px-1 text-sm font-medium">
              <Link to="edit" className="text-blue-500">
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

          <div className="grid grid-cols-[5%_20%_20%_12%_12%_11%_10%_10%] p-1 text-sm border-t hover:bg-slate-100 border rounded-sm">
            <div>1</div>
            <div>post title</div>
            <div>contenu</div>
            <div>slug</div>
            <div>categorie</div>
            <div>auteur</div>
            <div>created_at</div>
            <div className="flex justify-around px-1 text-sm font-medium">
              <Link to="edit" className="text-blue-500">
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

export default Posts;
