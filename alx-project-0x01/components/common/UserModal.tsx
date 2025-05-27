import React, { useState } from "react";
import { UserData } from "./path/to/UserData"; // Adjust the import path as needed

export interface UserModalProps {
  onClose: () => void;
  onSubmit: (user: UserData) => void;
}

const UserModal: React.FC<UserModalProps> = ({ onClose, onSubmit }) => {
  const [user, setUser] = useState<UserData>({
    name: "",
    username: "",
    email: "",
    address: {
      street: "",
      suite: "",
      city: "",
      zipcode: "",
      geo: {
        lat: "",
        lng: ""
      }
    },
    phone: "",
    website: "",
    company: {
      name: "",
      catchPhrase: "",
      bs: ""
    }
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;

    // Handle nested fields for address and company
    if (name.startsWith("address.")) {
      const field = name.split(".")[1];
      setUser((prev) => ({
        ...prev,
        address: { ...prev.address, [field]: value }
      }));
    } else if (name.startsWith("geo.")) {
      const field = name.split(".")[1];
      setUser((prev) => ({
        ...prev,
        address: {
          ...prev.address,
          geo: { ...prev.address.geo, [field]: value }
        }
      }));
    } else if (name.startsWith("company.")) {
      const field = name.split(".")[1];
      setUser((prev) => ({
        ...prev,
        company: { ...prev.company, [field]: value }
      }));
    } else {
      setUser((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(user);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white rounded-lg p-8 shadow-lg w-full max-w-lg overflow-auto max-h-[90vh]">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Add New User</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Basic info */}
          <div>
            <label className="block font-medium">Name</label>
            <input
              name="name"
              value={user.name}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
              required
              placeholder="Name"
            />
          </div>

          <div>
            <label className="block font-medium">Username</label>
            <input
              name="username"
              value={user.username}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
              required
              placeholder="Username"
            />
          </div>

          <div>
            <label className="block font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={user.email}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
              required
              placeholder="Email"
            />
          </div>

          {/* Address */}
          <fieldset className="border p-3 rounded">
            <legend className="font-semibold">Address</legend>
            <div>
              <label className="block font-medium">Street</label>
              <input
                name="address.street"
                value={user.address.street}
                onChange={handleChange}
                className="w-full border rounded px-3 py-2"
                placeholder="Street"
              />
            </div>
            <div>
              <label className="block font-medium">Suite</label>
              <input
                name="address.suite"
                value={user.address.suite}
                onChange={handleChange}
                className="w-full border rounded px-3 py-2"
                placeholder="Suite"
              />
            </div>
            <div>
              <label className="block font-medium">City</label>
              <input
                name="address.city"
                value={user.address.city}
                onChange={handleChange}
                className="w-full border rounded px-3 py-2"
                placeholder="City"
              />
            </div>
            <div>
              <label className="block font-medium">Zipcode</label>
              <input
                name="address.zipcode"
                value={user.address.zipcode}
                onChange={handleChange}
                className="w-full border rounded px-3 py-2"
                placeholder="Zipcode"
              />
            </div>
            <div>
              <label className="block font-medium">Latitude</label>
              <input
                name="geo.lat"
                value={user.address.geo.lat}
                onChange={handleChange}
                className="w-full border rounded px-3 py-2"
                placeholder="Latitude"
              />
            </div>
            <div>
              <label className="block font-medium">Longitude</label>
              <input
                name="geo.lng"
                value={user.address.geo.lng}
                onChange={handleChange}
                className="w-full border rounded px-3 py-2"
                placeholder="Longitude"
              />
            </div>
          </fieldset>

          <div>
            <label className="block font-medium">Phone</label>
            <input
              name="phone"
              value={user.phone}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
              placeholder="Phone"
            />
          </div>
          <div>
            <label className="block font-medium">Website</label>
            <input
              name="website"
              value={user.website}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
              placeholder="Website"
            />
          </div>

          {/* Company */}
          <fieldset className="border p-3 rounded">
            <legend className="font-semibold">Company</legend>
            <div>
              <label className="block font-medium">Company Name</label>
              <input
                name="company.name"
                value={user.company.name}
                onChange={handleChange}
                className="w-full border rounded px-3 py-2"
                placeholder="Company Name"
              />
            </div>
            <div>
              <label className="block font-medium">Catch Phrase</label>
              <input
                name="company.catchPhrase"
                value={user.company.catchPhrase}
                onChange={handleChange}
                className="w-full border rounded px-3 py-2"
                placeholder="Catch Phrase"
              />
            </div>
            <div>
              <label className="block font-medium">BS</label>
              <input
                name="company.bs"
                value={user.company.bs}
                onChange={handleChange}
                className="w-full border rounded px-3 py-2"
                placeholder="BS"
              />
            </div>
          </fieldset>

          {/* Buttons */}
          <div className="flex justify-between mt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-gray-600 hover:text-gray-800"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
            >
              Add User
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserModal;
