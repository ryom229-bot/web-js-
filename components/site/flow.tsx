const steps = [
  { no: "01", title: "資料請求・ご相談", desc: "まずは無料の資料請求から。お電話やフォームでお気軽にご相談ください。" },
  { no: "02", title: "ヒアリング・敷地調査", desc: "ご要望や暮らし方を伺い、土地の条件を詳しく調査します。" },
  { no: "03", title: "プラン・お見積り", desc: "専属設計士がプランと概算費用をご提案。納得いくまで調整します。" },
  { no: "04", title: "ご契約・着工", desc: "仕様を確定しご契約。地鎮祭を経て、丁寧に施工を進めます。" },
  { no: "05", title: "お引き渡し・保証", desc: "完成検査の後、お引き渡し。長期保証と定期点検で末永くサポートします。" },
]

export function Flow() {
  return (
    <section id="flow" className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-4 md:px-8">
        <div className="text-center">
          <p className="text-sm font-medium tracking-widest text-accent">FLOW</p>
          <h2 className="mt-4 font-serif text-3xl font-semibold text-foreground text-balance md:text-4xl">
            家づくりの流れ
          </h2>
          <p className="mx-auto mt-4 max-w-xl leading-relaxed text-muted-foreground text-pretty">
            ご相談から完成まで、安心して進めていただけるよう
            一つひとつのステップを丁寧にサポートします。
          </p>
        </div>

        <ol className="mt-12 flex flex-col gap-5">
          {steps.map((step) => (
            <li
              key={step.no}
              className="flex gap-5 rounded-2xl border border-border bg-card p-6"
            >
              <span className="font-serif text-3xl font-semibold text-accent">
                {step.no}
              </span>
              <div className="border-l border-border pl-5">
                <h3 className="font-serif text-lg font-semibold text-foreground">
                  {step.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground text-pretty">
                  {step.desc}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
