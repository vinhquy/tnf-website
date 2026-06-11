"use client";
import { useLang } from "./LanguageContext";
import { useInView } from "./useInView";
import { useState } from "react";
import { MapPin, Phone, Mail, Send, CheckCircle } from "lucide-react";

export default function Contact() {
  const { t } = useLang();
  const { ref, inView } = useInView();
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", company: "", phone: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  const contactInfo = [
    {
      icon: MapPin,
      label: t("Trụ sở chính", "Headquarters"),
      value: "87A Hàm Nghi, Phường Nguyễn Thái Bình, Quận 1, Hồ Chí Minh",
    },
    {
      icon: Phone,
      label: t("Điện thoại", "Phone"),
      value: "028 8889 2966",
      href: "tel:02888892966",
    },
    {
      icon: Mail,
      label: "Email",
      value: "tnf@tnfgroup.com.vn",
      href: "mailto:tnf@tnfgroup.com.vn",
    },
  ];

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div ref={ref} className={`section-fade ${inView ? "visible" : ""}`}>
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-10 bg-tnf-gold" />
              <span className="text-tnf-purple text-xs font-semibold tracking-[0.2em] uppercase">
                {t("Liên hệ", "Contact")}
              </span>
              <div className="h-px w-10 bg-tnf-gold" />
            </div>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-tnf-navy leading-tight mb-4">
              {t("Bắt đầu hợp tác cùng TNF", "Start Your Partnership with TNF")}
            </h2>
            <p className="text-tnf-slate text-lg leading-relaxed">
              {t(
                "Đội ngũ chuyên gia của chúng tôi sẵn sàng tư vấn và hỗ trợ bạn.",
                "Our expert team is ready to advise and support you."
              )}
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-12 items-start">
            {/* Contact info */}
            <div className="lg:col-span-2 space-y-5">
              {contactInfo.map(({ icon: Icon, label, value, href }) => (
                <div
                  key={label}
                  className="flex gap-4 p-5 rounded-xl border border-gray-100 hover:border-tnf-purple/20 hover:shadow-md transition-all duration-200 bg-tnf-off-white group"
                >
                  <div className="shrink-0 w-10 h-10 rounded-lg bg-tnf-purple/10 flex items-center justify-center group-hover:bg-tnf-purple transition-colors duration-200">
                    <Icon size={18} className="text-tnf-purple group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <div className="text-xs text-tnf-slate font-medium mb-1">{label}</div>
                    {href ? (
                      <a href={href} className="text-sm font-medium text-tnf-navy hover:text-tnf-purple transition-colors">
                        {value}
                      </a>
                    ) : (
                      <p className="text-sm font-medium text-tnf-navy leading-snug">{value}</p>
                    )}
                  </div>
                </div>
              ))}

              {/* Map placeholder */}
              <div className="rounded-xl overflow-hidden border border-gray-100 h-44 bg-tnf-purple-pale flex items-center justify-center">
                <div className="text-center">
                  <MapPin size={28} className="text-tnf-purple/40 mx-auto mb-2" />
                  <p className="text-xs text-tnf-slate">87A Hàm Nghi, Q.1, TP.HCM</p>
                </div>
              </div>
            </div>

            {/* Contact form */}
            <div className="lg:col-span-3">
              {sent ? (
                <div className="h-full flex flex-col items-center justify-center py-16 text-center">
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
                    <CheckCircle size={32} className="text-green-600" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-tnf-navy mb-2">
                    {t("Gửi thành công!", "Message Sent!")}
                  </h3>
                  <p className="text-tnf-slate text-sm">
                    {t(
                      "Chúng tôi sẽ liên hệ lại trong thời gian sớm nhất.",
                      "We will get back to you as soon as possible."
                    )}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-tnf-slate mb-1.5">
                        {t("Họ và tên", "Full Name")} *
                      </label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder={t("Nguyễn Văn A", "John Doe")}
                        className="w-full px-4 py-2.5 text-sm border border-gray-200 rounded-lg focus:outline-none focus:border-tnf-purple focus:ring-2 focus:ring-tnf-purple/10 transition-all bg-white text-tnf-navy placeholder-gray-300"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-tnf-slate mb-1.5">
                        {t("Công ty", "Company")}
                      </label>
                      <input
                        type="text"
                        value={form.company}
                        onChange={(e) => setForm({ ...form, company: e.target.value })}
                        placeholder={t("Tên công ty", "Company name")}
                        className="w-full px-4 py-2.5 text-sm border border-gray-200 rounded-lg focus:outline-none focus:border-tnf-purple focus:ring-2 focus:ring-tnf-purple/10 transition-all bg-white text-tnf-navy placeholder-gray-300"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-tnf-slate mb-1.5">
                        {t("Số điện thoại", "Phone")} *
                      </label>
                      <input
                        type="tel"
                        required
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        placeholder="0912 345 678"
                        className="w-full px-4 py-2.5 text-sm border border-gray-200 rounded-lg focus:outline-none focus:border-tnf-purple focus:ring-2 focus:ring-tnf-purple/10 transition-all bg-white text-tnf-navy placeholder-gray-300"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-tnf-slate mb-1.5">
                        Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="email@company.com"
                        className="w-full px-4 py-2.5 text-sm border border-gray-200 rounded-lg focus:outline-none focus:border-tnf-purple focus:ring-2 focus:ring-tnf-purple/10 transition-all bg-white text-tnf-navy placeholder-gray-300"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-tnf-slate mb-1.5">
                      {t("Nội dung", "Message")} *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder={t(
                        "Mô tả nhu cầu tài chính của bạn...",
                        "Describe your financial needs..."
                      )}
                      className="w-full px-4 py-2.5 text-sm border border-gray-200 rounded-lg focus:outline-none focus:border-tnf-purple focus:ring-2 focus:ring-tnf-purple/10 transition-all bg-white text-tnf-navy placeholder-gray-300 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 text-sm font-semibold text-white bg-tnf-purple rounded-lg hover:bg-tnf-purple-dark transition-all duration-200 shadow-lg shadow-tnf-purple/25 hover:shadow-tnf-purple/35 hover:-translate-y-0.5"
                  >
                    {t("Gửi yêu cầu tư vấn", "Send Inquiry")}
                    <Send size={15} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
