export interface IUser {
  id: number;
  cin: number;
  firstName: string;
  lastName: string;
  phone: number;
  email: string;
  password?: string;
  username: string;
  role: string;
  avatar: any;
  age: number;
  city: string;
  gender: string;
  blood: string;
  center?: string;
}

export interface IResponsable {
  id: number;
  cin: number;
  firstName: string;
  lastName: string;
  phone: number;
  email: string;
  center: string;
}
