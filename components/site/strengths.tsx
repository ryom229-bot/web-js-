import { TreePine, ShieldCheck, Ruler, HandHeart } from "lucide-react"

const strengths = [
  {
    icon: TreePine,
    title: "厳選した自然素材",
    desc: "国産無垢材や漆喰など、産地まで吟味した本物の素材だけを使用します。",
  },
  {
    icon: ShieldCheck,
    title: "最長60年の長期保証",
    desc: "定期点検と充実のアフターサポートで、お引き渡し後も末永く安心です。",
  },
  {
    icon: Ruler,
    title: "完全自由設計",
    desc: "規格にとらわれず、ご家族の暮らしに合わせて間取りを一から設計します。",
  },
  {
    icon: HandHeart,
    title: "専属担当の伴走",
    desc: "設計から施工、お引き渡しまで、専属チームが一貫して寄り添います。",
  },
]

export function Strengths() {
  return (
    <section id="strengths" className="bg-primary py-20 text-primary-foreground md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="text-center">
          <p className="text-sm font-medium tracking-widest text-primary-foreground/70">
            STRENGTHS
          </p>
          <h2 className="mt-4 font-serif text-3xl font-semibold text-balance md:text-4xl">
            私たちが選ばれる理由
          </h2>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {strengths.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl bg-primary-foreground/5 p-7 ring-1 ring-primary-foreground/10"
            >
              <span className="flex size-12 items-center justify-center rounded-xl bg-accent text-accent-foreground">
                <item.icon className="size-6" />
              </span>
              <h3 className="mt-5 font-serif text-lg font-semibold">{item.title}</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-primary-foreground/75">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
