import {
  createContext,
  useContext,
  useState,
  type ReactNode, // Am adăugat "type" aici
} from "react";
import { translations, type Language } from "./translations"; // Am adăugat "type" aici

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: typeof translations.DE | typeof translations.EN;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("site-lang");
      return saved === "EN" || saved === "DE" ? saved : "DE";
    }
    return "DE";
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    if (typeof window !== "undefined") {
      localStorage.setItem("site-lang", lang);
    }
  };

  return (
    <LanguageContext.Provider
      value={{ language, setLanguage, t: translations[language] }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error(
      "useLanguage trebuie folosit în interiorul unui LanguageProvider",
    );
  }
  return context;
}
