

import { create } from "zustand";
import { propertyType, userType } from "../types/types";

interface UserState {
  user: userType | null;
  isAuthenticated: boolean;
  setUser: (user: UserState["user"]) => void;
  clearUser: () => void;
}
 
interface propertyState {
  properties: propertyType[],
  setProperties: (property: propertyState["properties"]) => void;
}
// Check if we're running in a browser environment
const isBrowser = typeof window !== "undefined";

// Retrieve user data from local storage
const getUserFromLocalStorage = () => {
  if (!isBrowser) return null;
  const storedUser = localStorage.getItem("user");
  return storedUser ? JSON.parse(storedUser) : null;
};

const getPropertiesFromLocalStorage = () => {
  if (!isBrowser) return null;
  const storedProperties = localStorage.getItem('properties');
  return storedProperties ? JSON.parse(storedProperties) : null
}


export const usePropertiesStore = create<propertyState>((set) => ({
  properties: getPropertiesFromLocalStorage(),
  setProperties: (properties) => {
    set({ properties });
    if (isBrowser) {
      localStorage.setItem("properties", JSON.stringify(properties));
    }
  }
}))
 

export const useUserStore = create<UserState>((set) => ({
  user: getUserFromLocalStorage(),
  isAuthenticated: !!getUserFromLocalStorage(),
  setUser: (user) => {
    set({ user, isAuthenticated: true });
    if (isBrowser) {
      localStorage.setItem("user", JSON.stringify(user));
    }
  },
  clearUser: () => {
    set({ user: null, isAuthenticated: false });
    if (isBrowser) {
      localStorage.removeItem("user");
    }
  },
}));
