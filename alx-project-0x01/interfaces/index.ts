export interface PostProps {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface PostData {
  userId: number;
  id?: number;
  title: string;
  body: string;
}

export interface PostModalProps {
  onClose: () => void;
  onSubmit: (post: PostData) => void;
}
export interface Geo {
  lat: string;
  lng: string;
}

export interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
}

export interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

export interface UserData {
  id?: number;  // optional because new users won't have an id initially
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}

export interface UserModalProps {
  onClose: () => void;
  onSubmit: (user: UserData) => void;
}
export interface UserProps {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}
export interface UserListProps {
  users: UserProps[];
  onEdit: (user: UserProps) => void;
  onDelete: (userId: number) => void;
}