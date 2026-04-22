"use client";

import { useEffect, useRef, useState } from "react";

const METHOD1 = [
  { copy: "\u2800", key: "small", label: "Copy Small", glyph: "( )", surface: "bg-surface-rose" },
  { copy: "\u3164", key: "medium", label: "Copy Medium", glyph: "{ }", surface: "bg-surface-peach" },
  { copy: "\u200B\u200B\u200B", key: "large", label: "Copy Large", glyph: "[ ㅤ ]", surface: "bg-surface-amber" },
];

function useFlashLabel(defaultText) {
  const [label, setLabel] = useState(defaultText);
  const flash = (txt = "Copied!") => {
    setLabel(txt);
    setTimeout(() => setLabel(defaultText), 1300);
  };
  return [label, flash];
}

async function copyText(t) {
  try {
    await navigator.clipboard.writeText(t);
  } catch (e) {
    /* noop */
  }
}

function CopyBtn({ data }) {
  const [label, flash] = useFlashLabel("Copy");
  return (
    <button
      onClick={async () => {
        await copyText(data.copy);
        flash("Copied!");
      }}
      className={`copy-btn group relative overflow-hidden rounded-2xl ${data.surface} ring-hairline p-3.5 text-left ease-smooth transition-all hover:-translate-y-0.5 hover:shadow-card`}
    >
      <div className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground">{data.label}</div>
      <div className="mt-1.5 font-mono text-lg text-foreground/80">{data.glyph}</div>
      <div className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-primary">
        <span className="label">{label}</span>
        <span className="ease-smooth transition-transform group-hover:translate-x-0.5">→</span>
      </div>
    </button>
  );
}

