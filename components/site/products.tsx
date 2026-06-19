import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"

const products = [
  {
    name: "KINOMI 平屋",
    price: "1,680",
    desc: "ワンフロアで暮らしが完結。家族の気配を感じる、ゆとりの平屋。",
    features: ["回遊できる動線", "大きな軒下空間", "メンテナンスのしやすさ"],
    featured: false,
  },
  {
    name: "KINOMI スタンダード",
    price: "1,980",
    desc: "もっとも人気の自由設計プラン。性能とデザインを両立した王道の家。",
    features: ["完全自由設計", "高断熱・高気密仕様", "60年長期保証", "専属設計士が担当"],
    featured: true,
  },
  {
    name: "KINOMI プレミアム",
    price: "2,680",
    desc: "素材も設備もこだわり抜く。一棟ごとに仕立てる上質な住まい。",
    features: ["国産無垢材グレードUP", "造作家具の設計", "全館空調システム"],
    featured: false,
  },
]

export function Products() {
  return (
    <section id="products" className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="text-center">
          <p className="text-sm font-medium tracking-widest text-accent">LINEUP</p>
          <h2 className="mt-4 font-serif text-3xl font-semibold text-foreground text-balance md:text-4xl">
            商品ラインナップ
          </h2>
          <p className="mx-auto mt-4 max-w-xl leading-relaxed text-muted-foreground text-pretty">
            暮らし方やご予算に合わせて選べる3つのプラン。
            どのプランも自然素材と確かな性能が標準仕様です。
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {products.map((product) => (
            <div
              key={product.name}
              className={`relative flex flex-col rounded-2xl border p-7 ${
                product.featured
                  ? "border-accent bg-card shadow-lg md:-translate-y-3"
                  : "border-border bg-card"
              }`}
            >
              {product.featured && (
                <span className="absolute -top-3 left-7 rounded-full bg-accent px-3 py-1 text-xs font-medium text-accent-foreground">
                  人気No.1
                </span>
              )}
              <h3 className="font-serif text-xl font-semibold text-foreground">
                {product.name}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {product.desc}
              </p>
              <p className="mt-5 text-muted-foreground">
                <span className="text-sm">本体価格</span>{" "}
                <span className="font-serif text-3xl font-semibold text-foreground">
                  {product.price}
                </span>
                <span className="text-sm"> 万円〜</span>
              </p>

              <ul className="mt-6 flex flex-col gap-3 border-t border-border pt-6">
                {product.features.map((f) => (
                  <li key={f} className="flex items-center gap-2.5 text-sm text-foreground">
                    <Check className="size-4 shrink-0 text-accent" />
                    {f}
                  </li>
                ))}
              </ul>

              <Button
                asChild
                className={`mt-7 w-full ${
                  product.featured
                    ? "bg-accent text-accent-foreground hover:bg-accent/90"
                    : "bg-primary text-primary-foreground hover:bg-primary/90"
                }`}
              >
                <a href="#contact">このプランの資料を見る</a>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
