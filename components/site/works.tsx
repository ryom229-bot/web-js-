import Image from "next/image"
import { ArrowUpRight } from "lucide-react"

const works = [
  {
    image: "/images/case-1.png",
    tag: "2階建て / 4LDK",
    title: "光と風が巡る、平屋のような暮らし",
    location: "千葉県・S様邸",
  },
  {
    image: "/images/case-2.png",
    tag: "キッチン / ダイニング",
    title: "家族が集う、木の温もりのLDK",
    location: "東京都・K様邸",
  },
  {
    image: "/images/case-3.png",
    tag: "寝室 / 和の空間",
    title: "畳の心地よさを残した、安らぎの寝室",
    location: "神奈川県・M様邸",
  },
]

export function Works() {
  return (
    <section id="works" className="bg-secondary py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-medium tracking-widest text-accent">WORKS</p>
            <h2 className="mt-4 font-serif text-3xl font-semibold text-foreground text-balance md:text-4xl">
              施工事例
            </h2>
            <p className="mt-4 max-w-xl leading-relaxed text-muted-foreground text-pretty">
              これまでお引き渡ししたお住まいの一部をご紹介します。
              ご家族それぞれの想いがかたちになった事例をご覧ください。
            </p>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
          >
            事例集を資料請求する
            <ArrowUpRight className="size-4" />
          </a>
        </div>

        <div className="mt-12 grid gap-7 md:grid-cols-3">
          {works.map((work) => (
            <article key={work.title} className="group">
              <div className="overflow-hidden rounded-xl">
                <Image
                  src={work.image || "/placeholder.svg"}
                  alt={`${work.title}（${work.location}）の施工事例`}
                  width={560}
                  height={420}
                  className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="mt-4">
                <span className="inline-block rounded-full bg-background px-3 py-1 text-xs text-muted-foreground">
                  {work.tag}
                </span>
                <h3 className="mt-3 font-serif text-lg font-semibold leading-snug text-foreground">
                  {work.title}
                </h3>
                <p className="mt-1.5 text-sm text-muted-foreground">{work.location}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
