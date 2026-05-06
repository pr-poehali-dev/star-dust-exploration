import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const features = [
  {
    title: "Официальный документ",
    description: "Свидетельство о праве собственности на лунный участок с уникальными координатами, печатью и подписью. Оформлено на основании Договора о космосе 1967 года.",
    icon: "scroll",
    badge: "Легально",
  },
  {
    title: "Точные координаты",
    description: "Каждый участок имеет уникальные GPS-координаты на лунной поверхности. Ваша территория нанесена на карту и зарегистрирована в международном реестре.",
    icon: "map",
    badge: "Карта",
  },
  {
    title: "Вечная собственность",
    description: "Право на ваш участок передаётся по наследству. Вы можете подарить, продать или завещать лунную землю — как любое другое имущество.",
    icon: "infinity",
    badge: "Навсегда",
  },
  {
    title: "Быстрое оформление",
    description: "Сертификат готов в течение 24 часов. Доставка по всей России и СНГ. Подходит как оригинальный подарок на любой праздник.",
    icon: "zap",
    badge: "24 часа",
  },
  {
    title: "Подарочный формат",
    description: "Красивая упаковка, именной сертификат и история вашего участка. Идеально для дня рождения, годовщины или корпоративного подарка.",
    icon: "gift",
    badge: "Подарок",
  },
  {
    title: "Поддержка 24/7",
    description: "Наши специалисты помогут с выбором участка, оформлением и доставкой. Отвечаем на вопросы в любое время суток.",
    icon: "headphones",
    badge: "Поддержка",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4 font-sans">Почему выбирают нас</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Ваш лунный участок — это реальный документ, уникальные координаты и вечная история
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="glow-border hover:shadow-lg transition-all duration-300 slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-3xl">
                    {feature.icon === "scroll" && "📜"}
                    {feature.icon === "map" && "🗺️"}
                    {feature.icon === "infinity" && "♾️"}
                    {feature.icon === "zap" && "⚡"}
                    {feature.icon === "gift" && "🎁"}
                    {feature.icon === "headphones" && "🎧"}
                  </span>
                  <Badge variant="secondary" className="bg-accent text-accent-foreground">
                    {feature.badge}
                  </Badge>
                </div>
                <CardTitle className="text-xl font-bold text-card-foreground">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
