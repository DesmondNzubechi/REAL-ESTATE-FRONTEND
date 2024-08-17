// import { create } from "zustand";

// interface UserState {
//     user: {
//         id: string
//         firstName: string
//         lastName: string
//         email: string
//         userName: string
//         images: string
//         phoneNumber: number
//         emailVerified: boolean
//         role: string
//         country: string
//         state: string
//     } | null,
//     isAuthenticated: boolean
//     setUser: (user: {
//         id: string
//         firstName: string
//         lastName: string
//         email: string
//         userName: string
//         images: string
//         phoneNumber: number
//         emailVerified: boolean
//         role: string
//         country: string
//         state: string
//     }) => void;
//     clearUser: () => void;
// };

// export const useUserStore = create<UserState>((set) => ({
//     user: null,
//     isAuthenticated: false,
//     setUser: (user) => set({ user, isAuthenticated: true }),
//     clearUser: () => set({ user: null, isAuthenticated: false })
// }));



import { create } from "zustand";
import { userType } from "../types/types";

interface UserState {
  user: userType | null;
  isAuthenticated: boolean;
  setUser: (user: UserState["user"]) => void;
  clearUser: () => void;
}

// Check if we're running in a browser environment
const isBrowser = typeof window !== "undefined";

// Retrieve user data from local storage
const getUserFromLocalStorage = () => {
  if (!isBrowser) return null;
  const storedUser = localStorage.getItem("user");
  return storedUser ? JSON.parse(storedUser) : null;
};

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
