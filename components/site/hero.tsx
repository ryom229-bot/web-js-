import Image from "next/image"
import { FileText, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/hero-house.png"
          alt="自然素材でつくられた木のぬくもりあふれる戸建て住宅の外観"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/65 via-foreground/35 to-transparent" />
      </div>

      <div className="relative mx-auto flex min-h-[88vh] max-w-7xl flex-col justify-center px-4 py-24 md:px-8">
        <div className="max-w-2xl">
          <p className="mb-5 inline-flex items-center rounded-full bg-background/90 px-4 py-1.5 text-xs font-medium tracking-wider text-primary">
            自然素材 × 自由設計の注文住宅
          </p>
          <h1 className="font-serif text-4xl font-semibold leading-tight text-background text-balance md:text-6xl">
            木のぬくもりに、
            <br />
            家族の物語を重ねる家。
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-background/90 md:text-lg text-pretty">
            無垢材や漆喰など、自然の素材にこだわった家づくり。
            あなたの暮らしに寄り添う一棟を、設計から丁寧にお届けします。
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90"
            >
              <a href="#contact">
                <FileText className="size-5" />
                無料で資料請求する
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-background/70 bg-background/10 text-background backdrop-blur-sm hover:bg-background/20 hover:text-background"
            >
              <a href="#contact">
                <Calendar className="size-5" />
                見学会を予約する
              </a>
            </Button>
          </div>
        </div>
      </div>

      <div className="relative border-t border-background/15 bg-foreground/80 backdrop-blur-sm">
        <dl className="mx-auto grid max-w-7xl grid-cols-2 gap-y-6 px-4 py-7 text-background md:grid-cols-4 md:px-8">
          {[
            { value: "1,200+", label: "施工実績" },
            { value: "35年", label: "創業からの歩み" },
            { value: "60年", label: "長期保証" },
            { value: "98%", label: "お客様満足度" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <dt className="font-serif text-2xl font-semibold md:text-3xl">
                {stat.value}
              </dt>
              <dd className="mt-1 text-xs text-background/75 md:text-sm">
                {stat.label}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
