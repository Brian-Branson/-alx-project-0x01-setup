import React, { useState } from "react";
import UserCard from "@/components/common/UserCard";
import UserModal from "@/components/common/UserModal";
import Header from "@/components/layout/Header";
import { UserData } from "@/interfaces";

const Users: React.FC<{ posts: UserData[] }> = ({ posts }) => {
  const [users, setUsers] = useState<UserData[]>(posts);
  const [showModal, setShowModal] = useState(false);

  const handleAddUser = (newUser: UserData) => {
    const userWithId = { ...newUser, id: users.length + 1 };
    setUsers([...users, userWithId]);
  };

  return (
    <div>
      <Header />
      <main className="p-4">
        <div className="flex justify-between mb-4">
          <h1 className="text-2xl font-bold">Users</h1>
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded"
            onClick={() => setShowModal(true)}
          >
            Add User
          </button>
        </div>
        <div className="grid grid-cols-3 gap-4">
          {users.map((user) => (
            <UserCard key={user.id} {...user} />
          ))}
        </div>
      </main>

      {showModal && (
        <UserModal
          onClose={() => setShowModal(false)}
          onSubmit={handleAddUser}
        />
      )}
    </div>
  );
};

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const posts = await response.json();

  return {
    props: {
      posts,
    },
  };
}

export default Users;
