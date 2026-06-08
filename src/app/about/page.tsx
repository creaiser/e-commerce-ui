import { ShoppingBag, Users, Sparkles, ShieldCheck } from "lucide-react";

const timeline = [
  {
    year: "2018",
    desc: "Открытие первого магазина ДРИП на улице Ленина в Ижевске. Небольшой, но смелый старт.",
  },
  {
    year: "2020",
    desc: "Расширение ассортимента: аксессуары, обувь, верхняя одежда. Формирование команды профессионалов.",
  },
  {
    year: "2022",
    desc: "Запуск онлайн-магазина и программы лояльности для постоянных покупателей.",
  },
  {
    year: "2025",
    desc: "Сегодня ДРИП — стабильное предприятие розничной торговли с устойчивой репутацией.",
  },
];

const values = [
  {
    icon: ShoppingBag,
    title: "Качество без компромиссов",
    desc: "Каждая вещь в ассортименте проходит тщательный отбор. Мы работаем только с надёжными поставщиками.",
  },
  {
    icon: Users,
    title: "Люди на первом месте",
    desc: "Наши консультанты — не продавцы, а помощники. Подберём образ под любой запрос и бюджет.",
  },
  {
    icon: Sparkles,
    title: "Стиль для каждого",
    desc: "В ДРИП найдёт себя и любитель классики, и поклонник уличного стиля. Ассортимент для всех.",
  },
  {
    icon: ShieldCheck,
    title: "Честность и прозрачность",
    desc: "Никаких скрытых условий. Понятные цены, простой возврат и открытая коммуникация.",
  },
];

export default function AboutPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-16">
      {/* Hero */}
      <section className="pb-6 border-b border-gray-200">
        <span className="inline-block text-xs tracking-widest uppercase text-gray-400 border border-gray-200 rounded-full px-3 py-1 mb-6">
          основан в 2018
        </span>
        <h1 className="font-serif text-4xl md:text-5xl font-semibold leading-tight mb-5">
          Мы — <span className="text-amber-600">ДРИП</span>.<br />
          Одежда с характером.
        </h1>
        <p className="text-gray-500 text-base leading-relaxed max-w-xl">
          Магазин одежды, где стиль встречается с качеством. С 2018 года мы
          помогаем людям выражать себя через одежду — просто, честно и со
          вкусом.
        </p>
      </section>

      {/* Story + Timeline */}
      <section className="py-6 border-b border-gray-200">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Timeline */}
          <div>
            <p className="text-xs tracking-widest uppercase text-gray-400 mb-6">
              Наша история
            </p>
            <div className="flex flex-col">
              {timeline.map((item, i) => (
                <div key={item.year} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-500 mt-1 shrink-0" />
                    {i < timeline.length - 1 && (
                      <div className="w-px flex-1 bg-gray-200 mt-1" />
                    )}
                  </div>
                  <div className={i < timeline.length - 1 ? "pb-6" : ""}>
                    <p className="font-serif text-sm font-semibold mb-1">
                      {item.year}
                    </p>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* About text */}
          <div>
            <p className="text-xs tracking-widest uppercase text-gray-400 mb-6">
              О предприятии
            </p>
            <div className="space-y-4 text-sm text-gray-500 leading-relaxed">
              <p>
                ООО «Дрип» — магазин одежды, зарекомендовавший себя как
                стабильное предприятие розничной торговли с момента основания в
                2018 году.
              </p>
              <p>
                За годы работы мы выстроили процессы, которые ставят покупателя
                в центр: быстрое оформление заказа, внимательные консультанты и
                честный подход к ценообразованию.
              </p>
              <p>
                Наша команда — 9 человек, каждый из которых разделяет общую
                цель: сделать шопинг приятным и удобным.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="pt-6">
        <p className="text-xs tracking-widest uppercase text-gray-400 mb-6">
          Наши принципы
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {values.map((v) => (
            <div
              key={v.title}
              className="border border-gray-200 rounded-xl p-5"
            >
              <v.icon
                size={20}
                className="text-gray-400 mb-3"
                aria-hidden="true"
              />
              <p className="text-sm font-medium mb-1.5">{v.title}</p>
              <p className="text-sm text-gray-500 leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
