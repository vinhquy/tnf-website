"use client";
import { useLang } from "./LanguageContext";
import { useInView } from "./useInView";
import { Shield, Target, TrendingUp, Users } from "lucide-react";

export default function About() {
  const { t } = useLang();
  const { ref, inView } = useInView();

  const values = [
    {
      icon: Shield,
      title: t("Minh bạch", "Transparency"),
      desc: t(
        "Công bố thông tin đầy đủ, hoạt động theo nguyên tắc quản trị doanh nghiệp tốt nhất.",
        "Full disclosure, operating on best corporate governance principles."
      ),
    },
    {
      icon: Target,
      title: t("Chuyên nghiệp", "Professionalism"),
      desc: t(
        "Đội ngũ chuyên gia tài chính dày dạn kinh nghiệm, am hiểu thị trường Việt Nam.",
        "Experienced financial experts with deep knowledge of the Vietnamese market."
      ),
    },
    {
      icon: TrendingUp,
      title: t("Tăng trưởng bền vững", "Sustainable Growth"),
      desc: t(
        "Chiến lược tài chính dài hạn, tối ưu hóa giá trị cho doanh nghiệp và nhà đầu tư.",
        "Long-term financial strategies, maximizing value for enterprises and investors."
      ),
    },
    {
      icon: Users,
      title: t("Đồng hành", "Partnership"),
      desc: t(
        "Xây dựng quan hệ đối tác chiến lược, đồng hành cùng khách hàng trên mọi bước phát triển.",
        "Building strategic partnerships, supporting clients at every step of their growth."
      ),
    },
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div
          ref={ref}
          className={`section-fade ${inView ? "visible" : ""}`}
        >
          {/* Header */}
          <div className="max-w-3xl mb-16">
            <div className="flex items-center gap-3 mb-4">
              <div className="gold-rule" />
              <span className="text-tnf-purple text-xs font-semibold tracking-[0.2em] uppercase">
                {t("Về chúng tôi", "About Us")}
              </span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-tnf-navy leading-tight mb-6">
              {t(
                "Đối tác tài chính đáng tin cậy tại Việt Nam",
                "Vietnam's Trusted Financial Partner"
              )}
            </h2>
            <p className="text-tnf-slate text-lg leading-relaxed">
              {t(
                "Công ty Cổ phần T&N Financial Group (TNF) là đơn vị hoạt động trong lĩnh vực tài chính, được thành lập với mục tiêu kết nối nguồn vốn và cung cấp các giải pháp tài chính toàn diện cho doanh nghiệp Việt Nam.",
                "T&N Financial Group Joint Stock Company (TNF) operates in the financial sector, established with the mission of connecting capital and providing comprehensive financial solutions for Vietnamese enterprises."
              )}
            </p>
          </div>

          {/* Two-column layout */}
          <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
            {/* Mission block */}
            <div className="space-y-8">
              <div className="p-8 rounded-2xl border border-tnf-purple/10 bg-tnf-purple-pale relative overflow-hidden">
                <div
                  className="absolute top-0 left-0 w-1 h-full rounded-l-2xl"
                  style={{ background: "linear-gradient(to bottom, #4d3a95, #c8a45a)" }}
                />
                <h3 className="font-display text-xl font-bold text-tnf-navy mb-3">
                  {t("Sứ mệnh", "Mission")}
                </h3>
                <p className="text-tnf-slate leading-relaxed">
                  {t(
                    "Trở thành cầu nối tài chính chiến lược, tạo ra hệ sinh thái vốn hiệu quả, thúc đẩy sự phát triển của nền kinh tế Việt Nam thông qua các giải pháp tài chính sáng tạo và bền vững.",
                    "To become a strategic financial bridge, creating an efficient capital ecosystem and driving the development of Vietnam's economy through innovative and sustainable financial solutions."
                  )}
                </p>
              </div>

              <div className="p-8 rounded-2xl border border-tnf-gold/20 bg-gradient-to-br from-amber-50 to-orange-50 relative overflow-hidden">
                <div
                  className="absolute top-0 left-0 w-1 h-full rounded-l-2xl"
                  style={{ background: "linear-gradient(to bottom, #c8a45a, #4d3a95)" }}
                />
                <h3 className="font-display text-xl font-bold text-tnf-navy mb-3">
                  {t("Tầm nhìn", "Vision")}
                </h3>
                <p className="text-tnf-slate leading-relaxed">
                  {t(
                    "Trở thành tập đoàn tài chính đa dịch vụ hàng đầu Việt Nam, được công nhận về năng lực chuyên môn, uy tín và chất lượng dịch vụ.",
                    "To become a leading multi-service financial group in Vietnam, recognized for professional expertise, credibility, and service quality."
                  )}
                </p>
              </div>
            </div>

            {/* Stats grid */}
            <div>
              <div className="grid grid-cols-2 gap-5 mb-8">
                {[
                  { val: "87A", sub: t("Hàm Nghi, Q.1, TP.HCM", "Ham Nghi, D.1, HCMC"), label: t("Trụ sở chính", "Headquarters") },
                  { val: "2017", sub: t("Thành lập", "Established"), label: t("Kinh nghiệm hoạt động", "Years of operations") },
                  { val: "HOSE", sub: t("Hợp tác chiến lược TPS", "Strategic partner TPS"), label: t("Thị trường chứng khoán", "Stock market") },
                  { val: "VAS", sub: t("Chuẩn mực kế toán", "Accounting standards"), label: t("Tuân thủ quy định", "Compliant") },
                ].map((s) => (
                  <div
                    key={s.val}
                    className="p-5 rounded-xl border border-gray-100 hover:border-tnf-purple/20 hover:shadow-md transition-all duration-200 bg-white group"
                  >
                    <div className="font-display text-3xl font-bold text-tnf-purple group-hover:text-tnf-purple-dark transition-colors">
                      {s.val}
                    </div>
                    <div className="text-xs font-medium text-tnf-gold mt-1">{s.sub}</div>
                    <div className="text-xs text-tnf-slate mt-0.5">{s.label}</div>
                  </div>
                ))}
              </div>

              <p className="text-sm text-tnf-slate leading-relaxed">
                {t(
                  "TNF hoạt động trên cơ sở tuân thủ đầy đủ quy định pháp luật Việt Nam, với cam kết về tính minh bạch và chất lượng dịch vụ trong mọi hoạt động tài chính.",
                  "TNF operates in full compliance with Vietnamese legal regulations, with a commitment to transparency and service quality across all financial activities."
                )}
              </p>
            </div>
          </div>

          {/* Value props */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="group p-6 rounded-xl border border-gray-100 hover:border-tnf-purple/20 hover:shadow-lg transition-all duration-300 bg-white"
              >
                <div className="w-11 h-11 rounded-lg bg-tnf-purple-pale flex items-center justify-center mb-4 group-hover:bg-tnf-purple group-hover:scale-110 transition-all duration-300">
                  <Icon size={20} className="text-tnf-purple group-hover:text-white transition-colors" />
                </div>
                <h4 className="font-semibold text-tnf-navy mb-2 text-sm">{title}</h4>
                <p className="text-xs text-tnf-slate leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
