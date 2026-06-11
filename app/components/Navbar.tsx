"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useLang } from "./LanguageContext";

export default function Navbar() {
  const { lang, setLang, t } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const navLinks = [
    { label: t("Trang chủ", "Home"), href: "#hero" },
    { label: t("Giới thiệu", "About"), href: "#about" },
    { label: t("Dịch vụ", "Services"), href: "#services" },
    { label: t("Công bố thông tin", "Disclosure"), href: "#disclosure" },
    { label: t("Liên hệ", "Contact"), href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg shadow-tnf-purple/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-18 py-3">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-tnf-purple rounded-lg flex items-center justify-center shadow-md group-hover:bg-tnf-purple-dark transition-colors">
            <span className="text-white font-display font-bold text-sm tracking-wide">TNF</span>
          </div>
          <div className="hidden sm:block">
            <div className={`font-display font-semibold text-base leading-tight transition-colors ${scrolled ? "text-tnf-purple" : "text-white"}`}>
              TNF Group
            </div>
            <div className={`text-xs transition-colors ${scrolled ? "text-tnf-slate" : "text-white/70"}`}>
              T&N Financial Group
            </div>
          </div>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`px-4 py-2 text-sm font-medium rounded-md transition-all duration-200 ${
                scrolled
                  ? "text-gray-700 hover:text-tnf-purple hover:bg-tnf-purple-pale"
                  : "text-white/90 hover:text-white hover:bg-white/10"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Lang + mobile toggle */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setLang(lang === "vi" ? "en" : "vi")}
            className={`text-xs font-semibold px-3 py-1.5 rounded-full border transition-all ${
              scrolled
                ? "border-tnf-purple text-tnf-purple hover:bg-tnf-purple hover:text-white"
                : "border-white/50 text-white hover:bg-white/10"
            }`}
          >
            {lang === "vi" ? "EN" : "VI"}
          </button>
          <button
            className="md:hidden p-2"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            {open ? (
              <X className={scrolled ? "text-tnf-purple" : "text-white"} size={22} />
            ) : (
              <Menu className={scrolled ? "text-tnf-purple" : "text-white"} size={22} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-xl">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block px-6 py-4 text-sm font-medium text-gray-700 hover:text-tnf-purple hover:bg-tnf-purple-pale border-b border-gray-50 last:border-0 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
