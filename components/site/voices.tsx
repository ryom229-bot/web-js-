import { Star } from "lucide-react"

const voices = [
  {
    text: "無垢材の床が本当に気持ちよく、子どもたちが裸足で走り回っています。設計士さんが私たちの要望を丁寧にくみ取ってくれました。",
    name: "S様ご家族",
    detail: "千葉県 / 4人家族",
  },
  {
    text: "夏は涼しく冬は暖かい。光熱費が以前の住まいよりぐっと下がって驚いています。性能面でも大満足です。",
    name: "K様ご家族",
    detail: "東京都 / 3人家族",
  },
  {
    text: "打ち合わせから引き渡しまで同じ担当の方で安心でした。アフターの点検も丁寧で、長く付き合える会社だと感じます。",
    name: "M様ご家族",
    detail: "神奈川県 / 5人家族",
  },
]

export function Voices() {
  return (
    <section className="bg-secondary py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="text-center">
          <p className="text-sm font-medium tracking-widest text-accent">VOICE</p>
          <h2 className="mt-4 font-serif text-3xl font-semibold text-foreground text-balance md:text-4xl">
            お客様の声
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {voices.map((voice) => (
            <figure
              key={voice.name}
              className="flex flex-col rounded-2xl border border-border bg-card p-7"
            >
              <div className="flex gap-0.5 text-accent">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-4 fill-current" />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 leading-relaxed text-foreground text-pretty">
                「{voice.text}」
              </blockquote>
              <figcaption className="mt-5 border-t border-border pt-4">
                <p className="font-serif font-semibold text-foreground">{voice.name}</p>
                <p className="mt-0.5 text-sm text-muted-foreground">{voice.detail}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
