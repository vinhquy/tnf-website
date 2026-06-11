"use client";
import { useLang } from "./LanguageContext";
import { useInView } from "./useInView";
import { Banknote, HandshakeIcon, LineChart, Building2, Wallet, MoreHorizontal } from "lucide-react";

export default function Services() {
  const { t } = useLang();
  const { ref, inView } = useInView();

  const services = [
    {
      icon: Banknote,
      title: t("Quản lý vốn & Ngân quỹ", "Capital & Treasury Management"),
      desc: t(
        "Tối ưu hóa cấu trúc vốn và quản lý ngân quỹ hiệu quả, đảm bảo thanh khoản và sinh lời cho doanh nghiệp.",
        "Optimize capital structure and efficient treasury management, ensuring liquidity and profitability for enterprises."
      ),
      color: "#4d3a95",
      tag: t("Cốt lõi", "Core"),
    },
    {
      icon: HandshakeIcon,
      title: t("Hợp tác đầu tư", "Investment Cooperation"),
      desc: t(
        "Kết nối nhà đầu tư với cơ hội đầu tư tiềm năng, đồng hành thực hiện các dự án đầu tư chiến lược.",
        "Connect investors with potential investment opportunities, co-executing strategic investment projects."
      ),
      color: "#c8a45a",
      tag: t("Đầu tư", "Investment"),
    },
    {
      icon: LineChart,
      title: t("Giải pháp tài chính", "Financial Solutions"),
      desc: t(
        "Thiết kế các giải pháp tài chính linh hoạt, phù hợp với đặc thù và mục tiêu phát triển của từng doanh nghiệp.",
        "Designing flexible financial solutions tailored to the specific characteristics and development goals of each enterprise."
      ),
      color: "#4d3a95",
      tag: t("Giải pháp", "Solutions"),
    },
    {
      icon: Building2,
      title: t("Hỗ trợ tài chính doanh nghiệp", "Corporate Finance Support"),
      desc: t(
        "Tư vấn tái cơ cấu tài chính, hỗ trợ M&A, phát hành trái phiếu và các giao dịch tài chính doanh nghiệp.",
        "Advisory on financial restructuring, M&A support, bond issuance, and other corporate financial transactions."
      ),
      color: "#c8a45a",
      tag: "Corporate",
    },
    {
      icon: Wallet,
      title: t("Quản lý tài sản", "Asset Management"),
      desc: t(
        "Quản lý danh mục đầu tư đa dạng, bao gồm cổ phiếu, trái phiếu và các tài sản tài chính khác.",
        "Diversified portfolio management, including stocks, bonds, and other financial assets."
      ),
      color: "#4d3a95",
      tag: t("Tài sản", "Assets"),
    },
    {
      icon: MoreHorizontal,
      title: t("Dịch vụ khác", "Other Services"),
      desc: t(
        "Các dịch vụ tư vấn tài chính chuyên biệt khác, được thiết kế theo yêu cầu cụ thể của khách hàng.",
        "Other specialized financial advisory services, designed according to specific client requirements."
      ),
      color: "#c8a45a",
      tag: t("Tư vấn", "Advisory"),
    },
  ];

  return (
    <section
      id="services"
      className="py-24"
      style={{ background: "linear-gradient(180deg, #0d0a2e 0%, #1a1550 100%)" }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div ref={ref} className={`section-fade ${inView ? "visible" : ""}`}>
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-10 bg-tnf-gold" />
              <span className="text-tnf-gold text-xs font-semibold tracking-[0.2em] uppercase">
                {t("Dịch vụ", "Services")}
              </span>
              <div className="h-px w-10 bg-tnf-gold" />
            </div>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-white leading-tight mb-4">
              {t("Sản phẩm & Dịch vụ", "Products & Services")}
            </h2>
            <p className="text-white/60 text-lg leading-relaxed">
              {t(
                "Danh mục dịch vụ tài chính toàn diện, đáp ứng mọi nhu cầu của doanh nghiệp.",
                "A comprehensive portfolio of financial services meeting all enterprise needs."
              )}
            </p>
          </div>

          {/* Services grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map(({ icon: Icon, title, desc, color, tag }) => (
              <div
                key={title}
                className="group relative p-7 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-white/20 transition-all duration-300 cursor-default overflow-hidden"
              >
                {/* Background accent */}
                <div
                  className="absolute top-0 right-0 w-40 h-40 rounded-full opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-3xl"
                  style={{ background: color }}
                />

                {/* Tag */}
                <div
                  className="inline-block text-xs font-semibold px-2.5 py-1 rounded-md mb-4"
                  style={{
                    background: `${color}20`,
                    color: color === "#c8a45a" ? "#e8c87a" : "#b8a8e8",
                  }}
                >
                  {tag}
                </div>

                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
                  style={{ background: `${color}25`, border: `1px solid ${color}40` }}
                >
                  <Icon size={22} style={{ color }} />
                </div>

                {/* Content */}
                <h3 className="font-semibold text-white text-base mb-3 leading-snug">
                  {title}
                </h3>
                <p className="text-white/55 text-sm leading-relaxed">
                  {desc}
                </p>

                {/* Bottom accent */}
                <div
                  className="absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full transition-all duration-500"
                  style={{ background: `linear-gradient(90deg, ${color}, transparent)` }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
