import { create } from "zustand";

type UserStore = {
  firstName: string;
  lastName: string;
  email: string;
  session: string;
  setFirstName: (firstName: string) => void;
};

export const useUserStore = create<UserStore>((set) => ({
  firstName: "",
  lastName: "",
  email: "",
  session: "",
  setFirstName: (firstName) => {
    set({ firstName });
  },
}));
