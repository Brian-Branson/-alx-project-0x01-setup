import React from "react";
import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({
  name,
  username,
  email,
  address,
  phone,
  website,
  company,
}) => {
  return (
    <div className="border rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300">
      <h2 className="text-xl font-bold mb-1">{name} ({username})</h2>
      <p className="mb-1"><strong>Email:</strong> {email}</p>
      <p className="mb-1">
        <strong>Address:</strong> {address.suite}, {address.street}, {address.city}, {address.zipcode}
      </p>
      <p className="mb-1"><strong>Phone:</strong> {phone}</p>
      <p className="mb-1"><strong>Website:</strong> <a href={`http://${website}`} target="_blank" rel="noreferrer" className="text-blue-600 underline">{website}</a></p>
      <p className="mb-1">
        <strong>Company:</strong> {company.name} — <em>{company.catchPhrase}</em>
      </p>
    </div>
  );
};

export default UserCard;
