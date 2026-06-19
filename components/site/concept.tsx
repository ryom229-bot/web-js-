import Image from "next/image"

export function Concept() {
  return (
    <section id="concept" className="bg-background py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 md:grid-cols-2 md:px-8 lg:gap-20">
        <div className="relative">
          <div className="overflow-hidden rounded-2xl">
            <Image
              src="/images/interior-living.png"
              alt="無垢材の床と自然光があふれる温かなリビングの内装"
              width={720}
              height={820}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -right-4 hidden rounded-xl bg-accent px-7 py-6 text-accent-foreground shadow-lg md:block">
            <p className="font-serif text-3xl font-semibold">自然素材</p>
            <p className="mt-1 text-sm text-accent-foreground/85">100%へのこだわり</p>
          </div>
        </div>

        <div>
          <p className="text-sm font-medium tracking-widest text-accent">CONCEPT</p>
          <h2 className="mt-4 font-serif text-3xl font-semibold leading-snug text-foreground text-balance md:text-4xl">
            時を重ねるほど、
            <br />
            愛おしくなる家を。
          </h2>
          <p className="mt-6 leading-relaxed text-muted-foreground text-pretty">
            私たちが大切にしているのは、流行に左右されない普遍的な心地よさ。
            国産の無垢材や漆喰、自然の風と光を取り込む設計で、
            年月とともに味わいを増していく住まいをつくります。
          </p>
          <p className="mt-4 leading-relaxed text-muted-foreground text-pretty">
            一棟ごとに専属の設計士が伴走し、ご家族の暮らし方や未来の変化まで見据えた
            「世界にひとつだけの家」をご提案します。
          </p>

          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              { title: "天然無垢材の床", desc: "素足で心地よい本物の木の質感" },
              { title: "調湿する漆喰壁", desc: "一年中さらりと快適な室内環境" },
              { title: "高断熱・高気密", desc: "省エネで光熱費を抑える設計" },
              { title: "自由設計", desc: "暮らしに合わせた間取りを実現" },
            ].map((item) => (
              <li
                key={item.title}
                className="rounded-xl border border-border bg-card p-5"
              >
                <p className="font-serif text-base font-semibold text-foreground">
                  {item.title}
                </p>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                  {item.desc}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
