import { useState } from "react";
import { Send, CheckCircle, AlertCircle, Mail, User, MessageSquare, FileText } from "lucide-react";

const INITIAL = { name: "", email: "", subject: "", message: "" };

export default function Contact() {
  const [form, setForm] = useState(INITIAL);
  const [errors, setErrors] = useState([]);
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [successMsg, setSuccessMsg] = useState("");

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setErrors([]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    setErrors([]);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();

      if (!res.ok) {
        setErrors(data.errors || ["Something went wrong."]);
        setStatus("error");
        return;
      }

      setSuccessMsg(data.message);
      setStatus("success");
      setForm(INITIAL);
    } catch {
      setErrors(["Network error. Make sure the server is running."]);
      setStatus("error");
    }
  };

  const inputClass =
    "w-full bg-slate-800/50 border border-slate-700/60 text-slate-100 placeholder-slate-500 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-indigo-500/60 focus:ring-1 focus:ring-indigo-500/30 focus:bg-slate-800/80 transition-all duration-200";

  return (
    <section id="contact" className="py-24 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-700/40 to-transparent" />

      {/* Ambient */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-64 bg-indigo-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left copy */}
          <div>
            <p className="text-indigo-400 text-xs font-mono tracking-widest uppercase mb-3">
              04 // contact
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-6">
              Let's build something together.
            </h2>
            <p className="text-slate-400 leading-relaxed mb-8">
              Whether you have a project in mind, want to talk engineering, or just want to connect — I'm always up for a good conversation. I typically reply within 24 hours.
            </p>

            <div className="flex flex-col gap-4">
              {[
                { icon: Mail, label: "Email", value: "📧 Drop Me a Message", href: "mailto:workwith.vansh97@gmail.com" },
                { icon: MessageSquare, label: "LinkedIn", value: "Connect on LinkedIn ⭐", href: "https://www.linkedin.com/in/vansh-choudhary-3a1142334/" },
              ].map(({ icon: Icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl bg-slate-800/30 border border-slate-700/40 hover:border-indigo-500/30 hover:bg-slate-800/50 transition-all duration-200 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center flex-shrink-0">
                    <Icon size={16} className="text-indigo-400" />
                  </div>
                  <div>
                    <p className="text-slate-500 text-xs">{label}</p>
                    <p className="text-slate-200 text-sm font-medium group-hover:text-white transition-colors">{value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="p-8 rounded-2xl bg-slate-800/20 border border-slate-700/40">
            {status === "success" ? (
              <div className="flex flex-col items-center justify-center py-12 text-center gap-4">
                <div className="w-16 h-16 rounded-full bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center">
                  <CheckCircle size={28} className="text-emerald-400" />
                </div>
                <div>
                  <h3 className="text-slate-100 font-semibold text-lg mb-2">Message sent!</h3>
                  <p className="text-slate-400 text-sm max-w-xs">{successMsg}</p>
                </div>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-4 px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium transition-colors"
                >
                  Send another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <h3 className="text-slate-100 font-semibold text-base mb-1">Send a message</h3>

                {/* Error banner */}
                {status === "error" && errors.length > 0 && (
                  <div className="flex items-start gap-3 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
                    <AlertCircle size={16} className="mt-0.5 flex-shrink-0" />
                    <div className="flex flex-col gap-1">
                      {errors.map((e, i) => <span key={i}>{e}</span>)}
                    </div>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="relative">
                    <User size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500" />
                    <input
                      type="text"
                      name="name"
                      placeholder="Your name"
                      value={form.name}
                      onChange={handleChange}
                      className={`${inputClass} pl-10`}
                      required
                    />
                  </div>
                  <div className="relative">
                    <Mail size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500" />
                    <input
                      type="email"
                      name="email"
                      placeholder="your@email.com"
                      value={form.email}
                      onChange={handleChange}
                      className={`${inputClass} pl-10`}
                      required
                    />
                  </div>
                </div>

                <div className="relative">
                  <FileText size={14} className="absolute left-3.5 top-3.5 text-slate-500" />
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={form.subject}
                    onChange={handleChange}
                    className={`${inputClass} pl-10`}
                    required
                  />
                </div>

                <div className="relative">
                  <MessageSquare size={14} className="absolute left-3.5 top-3.5 text-slate-500" />
                  <textarea
                    name="message"
                    placeholder="Your message…"
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    className={`${inputClass} pl-10 resize-none`}
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 disabled:bg-indigo-600/50 disabled:cursor-not-allowed text-white font-semibold text-sm transition-all duration-200 shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/30 hover:-translate-y-0.5 disabled:hover:translate-y-0"
                >
                  {status === "loading" ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending…
                    </>
                  ) : (
                    <>
                      <Send size={15} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
