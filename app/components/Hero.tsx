"use client";
import { useLang } from "./LanguageContext";
import { ArrowRight, ChevronDown } from "lucide-react";

export default function Hero() {
  const { t } = useLang();

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #0d0a2e 0%, #1a1550 30%, #2d1f70 65%, #4d3a95 100%)",
      }}
    >
      {/* Geometric background pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Grid lines */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.06]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>

        {/* Large decorative circles */}
        <div className="absolute -top-40 -right-40 w-[700px] h-[700px] rounded-full border border-white/5" />
        <div className="absolute -top-20 -right-20 w-[500px] h-[500px] rounded-full border border-white/5" />
        <div className="absolute bottom-0 -left-60 w-[600px] h-[600px] rounded-full bg-tnf-purple/20 blur-3xl" />
        <div className="absolute top-1/4 right-1/4 w-[300px] h-[300px] rounded-full bg-tnf-gold/10 blur-3xl" />

        {/* Gold accent lines */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-tnf-gold/40 to-transparent" />
        <div
          className="absolute right-0 top-0 w-px h-full opacity-20"
          style={{ background: "linear-gradient(to bottom, transparent, #c8a45a, transparent)" }}
        />
      </div>

      {/* Ticker bar */}
      <div className="relative z-10 mt-[72px] border-y border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden h-9 flex items-center">
        <div className="ticker-track flex gap-12 whitespace-nowrap">
          {[
            "VN-Index",
            "HNX-Index",
            "Tỷ giá USD/VND",
            "Lãi suất huy động",
            "Trái phiếu chính phủ",
            "VN-Index",
            "HNX-Index",
            "Tỷ giá USD/VND",
            "Lãi suất huy động",
            "Trái phiếu chính phủ",
          ].map((item, i) => (
            <span key={i} className="text-xs text-white/60 font-medium flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-tnf-gold/60" />
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-10 flex-1 flex items-center">
        <div className="max-w-7xl mx-auto px-6 py-20 w-full">
          <div className="max-w-3xl">
            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-8">
              <div className="h-px w-10 bg-tnf-gold" />
              <span className="text-tnf-gold text-xs font-semibold tracking-[0.2em] uppercase">
                {t("Công ty Cổ phần", "Joint Stock Company")}
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.05] mb-6">
              T&N{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #c8a45a 0%, #e8c87a 50%, #c8a45a 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Financial
              </span>
              <br />
              Group
            </h1>

            {/* Sub-headline */}
            <p className="text-white/75 text-lg sm:text-xl font-light leading-relaxed mb-4 max-w-xl">
              {t(
                "Đối tác tài chính chiến lược — kết nối nguồn vốn, kiến tạo tăng trưởng bền vững cho doanh nghiệp Việt Nam.",
                "Strategic financial partner — connecting capital, building sustainable growth for Vietnamese enterprises."
              )}
            </p>

            {/* Stats bar */}
            <div className="flex gap-8 mb-10 py-6 border-y border-white/10">
              {[
                { num: "2017", label: t("Năm thành lập", "Founded") },
                { num: "500+", label: t("Đối tác doanh nghiệp", "Corporate partners") },
                { num: "TP. HCM", label: t("Trụ sở chính", "Headquarters") },
              ].map((stat) => (
                <div key={stat.num} className="text-left">
                  <div className="text-2xl font-bold text-white font-display">{stat.num}</div>
                  <div className="text-xs text-white/50 mt-0.5">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <a
                href="#services"
                className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold text-tnf-navy bg-tnf-gold rounded-lg hover:bg-tnf-gold-light transition-all duration-200 shadow-lg shadow-tnf-gold/20 hover:shadow-tnf-gold/30 hover:-translate-y-0.5"
              >
                {t("Khám phá dịch vụ", "Explore Services")}
                <ArrowRight size={16} />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold text-white border border-white/30 rounded-lg hover:bg-white/10 hover:border-white/50 transition-all duration-200 hover:-translate-y-0.5"
              >
                {t("Liên hệ tư vấn", "Contact Us")}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="relative z-10 flex justify-center pb-8">
        <a
          href="#about"
          className="flex flex-col items-center gap-1 text-white/40 hover:text-white/70 transition-colors"
        >
          <span className="text-xs tracking-widest uppercase font-medium">
            {t("Tìm hiểu thêm", "Learn More")}
          </span>
          <ChevronDown size={18} className="animate-bounce" />
        </a>
      </div>
    </section>
  );
}
