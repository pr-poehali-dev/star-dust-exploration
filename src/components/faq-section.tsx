import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQSection() {
  const faqs = [
    {
      question: "Это законно?",
      answer:
        "Да. Продажа лунных участков существует с 1980-х годов и основана на Договоре о космосе 1967 года. Договор запрещает государствам претендовать на Луну, но не запрещает частным лицам. Lunar Land действует на основании принципа «права первооткрывателя» — именно так работают крупнейшие мировые регистраторы лунной собственности.",
    },
    {
      question: "Что именно я получу?",
      answer:
        "Вы получите именной сертификат о праве собственности на лунный участок с уникальными координатами, картой участка, печатью и подписью. Документы приходят в красивой подарочной упаковке — идеально как подарок.",
    },
    {
      question: "Какой размер участка?",
      answer:
        "Стандартный участок — 1 акр (около 4000 кв. м). Также доступны расширенные пакеты: 5 акров и 10 акров для тех, кто хочет большую лунную территорию.",
    },
    {
      question: "Смогу ли я когда-нибудь физически посетить свой участок?",
      answer:
        "Коммерческие лунные туристические программы уже разрабатываются несколькими компаниями. Ваш сертификат фиксирует координаты участка, и теоретически вы сможете его посетить в будущем.",
    },
    {
      question: "Можно ли подарить лунный участок?",
      answer:
        "Именно для этого многие и покупают! Вы можете заказать участок на имя любого человека. Это уникальный и запоминающийся подарок на день рождения, годовщину, Новый год или корпоративное мероприятие.",
    },
    {
      question: "Как быстро я получу документы?",
      answer:
        "Электронная версия сертификата готова в течение 24 часов. Физический пакет документов доставляется по России за 3-7 дней, в зависимости от региона.",
    },
  ]

  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-orbitron">Частые вопросы</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-space-mono">
            Всё, что вы хотели знать о покупке лунного участка
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-red-500/20 mb-4">
                <AccordionTrigger className="text-left text-lg font-semibold text-white hover:text-red-400 font-orbitron px-6 py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 leading-relaxed px-6 pb-4 font-space-mono">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
