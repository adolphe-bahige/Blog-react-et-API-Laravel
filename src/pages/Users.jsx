import Title from "../components/Titles";
import Buttons from "../components/Button";
import { Link } from "react-router-dom";
import avatarUser from "../assets/users/user profil.jpg";
import { getUsers } from "../services/users";
import { useState, useEffect } from "react";

function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      try {
        const data = await getUsers();
        setUsers(data.users);
        console.log(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    load();
  }, []);

  if (loading) {
    return (
      <p className="p-4 flex justify-center items-center text-center dark:text-white">
        Chargement des utilisateurs...
      </p>
    );
  }

  return (
    <>
      <Title className="flex justify-between ">
        <h1 className="text-lg font-medium">All Users</h1>
      </Title>

      {/* tables */}
      <div className="w-full min-h-[74vh] p-2 flex flex-wrap gap-2 rounded-md dark:bg-slate-800 transition-colors">
        {users.length == 0 ? (
          <p className="p-4 flex justify-center items-center dark:text-white">
            Aucun utilisateur
          </p>
        ) : (
          users.map((user, index) => (
            <div
              key={user.id}
              className="w-[20%] h-[40vh] border border-indigo-900 rounded-md"
            >
              <p>{index + 1}</p>
              {/* data user
              'id' => $this->id,
            'name' => $this->name,
            'email' => $this->email,
            'photo_profil' => $this->photo_profil ? asset('storage/' . $this->photo_profil) : null,
            'member_since' => $this->created_at->format('d M Y'),
            'nb_articles'    => $this->when(isset($this->articles_count),$this->articles_count),
            'nb_commentaires'=> $this->when(isset($this->commentaires_count),$this->commentaires_count), */}
            </div>
          ))
        )}
      </div>
    </>
  );
}

export default Users;
