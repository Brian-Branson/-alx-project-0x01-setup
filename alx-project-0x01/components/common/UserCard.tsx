import { UserModalProps } from "@/interfaces";
import { UserCard } from "@/components/common/UserCard";


export const UserModal: React.FC<UserModalProps> = ({ onClose }) => {

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-md shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">Add New User</h2>
        {/* Add form fields here */}
        <button onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
};

export default UserModal;