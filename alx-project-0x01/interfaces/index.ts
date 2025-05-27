// Post interfaces
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

// Common nested interfaces
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

// User interfaces

// UserData: used for new users, id is optional
export interface UserData {
  id?: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}

// UserProps: used when user has a guaranteed id
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

// Props for the User modal component
export interface UserModalProps {
  onClose: () => void;
  onSubmit: (user: UserData) => void;  // Make sure this uses UserData, not UserProps
}

export interface UserListProps {
  users: UserProps[];
  onEdit: (user: UserProps) => void;
  onDelete: (userId: number) => void;
}

["onSubmit: (post: UserProps) => void;"]
