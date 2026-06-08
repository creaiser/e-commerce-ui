import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";

const contacts = [
  {
    icon: MapPin,
    label: "Адрес",
    value: "Удмуртская республика, г. Ижевск,\nул. Ленина, д. 4",
  },
  {
    icon: Phone,
    label: "Телефон",
    value: "+7 (964) 000-00-00",
    href: "tel:+79640000000",
  },
  {
    icon: Mail,
    label: "Email",
    value: "dripshop@mail.ru",
    href: "mailto:dripshop@mail.ru",
  },
  {
    icon: Clock,
    label: "Часы работы",
    value: "Пн–Пт: 10:00 – 20:00\nСб–Вс: 11:00 – 19:00",
  },
];

const socials = [
  {
    label: "WhatsApp",
    href: "https://wa.me/73412000000",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-5 h-5"
        aria-hidden="true"
      >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
      </svg>
    ),
  },
  {
    label: "ВКонтакте",
    href: "https://vk.com/dripstore",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-5 h-5"
        aria-hidden="true"
      >
        <path d="M15.684 0H8.316C1.592 0 0 1.592 0 8.316v7.368C0 22.408 1.592 24 8.316 24h7.368C22.408 24 24 22.408 24 15.684V8.316C24 1.592 22.408 0 15.684 0zm3.692 17.123h-1.744c-.66 0-.864-.525-2.05-1.727-1.033-1-1.49-1.135-1.744-1.135-.356 0-.458.102-.458.593v1.575c0 .424-.135.678-1.253.678-1.846 0-3.896-1.118-5.335-3.202C4.624 10.857 4.03 8.57 4.03 8.096c0-.254.102-.491.593-.491h1.744c.44 0 .61.203.78.677.863 2.49 2.303 4.675 2.896 4.675.22 0 .322-.102.322-.66V9.721c-.068-1.186-.695-1.287-.695-1.71 0-.203.169-.407.44-.407h2.744c.373 0 .508.203.508.643v3.473c0 .372.169.508.271.508.22 0 .407-.136.813-.542 1.253-1.405 2.151-3.574 2.151-3.574.119-.254.322-.491.762-.491h1.744c.525 0 .643.27.525.643-.22 1.017-2.354 4.031-2.354 4.031-.186.305-.254.44 0 .78.186.254.796.779 1.203 1.253.745.847 1.32 1.558 1.473 2.05.17.49-.085.745-.576.745z" />
      </svg>
    ),
  },
];

export default function ContactsPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-16">
      {/* Hero */}
      <section className="pb-12 border-b border-gray-200">
        <span className="inline-block text-xs tracking-widest uppercase text-gray-400 border border-gray-200 rounded-full px-3 py-1 mb-6">
          свяжитесь с нами
        </span>
        <h1 className="font-serif text-4xl md:text-5xl font-semibold leading-tight mb-5">
          Контакты
        </h1>
        <p className="text-gray-500 text-base leading-relaxed max-w-xl">
          Мы всегда рады ответить на ваши вопросы. Приходите в магазин, пишите
          или звоните — выберите удобный способ связи.
        </p>
      </section>

      {/* Main grid */}
      <section className="py-12 border-b border-gray-200">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left — contact info + socials */}
          <div className="flex flex-col gap-8">
            <div>
              <p className="text-xs tracking-widest uppercase text-gray-400 mb-6">
                Информация
              </p>
              <div className="flex flex-col gap-5">
                {contacts.map((c) => (
                  <div key={c.label} className="flex gap-4 items-start">
                    <div className="w-9 h-9 rounded-lg bg-gray-50 border border-gray-200 flex items-center justify-center shrink-0">
                      <c.icon
                        size={16}
                        className="text-gray-400"
                        aria-hidden="true"
                      />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 mb-1">{c.label}</p>
                      {c.href ? (
                        <a
                          href={c.href}
                          className="text-sm text-gray-800 hover:text-amber-600 transition-colors"
                        >
                          {c.value}
                        </a>
                      ) : (
                        <p className="text-sm text-gray-800 whitespace-pre-line">
                          {c.value}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Socials */}
            <div>
              <p className="text-xs tracking-widest uppercase text-gray-400 mb-4">
                Мы в соцсетях
              </p>
              <div className="flex flex-col gap-3">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-700 hover:border-amber-400 hover:text-amber-600 transition-colors"
                  >
                    {s.icon}
                    {s.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right — map */}
          <div className="flex flex-col gap-4">
            <p className="text-xs tracking-widest uppercase text-gray-400">
              На карте
            </p>
            <div className="w-full rounded-xl overflow-hidden border border-gray-200 aspect-[4/3]">
              <iframe
                title="Карта ДРИП"
                src="https://yandex.ru/map-widget/v1/?ll=53.206785%2C56.852757&z=16&pt=53.206785,56.852757,pm2rdm&text=%D0%98%D0%B6%D0%B5%D0%B2%D1%81%D0%BA%2C+%D1%83%D0%BB.+%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD%D0%B0%2C+4"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              />
            </div>
            <p className="text-xs text-gray-400 leading-relaxed">
              г. Ижевск, ул. Ленина, д. 4 — в шаговой доступности от остановок
              общественного транспорта.
            </p>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="pt-12">
        <div className="bg-gray-100 rounded-2xl px-8 py-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <p className="font-serif text-xl font-semibold mb-1">
              Остались вопросы?
            </p>
            <p className="text-sm text-gray-500">
              Напишите нам в Telegram — ответим быстро.
            </p>
          </div>
          <a
            href="https://t.me/dripstore"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-gray-900 text-white text-sm font-medium px-5 py-3 rounded-xl hover:bg-amber-600 transition-colors shrink-0"
          >
            <Send size={15} aria-hidden="true" />
            Написать в Telegram
          </a>
        </div>
      </section>
    </main>
  );
}
