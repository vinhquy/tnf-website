"use client";
import { useLang } from "./LanguageContext";
import { useInView } from "./useInView";
import { useState } from "react";
import { FileText, BookOpen, Megaphone, ChevronDown, ChevronUp, Calendar } from "lucide-react";

export default function Disclosure() {
  const { t } = useLang();
  const { ref, inView } = useInView();
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const categories = [
    {
      id: "bctc",
      icon: FileText,
      label: t("Báo cáo tài chính", "Financial Reports"),
      items: [
        {
          id: "bctc-1",
          title: t("TNF: BÁO CÁO TÀI CHÍNH QUÝ 1 NĂM 2024", "TNF: Q1 2024 FINANCIAL REPORT"),
          date: "19/04/2024",
          content: t(
            "Công ty CP T&N Financial Group công bố Báo cáo tài chính Quý 1 năm 2024 và Giải trình biến động lợi nhuận Quý 1 năm 2024 so với Quý 1 năm 2023. Thông tin chi tiết đang được cập nhật.",
            "T&N Financial Group Joint Stock Company announces Q1 2024 Financial Report and profit variance explanation for Q1 2024 vs Q1 2023. Detailed information is being updated."
          ),
        },
      ],
    },
    {
      id: "dlct",
      icon: BookOpen,
      label: t("Điều lệ công ty", "Company Charter"),
      items: [
        {
          id: "dlct-1",
          title: t("TNF: ĐIỀU LỆ CÔNG TY NGÀY 19/04/2024", "TNF: COMPANY CHARTER DATED 19/04/2024"),
          date: "19/04/2024",
          content: t(
            "Điều lệ Công ty Cổ phần T&N Financial Group được sửa đổi, bổ sung và thông qua tại Đại hội đồng cổ đông. Nội dung chi tiết đang được cập nhật.",
            "The charter of T&N Financial Group Joint Stock Company was amended and approved at the Shareholders' General Meeting. Detailed content is being updated."
          ),
        },
      ],
    },
    {
      id: "tb",
      icon: Megaphone,
      label: t("Thông báo", "Announcements"),
      items: [
        {
          id: "tb-1",
          title: t("TNF: THÔNG BÁO BẢO TRÌ HỆ THỐNG", "TNF: SYSTEM MAINTENANCE NOTICE"),
          date: "27/04/2024",
          content: t(
            "Kính gửi Quý Khách hàng, TNF xin thông báo lịch bảo trì hệ thống giao dịch từ 18h00 Thứ Sáu 26/04/2024 đến 05h00 Thứ Năm 02/05/2024. Sau thời gian trên, Quý Khách hàng có thể đăng nhập và sử dụng dịch vụ bình thường.",
            "Dear Customers, TNF announces system maintenance schedule from 18:00 Friday 26/04/2024 to 05:00 Thursday 02/05/2024. After this time, customers can log in and use the service normally."
          ),
        },
        {
          id: "tb-2",
          title: t("TNF: THÔNG BÁO LỊCH NGHỈ LỄ NGÀY 30/4 & 1/5", "TNF: PUBLIC HOLIDAY SCHEDULE 30/4 & 1/5"),
          date: "25/04/2024",
          content: t(
            "TNF thông báo lịch nghỉ Lễ 30/4 & 1/5: Nghỉ giao dịch từ Thứ Hai 29/04/2024 đến hết Thứ Tư 01/05/2024. Giao dịch trở lại từ Thứ Năm 02/05/2024.",
            "TNF announces 30/4 & 1/5 holiday schedule: Trading suspended from Monday 29/04/2024 through Wednesday 01/05/2024. Trading resumes Thursday 02/05/2024."
          ),
        },
      ],
    },
  ];

  return (
    <section id="disclosure" className="py-24 bg-tnf-off-white">
      <div className="max-w-7xl mx-auto px-6">
        <div ref={ref} className={`section-fade ${inView ? "visible" : ""}`}>
          {/* Header */}
          <div className="max-w-2xl mb-14">
            <div className="flex items-center gap-3 mb-4">
              <div className="gold-rule" />
              <span className="text-tnf-purple text-xs font-semibold tracking-[0.2em] uppercase">
                {t("Quan hệ cổ đông", "Investor Relations")}
              </span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-tnf-navy leading-tight mb-4">
              {t("Công bố thông tin", "Information Disclosure")}
            </h2>
            <p className="text-tnf-slate text-lg leading-relaxed">
              {t(
                "Minh bạch hóa thông tin tài chính và hoạt động công ty theo quy định pháp luật.",
                "Transparent disclosure of financial and corporate information in accordance with regulations."
              )}
            </p>
          </div>

          {/* Category tabs */}
          <div className="grid md:grid-cols-3 gap-8">
            {categories.map(({ id, icon: Icon, label, items }) => (
              <div key={id} className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                {/* Category header */}
                <div className="flex items-center gap-3 p-5 border-b border-gray-50 bg-gradient-to-r from-tnf-purple-pale to-white">
                  <div className="w-9 h-9 rounded-lg bg-tnf-purple/10 flex items-center justify-center">
                    <Icon size={17} className="text-tnf-purple" />
                  </div>
                  <h3 className="font-semibold text-tnf-navy text-sm">{label}</h3>
                  <span className="ml-auto text-xs text-tnf-purple bg-tnf-purple/10 px-2 py-0.5 rounded-full font-medium">
                    {items.length}
                  </span>
                </div>

                {/* Items */}
                <div className="divide-y divide-gray-50">
                  {items.map((item) => (
                    <div key={item.id} className="p-5">
                      <button
                        className="w-full text-left"
                        onClick={() => setExpandedId(expandedId === item.id ? null : item.id)}
                      >
                        <div className="flex items-start justify-between gap-3">
                          <div>
                            <p className="text-sm font-medium text-tnf-navy leading-snug mb-2">
                              {item.title}
                            </p>
                            <div className="flex items-center gap-1.5 text-xs text-tnf-slate">
                              <Calendar size={12} />
                              {item.date}
                            </div>
                          </div>
                          <div className="shrink-0 mt-0.5 text-tnf-slate">
                            {expandedId === item.id ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                          </div>
                        </div>
                      </button>

                      {expandedId === item.id && (
                        <div className="mt-4 pt-4 border-t border-gray-100">
                          <p className="text-xs text-tnf-slate leading-relaxed">{item.content}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
