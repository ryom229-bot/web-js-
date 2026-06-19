"use client"

import { useState } from "react"
import { Plus, Minus } from "lucide-react"

const faqs = [
  {
    q: "資料請求は無料ですか?",
    a: "はい、資料請求は完全無料です。商品カタログや施工事例集、価格の目安などをお送りします。しつこい営業は一切いたしませんのでご安心ください。",
  },
  {
    q: "土地がなくても相談できますか?",
    a: "もちろん可能です。ご希望のエリアやご予算をもとに、土地探しからお手伝いいたします。資金計画と合わせてトータルでご提案します。",
  },
  {
    q: "建築費用の目安はどのくらいですか?",
    a: "プランや仕様により異なりますが、本体価格は1,680万円〜が目安です。詳しい費用は資料請求後の個別相談で、ご要望に合わせてお見積りいたします。",
  },
  {
    q: "完成までどのくらいの期間がかかりますか?",
    a: "ご契約から着工、お引き渡しまでおおよそ4〜6か月が目安です。プランの内容や敷地の条件により前後しますので、まずはご相談ください。",
  },
  {
    q: "保証やアフターサービスはありますか?",
    a: "最長60年の長期保証をご用意しています。お引き渡し後も定期点検を実施し、住まいのメンテナンスを末永くサポートいたします。",
  },
]

export function Faq() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faq" className="bg-secondary py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-4 md:px-8">
        <div className="text-center">
          <p className="text-sm font-medium tracking-widest text-accent">FAQ</p>
          <h2 className="mt-4 font-serif text-3xl font-semibold text-foreground text-balance md:text-4xl">
            よくある質問
          </h2>
        </div>

        <div className="mt-12 flex flex-col gap-3">
          {faqs.map((faq, i) => {
            const isOpen = open === i
            return (
              <div
                key={faq.q}
                className="overflow-hidden rounded-xl border border-border bg-card"
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="font-medium text-foreground">{faq.q}</span>
                  {isOpen ? (
                    <Minus className="size-5 shrink-0 text-accent" />
                  ) : (
                    <Plus className="size-5 shrink-0 text-accent" />
                  )}
                </button>
                {isOpen && (
                  <p className="px-6 pb-5 leading-relaxed text-muted-foreground text-pretty">
                    {faq.a}
                  </p>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
