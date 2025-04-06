import { create } from "zustand";

interface LanguageStore {
  language: string;
  setLanguage: (lang: string) => void;
}

const useLanguageStore = create<LanguageStore>((set) => ({
  language:
    typeof window !== "undefined" && window.localStorage
      ? localStorage.getItem("LanguageKopc") || "sk"
      : "sk",
  setLanguage: (lang) => {
    set({ language: lang });
    if (typeof window !== "undefined" && window.localStorage) {
      localStorage.setItem("LanguageKopc", lang);
    }
  },
}));

export default useLanguageStore;
