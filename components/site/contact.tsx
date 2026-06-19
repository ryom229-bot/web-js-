"use client"

import type React from "react"
import { useState } from "react"
import { Phone, Mail, Clock, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [type, setType] = useState("資料請求")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const inputClass =
    "w-full rounded-md border border-border bg-background px-4 py-2.5 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-accent focus:ring-2 focus:ring-accent/30"

  return (
    <section id="contact" className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <div className="grid gap-12 rounded-3xl border border-border bg-secondary p-6 md:grid-cols-5 md:p-12">
          <div className="md:col-span-2">
            <p className="text-sm font-medium tracking-widest text-accent">CONTACT</p>
            <h2 className="mt-4 font-serif text-3xl font-semibold leading-snug text-foreground text-balance md:text-4xl">
              まずは無料で
              <br />
              資料請求から。
            </h2>
            <p className="mt-5 leading-relaxed text-muted-foreground text-pretty">
              カタログ・施工事例集・価格の目安をお届けします。
              ご相談や見学会のご予約もこちらから。お気軽にどうぞ。
            </p>

            <dl className="mt-8 flex flex-col gap-5">
              <div className="flex items-center gap-3">
                <span className="flex size-10 items-center justify-center rounded-lg bg-card text-accent">
                  <Phone className="size-5" />
                </span>
                <div>
                  <dt className="text-xs text-muted-foreground">お電話でのお問い合わせ</dt>
                  <dd className="font-serif text-lg font-semibold text-foreground">
                    0120-000-000
                  </dd>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="flex size-10 items-center justify-center rounded-lg bg-card text-accent">
                  <Clock className="size-5" />
                </span>
                <div>
                  <dt className="text-xs text-muted-foreground">営業時間</dt>
                  <dd className="text-sm font-medium text-foreground">
                    9:00〜18:00(水曜定休)
                  </dd>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="flex size-10 items-center justify-center rounded-lg bg-card text-accent">
                  <Mail className="size-5" />
                </span>
                <div>
                  <dt className="text-xs text-muted-foreground">メール</dt>
                  <dd className="text-sm font-medium text-foreground">
                    info@kinomi-kensetsu.example
                  </dd>
                </div>
              </div>
            </dl>
          </div>

          <div className="md:col-span-3">
            {submitted ? (
              <div className="flex h-full flex-col items-center justify-center rounded-2xl bg-card p-10 text-center">
                <CheckCircle2 className="size-14 text-accent" />
                <h3 className="mt-5 font-serif text-2xl font-semibold text-foreground">
                  送信が完了しました
                </h3>
                <p className="mt-3 leading-relaxed text-muted-foreground text-pretty">
                  お問い合わせいただきありがとうございます。
                  担当者より3営業日以内にご連絡いたします。
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="rounded-2xl bg-card p-6 md:p-8"
              >
                <fieldset className="mb-6">
                  <legend className="mb-2 text-sm font-medium text-foreground">
                    ご希望の内容
                  </legend>
                  <div className="flex flex-wrap gap-2">
                    {["資料請求", "見学会の予約", "その他のご相談"].map((t) => (
                      <button
                        key={t}
                        type="button"
                        onClick={() => setType(t)}
                        className={`rounded-full border px-4 py-1.5 text-sm transition-colors ${
                          type === t
                            ? "border-accent bg-accent text-accent-foreground"
                            : "border-border bg-background text-muted-foreground hover:border-accent"
                        }`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </fieldset>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-foreground">
                      お名前 <span className="text-accent">*</span>
                    </label>
                    <input id="name" required className={inputClass} placeholder="山田 太郎" />
                  </div>
                  <div>
                    <label htmlFor="tel" className="mb-1.5 block text-sm font-medium text-foreground">
                      電話番号 <span className="text-accent">*</span>
                    </label>
                    <input id="tel" type="tel" required className={inputClass} placeholder="090-0000-0000" />
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-foreground">
                      メールアドレス <span className="text-accent">*</span>
                    </label>
                    <input id="email" type="email" required className={inputClass} placeholder="example@email.com" />
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="area" className="mb-1.5 block text-sm font-medium text-foreground">
                      建築予定エリア
                    </label>
                    <input id="area" className={inputClass} placeholder="例:千葉県千葉市" />
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-foreground">
                      ご要望・ご質問
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className={inputClass}
                      placeholder="ご自由にご記入ください"
                    />
                  </div>
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="mt-6 w-full bg-accent text-accent-foreground hover:bg-accent/90"
                >
                  この内容で送信する({type})
                </Button>
                <p className="mt-3 text-center text-xs text-muted-foreground">
                  送信いただいた個人情報は、お問い合わせ対応の目的にのみ利用します。
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
