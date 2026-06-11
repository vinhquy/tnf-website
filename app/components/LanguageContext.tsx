"use client";
import { createContext, useContext, useState, ReactNode } from "react";

type Lang = "vi" | "en";

interface LangContextType {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (vi: string, en: string) => string;
}

const LangContext = createContext<LangContextType>({
  lang: "vi",
  setLang: () => {},
  t: (vi) => vi,
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("vi");
  const t = (vi: string, en: string) => (lang === "vi" ? vi : en);
  return (
    <LangContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LangContext.Provider>
  );
}

export const useLang = () => useContext(LangContext);
