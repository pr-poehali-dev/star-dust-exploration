import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

const plans = [
  {
    name: "Стартовый",
    price: "1 490",
    area: "1 акр",
    areaM2: "≈ 4 000 м²",
    description: "Идеально для подарка или личной коллекции",
    popular: false,
    features: [
      "Именной сертификат",
      "Уникальные координаты",
      "Карта участка на Луне",
      "Электронная копия",
      "Регистрация в реестре",
    ],
    cta: "Купить",
    location: "Море Спокойствия",
  },
  {
    name: "Популярный",
    price: "3 990",
    area: "5 акров",
    areaM2: "≈ 20 000 м²",
    description: "Лучший выбор — больше территории и подарочная упаковка",
    popular: true,
    features: [
      "Именной сертификат",
      "Уникальные координаты",
      "Карта участка на Луне",
      "Электронная копия",
      "Регистрация в реестре",
      "Подарочная упаковка",
      "История участка в буклете",
    ],
    cta: "Купить",
    location: "Кратер Тихо",
  },
  {
    name: "Премиум",
    price: "7 490",
    area: "10 акров",
    areaM2: "≈ 40 000 м²",
    description: "Максимальная территория с VIP-оформлением",
    popular: false,
    features: [
      "Именной сертификат",
      "Уникальные координаты",
      "Карта участка на Луне",
      "Электронная копия",
      "Регистрация в реестре",
      "Подарочная упаковка",
      "История участка в буклете",
      "VIP-рамка для сертификата",
      "Именная звезда в подарок",
    ],
    cta: "Купить",
    location: "Океан Бурь",
  },
]

export function PricingSection() {
  return (
    <section id="pricing" className="py-24 px-6 bg-black">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-orbitron">Выберите свой участок</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed font-space-mono">
            Три пакета на любой вкус — от классического сертификата до VIP-комплекта с именной звездой
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative flex flex-col transition-all duration-300 ${
                plan.popular
                  ? "border-red-500 shadow-[0_0_30px_rgba(239,68,68,0.3)] scale-105"
                  : "border-red-500/20 hover:border-red-500/50"
              } bg-gray-950`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <Badge className="bg-red-500 text-white font-orbitron px-4 py-1 text-sm">Хит продаж</Badge>
                </div>
              )}

              <CardHeader className="pb-4">
                <div className="flex items-start justify-between mb-2">
                  <CardTitle className="font-orbitron text-white text-xl">{plan.name}</CardTitle>
                  <span className="text-red-400 text-sm font-space-mono">{plan.location}</span>
                </div>
                <div className="mt-4 mb-2">
                  <span className="text-5xl font-bold text-white font-orbitron">{plan.price}</span>
                  <span className="text-gray-400 ml-2 font-space-mono">₽</span>
                </div>
                <div className="flex items-center gap-3">
                  <Badge variant="outline" className="border-red-500/50 text-red-400 font-space-mono">
                    {plan.area}
                  </Badge>
                  <span className="text-gray-500 text-sm font-space-mono">{plan.areaM2}</span>
                </div>
                <CardDescription className="text-gray-400 mt-3 font-space-mono leading-relaxed">
                  {plan.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="flex flex-col flex-1">
                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-300 font-space-mono text-sm">
                      <div className="w-2 h-2 bg-red-500 rounded-full flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button
                  className={`w-full font-orbitron text-base ${
                    plan.popular
                      ? "bg-red-500 hover:bg-red-600 text-white"
                      : "bg-transparent border border-red-500/50 text-red-400 hover:bg-red-500 hover:text-white"
                  }`}
                >
                  {plan.cta}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <p className="text-center text-gray-500 mt-10 font-space-mono text-sm">
          🚀 Доставка по всей России · Электронная версия за 24 часа · Оплата картой или СБП
        </p>
      </div>
    </section>
  )
}
