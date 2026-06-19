"use client"

import { useState } from "react"
import { Menu, X, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"

const navItems = [
  { label: "コンセプト", href: "#concept" },
  { label: "施工事例", href: "#works" },
  { label: "商品ラインナップ", href: "#products" },
  { label: "私たちの強み", href: "#strengths" },
  { label: "家づくりの流れ", href: "#flow" },
  { label: "よくある質問", href: "#faq" },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-8">
        <a href="#top" className="flex items-center gap-2">
          <span className="flex size-9 items-center justify-center rounded-md bg-primary text-primary-foreground font-serif text-lg">
            木
          </span>
          <span className="font-serif text-lg font-semibold tracking-wide text-foreground">
            木ノ実建設
          </span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
            <a href="#contact">
              <FileText className="size-4" />
              無料で資料請求
            </a>
          </Button>
        </div>

        <button
          type="button"
          aria-label="メニューを開く"
          className="text-foreground lg:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col px-4 py-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-border/60 py-3 text-sm text-foreground"
              >
                {item.label}
              </a>
            ))}
            <Button
              asChild
              className="my-4 bg-accent text-accent-foreground hover:bg-accent/90"
            >
              <a href="#contact" onClick={() => setOpen(false)}>
                <FileText className="size-4" />
                無料で資料請求
              </a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