export default function ToolBox() {
  const [qty, setQty] = useState(5);
  const [m2Label, setM2Label] = useState("Copy 5 blanks");
  const [taValue, setTaValue] = useState("");
  const [testCopyLabel, setTestCopyLabel] = useState("Copy");
  const m2Timer = useRef(null);
  const testTimer = useRef(null);

  useEffect(() => {
    const n = Math.max(1, qty || 1);
    setM2Label(`Copy ${n} blank${n > 1 ? "s" : ""}`);
  }, [qty]);

  const onM2Copy = async () => {
    const n = Math.max(1, qty || 1);
    await copyText("\u3164".repeat(n));
    setM2Label("Copied ✓");
    if (m2Timer.current) clearTimeout(m2Timer.current);
    m2Timer.current = setTimeout(() => {
      setM2Label(`Copy ${n} blank${n > 1 ? "s" : ""}`);
    }, 1300);
  };

  const onTestCopy = async () => {
    await copyText(taValue);
    setTestCopyLabel("Copied ✓");
    if (testTimer.current) clearTimeout(testTimer.current);
    testTimer.current = setTimeout(() => setTestCopyLabel("Copy"), 1300);
  };

  return (
    <section id="tool" className="relative overflow-hidden bg-gradient-hero">
      <div aria-hidden className="absolute inset-0 bg-dot-grid opacity-60"></div>
      <div aria-hidden className="pointer-events-none absolute -top-40 -left-32 h-[460px] w-[460px] rounded-full bg-surface-rose blur-3xl opacity-80 animate-float-slow"></div>
      <div aria-hidden className="pointer-events-none absolute -top-20 right-[-180px] h-[420px] w-[420px] rounded-full bg-surface-peach blur-3xl opacity-70"></div>
      <div aria-hidden className="pointer-events-none absolute bottom-[-200px] left-1/3 h-[400px] w-[400px] rounded-full bg-surface-amber blur-3xl opacity-50"></div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 pt-14 pb-20 lg:pt-20">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-stretch">
          {/* LEFT */}
          <div className="flex flex-col justify-center">
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-border/70 bg-white/80 backdrop-blur px-3 py-1 text-[11px] font-medium text-muted-foreground shadow-soft">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full rounded-full bg-primary opacity-60 animate-ping"></span>
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary"></span>
              </span>
              Free · No installation · Unlimited
            </span>
            <h1 className="mt-6 font-display text-[2.5rem] sm:text-5xl lg:text-[3.75rem] font-bold leading-[1.02] tracking-tight">
              <span className="text-foreground">Invisible</span>
              <br />
              <span className="text-gradient">Character.</span>
            </h1>
            <p className="mt-6 text-base sm:text-lg text-muted-foreground max-w-xl leading-relaxed">
              Click the button below to copy an Invisible character to your clipboard.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#features" className="group inline-flex items-center gap-2 rounded-full bg-foreground text-background px-6 py-3 text-sm font-medium ease-smooth transition-all hover:bg-primary hover:shadow-glow">
                Explore features <span className="ease-smooth transition-transform group-hover:translate-x-0.5">→</span>
              </a>
              <a href="#unicode" className="inline-flex items-center gap-2 rounded-full border border-border bg-white/60 backdrop-blur px-6 py-3 text-sm font-medium text-foreground ease-smooth transition-colors hover:bg-white">
                Unicode reference
              </a>
            </div>
            <div className="mt-10 grid grid-cols-3 gap-3 max-w-md">
              <div className="rounded-2xl bg-white/70 backdrop-blur ring-hairline p-3.5 text-center">
                <div className="font-display text-2xl font-bold text-gradient">100%</div>
                <div className="text-[10px] uppercase tracking-[0.14em] text-muted-foreground mt-1">Free</div>
              </div>
              <div className="rounded-2xl bg-white/70 backdrop-blur ring-hairline p-3.5 text-center">
                <div className="font-display text-2xl font-bold text-gradient">∞</div>
                <div className="text-[10px] uppercase tracking-[0.14em] text-muted-foreground mt-1">Characters</div>
              </div>
              <div className="rounded-2xl bg-white/70 backdrop-blur ring-hairline p-3.5 text-center">
                <div className="font-display text-2xl font-bold text-gradient">0</div>
                <div className="text-[10px] uppercase tracking-[0.14em] text-muted-foreground mt-1">Install</div>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="grid grid-rows-[auto_auto] gap-5">
            {/* Method 1 */}
            <div className="relative rounded-3xl bg-white shadow-card ring-hairline p-6 sm:p-7">
              <div className="flex items-center gap-3 mb-5">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-red-dark text-primary-foreground text-sm font-semibold shadow-glow">1</span>
                <div>
                  <h2 className="font-display text-base font-semibold leading-tight">Method 1</h2>
                  <p className="text-[11px] uppercase tracking-wider text-muted-foreground">One-click copy</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mb-5 leading-relaxed">
                Click the button below to copy an Invisible character to your clipboard.
              </p>
              <div className="grid grid-cols-3 gap-2.5">
                {METHOD1.map((m) => (
                  <CopyBtn key={m.key} data={m} />
                ))}
              </div>
            </div>

            {/* Method 2 */}
            <div className="relative rounded-3xl bg-gradient-soft shadow-card ring-hairline overflow-hidden p-6 sm:p-7 flex flex-col">
              <div aria-hidden className="absolute inset-0 bg-dot-grid opacity-40"></div>
              <div aria-hidden className="absolute -top-20 -right-10 h-48 w-48 rounded-full bg-surface-amber blur-3xl opacity-70"></div>
              <div className="relative flex items-center gap-3 mb-5">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-foreground text-background text-sm font-semibold shadow-soft">2</span>
                <div>
                  <h2 className="font-display text-base font-semibold leading-tight">Method 2</h2>
                  <p className="text-[11px] uppercase tracking-wider text-muted-foreground">Custom quantity</p>
                </div>
              </div>
              <p className="relative text-sm text-muted-foreground mb-5 leading-relaxed">
                Generate unlimited empty characters by entering the number of blank spaces you need, then click the &quot;Copy&quot; button and paste them where you want.
              </p>
              <div className="relative mt-auto">
                <div className="flex items-center gap-2 rounded-2xl bg-white/80 backdrop-blur ring-hairline p-1.5">
                  <button
                    id="dec"
                    onClick={() => setQty((q) => Math.max(1, (q || 1) - 1))}
                    className="h-10 w-10 rounded-xl bg-secondary text-foreground text-lg font-medium ease-smooth transition-colors hover:bg-accent"
                    aria-label="Decrease"
                  >
                    −
                  </button>
                  <input
                    id="qty"
                    type="number"
                    value={qty}
                    min={1}
                    onChange={(e) => setQty(Math.max(1, parseInt(e.target.value) || 1))}
                    className="w-full text-center bg-transparent text-lg font-medium text-foreground focus:outline-none"
                  />
                  <button
                    id="inc"
                    onClick={() => setQty((q) => Math.max(1, (q || 1)) + 1)}
                    className="h-10 w-10 rounded-xl bg-secondary text-foreground text-lg font-medium ease-smooth transition-colors hover:bg-accent"
                    aria-label="Increase"
                  >
                    +
                  </button>
                </div>
                <button
                  id="m2copy"
                  onClick={onM2Copy}
                  className="mt-3 w-full rounded-2xl bg-foreground text-background py-3 text-sm font-medium shadow-soft ease-smooth transition-all hover:bg-primary hover:shadow-glow active:scale-[0.99]"
                >
                  {m2Label}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Test here */}
        <div className="mt-8 rounded-3xl bg-white shadow-card ring-hairline p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-5">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-red-dark text-primary-foreground text-sm font-semibold shadow-glow">★</span>
              <div>
                <h2 className="font-display text-xl font-semibold">Test here</h2>
                <p className="text-sm text-muted-foreground">
                  Paste the invisible letter below for the test. If light grey text disappears, it means your blank character is working.
                </p>
              </div>
            </div>
            <div className="text-xs font-mono text-muted-foreground">
              Characters: <span id="charCount" className="text-foreground font-semibold">{taValue.length}</span>
            </div>
          </div>
          <textarea
            id="testArea"
            rows={5}
            value={taValue}
            onChange={(e) => setTaValue(e.target.value)}
            placeholder="Paste your invisible character here..."
            className="w-full rounded-2xl bg-secondary/40 ring-hairline p-4 font-mono text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 ease-smooth transition-shadow resize-none"
          />
          <div className="mt-4 flex flex-wrap gap-2">
            <button
              id="testCopy"
              onClick={onTestCopy}
              className="inline-flex items-center gap-2 rounded-full bg-foreground text-background px-5 py-2 text-sm font-medium ease-smooth transition-all hover:bg-primary hover:shadow-glow"
            >
              {testCopyLabel}
            </button>
            <button
              id="testClear"
              onClick={() => setTaValue("")}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-5 py-2 text-sm font-medium text-foreground ease-smooth transition-colors hover:bg-accent"
            >
              Clear
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
