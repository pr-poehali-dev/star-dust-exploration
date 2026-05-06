import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const testimonials = [
  {
    name: "Дмитрий Волков",
    role: "Подарил участок жене на годовщину",
    avatar: "/cybersecurity-expert-man.jpg",
    content:
      "Жена была в восторге! Красивый сертификат, настоящие координаты на Луне. Говорит, что это самый необычный подарок за 10 лет.",
  },
  {
    name: "Анна Соколова",
    role: "Купила участок себе на день рождения",
    avatar: "/asian-woman-tech-developer.jpg",
    content:
      "Давно мечтала о чём-то необычном. Получила именной сертификат с координатами в Море Спокойствия — теперь я лунный землевладелец!",
  },
  {
    name: "Марина Петрова",
    role: "HR-директор, подарки для команды",
    avatar: "/professional-woman-scientist.png",
    content:
      "Заказали лунные участки для всей команды как корпоративный подарок. Все были удивлены и рады. Оформление и доставка — на высшем уровне.",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-24 px-6 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-card-foreground mb-4 font-sans">Что говорят наши клиенты</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Тысячи людей уже стали владельцами лунных участков — вот их истории
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="glow-border slide-up" style={{ animationDelay: `${index * 0.15}s` }}>
              <CardContent className="p-6">
                <p className="text-card-foreground mb-6 leading-relaxed italic">"{testimonial.content}"</p>
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                    <AvatarFallback>
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-primary">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
