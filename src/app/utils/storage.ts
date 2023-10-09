import { IUser } from "../models/user";

export const login = (userData: IUser) => {
 localStorage.setItem("user", JSON.stringify(userData));
};
export const logout = () => {
 localStorage.removeItem("user");
};

export const isLoggedIn = () => {
  const storage = localStorage.getItem("user");
  if (!storage) return false;
  let user: IUser;
  user = JSON.parse(storage);
  return user.email != "";
};
export const isAdmin = () => {
  const storage = localStorage.getItem("user");
  if (!storage) return false;
  let user: IUser;
  user = JSON.parse(storage);
  return user.role === "admin";
};
export const isResponsable = () => {
  const storage = localStorage.getItem("user");
  if (!storage) return false;
  let user: IUser;
  user = JSON.parse(storage);
  return user.role === "responsable";
};
export const isCitoyen = () => {
  const storage = localStorage.getItem("user");
  if (!storage) return false;
  let user: IUser;
  user = JSON.parse(storage);
  return user.role === "citoyen";
};
export const getRole = () => {
  const storage =localStorage.getItem("user");
  if (!storage) return "";
  let user: IUser;
  user = JSON.parse(storage);
  return user.role;
};
export const getUser = () => {
  const storage = localStorage.getItem("user");
  if (!storage) return;
  let user: IUser;
  user = JSON.parse(storage);
  return user;
};
