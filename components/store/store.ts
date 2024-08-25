 

import { create } from "zustand";
import { propertyType, userType, landType } from "../types/types";

interface UserState {
  user: userType | null;
  isAuthenticated: boolean;
  setUser: (user: UserState["user"]) => void;
  clearUser: () => void;
}
 
interface propertyState {
  properties: propertyType,
  setProperties: (property: propertyState["properties"]) => void;
}


interface landState {
  land: propertyType,
  setLand: (property: landState["land"]) => void;
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

const getLandFromLocalStorage = () => {
  if (!isBrowser) return null;
  const storedLand = localStorage.getItem('land');
  return storedLand ? JSON.parse(storedLand) : null
}


export const usePropertiesStore = create<propertyState>((set) => ({
  properties: getPropertiesFromLocalStorage(),
  setProperties: (properties) => {
    set({ properties });
    if (isBrowser) {
      localStorage.setItem("properties", JSON.stringify(properties))
    }
  }
}))
 

export const useLandStore = create<landState>((set) => ({
  land: getLandFromLocalStorage(),
  setLand: (land) => {
    set({ land });
    if (isBrowser) {
      localStorage.setItem("land", JSON.stringify(land))
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
