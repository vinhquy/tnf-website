"use client";
import { useLang } from "./LanguageContext";
import { MapPin, Phone, Mail, ArrowUpRight } from "lucide-react";

export default function Footer() {
  const { t } = useLang();

  const year = new Date().getFullYear();

  const quickLinks = [
    { label: t("Trang chủ", "Home"), href: "#hero" },
    { label: t("Giới thiệu", "About"), href: "#about" },
    { label: t("Dịch vụ", "Services"), href: "#services" },
    { label: t("Công bố thông tin", "Disclosure"), href: "#disclosure" },
    { label: t("Liên hệ", "Contact"), href: "#contact" },
  ];

  const services = [
    t("Quản lý vốn & Ngân quỹ", "Capital & Treasury"),
    t("Hợp tác đầu tư", "Investment Cooperation"),
    t("Giải pháp tài chính", "Financial Solutions"),
    t("Hỗ trợ tài chính DN", "Corporate Finance"),
    t("Quản lý tài sản", "Asset Management"),
  ];

  return (
    <footer
      style={{ background: "linear-gradient(180deg, #0d0a2e 0%, #060418 100%)" }}
    >
      {/* Gold line */}
      <div className="h-px w-full" style={{ background: "linear-gradient(90deg, transparent, #c8a45a 30%, #c8a45a 70%, transparent)" }} />

      <div className="max-w-7xl mx-auto px-6 pt-14 pb-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 bg-tnf-purple rounded-lg flex items-center justify-center">
                <span className="text-white font-display font-bold text-sm">TNF</span>
              </div>
              <div>
                <div className="font-display font-semibold text-white text-sm">TNF Group</div>
                <div className="text-white/40 text-xs">T&N Financial Group</div>
              </div>
            </div>
            <p className="text-white/50 text-xs leading-relaxed mb-5">
              {t(
                "Đối tác tài chính chiến lược, kết nối nguồn vốn và kiến tạo tăng trưởng bền vững.",
                "Strategic financial partner, connecting capital and building sustainable growth."
              )}
            </p>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-xs text-white/40">
                {t("Đang hoạt động", "Active")}
              </span>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-white/80 text-xs font-semibold tracking-[0.15em] uppercase mb-4">
              {t("Điều hướng", "Navigation")}
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm text-white/45 hover:text-tnf-gold transition-colors flex items-center gap-1.5 group"
                  >
                    <span>{l.label}</span>
                    <ArrowUpRight size={11} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white/80 text-xs font-semibold tracking-[0.15em] uppercase mb-4">
              {t("Dịch vụ", "Services")}
            </h4>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s}>
                  <a href="#services" className="text-sm text-white/45 hover:text-tnf-gold transition-colors">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white/80 text-xs font-semibold tracking-[0.15em] uppercase mb-4">
              {t("Liên hệ", "Contact")}
            </h4>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <MapPin size={14} className="text-tnf-gold shrink-0 mt-0.5" />
                <span className="text-xs text-white/45 leading-relaxed">
                  87A Hàm Nghi, P. Nguyễn Thái Bình, Q.1, TP. Hồ Chí Minh
                </span>
              </li>
              <li className="flex gap-3">
                <Phone size={14} className="text-tnf-gold shrink-0 mt-0.5" />
                <a href="tel:02888892966" className="text-xs text-white/45 hover:text-white/70 transition-colors">
                  028 8889 2966
                </a>
              </li>
              <li className="flex gap-3">
                <Mail size={14} className="text-tnf-gold shrink-0 mt-0.5" />
                <a href="mailto:tnf@tnfgroup.com.vn" className="text-xs text-white/45 hover:text-white/70 transition-colors">
                  tnf@tnfgroup.com.vn
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/25 text-center sm:text-left">
            © {year} Công ty CP T&N Financial Group. {t("Bản quyền thuộc về TNF.", "All rights reserved.")}
          </p>
          <p className="text-xs text-white/20">
            {t("Giấy phép ĐKKD số:", "Business License No:")} ...
          </p>
        </div>
      </div>
    </footer>
  );
}
