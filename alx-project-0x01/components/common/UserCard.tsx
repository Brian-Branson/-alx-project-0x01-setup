import { UserProps } from "@/interfaces";
import React from "react";

type UsersProps = {
  posts: UserProps[];
};

const Users: React.FC<UsersProps> = ({ posts }) => (
  <div>
    {posts.map((user) => (
      <div key={user.id}>
        <h3>{user.name}</h3>
        <p>{user.email}</p>
      </div>
    ))}
  </div>
);


export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users")
  const posts = await response.json()

  return {
    props: {
      posts
    }
  }
}
 