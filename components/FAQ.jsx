"use client";

import { useState } from "react";

const FAQS = [
  { q: "How Can I Type an Invisible Character?", a: "You can use our Invisible-Character to type Blank Texts. Just copy these Blank Texts and use them wherever you want to." },
  { q: "Is the Invisible-Character Tool free to Use?", a: "Yes, the Invisible-Character is completely free to use. You don’t have to pay any money in order to start creating empty texts with it." },
  { q: "Can I Use Invisible Characters to Send an Empty WhatsApp Message?", a: "Yes, you can use Blank text to send Empty WhatsApp messages or any other messaging application." },
  { q: "Can I Use Blank Text to Hide My Social Media Username?", a: "Yes, your username on your social media profile will be hidden when you use blank text." },
];

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="relative bg-white overflow-hidden">
      <div aria-hidden className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--border)] to-transparent"></div>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-20">
        <div className="text-center max-w-2xl mx-auto">
          <span className="inline-block rounded-full bg-surface-rose ring-hairline px-3 py-1 text-[11px] font-medium text-primary uppercase tracking-wider">FAQ</span>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl font-bold">
            Frequently asked <span className="text-gradient">questions</span>
          </h2>
          <p className="mt-3 text-muted-foreground">Everything you need to know about using invisible characters.</p>
        </div>
        <div className="mt-12 grid md:grid-cols-2 gap-4" id="faqRoot">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <div
                key={f.q}
                className={`faq-item ${isOpen ? "open" : ""} group rounded-2xl bg-white ring-hairline ease-smooth transition-all hover:shadow-soft`}
                data-i={i}
              >
                <button
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  className="faq-btn w-full flex items-start justify-between gap-4 px-5 sm:px-6 py-5 text-left"
                >
                  <span className="font-medium text-foreground text-[15px] leading-snug">{f.q}</span>
                  <span className="faq-toggle flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-sm ease-smooth transition-all bg-secondary text-muted-foreground">
                    {isOpen ? "×" : "+"}
                  </span>
                </button>
                <div className="faq-panel">
                  <div>
                    <p className="px-5 sm:px-6 pb-5 text-sm text-muted-foreground leading-relaxed">{f.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
