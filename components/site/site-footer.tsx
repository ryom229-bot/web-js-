const groups = [
  {
    title: "家づくり",
    links: ["コンセプト", "施工事例", "商品ラインナップ", "家づくりの流れ"],
  },
  {
    title: "会社情報",
    links: ["私たちについて", "スタッフ紹介", "採用情報", "アクセス"],
  },
  {
    title: "サポート",
    links: ["資料請求", "見学会のご予約", "よくある質問", "お問い合わせ"],
  },
]

export function SiteFooter() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-14 md:px-8">
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="flex size-9 items-center justify-center rounded-md bg-accent text-accent-foreground font-serif text-lg">
                木
              </span>
              <span className="font-serif text-lg font-semibold">木ノ実建設</span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-primary-foreground/70 text-pretty">
              自然素材と自由設計にこだわった、
              家族のための注文住宅づくり。
            </p>
          </div>

          {groups.map((group) => (
            <div key={group.title}>
              <p className="font-serif text-sm font-semibold">{group.title}</p>
              <ul className="mt-4 flex flex-col gap-2.5">
                {group.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#contact"
                      className="text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-primary-foreground/15 pt-6 text-xs text-primary-foreground/60 md:flex-row">
          <p>&copy; {new Date().getFullYear()} 木ノ実建設 KINOMI KENSETSU. All rights reserved.</p>
          <div className="flex gap-5">
            <a href="#" className="hover:text-primary-foreground">プライバシーポリシー</a>
            <a href="#" className="hover:text-primary-foreground">会社概要</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
